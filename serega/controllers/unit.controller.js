const db = require('../db.js');

class UnitController{
    async createUnit(req, res){
        const {name, description, price, img} = req.body;
        const newUnit = await db.query(`INSERT INTO units (name, description, price, img) values ($1, $2, $3, $4) RETURNING *`, [name, description, price, img]);
        res.json(newUnit.rows[0]);
    }
    async getUnits(req, res){
        const units = await db.query(`SELECT id, name, description, price, img FROM units`);
        res.json(units.rows);
        console.log('get units', units.rows[0]);        
    }
    async getOneUnit(req, res){
        const id =  req.params.id;
        const unit = await db.query(`SELECT id, name, description, price, img FROM units WHERE id = $1`, [id]);
        res.json(unit.rows);
    }
    async updateUnit(req, res){
        const id =  req.params.id;
        const {name, description, price, img} = req.body;
        const updateUnit = await db.query(`UPDATE units SET name = $1, description = $2, price = $3, img = $4 WHERE id = $5`, [name, description, price, img, id]);
        console.log('update unit', id, name, description, price, img, 'res json:', updateUnit.rows)
        res.json(updateUnit.rows[0]);
    }
    async deleteUnit(req, res){
        const id = req.params.id;
        const deletedUnit = await db.query(`DELETE FROM units WHERE id = $1`, [id]);
        res.json(deletedUnit.rows);
    }
}
module.exports = new UnitController();