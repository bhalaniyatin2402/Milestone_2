import { Router } from "express";
const bolgRoutes = Router()

import { homepage, addblog, blogpage, getallblogs } from "../controllers/blogController.js";

bolgRoutes.route('/homepage').get(homepage)
bolgRoutes.route('/allblogs').get(getallblogs)
bolgRoutes.route('/addblog').post(addblog)
bolgRoutes.route('/blogpage/:id').get(blogpage)

export default bolgRoutes
