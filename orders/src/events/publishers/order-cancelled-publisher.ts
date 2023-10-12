import {
  Publisher,
  OrderCancelledEvent,
  Subjects,
} from '@backendtickets/common/build';

export class OrderCancelledPublisher extends Publisher<OrderCancelledEvent> {
  readonly subject = Subjects.OrderCancelled;
}
