
var Koa = require("koa");
var Router = require("koa-router");
var app = new Koa();
var router = new Router();

var users = require("./user");

app.use(users.routes()).use(users.allowedMethods());
app.use(ctx => {
  ctx.body = JSON.stringify({a: "a", b: "b"});
});
app.jsonSpaces = 0;

app.listen(810);