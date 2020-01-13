import { Component } from '@angular/core';
import { ConfigService } from './config.service'
import { Ticket, TICKET_ATTR } from '../ticket';

@Component({
  selector: 'app-config',
  templateUrl: './config.component.html',
  styleUrls: ['./config.component.scss'],
  providers: [ConfigService],
})

export class ConfigComponent {
  error: any;
  data: Ticket;
  ticket_attributes = TICKET_ATTR;
  constructor(private configService: ConfigService) { }


  showConfig() {
    this.configService.getConfig().subscribe( (data: Ticket) => this.data = { ...data }, error => this.error = error )
  }


}
