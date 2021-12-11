import express from "express";
import olympicController from '../controller/olympicController.js';
const router = express.Router();




router.post('/mens', olympicController.createData);
router.get('/mens', olympicController.getData);
router.get('/mens/:rank', olympicController.getIndividialData);
router.patch('/mens/:rank', olympicController.updateData);
router.delete('/mens/:rank', olympicController.deleteData);



export default router;

