import { Message } from '@alekseew/api-interfaces';
import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

import { Transform } from './transform/Transform.class';

@Component({
  selector: 'alekseew-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  public hello$ = this.http.get<Message>('/api/hello');

  public numberInput = 0;

  public Transform = Transform;
  constructor(private http: HttpClient) {}
}
