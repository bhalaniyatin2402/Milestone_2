import { Router } from "express";
const bolgRoutes = Router()

import { upload } from "../middleware/multerMiddleware.js";

import { homepage, addblog, blogpage, getallblogs } from "../controllers/blogController.js";

bolgRoutes.get('/homepage', homepage)
bolgRoutes.get('/allblogs', getallblogs)
bolgRoutes.post('/addblog',upload.single('poster'), addblog)
bolgRoutes.get('/blogpage/:id', blogpage)

export default bolgRoutes
