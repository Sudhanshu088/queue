import { Hono } from 'hono'

const route = new Hono()

route.get('/', (c) => c.text('Hello from Bun + Hono!'))

export default route