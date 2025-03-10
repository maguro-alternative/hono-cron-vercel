import { Hono } from 'hono'
import { handle } from 'hono/vercel'

export const config = {
  runtime: 'edge'
}

const app = new Hono().basePath('/api')

app.get('/crons', (c) => {
  const Authorization = c.req.header('Authorization')
  if (Authorization !== `Bearer ${process.env.CRON_SECRET}`) {
    return c.json({ message: 'Unauthorized' }, 401)
  }
  return c.json({ message: 'Hello Hono!' })
})

app.get('/hello', (c) => {
  return c.json({ message: `Hello Hono!` })
})

export default handle(app)
