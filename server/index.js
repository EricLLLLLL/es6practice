import koa from 'koa'

const app = new koa()

app.use(async (ctx, next) => {
  ctx.body = 'hi koa2'
})

app.listen(8080)