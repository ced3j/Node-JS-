const koa = require('koa');
const Router = require('koa-router');

const app = new koa();
const router = new Router();


router.get('/index', (ctx, next) => {
    ctx.body = "<h1>Index sayfasına hoş geldiniz</h1>";
});

router.get('/hakkimda', (ctx, next) => {
    ctx.body = "<h1>Hakkımda sayfasına hoş geldiniz</h1>";
});

router.get('/iletisim', (ctx, next) => {
    ctx.body = "<h1>İletişim sayfasına hoş geldiniz</h1>";
});


app.use(router.routes())

app.listen(3000, function () {
    console.log('Server running on https://localhost:3000')
});