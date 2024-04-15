import { Module } from '@nestjs/common';
import { ScheduleModule } from '@nestjs/schedule';
import { HttpModule } from '@nestjs/axios';

import { JiraServices } from './services/jira.services';

@Module({
  imports: [
    HttpModule.register({
      timeout: 5000,
      maxRedirects: 5,
    }),
    ScheduleModule.forRoot(),
  ],
  providers: [JiraServices],
})
export class CronModule {}
