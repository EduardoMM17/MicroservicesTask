import { Injectable } from "@nestjs/common";

@Injectable()
export class StringService{
    public toUpperCase(message: string): string{
        return message.toUpperCase();
    }
}