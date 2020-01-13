export class Ticket {
  id: string;
  status: string;
  priority: string;
  shortDescription: string;
  description: string;
  actionsTaken: string[];
  submissionDate: string;
  updatedOn: string;
  source: string;
}
export const TICKET_ATTR = ["id", "status", "priority", "shortDescription", "description", "actionsTaken", "submissionDate", "updatedOn","source"];
