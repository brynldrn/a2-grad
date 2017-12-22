import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { User } from '../_models/user';

@Injectable()
export class UserService {
  constructor(private http: HttpClient) { }

  getAll() {
    return this.http.get<User[]>('http://localhost:4000/api/v1/users/');
  }

  getById(_id: string) {
    return this.http.get('http://localhost:4000/api/v1/users/' + _id);
  }

  create(user: User) {
    return this.http.post('http://localhost:4000/api/v1/users/', user);
  }

  // update(user: User) {
  //   return this.http.put('/api/users/' + user.id, user);
  // }

  delete(_id: string) {
    return this.http.delete('http://localhost:4000/api/v1/users/' + _id);
  }
}
