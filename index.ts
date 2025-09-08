import { Hono } from 'hono'

import { logger } from 'hono/logger'
import { poweredBy } from 'hono/powered-by'

import indexRoute from './routes/index'
import healthRoute from './routes/health'

import queueRoute from './routes/queue'

const app = new Hono()

app.use(logger())
app.use(poweredBy())

app.route('/', indexRoute)
app.route('/health', healthRoute)

app.route('/queue', queueRoute);

export default app