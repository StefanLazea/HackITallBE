const router = require("express").Router();
const Products = require("../models").Products;

router.get("/products", async (req, res) => {
  let productsFound;
  try {
    await Products.findAll().then(products => (productsFound = products));
  } catch (err) {
    return res
      .status(409)
      .send({ message: "No elements found in the database" });
  }
  return res.status(200).send({ products: productsFound });
});

router.post("/products", async (req, res) => {
  await Products.create({
    name: req.body.name,
    quantity: req.body.quantity,
    price: req.body.price,
    imgPath: req.body.imgPath
  }).then(result => {
    res.status(201).send({ message: "Product created" });
  });
});

router.put("/products/:id/:noProducts", async (req, res) => {
  let product = await Products.findOne({
    where: {
      id: req.params.id
    }
  });
  if (product) {
    if (product.quantity >= req.params.noProducts) {
      product.quantity = product.quantity - req.params.noProducts;
      await product.save();
      res.status(200).send({ message: "Product quantity updated" });
    } else {
      res.status(400).send({ message: "Insufficient product quantity" });
    }
  } else {
    res.status(404).send({ message: "Product not found" });
  }
});

module.exports = router;
