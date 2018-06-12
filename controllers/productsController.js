const Product = require('../models/Product');

function index(req,res){
    Product.find({})
           .then(products => {
               if(products.length == 0) return res.send({Message: 'No Content'}).status(204);
               return res.status(200).send({products});
           })
           .catch(err => res.status(500).send({err}));
}

function show(req,res){
    let _id = req.params.id;
    Product.findOne({_id})
           .then(product => {
            if(product) return res.status(200).send({product});
            return res.status(404).send({error: 'NOT FOUND'});
           })
           .catch(err => res.status(500).send({err}));
}

function create(req,res){
    let product = new Product(req.body);
    
    product.save(function(err,product){
        if(err){
            res.status(500).send({err});
            return console.log(err);
        }
        return res.status(200).send({product});
    })
}

function update(req,res){
    let id = req.params.id;
    let update = req.body;
    Product.findByIdAndUpdate(id,update,(err,product) => {
        if(err) return res.status(500).send({err});
        return res.status(200).send({product});
    });
}

function remove(req,res){
    let id = req.params.id;
    Product.findByIdAndRemove(id,(err,product) => {
        if(err) return res.status(500).send({err});
        return res.status(200).send({product});
    });
}

module.exports = {
    index,
    show,
    create,
    update,
    remove
}