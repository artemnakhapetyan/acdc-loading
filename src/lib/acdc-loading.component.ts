
import { Component, OnInit, Input } from '@angular/core';

import { LoadingConfig } from './acdc-loading.model';

import { AcdcLoadingService } from './acdc-loading.service';

@Component({
  selector: 'acdc-loading',
  templateUrl: './acdc-loading.component.html',
  styleUrls: ['./acdc-loading.component.css']
})
export class AcdcLoadingComponent implements OnInit {

  public configDS: LoadingConfig;

  @Input()
  public color1: string;

  @Input()
  public color2: string;

  @Input()
  public overlayOpacity: number = 0;

  @Input()
  public overlayColor: string;

  @Input()
  overlay: boolean;

  constructor(private acdcLoadingService: AcdcLoadingService) { }

  ngOnInit() {
    this.configDS = this.acdcLoadingService.getConfigDS();
    this.configDS.overlay = this.overlay;
  }

}

