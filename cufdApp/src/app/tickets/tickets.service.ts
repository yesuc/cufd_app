import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';

import { Ticket, TICKET_ATTR } from '../ticket';

@Injectable({
  providedIn: 'root'
})
export class TicketsService {
  ticketsUrl = '../mock-data.json';
  constructor(private http: HttpClient) { }

  getTickets(): Observable<Ticket[]> {
    return this.http.get<Ticket[]>('assets/mock-data01.json');
  }
}
