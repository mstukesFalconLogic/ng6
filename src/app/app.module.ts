import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule, MatInputModule, MatSelectModule, MatSnackBarModule, MAT_SNACK_BAR_DEFAULT_OPTIONS } from '@angular/material';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { PostsComponent } from './posts/posts.component';
import { UsersComponent } from './users/users.component';
import { PostDetailsComponent } from './post-details/post-details.component';
import { NewItemComponent } from './new-item/new-item.component';
import { CommentComponent } from './comment/comment.component';
import { AlbumComponent } from './album/album.component';
import { AlbumsComponent } from './albums/albums.component';
import { AlbumDetailsComponent } from './album-details/album-details.component';
import { TodosComponent } from './todos/todos.component';
import { TodoDetailsComponent } from './todo-details/todo-details.component';
import { UserDetailsComponent } from './user-details/user-details.component';
import { TodoComponent } from './todo/todo.component';
import { HomeComponent } from './home/home.component';
import { PostComponent } from './post/post.component';
import { UserFormComponent } from './user-form/user-form.component';
import { PostFormComponent } from './post-form/post-form.component';
import { AlbumFormComponent } from './album-form/album-form.component';
import { CommentFormComponent } from './comment-form/comment-form.component';
import { TodoFormComponent } from './todo-form/todo-form.component';
import { PhotoComponent } from './photo/photo.component';
import { PhotosComponent } from './photos/photos.component';
import { PhotoFormComponent } from './photo-form/photo-form.component';
import { PhotoDetailsComponent } from './photo-details/photo-details.component';

@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    PostsComponent,
    UsersComponent,
    PostDetailsComponent,
    NewItemComponent,
    CommentComponent,
    AlbumComponent,
    AlbumsComponent,
    AlbumDetailsComponent,
    TodosComponent,
    TodoDetailsComponent,
    UserDetailsComponent,
    TodoComponent,
    HomeComponent,
    PostComponent,
    UserFormComponent,
    PostFormComponent,
    AlbumFormComponent,
    CommentFormComponent,
    TodoFormComponent,
    PhotoComponent,
    PhotosComponent,
    PhotoFormComponent,
    PhotoDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule, 
    HttpClientModule, 
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatSnackBarModule
  ],
  providers: [
    {
      provide: MAT_SNACK_BAR_DEFAULT_OPTIONS, useValue: {
        duration: 2000
      }
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
