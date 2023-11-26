import { createItem } from '../frontend/components/item.js';
import { getAllUnits, getOneUnit, addUnit, deleteUnit, updateUnit } from '../frontend/requests/unit.requests.js';

(function () {
    class Unit {
        name;
        description;
        price;
        img;

        constructor(name, description, price, img) {
            this.name = name;
            this.description = description;
            this.price = price;
            this.img = img;
        }

        setID(id) {
            this.id = id;
        }
    }

    let list = document.getElementById('unit-list');
    async function elementsGenerator() {
        const units = await getAllUnits();
        for (let unit of units) {
            let listItem = createItem(unit.name, unit.price, unit.description, unit.img);
            
            listItem.btnDetail.addEventListener('click', function () {
                window.location.href = 'http://127.0.0.1:8080/unit/' + unit.id;
                getOneUnit(unit.id);
            });

            listItem.btnDelete.addEventListener('click', function () {
                if (confirm("Удалить?")) {
                    deleteUnit(unit.id);
                    listItem.item.remove();
                }
            });

            listItem.btnEdit.addEventListener('click', function () {
                let unitName = document.getElementById('unitName');
                let unitPrice = document.getElementById('unitPrice');
                let unitDescription = document.getElementById('unitDescription');
                let unitImg = document.getElementById('unitImg');

                let editedUnit = new Unit(unitName.value, unitPrice.value, unitDescription.value, unitImg.value);
                editedUnit.setID(unit.id)

                updateUnit(editedUnit);
            });

            list.append(listItem.item);
        }
    }

    document.addEventListener('DOMContentLoaded', function (e) {
        e.preventDefault();
        elementsGenerator();
        let form = document.getElementById('add-element-form');
        form.addEventListener('submit', function () {
            let unitName = document.getElementById('unitName');
            let unitPrice = document.getElementById('unitPrice');
            let unitDescription = document.getElementById('unitDescription');
            let unitImg = document.getElementById('unitImg');

            let unit = new Unit(unitName.value, unitPrice.value, unitDescription.value, unitImg.value);

            addUnit(unit);
            let listItem = createItem(unitName.value, unitPrice.value, unitDescription.value, unitImg.value);
            list.append(listItem.item);
        });
    })
})();