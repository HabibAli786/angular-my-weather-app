import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';

import { Post } from './post.model'
import * as PostActions from './post.action'

interface AppState {
  message: string
  post: Post
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'my-weather-app';
  message$: Observable<string>
  post$: Observable<Post>
  text: string

  constructor(private store: Store<AppState>) {
    this.message$ = this.store.select('message')
    this.post$ = this.store.select('post')
  }

  goAction() {
    this.store.dispatch({ type: 'Go' })
  }

  stopAction() {
    this.store.dispatch({ type: 'Stop' })
  }

  editText() {
    this.store.dispatch(new PostActions.EditText(this.text))
  }
}
