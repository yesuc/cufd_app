import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Ticket } from '../ticket';

@Injectable()
export class ConfigService {
  constructor(private http: HttpClient) {}
  configUrl = 'assets/mock-data.json';

  getConfig() {
    return this.http.get<Ticket>(this.configUrl);
  }
}
