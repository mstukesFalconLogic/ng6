import { Component, OnInit } from '@angular/core';
import { FormGroupDirective, ControlContainer, Validators, FormGroup, FormControl, FormBuilder, NgForm } from '@angular/forms';
import { DataService } from '../data.service';

@Component({
  selector: 'app-comment-form',
  templateUrl: './comment-form.component.html',
  styleUrls: ['./comment-form.component.scss'],
  viewProviders: [
    { provide: ControlContainer, useExisting: FormGroupDirective }
  ]
})
export class CommentFormComponent implements OnInit {
  private form: FormGroup;
  private posts$: Object;

  constructor(private data: DataService, private parent: FormGroupDirective) { }

  ngOnInit() {
    this.data.getPosts().subscribe(data => this.posts$ = data);

    this.form = this.parent.form;
    this.form.addControl('commentFormGroup', new FormGroup({
      postTitle: new FormControl('', Validators.required),
      commentBody: new FormControl('', Validators.required)
    }));
  }
}