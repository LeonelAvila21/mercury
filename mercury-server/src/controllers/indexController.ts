import { Request, Response } from 'express';
import db from '../database'

class IndexController
{
    public index (req : Request, res : Response) 
    {
        db.query('DESCRIBE user_table');
        res.json('users');
    }
}

const indexController = new IndexController();
export default indexController;