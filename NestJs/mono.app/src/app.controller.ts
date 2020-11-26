import { Body, Controller, Get, Logger, Post } from '@nestjs/common';
import { MathService} from './math.service';
import { StringService } from './string.service';
import { MessagePattern } from '@nestjs/microservices';

@Controller()
export class AppController {
  private logger = new Logger('AppController');
  
  constructor(
    private mathService: MathService,
    private stringService: StringService,
  ) {}

  @MessagePattern('add')
  async accumulate(data:number[]){
    this.logger.log('Adding ' + data.toString());
    return this.mathService.accumulate(data);
  }

  @MessagePattern('transform')
  async messageToUpperCase(message: string){
    this.logger.log('Transforming ' + message.toString());
    return this.stringService.toUpperCase(message);
  }
}
