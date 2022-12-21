import { Router } from "express";

import { createUserSchema } from "@/schemas";
import { validateBody } from "@/middlewares";
import { signUp } from "@/controllers";

const usersRouter = Router();

usersRouter.post("/sign-up", validateBody(createUserSchema), signUp);

export { usersRouter };
