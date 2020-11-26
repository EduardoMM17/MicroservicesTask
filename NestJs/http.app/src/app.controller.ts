import { Body, Controller, Post, Logger } from '@nestjs/common';
import { MathService} from './math.service';
import { StringService } from './string.service';

@Controller()
export class AppController {
  private logger = new Logger('AppController');
  
  constructor(
    private mathService: MathService,
    private stringService: StringService,
    ) {}

  @Post('transform')
  async messageToUpperCase(@Body('message') message:string){
    this.logger.log('Transforming ' + message.toString());
    return this.stringService.toUpperCase(message);
  }

  @Post('add')
  async accumulate(@Body('data') data: number[]){
    this.logger.log('Adding ' + data.toString());
    return this.mathService.accumulate(data);
  }
}
