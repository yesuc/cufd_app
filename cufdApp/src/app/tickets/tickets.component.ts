import { Ticket } from '../ticket';

import { Component, EventEmitter, Input, Output } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';

@Component({
  selector: 'app-tickets',
  templateUrl: './tickets.component.html',
  styleUrls: ['./tickets.component.scss']
})
export class TicketsComponent {
  @Input() public tickets: Ticket[];
  @Input() public columns: any[];
  @Input() public currentSort: string;
  @Input() public sortReversed: boolean;
  @Output() public sort = new EventEmitter<any>();
}
