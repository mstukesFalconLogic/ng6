import { Component, OnInit } from '@angular/core';
import { FormGroupDirective, ControlContainer, Validators, FormGroup, FormControl, FormBuilder, NgForm } from '@angular/forms';

@Component({
  selector: 'app-post-form',
  templateUrl: './post-form.component.html',
  styleUrls: ['./post-form.component.scss'],
  viewProviders: [
    { provide: ControlContainer, useExisting: FormGroupDirective }
  ]
})
export class PostFormComponent implements OnInit {
  private form: FormGroup;

  constructor(private parent: FormGroupDirective) { }

  ngOnInit() {
    this.form = this.parent.form;
    this.form.addControl('postFormGroup', new FormGroup({
      postTitle: new FormControl('', Validators.required),
      postBody: new FormControl('', Validators.required)
    }));
  }

}
