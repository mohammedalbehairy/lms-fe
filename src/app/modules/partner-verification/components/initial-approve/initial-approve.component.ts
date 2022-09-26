import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-initial-approve',
  templateUrl: './initial-approve.component.html',
  styleUrls: ['./initial-approve.component.scss'],
})
export class InitialApproveComponent implements OnInit {
  type;

  constructor(private _router: Router) {}
  ngOnInit(): void {}
  back() {
    this._router.navigate(['partners/initial-approve']);
  }
  next() {
    this._router.navigate(['partners/documents']);
  }
}
