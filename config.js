import dotenv from 'dotenv'
dotenv.config()

const PORT = process.env.PORT || ''
const PERSISTENCIA = process.env.PERSISTENCIA || ''
const STRCNX = process.env.STRCNX || ''
const BASE = process.env.BASE || ''

export default {
    PERSISTENCIA,
    PORT,
    STRCNX,
    BASE,
}