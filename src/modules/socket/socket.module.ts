import { Module } from '@nestjs/common';

import { NestJwtModule } from '@/core/jwt/jwt.module';

import { SocketGateway } from './gateways/socket.gateway';
import { SocketService } from './services/socket.service';

@Module({
  imports: [NestJwtModule],
  providers: [SocketGateway, SocketService],
})
export class SocketModule {}
