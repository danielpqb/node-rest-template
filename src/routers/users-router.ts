import { Router } from "express";

import { createUserSchema, oAuthSchema } from "@/schemas";
import { validateBody } from "@/middlewares";
import { oAuth, signUp } from "@/controllers";

const router = Router();

router.post("/sign-up", validateBody(createUserSchema), signUp);
router.put("/oauth", validateBody(oAuthSchema), oAuth);

export { router as usersRouter };
