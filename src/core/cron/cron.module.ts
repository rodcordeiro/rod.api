import { Module } from '@nestjs/common';
import { ScheduleModule } from '@nestjs/schedule';

import { JiraServices } from './services/jira.services';

@Module({
  imports: [ScheduleModule.forRoot()],
  providers: [JiraServices],
})
export class CronModule {}
