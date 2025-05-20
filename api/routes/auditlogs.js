const express = require("express"); //expressi dosyaya dahil ediyoruz.
const router = express.Router(); //routeri dahil ediyoruz.


//endpoint oluşturma
//req body header vs barındırıyor. adresi
// res ise cevabı barındırıyor
//next ise get isteğini middlewear olarak kullanılacaksa yani başka router kullanılacaksa.
router.get("/:id",(req,res,next) => {
    res.json({
        body: req.body,
        params: req.params,
        query: req.query,
        headers: req.headers
    });
});

module.exports = router;