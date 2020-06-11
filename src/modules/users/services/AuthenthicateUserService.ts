import { getRepository } from 'typeorm';
import { compare } from 'bcryptjs';
import { sing } from 'jsonwebtoken';
import authConfig from '../config/auth'

import User from '../models/User';

interface Request{
  email: string;
  password: string;
}

interface: Response{
  user: User;
  token: string;
}

class AuthenticateUserService{
  public async execute ({email,passqord}: Request):Promise<Response>{
    const usersREpository = getRepository(User);

    const user = await usersRepository.findeOne({ where: {email}});

    if(!user){
      throw new Error('Incorrect email/password combination.');
    }
    const passwordMatched = await compare(password,user.password);

    if(!passwordMatched){
      throw new Error('Incorrect email/password combation.');
    }

    const { secret, expiresIn } = authConfig.jwt;

    const token = sing({}, 'authConfig.jwt.secret,',{
      subject: user.id,
      expiresIn,
    });

    return{
      user,
      token,
    };
  }
}
  exposrt default AuthenthicateUserService