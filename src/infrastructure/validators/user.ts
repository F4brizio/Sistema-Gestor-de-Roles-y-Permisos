import { NextFunction, Request, Response } from 'express';
import {check} from 'express-validator';
import { validateResult } from '../utils/validateHelper';


export const validateCredentials = [
    check('email').exists().isEmail().not().isEmpty(),
    check('password').exists().not().isEmpty(),
    (req:Request,res:Response,next:NextFunction)=>{
        validateResult(req,res,next);      
    }
]