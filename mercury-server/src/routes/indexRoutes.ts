import { Router } from 'express';
import indexController from '../controllers/indexController'

class IndexRoutes
{
    public router: Router = Router();

    constructor() 
    {
        this.config();
    }

    config() : void
    {
        this.router.get('/', indexController.listUsers);
        this.router.get('/:id', indexController.getUser);
        this.router.post('/', indexController.addUser);
        this.router.delete('/:id', indexController.deleteUser);
        this.router.put('/:id', indexController.updateUser);
    }
}

const indexRoutes = new IndexRoutes();
export default indexRoutes.router;