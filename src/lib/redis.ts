// connect to db
import { Redis } from '@upstash/redis'

export const redis = new Redis({
    url: 'https://eu1-patient-silkworm-39677.upstash.io',
    token: process.env.REDIS_KEY!,
})