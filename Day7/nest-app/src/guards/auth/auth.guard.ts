/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import { CanActivate, ExecutionContext, Injectable } from '@nestjs/common';
import { Observable } from 'rxjs';

@Injectable()
export class AuthGuard implements CanActivate {
  canActivate(
    context: ExecutionContext,
  ): boolean | Promise<boolean> | Observable<boolean> {
    const request = context.switchToHttp().getRequest();
    const token = request.headers.authorization.split(' ')[1];
    console.log(token);
    return (
      token ===
      'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6ImIyYTU0OTZmLWM4NmMtNDZkNS04ZTU3LTcxNDczNDdjNDg1OCIsImVtYWlsIjoic2hpdHNvdW1lbjkwN0BnbWFpbC5jb20iLCJyb2xlIjoiQURNSU4iLCJpYXQiOjE3NjMwMTc4MDYsImV4cCI6MTc2MzEwNDIwNn0.Oa8mmijlP23HdtuHX0FL3qh_jFtov_LNPhiCdVIBfRs'
    );
  }
}
