import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'ui-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  form: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
  ) { }

  ngOnInit() {
    this.initForm();
  }

  login() {
    if (this.form.invalid) return;
    this.router.navigate(['/pets']);
  }

  private initForm() {
    this.form = this.formBuilder.group({
      username: [''],
      password: ['']
    })
  }

}
