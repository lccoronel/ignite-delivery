import { NextFunction, Request, Response } from "express";
import { verify } from "jsonwebtoken";

export async function ensureAuthenticateClient(request: Request, response: Response, next: NextFunction) {
  const authHeader = request.headers.authorization

  if (!authHeader) {
    return response.status(401).json({ message: "Token missing" })
  }

  const [, token] = authHeader.split(" ")

  try {
    const { sub } = verify(token, "7108537956afa2a526f96cc9da7b0c36")
    request.id_client = sub as string

    return next()
  } catch (error) {
    return response.status(401).json({ message: "Token invalid" })
  }
}