import {
  Publisher,
  OrderCreatedEvent,
  Subjects,
} from '@backendtickets/common/build';

export class OrderCreatedPublisher extends Publisher<OrderCreatedEvent> {
  readonly subject = Subjects.OrderCreated;
}
