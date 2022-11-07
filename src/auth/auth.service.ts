import { Injectable } from '@nestjs/common';

@Injectable()
export class AuthService {
  signup() {
    return { msg: 'I am a signup method' };
  }

  signin() {
    return { msg: 'I am a signin method' };
  }
}
