
import { Component, OnInit, Input } from '@angular/core';

import { LoadingConfig } from './acdc-loading.model';

import { AcdcLoadingService } from './acdc-loading.service';

@Component({
  selector: 'acdc-loading',
  templateUrl: './acdc-loading.component.html',
  styleUrls: ['./acdc-loading.component.css']
})
export class AcdcLoadingComponent implements OnInit {

  public configDS: LoadingConfig = {
    loadingCnt: 0,
    overlay: false,
    useBody: false
  };

  @Input()
  public spinnerColor1: string = '';

  @Input()
  public zIndex: string = '1000000000';

  @Input()
  public spinnerColor2: string = '';

  @Input()
  public overlayOpacity: number = 0;

  @Input()
  public overlayColor: string = '';

  @Input()
  public useBody: boolean = false;

  @Input()
  overlay: boolean = false;

  constructor(private acdcLoadingService: AcdcLoadingService) { }

  ngOnInit() {
    this.configDS = this.acdcLoadingService.getConfigDS();
    this.configDS.overlay = this.overlay;
    this.configDS.useBody = this.useBody;
  }

}

