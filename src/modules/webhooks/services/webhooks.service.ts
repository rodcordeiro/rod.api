import { Injectable, Logger } from '@nestjs/common';
import { HttpService } from '@nestjs/axios';
import axios from 'axios';
import { map } from 'rxjs';
import { ENV_VARIABLES } from '@/common/config/env.config';

@Injectable()
export class WebhooksServices {
  private readonly logger = new Logger(WebhooksServices.name);
  constructor(private readonly _httpService: HttpService) {}

  async parse(data: {
    origin: string;
    webhook: string;
    body?: Record<string, any>;
  }) {
    this.logger.debug(
      `Received webhook from ${data.origin} in ${data.webhook}`,
    );
    if (data.origin === 'docker') return await this.docker(data);
    const payload = {
      content: data.body ? data.body : JSON.stringify(data),
      username: 'Lord Etl',
      avatar_url: 'https://rodcordeiro.github.io/shares/img/vader.png',
    };

    // try {
    await axios.post(ENV_VARIABLES.DISCORD_WEBHOOK, payload);

    return { state: 'success' };
  }

  private async docker(data: {
    origin: string;
    webhook: string;
    body?: Record<string, any>;
  }) {
    Logger.log('[Docker] webhook: ' + JSON.stringify(data));
    await this._httpService
      .post(ENV_VARIABLES.DISCORD_WEBHOOK, {
        content: JSON.stringify(data.body),
        username: 'Lord Etl',
        avatar_url: 'https://rodcordeiro.github.io/shares/img/vader.png',
      })
      .pipe(map(response => response.data));
    return { state: 'success' };
  }
}
