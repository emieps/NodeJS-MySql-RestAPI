import { Router } from 'express'
import {getEmployees, createEmployee, updateEmployee, deleteEmployee, getEmployee } from '../controllers/employeeController.js'

const router = Router();

router.route('/')
    .get( getEmployees )
    .post( createEmployee )

router.route('/:id')
    .get(getEmployee)
    .patch(updateEmployee)
    .delete(deleteEmployee)

export default router