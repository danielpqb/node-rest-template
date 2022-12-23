import { SignInParams } from "@/services/auth-service";
import * as authService from "@/services/auth-service";
import { Request, Response } from "express";
import httpStatus from "http-status";

export async function signIn(req: Request, res: Response) {
  const { email, password } = req.body as SignInParams;

  try {
    const result = await authService.signIn({ email, password });

    return res.status(httpStatus.OK).send(result);
  }
  catch (error) {
    return res.status(httpStatus.UNAUTHORIZED).send({});
  }
}