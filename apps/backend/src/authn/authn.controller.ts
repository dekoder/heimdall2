import {Controller, Req, Post, UseGuards} from '@nestjs/common';
import {LocalAuthGuard} from '../guards/local-auth.guard';
import {AuthnService} from './authn.service';
import {Request} from 'express';

@Controller('authn')
export class AuthnController {
  constructor(private authnService: AuthnService) {}

  @UseGuards(LocalAuthGuard)
  @Post('login')
  async login(@Req() req: Request) {
    return this.authnService.login(req.user);
  }
}