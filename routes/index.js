const router = require("express").Router();

router.get("/getAllProducts", (req, res) => {
    return res.send({ message: "mergi fmmm" })
});

router.post("/test", (req, res) => {
    console.log(req.body);
    return res.send({ message: req.body })
})

module.exports = router;