import {
  Publisher,
  Subjects,
  TicketUpdatedEvent,
} from '@backendtickets/common/build';

export class TicketUpdatedPublisher extends Publisher<TicketUpdatedEvent> {
  readonly subject = Subjects.TicketUpdated;
}
