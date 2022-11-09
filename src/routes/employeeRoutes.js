import { Router } from 'express'
import {getEmployees, createEmployee, updateEmployee, deleteEmployee, getEmployee } from '../controllers/employeeController.js'

// import { pool } from '.././db.js'

const router = Router();


router.route('/')
    .get( getEmployees )
    .post( createEmployee )

router.route('/:id')
    .get(getEmployee)
    .patch(updateEmployee)
    .delete(deleteEmployee)

//     .post(createEmployee)

// router.route('/:id')
//     .put(updateEmployee)
//     .delete(deleteEmployee)
// // .get()

export default router