var koa_router = require("koa-router");
var router = new koa_router();

router.get("/user", ctx => {
    ctx.body = "user index";
});
router.get("user/:userName", ctx => {
    ctx.body = "Hello " + ctx.params.userName;
})

module.exports = router;