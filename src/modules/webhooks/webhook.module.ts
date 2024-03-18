import { Module } from '@nestjs/common';

import { WebhooksServices } from './services/webhooks.service';
import { WebhooksController } from './controllers/webhooks.controller';
import { HttpModule } from '@nestjs/axios';

@Module({
  imports: [
    HttpModule.register({
      timeout: 5000,
      maxRedirects: 5,
    }),
  ],
  controllers: [WebhooksController],
  providers: [WebhooksServices],
  exports: [WebhooksServices],
})
export class WebhooksModule {}
