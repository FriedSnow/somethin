export default class Unit{
    name; 
    description;
    price;
    img;
    
    constructor(name, description, price, img){
        this.name = name;
        this.description = description;
        this.price = price;
        this.img = img;
    }
}
module.exports = new Unit();