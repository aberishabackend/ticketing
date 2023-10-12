import {
  Subjects,
  Publisher,
  ExpirationCompleteEvent,
} from '@backendtickets/common/build';

export class ExpirationCompletePublisher extends Publisher<ExpirationCompleteEvent> {
  readonly subject = Subjects.ExpirationComplete;
}
