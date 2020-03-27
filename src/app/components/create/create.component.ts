import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { ShareService } from 'src/app/share.service';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {
  title = 'Share Market';
  angForm: FormGroup;
  name: FormControl;
  price: FormControl;

  constructor(private shareService: ShareService, private fb: FormBuilder) {
    this.createForm();
   }

  ngOnInit(): void {
  }

  createForm() {
    this.angForm = this.fb.group({
      name: ['', Validators.required],
      price: ['', Validators.required]
    });
  }

  addShare(name, price) {
    const dataObj = {
      name: name,
      price: price
    };
    this.shareService.addShare(dataObj);
  }

}
