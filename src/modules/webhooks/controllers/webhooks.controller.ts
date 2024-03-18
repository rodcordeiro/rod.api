import {
  Body,
  Controller,
  Get,
  HttpCode,
  HttpStatus,
  Param,
  Post,
} from '@nestjs/common';
import { WebhooksServices } from '../services/webhooks.service';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('Webhooks')
@Controller({
  version: '1',
  path: '/webhooks',
})
export class WebhooksController {
  constructor(private readonly _webhooksServices: WebhooksServices) {}

  @Get('/:origin/:webhook')
  async index(
    @Param('origin') origin: string,
    @Param('webhook') webhook: string,
  ) {
    return await this._webhooksServices.parse({ origin, webhook });
  }
  @Post('/:origin/:webhook')
  @HttpCode(HttpStatus.OK)
  async parse_post(
    @Param('origin') origin: string,
    @Param('webhook') webhook: string,
    @Body() body: { trigger: string },
  ) {
    return await this._webhooksServices.parse({ origin, webhook, body });
  }
}
