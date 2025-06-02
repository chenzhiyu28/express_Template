import { Request, Response, NextFunction } from "express";

const logging = (req: Request, res: Response, next: NextFunction) => {
    console.log(`[${req.method}] ${req.url}`);
    next();
};

export default logging;
