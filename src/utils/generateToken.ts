import { SignOptions, sign } from 'jsonwebtoken';

const config: SignOptions = {
  expiresIn: '1d',
  algorithm: 'HS256',
};

const secret = process.env.SECRET_KEY as string;

export default function generateToken(user: any): string {
  const token = sign(user, secret, config);
  return token;
}