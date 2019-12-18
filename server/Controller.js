module.exports = {
    getHouses(req, res){
        const db = req.app.get('db')
        db.query('select * from houses')
        .then(result => {
            res.send(result)
        })
    },
    createHouse(req,res){
        const db = req.app.get('db');
        const data = req.body;
        console.log(data)
        db.houses.insert({
            name: data.name,
            address: data.address,
            city: data.city,
            state: data.state,
            zipcode: data.zipcode
        })
        .then(result => {
            res.status(200).send()
        })
    },
    deleteHouse(req,res){
        const id = req.params.id;
        const db = req.app.get('db');
        db.houses.destroy({
            id: id
        })
        .then(result => {
            res.status(200).send()
        })
    }
}