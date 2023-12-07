import { Response } from "express";

export const errorServer = (res: Response, error: any) => {
  return res.status(500).send({
    msg: "Error Server",
    error: error.message,
  });
};
