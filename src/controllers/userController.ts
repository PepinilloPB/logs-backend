import { Response, Request } from "express";
import pool from '../database';

class UserController{

    public async create (req: Request, res: Response){
        // console.log('Hello from create user!');
        await pool.promise().query(' INSERT INTO Usuario ' + 
                                   ' SET ? ' , [req.body]);
        res.json({message : "Usuario creado con exito"});
    }

    public async read (req: Request, res: Response){
        // console.log('Hello from read user!');
        // console.log(req.body.email);
        const email = req.body.email;
        const contrasenia  = req.body.contrasenia;
        // console.log('email: ', email);
        // console.log('contrasenia: ', contrasenia);
        const users = await pool.promise().query(' SELECT u.email, ' + 
                                                 ' u.contrasenia ' + 
                                                 ' FROM Usuario u ' + 
                                                 ' WHERE u.email = ? ' + 
                                                 ' AND u.contrasenia = ? ',
                                                 [email, contrasenia]);
        //TODO check if user exist
        res.json(users[0]);
    }
}

export const userController = new UserController();