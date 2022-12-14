import { pool } from '.././db.js'


export const getEmployees = async (req, res) => {
    try {
        const query = 'SELECT * FROM employee'
        const [rows] = await pool.query(query)
        res.json(rows)

    } catch (err) {
        return res
            .status(500)
            .json({
                message: 'Something went wrong'
            })
    }

}
export const createEmployee = async (req, res) => {
    try {
        const query = 'INSERT INTO employee(name, salary) VALUES (?, ?)'
        const { name, salary } = req.body
        const [rows] = await pool.query(query, [name, salary])
        res.send({
            id: rows.insertId,
            name,
            salary
        })

    } catch (err) {
        return res
            .status(500)
            .json({
                message: 'Something went wrong'
            })
    }
}


export const getEmployee = async (req, res) => {
    try {
        const id = req.params.id
        const query = 'SELECT * FROM employee WHERE id = ?'
        const [rows] = await pool.query(query, [id])
        res.json(rows[0])

    } catch (err) {
        return res
            .status(500)
            .json({
                message: 'Something went wrong'
            })
    }
}


export const updateEmployee = async (req, res) => {
    try {
        const { id } = req.params
        const { name, salary } = req.body
        const query = 'UPDATE employee SET name = IFNULL(?, name) , salary = IFNULL(?, salary)  WHERE id = ?'
        const [result] = await pool.query(query, [name, salary, id])

        if (result.affectedRows === 0) {
            return res.
                status(404)
                .json({ message: 'Employee not found' })
        }

        res.json(result[0])

    } catch (err) {
        return res
            .status(500)
            .json({
                message: 'Something went wrong'
            })
    }
}

export const deleteEmployee = async (req, res) => {
    try {
        const id = req.params.id
        const query = 'DELETE FROM employee WHERE id = ?'
        const [result] = await pool.query(query, id)

        if (result.affectedRows > 0) {
            return res.sendStatus(204)
        }

        return res.status(404)
            .json({
                message: "Employee not found"
            })

    } catch (err) {
        return res
            .status(500)
            .json({
                message: 'Something went wrong'
            })
    }
}
