import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';
import { SharedDataService } from '@core/services/shared-data.service';
import { WebcamImage } from 'ngx-webcam';
import { Observable, Subject } from 'rxjs';
import { ShuftiproService } from '../../services/shuftipro.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class MainComponent implements OnInit {
  constructor(
    private _router: Router,
    private _shuftiproService: ShuftiproService,
    private _sharedDataService: SharedDataService
  ) {}
  public loading = false;

  error = '';

  stream: any = null;
  status: any = null;
  trigger: Subject<void> = new Subject();
  previewImage: string = '';
  btnLabel: string = 'Capture image';

  public img1 = '';
  public img2 = '';
  public img3 = '';

  get $trigger(): Observable<void> {
    return this.trigger.asObservable();
  }

  ngOnInit(): void {}

  snapshot(event: WebcamImage) {
    this.previewImage = event.imageAsDataUrl;
    this.btnLabel = 'Re capture image';
  }

  checkPermissions() {
    navigator.mediaDevices
      .getUserMedia({
        video: {
          width: 500,
          height: 500,
        },
      })
      .then((res) => {
        this.stream = res;
        this.status = 'My camera is accessing';
        this.btnLabel = 'Capture image';
      })
      .catch((err) => {
        console.log(err);
        if (err?.message === 'Permission denied') {
          this.status =
            'Permission denied please try again by approving the access';
        } else {
          this.status =
            'You may not having camera system, Please try again ...';
        }
      });
  }

  captureImage(key: string) {
    this.trigger.next();
    this[key] = this.previewImage;
    this.previewImage = '';
  }

  proceed() {
    this.error = '';

    if (this.btnNotValid) {
      return;
    }

    this.loading = true;
    this._shuftiproService
      .check({
        face: {
          proof: this.img1,
        },
        document: {
          proof: this.img2,
          additional_proof: this.img3,
        },
      })
      .subscribe(
        (res: any) => {
          this.loading = false;
          if (res.event == 'verification.accepted') {
            this._sharedDataService.shuftiProData = res;
            this._router.navigate(['/shuftipro/data-approve']);
          } else {
            this.error = res.declined_reason;
          }
        },
        (err) => {
          this.loading = false;
          console.log('-------proceed---err---', err);
        }
      );
  }

  back() {
    this._router.navigate(['/kyc/addshareholder']);
  }

  get btnNotValid() {
    return !this.img1 || !this.img2 || !this.img3;
  }
}
