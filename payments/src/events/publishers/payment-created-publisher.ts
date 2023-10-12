import {
  Subjects,
  Publisher,
  PaymentCreatedEvent,
} from '@backendtickets/common/build';

export class PaymentCreatedPublisher extends Publisher<PaymentCreatedEvent> {
  readonly subject = Subjects.PaymentCreated;
}
