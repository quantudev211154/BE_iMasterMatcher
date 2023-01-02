import { AuthGuard } from '@nestjs/passport';

export class JwtGuard extends AuthGuard('iMatcherHihi') {
  constructor() {
    super();
  }
}
