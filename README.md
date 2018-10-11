
# Material design Loading component for angular 6

No additional dependecies like bootsrap or material or any other ui libs required


## Install

### 1. Import loading module in your project's root module app.module.ts:
```

import { AcdcLoadingModule } from 'acdc-loading';

imports: [
    ...
    AcdcLoadingModule.forRoot()
    ...
]

```


## Usage

### 1. Place loading tag in root component html markup app.component.html:
```

<acdc-loading overlay="true" overlayOpacity="0.1" overlayColor="black" color1="red" color2="green"></acdc-loading>

```
Available attributes:
overlay - enable/disable overlay div for blocking screen while loading ( values - true / false )
overlayOpacity - overlay div opacity ( values - decimal number with range 0.0 .. 1.0 )
overlayColor - overlay div color ( values - one of these: Color Name / Hex Color Code / RGB Color Code )
color1 - loader animation first color ( values - one of these: Color Name / Hex Color Code / RGB Color Code )
color2 - loader animation second color ( values - one of these: Color Name / Hex Color Code / RGB Color Code )

### 2. Import and use loading service in any component or service where you need to control visibility of loading:
```

import { AcdcLoadingService } from 'acdc-loading';

constructor(... private acdcLoadingService: AcdcLoadingService ...) {}

anyMethod(){

	this.acdcLoadingService.showLoading();

	this.api.anyAsyncMethodCall().subscribe( res => {
		...
		this.acdcLoadingService.hideLoading();
	});

	
}

```