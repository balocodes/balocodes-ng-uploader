## Install

```
$ npm install balocodes-ng-uploader
```

## Requirements

```js
import { BaloUploader } from 'balocodes-ng-uploader'; //in your module
providers:[BaloUploader,...]; //add to you providers

/*In your component*/
import { BaloUploader } from 'balocodes-ng-uploader';
import { RequestOptions, Http, Headers } from '@angular/core';


constuctor(public balo:BaloUploader){}
```

## Usage
```html
<!--In your html -->
<input type="file" (change)="captureFile($event)">
<!-- That's it -->
```

```js
//back to your component 

/*Finally, we post*/
captured:FormData; //a variable to grab the result 
captureFile(event){
//the uploader takes an object
let fire = {    
    event, 
    type:0, 
    http:Http,
    ro:RequestOptions, 
    url:null, 
    yourFormData:null, 
    contentType = false
}
    this.captured = this.balo.baloAction(fire);
    //you have captured the file or the result of your upload. You may now do as you wish!!!
}

```

## Definitions
```js
```type:``` 0 or 1; 
/* 0 if you only want to capture a file so you can upload later. Returns form data      containing your file.
   1 if you want to upload the file as soon as it is selected. This returns the result*/

```http``` 
/* instance of Http*/

```ro```
/* An instance of RequestOptions
 */

```url```
/* this defines destination of your submitted formData(should you decide to post it immediately)
e.g http://localhost:3000/uploads
*/

```yourFormdata```
/* If your have already created an instance of FormData, You can add your file to it and post them at once*/

```contentType```
/* set to true if you want to attach 'Content-Type', 'multipart/form-data' to your header. Not required in Angular 4 */
```

## License

Copyright © 2017, [Amin Balogun] (http://balocodes.herokuapp.com)


