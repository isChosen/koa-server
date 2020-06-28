const Koa = require("koa");
const Router = require("@koa/router");
const mongoConf = require("./config/mongo");
const Users = require("./models/users");
const bodyParser = require("koa-bodyparser");

const app = new Koa();
const router = new Router();
mongoConf.connect();
app.use(bodyParser());

router.get("/", async (ctx, next) => {
  ctx.body = "Hello koa";
});

router.post("/add", async (ctx, next) => {
  const params = ctx.request.body; // 参数
  Users.create(params, (err, result) => {
    if (!err) {
      console.log("add result", result);
      ctx.body = { code: 200, add: "ok" }; //TODO: 不能返回???
    }
  });
  ctx.body = { code: 200, add: "ok111" }; //这里为什么可以返回
});

app.use(router.routes()).use(router.allowedMethods());

app.listen(23345);
