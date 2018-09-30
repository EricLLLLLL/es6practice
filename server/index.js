import koa from 'koa'
import logger from 'koa-logger'

const app = new koa()
const mid1 = async (ctx, next) => {
  ctx.type = 'text/html; charset=utf-8'
  await next()
}
const mid2 = async (ctx, next) => {
  ctx.body = "hi"
  await next()
  ctx.body = ctx.body + ' there'
}
const mid3 = async (ctx, next) => {
  ctx.body = ctx.body + ' LeoLei'
  await next()
}
// app.use(async (ctx, next) => {
//   // console.log(ctx)

//   ctx.body = 'hi koa2'
// })
app.use(logger())
app.use(mid1)
app.use(mid2)
app.use(mid3)

app.listen(2323)