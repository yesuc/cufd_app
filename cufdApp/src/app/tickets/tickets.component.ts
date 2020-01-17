import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Ticket } from '../ticket';

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
