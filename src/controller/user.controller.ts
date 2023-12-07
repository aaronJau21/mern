import { Request, Response } from "express";
import { errorServer } from "../utils/erros";
import { User } from "../model/User";
import { sharedEmail } from "../utils/shared";
import { hashPassword } from "../helpers/password";

export const login = (_req: Request, res: Response) => {
  return res.send({
    msg: "Welcome",
  });
};

export const create = async (req: Request, res: Response) => {
  const { name, password, email } = req.body;

  try {
    let user = await sharedEmail(email);

    if (user) {
      return res.status(200).send({
        msg: "El usuario ya existe",
      });
    }

    const hash = hashPassword(password);

    user = await User.create({ name, password: hash, email });

    return res.send({
      msg: "Create",
      user,
    });
  } catch (error) {
    errorServer(res, error);
  }
};
