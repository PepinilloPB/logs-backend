import { Router } from "express";
import { userController } from "../controllers/userController";

class UserRoutes{
    public router: Router = Router();

    constructor(){
        this.config();
    }

    config(){
        this.router.post('/', userController.create);
        this.router.get('/',  userController.read);
    }
}

const userRoutes = new UserRoutes();
export default userRoutes.router;