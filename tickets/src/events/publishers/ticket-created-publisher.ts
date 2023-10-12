import {
  Publisher,
  Subjects,
  TicketCreatedEvent,
} from '@backendtickets/common/build';

export class TicketCreatedPublisher extends Publisher<TicketCreatedEvent> {
  readonly subject = Subjects.TicketCreated;
}
