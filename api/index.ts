import { Hono } from 'hono'
import { handle } from 'hono/vercel'

export const config = {
  runtime: 'edge'
}

const app = new Hono().basePath('/api')

app.get('/cron', async(c) => {
  const Authorization = c.req.header('Authorization')
  if (Authorization !== `Bearer ${process.env.CRON_SECRET}`) {
    return c.json({ message: 'Unauthorized' }, 401)
  }
  if (process.env.WEBHOOK_URL) {
    const url = new URL(process.env.WEBHOOK_URL)
    await fetch(url, {
      method: 'POST',
      body: JSON.stringify({ content: 'Hello Hono!' }),
      headers: {
        'Content-Type': 'application/json'
      }
    }).then(async(r) => {
      console.log(await r.json())
      return c.json({ message: 'Webhook sent!' })
    }).catch(() => {
      return c.json({ message: 'Failed to send webhook' }, 500)
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
