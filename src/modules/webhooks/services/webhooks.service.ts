import { Injectable, Logger } from '@nestjs/common';
import { HttpService } from '@nestjs/axios';
import { map } from 'rxjs';

@Injectable()
export class WebhooksServices {
  constructor(private readonly _httpService: HttpService) {}

  async parse(data: {
    origin: string;
    webhook: string;
    body?: Record<string, any>;
  }) {
    if (data.origin === 'docker') return await this.docker(data);

    await this._httpService
      .post(
        'https://discord.com/api/webhooks/1096546893179396096/Dtg3rf_vr-roPMGHKWU2KVZF0WszWx__UKPqbrZWZk7VG1ukU8LREvcRyXgIOK2iw7Kn',
        {
          content: JSON.stringify(data),
          username: 'Lord Etl',
          avatar_url: 'https://rodcordeiro.github.io/shares/img/vader.png',
        },
      )
      .pipe(map(response => response.data));
    return { state: 'success' };
  }

  private async docker(data: {
    origin: string;
    webhook: string;
    body?: Record<string, any>;
  }) {
    Logger.log('[Docker] webhook: ' + JSON.stringify(data));
    await this._httpService
      .post(
        'https://discord.com/api/webhooks/1096546893179396096/Dtg3rf_vr-roPMGHKWU2KVZF0WszWx__UKPqbrZWZk7VG1ukU8LREvcRyXgIOK2iw7Kn',
        {
          content: JSON.stringify(data.body),
          username: 'Lord Etl',
          avatar_url: 'https://rodcordeiro.github.io/shares/img/vader.png',
        },
      )
      .pipe(map(response => response.data));
    return { state: 'success' };
  }
}
