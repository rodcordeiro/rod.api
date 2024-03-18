import { Module } from '@nestjs/common';

import { HealthModule } from '@/modules/health/health.module';
import { SocketModule } from '@/modules/socket/socket.module';
import { UsersModule } from '@/modules/users/users.module';
import { AuthModule } from '@/modules/auth/auth.module';
import { WebhooksModule } from './webhooks/webhook.module';

@Module({
  imports: [
    HealthModule,
    SocketModule,
    UsersModule,
    AuthModule,
    WebhooksModule,
  ],
  controllers: [],
  providers: [],
})
export class SharedModule {}
