export async function getAllUnits(){
    const response = await fetch('http://localhost:8080/unit', {
        method: 'GET'
    });
    const result = await response.json();
    console.log(result);
    return result;
}

export async function getOneUnit(id){
    const response = await fetch('http://localhost:8080/unit/' + id, {
        method: 'GET'
    });
    const result = await response.json();
    console.log(result);
    return result;
}

export async function addUnit(unit){
    await fetch('http://localhost:8080/unit', {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({
            name: unit.name,
            description: unit.description,
            price: unit.price,
            img: unit.img
        })
    });
}

export async function deleteUnit(id){
    const response = await fetch('http://localhost:8080/unit/' + id, {
        method: 'DELETE'
    });
}

export async function updateUnit(unit){
    await fetch('http://localhost:8080/unit/' + unit.id, {
        method: 'PUT',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({
            name: unit.name,
            description: unit.description,
            price: unit.price,
            img: unit.img
        })
    });
}