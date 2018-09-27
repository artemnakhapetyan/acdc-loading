import { Injectable } from '@angular/core';

import { LoadingConfig } from './acdc-loading.model';

@Injectable()
export class AcdcLoadingService {

  private configDS: LoadingConfig = {
    loadingCnt: 0,
    overlay: false
  };

  constructor() { }

  getConfigDS(): LoadingConfig{
  	return this.configDS;
  }

  showLoading(){
  	this.configDS.loadingCnt++;
  }

  hideLoading(){
  	if(this.configDS.loadingCnt>0){
  		this.configDS.loadingCnt--;
  	}
  }

}

