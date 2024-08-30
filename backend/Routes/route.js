import express from 'express'
import { downloadresource, uploadimage } from '../controllers/filecontrol.js'
import fileuplaod from '../utils/filemidd.js'
const router = express.Router()

router.post('/upload', fileuplaod.single('file'), uploadimage)
router.get('/file/:fileid', downloadresource)

export default router


/*
(
{ date:  {"$lt":new Date(2021,9, 1) } }
 )
*/