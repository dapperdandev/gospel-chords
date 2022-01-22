import { Injectable } from '@nestjs/common';
import { HttpService } from '@nestjs/axios'
import { ConfigService } from '@nestjs/config';
import { AxiosResponse } from 'axios';
import { Observable } from 'rxjs';

@Injectable()
export class ApiBibleService {
  private readonly apiKey: string;

  constructor(private configService: ConfigService, private httpService: HttpService) {
    this.apiKey = this.configService.get<string>('API_BIBLE_API_KEY');
  }

  // TODO: Define response type
  getBibles(): Observable<AxiosResponse<AxiosResponse<any>>> {
    return this.httpService.get('bibles', {
      headers: {
      'api-key': this.apiKey
    }})
  }
}
