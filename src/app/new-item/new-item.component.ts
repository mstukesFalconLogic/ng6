import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatSnackBar } from '@angular/material';
import { Router } from '@angular/router';
import { DataService } from '../data.service';
import { User } from '../model/User';

@Component({
  selector: 'app-new-item',
  templateUrl: './new-item.component.html',
  styleUrls: ['./new-item.component.scss']
})
export class NewItemComponent implements OnInit {
  users$: User;
  form: FormGroup;
  itemTypes = [
    'Album',
    'Comment',
    'Photo',
    'Post',
    'Todo'
  ];
  selectedType = 'Post';

  constructor(private data: DataService, private fb: FormBuilder, private router: Router, public snackBar: MatSnackBar) {
    this.form = new FormGroup({});
  }

  ngOnInit() {
    this.data.getUsers().subscribe(
      data => this.users$ = data
    );

    this.form = this.fb.group({
      userName: '',
      selectedItemType: 'Album'
    });

    this.onChanges();
  }

  public onChanges(): void {
    this.form.get('selectedItemType').valueChanges.subscribe(val => {
      this.selectedType = val;
      this.router.navigate([`new/${val.toLowerCase()}`]);
    });    
  }

  public saveNewItem(): void {
    this.snackBar.open(`${this.selectedType} Saved.`);
    this.router.navigate(['users']);
  }

  public cancel(): void {
    this.router.navigate(['users']);
  }
}