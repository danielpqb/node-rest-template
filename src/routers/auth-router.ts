import { signIn } from "@/controllers";
import { validateBody } from "@/middlewares";
import { signInSchema } from "@/schemas";
import { Router } from "express";

const authenticationRouter = Router();

authenticationRouter.post("/", validateBody(signInSchema), signIn);

export { authenticationRouter };
