import { Component, OnInit } from '@angular/core';
import { TicketsService } from './tickets.service';
import { Ticket, TICKET_ATTR } from '../ticket';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-tickets',
  templateUrl: './tickets.component.html',
  styleUrls: ['./tickets.component.scss'],
  providers: [TicketsService]
})
export class TicketsComponent implements OnInit {
  tickets: Ticket[];
  ticket_attr = TICKET_ATTR;

  constructor(private ticketsService: TicketsService) { }

  ngOnInit() {
    this.getTickets();
  }

  getTickets(): void {
    this.ticketsService.getTickets().subscribe(tickets => (this.tickets = tickets));
  }

}
