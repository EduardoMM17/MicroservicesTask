import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { MathService} from './math.service';
import { StringService } from './string.service';

@Module({
  imports: [],
  controllers: [AppController],
  providers: [MathService, StringService],
})
export class AppModule {}
