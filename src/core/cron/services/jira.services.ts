import { HttpService } from '@nestjs/axios';
import { Injectable, Logger } from '@nestjs/common';
import { Cron } from '@nestjs/schedule';
import { catchError, map } from 'rxjs';

@Injectable()
export class JiraServices {
  private readonly _httpService = new HttpService();
  private readonly logger = new Logger(JiraServices.name);

  @Cron('45 * * * * *')
  async getJiraTasks() {
    this.logger.log('Executing jira tasks');
    await this._httpService
      .post(
        'https://discord.com/api/webhooks/1096546893179396096/Dtg3rf_vr-roPMGHKWU2KVZF0WszWx__UKPqbrZWZk7VG1ukU8LREvcRyXgIOK2iw7Kn',
        {
          content: 'JIRA',
          username: 'Lord Etl',
          avatar_url: 'https://rodcordeiro.github.io/shares/img/vader.png',
        },
      )
      .pipe(
        map((response: any) => this.logger.log(response.data)),
        catchError(err => {
          throw err;
        }),
      );
    this.logger.log('Executed jira tasks');
  }
}
