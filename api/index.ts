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
  if (process.env.WEBHOOK_URL) {
    const res = fetch(process.env.WEBHOOK_URL, {
      method: 'POST',
      body: JSON.stringify({ content: 'Hello Hono!' }),
      headers: {
        'Content-Type': 'application/json'
      }
    })
    res.then(async (r) => {
      console.log(await r.json())
      if (!r.ok) {
        return c.json({ message: 'Failed to send' }, 500)
      }
    })
  } else {
    return c.json({ message: 'CRON_URL is not defined' }, 500)
  }
  return c.json({ message: 'Hello Hono!' })
})

app.get('/hello', (c) => {
  return c.json({ message: `Hello Hono!` })
})

export default handle(app)
