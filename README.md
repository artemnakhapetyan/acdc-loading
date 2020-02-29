
# Material design Loading component for angular

No additional dependecies like bootsrap or material or any other ui libs required

Angular versions support - 2,4,5,6,7+

See [Demo](https://stackblitz.com/edit/angular-zbhxgx-acdc-loading)


## Latest updates

*25 February 2020* Body template for replacing default spinner style
<br/>
*20 October 2019* Update demo link
<br/>
*11 October 2018* Additional attributes support (component colors and overlay opacity) 
<br/>
*24 October 2018* Styles fix (fixed position for loading bar to be visible when page is scrolled down. overlay style fix for pages with scroll)
<br/>
*09 November 2018* configure z-index property support

## Install

### 1. Install package with npm
```npm

npm install acdc-loading --save

```

### 2. Import loading module in your project's root module app.module.ts:
```ts

import { AcdcLoadingModule } from 'acdc-loading';

imports: [
    AcdcLoadingModule.forRoot()
]

```


## Usage

### 1 Place loading tag in root component html markup app.component.html:
```html

<acdc-loading 
	zIndex="1000000000"
	overlay="true" 
	overlayOpacity="0.1" 
	overlayColor="black" 
	spinnerColor1="red" 
	spinnerColor2="green">
</acdc-loading>

```

### 2. Alternative to step 1: Place loading tag in root component html markup app.component.html and provide body with custom loader style:
```html

<acdc-loading 
    zIndex="1000000000"
    overlay="true" 
    overlayOpacity="0" 
    overlayColor="black" 
    spinnerColor1="#ccc" 
    spinnerColor2="white"
    useBody="true">
    <ng-container>
        <div class="busy-holder" style="z-index: 1000000000;">
            <div class="busy">
                <svg class="loader3 loader-md" viewBox="0 0 66 66">
                    <circle class="path" fill="none" stroke-width="6" stroke-linecap="round" cx="33" cy="33" r="30"></circle>
                </svg>
            </div>
        </div>
    </ng-container>
</acdc-loading>

```

Available attributes: <br />
**useBody** - use body content as spinner instead default one<br />
**zIndex** - overlay and spinner z-index<br />
**overlay** - enable/disable overlay div for blocking screen while loading ( values - true / false ) <br />
**overlayOpacity** - overlay div opacity ( values - decimal number with range 0.0 .. 1.0 ) <br />
**overlayColor** - overlay div color ( values - one of these: Color Name / Hex Color Code / RGB Color Code ) <br />
**spinnerColor1** - spinner animation first color ( values - one of these: Color Name / Hex Color Code / RGB Color Code ) <br />
**spinnerColor2** - spinner animation second color ( values - one of these: Color Name / Hex Color Code / RGB Color Code ) <br />

### 3. Import and use loading service in any component or service where you need to control visibility of loading:
```ts

import { AcdcLoadingService } from 'acdc-loading';

constructor( private acdcLoadingService: AcdcLoadingService ) {}

anyMethod(){

	this.acdcLoadingService.showLoading();

	this.api.anyAsyncMethodCall().subscribe( res => {
		// some actions
		this.acdcLoadingService.hideLoading();
	});

	
}

```