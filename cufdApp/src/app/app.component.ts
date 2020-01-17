import { Component, OnInit } from '@angular/core';
import { TicketsService } from './tickets/tickets.service';
import { TICKET_ATTR } from "./ticket";
import * as R from 'ramda';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'cufdApp';
  tickets = [];
  filteredTickets = [];
  showClearSearch = false;
  searchTerm = '';
  columns = TICKET_ATTR;
  currentSort = 'number';
  sortReversed = false;

  constructor(private ticketsService: TicketsService) { }

  ngOnInit() {
    this.getTickets();
  }

  getTickets(): void {
    this.ticketsService.getTickets().subscribe(tickets => (this.tickets = tickets));
    this.ticketsService.getTickets().subscribe(tickets => (this.filteredTickets = tickets));
  }

  public submitSearch() {
    let searchTerm = document.getElementById('input').value;
    if (searchTerm) {
      this.showClearSearch = true;
    }
    let filteredTickets = [];

    this.tickets.forEach((ticket) => {
      if ((ticket.id && ticket.id == searchTerm)
          || (ticket.status && ticket.status.toLowerCase().includes(searchTerm))
          || (ticket.priority && ticket.priority.toLowerCase().includes(searchTerm))
          || (ticket.shortDescription && ticket.shortDescription.toLowerCase().includes(searchTerm))
          || (ticket.submissionDate && ticket.submissionDate.includes(searchTerm))
          || (ticket.updatedOn && ticket.updatedOn.includes(searchTerm))
          || (ticket.source && ticket.source.toLowerCase().includes(searchTerm))
          || (ticket.description && ticket.description.toLowerCase().includes(searchTerm))) {
        filteredTickets.push(ticket);
      }
    });
    this.filteredTickets = filteredTickets;
  }

  public clearSearch() {
    this.showClearSearch = false;
    this.filteredTickets = this.tickets;
    this.searchTerm = '';
    document.getElementById('input').value = '';
  }

  public sort(field) {
    if (this.currentSort !== field) {
      this.sortReversed = false;
      if (field === 'number') {
        const sortOperation = function(a, b) { return a.id - b.id; };
        this.filteredTickets = R.sort(sortOperation, this.filteredTickets);
      } else if (field === 'status' || field === 'priority' || field === 'shortDescription' || field === 'source') {
        const sortOperation = R.sortBy(R.compose(R.toLower, R.prop(field)));
        this.filteredTickets = sortOperation(this.filteredTickets);
      // } else if (field === 'submissionDate' || field === 'updatedOn') {
          // this.filteredTickets = this.filteredTickets.sort(function(a, b) {
          //   a = a.submissionDate.split('/').reverse().join('');
          //   b = b.submissionDate.split('/').reverse().join('');
          //   // return a > b ? 1 : a < b ? -1 : 0;
          //   return a.localeCompare(b);
          // });
      }
    } else {
      // Reverse the sort if it was already selected
      this.filteredTickets = R.reverse(this.filteredTickets);
      this.sortReversed = !this.sortReversed;
    }
    this.currentSort = field;
  }
}
