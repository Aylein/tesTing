var Router = require("koa-router");
var router = new Router({prefix: "/user"});

router.get("/", ctx => {
    ctx.body = "User Index";
}).get("/:name", ctx => {
    ctx.body = "Hello " + ctx.params.name;
});

module.exports = router;