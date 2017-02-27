var koa = require("koa");
var koa_router = require("koa-router");

var app = new koa();
var router = new koa_router();

//var user = require("./user/user");

router.get("/", ctx => {
    ctx.body = "Hello World";
});
// router.get("/user", ctx => {
//     ctx.body = "user index";
// });
// router.get("user/:userName", ctx => {
//     ctx.body = "Hello " + ctx.params.userName;
// });

app.use(router.routes()).use(router.allowedMethods());
//app.use(user.routes);

// app.use(async (ctx, next) => {
//   var start = new Date;
//   await next();
//   var ms = new Date - start;
//   ctx.set('X-Response-Time', ms + 'ms');
// });

// app.use(async (ctx, next) => {
//   var start = new Date;
//   await next();
//   var ms = new Date - start;
//   console.log('%s %s - %s', ctx.method, ctx.url, ms);
// });

// app.use(ctx => {
//   ctx.body = 'Hello World';
// });

app.listen(810);