import { Request, Response } from 'express';
import db from '../database'
import pool from '../database';

class IndexController
{
    public async listUsers (req : Request, res : Response)
    {
        await pool.query('SELECT * FROM user_table', function(err, rows){
            if ( err ) throw err;
            const list = rows;
            res.json(rows);
        });
        
    }

    public async getUser (req : Request, res : Response) : Promise<void>
    {
        const { id } = req.params;
        await pool.query("SELECT u_password FROM user_table WHERE u_username = ?",  [id], function(err, rows){
            if ( err ) throw err;
            const list = rows;
            res.json(rows);
        });
        /*
        await pool.query("SELECT COUNT(*) FROM (SELECT * FROM user_table WHERE u_username = ? AND u_password = ?) AS con", [req.body.u_username, req.body.u_password], function(err, rows){
            if ( err ) throw err;
            const list = rows;
            res.json(rows);
        });
        */
    }

    public async addUser (req : Request, res : Response) : Promise<void>
    {
        await pool.query('INSERT INTO user_table SET ?', [req.body]);
        res.json({
            message: "User account created"
        });
    }

    public async deleteUser(req : Request, res : Response) : Promise<void>
    {
        const { id } = req.params;
        await pool.query('DELETE FROM user_table WHERE u_username = ?', [id]);
        res.json({
            message: "User account '" + req.params.id + "' was deleted"
        })
    }

    public async updateUser(req : Request, res : Response) : Promise<void>
    {
        const { id } = req.params;
        await pool.query('UPDATE user_table SET ? WHERE u_username = ?', [req.body, id]);
        res.json({
            message: "User info was updated: " + req.params.id
        })
    }
}

const indexController = new IndexController();
export default indexController;