import { Component, OnInit } from '@angular/core';
import { FormGroupDirective, ControlContainer, Validators, FormGroup, FormControl, FormBuilder, NgForm } from '@angular/forms';

@Component({
  selector: 'app-album-form',
  templateUrl: './album-form.component.html',
  styleUrls: ['./album-form.component.scss'],
  viewProviders: [
    { provide: ControlContainer, useExisting: FormGroupDirective }
  ]
})
export class AlbumFormComponent implements OnInit {
  private form: FormGroup;

  constructor(private parent: FormGroupDirective) { }

  ngOnInit() {
    this.form = this.parent.form;
    this.form.addControl('albumFormGroup', new FormGroup({
      albumName: new FormControl('', Validators.required)
    }));
  }
}