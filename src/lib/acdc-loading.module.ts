
import { NgModule, ModuleWithProviders } from '@angular/core';

import { CommonModule } from '@angular/common';

import { AcdcLoadingComponent } from './acdc-loading.component';

import { AcdcLoadingService } from './acdc-loading.service';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
  	AcdcLoadingComponent
  ],
  exports: [
  	AcdcLoadingComponent
  ]
})
export class AcdcLoadingModule { 

	static forRoot(): ModuleWithProviders<AcdcLoadingModule> {
	    return {
	      ngModule: AcdcLoadingModule,
	      providers: [AcdcLoadingService]
	    }
	}

}

