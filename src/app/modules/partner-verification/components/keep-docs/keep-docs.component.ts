import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-keep-docs',
  templateUrl: './keep-docs.component.html',
  styleUrls: ['./keep-docs.component.scss'],
})
export class KeepDocsComponent implements OnInit {
  constructor(private _router: Router) {}
  ngOnInit(): void {}
  back() {
    this._router.navigate(['dash/welcome']);
  }
  next() {
    this._router.navigate(['dash/revenue']);
  }
}
