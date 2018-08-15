import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UsersComponent } from './users/users.component';
import { UserDetailsComponent } from './user-details/user-details.component';
import { PostsComponent } from './posts/posts.component';
import { PostDetailsComponent } from './post-details/post-details.component';
import { AlbumsComponent } from './albums/albums.component';
import { AlbumDetailsComponent } from './album-details/album-details.component';
import { TodosComponent } from './todos/todos.component';
import { TodoDetailsComponent } from './todo-details/todo-details.component';
import { NewItemComponent } from './new-item/new-item.component';
import { AlbumFormComponent } from './album-form/album-form.component';
import { CommentFormComponent } from './comment-form/comment-form.component';
import { PhotoFormComponent } from './photo-form/photo-form.component';
import { PostFormComponent } from './post-form/post-form.component';
import { TodoFormComponent } from './todo-form/todo-form.component';

const routes: Routes = [
  {
    path: '',
    component: UsersComponent
  },
  {
    path: 'users',
    component: UsersComponent
  },
  {
    path: 'users/:id',
    component: UserDetailsComponent
  },
  {
    path: 'posts',
    component: PostsComponent
  },
  {
    path: 'posts/:id',
    component: PostDetailsComponent
  },
  {
    path: 'albums',
    component: AlbumsComponent
  },
  {
    path: 'albums/:id',
    component: AlbumDetailsComponent
  },
  {
    path: 'todos',
    component: TodosComponent
  },
  {
    path: 'todos/:id',
    component: TodoDetailsComponent
  },
  {
    path: 'new',
    component: NewItemComponent,
    children: [
      { path: '', component: AlbumFormComponent },
      { path: 'album', component: AlbumFormComponent },
      { path: 'comment', component: CommentFormComponent },
      { path: 'photo', component: PhotoFormComponent },
      { path: 'post', component: PostFormComponent },
      { path: 'todo', component: TodoFormComponent}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
