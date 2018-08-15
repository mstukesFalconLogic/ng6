import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { User } from './model/User';
import { Post } from './model/Post';
import { Album } from './model/Album';
import { Photo } from './model/Photo';
import { Todo } from './model/Todo';
import { Comment } from './model/Comment';

@Injectable({
 providedIn: 'root'
 })
export class DataService {

  constructor(private http: HttpClient) { }
    
  getUsers() {
    return this.http.get<User>('https://jsonplaceholder.typicode.com/users')
  }
  
  getUser(userId) {
    return this.http.get<User>(`https://jsonplaceholder.typicode.com/users/${userId}`)
  }

  getUserAlbums(userId) {
    return this.http.get<Album>(`https://jsonplaceholder.typicode.com/users/${userId}/albums`);
  }

  getUserPosts(userId) {
    return this.http.get<Post>(`https://jsonplaceholder.typicode.com/users/${userId}/posts`);
  }

  getUserTodos(userId) {
    return this.http.get<Todo>(`https://jsonplaceholder.typicode.com/users/${userId}/todos`);
  }

  getPosts() {
    return this.http.get<Post>('https://jsonplaceholder.typicode.com/posts')
  }

  getPost(postId) {
    return this.http.get<Post>(`https://jsonplaceholder.typicode.com/posts/${postId}`)
  }

  getPostComments(postId) {
    return this.http.get<Comment>(`https://jsonplaceholder.typicode.com/post/${postId}/comments`);
  }

  getComments() {
    return this.http.get<Comment>('https://jsonplaceholder.typicode.com/comments')
  }

  getComment(commentId) {
    return this.http.get<Comment>(`https://jsonplaceholder.typicode.com/comments/${commentId}`)
  }

  getAlbums() {
    return this.http.get<Album>('https://jsonplaceholder.typicode.com/albums')
  }

  getAlbum(albumId) {
    return this.http.get<Album>(`https://jsonplaceholder.typicode.com/albums/${albumId}`);
  }

  getAlbumPhotos(albumId) {
    return this.http.get<Photo>(`https://jsonplaceholder.typicode.com/albums/${albumId}/photos`);
  }

  getTodos() {
    return this.http.get<Todo>('https://jsonplaceholder.typicode.com/todos')
  }

  getTodo(todoId) {
    return this.http.get<Todo>(`https://jsonplaceholder.typicode.com/todos/${todoId}`)
  }
}
