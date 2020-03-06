const router = require("express").Router();
const Products = require("../models").Products;

router.get("/products", async (req, res) => {
    let productsFound;
    try {
        await Products.findAll().then((products) => productsFound = products);
    }
    catch (err) {
        return res.status(409).send({ message: "No elements found in the database" });
    }
    return res.status(200).send({ products: productsFound });
});

router.post("/products", async (req, res) => {
    await Products.create({
        name: req.body.name,
        quantity: req.body.quantity,
        price: req.body.price,
        imgPath: req.body.imgPath
    }).then((result) => {
        res.status(201).send({ message: "Product created" });
    });
});

module.exports = router;