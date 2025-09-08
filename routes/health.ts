import { Hono } from 'hono'

const route = new Hono()

route.get('/', (c) => c.json({ status: 'healthy' }))

export default route