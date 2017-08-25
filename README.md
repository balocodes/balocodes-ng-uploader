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
import { RequestOptions, Http, Headers } from '@angular/http';


constuctor(public balo:BaloUploader, public _http:Http){}
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
captured:any; //a variable to grab the result 
captureFile(event){
//the uploader takes an object
let fire = {    
    event, 
    type:0, 
    http:this._http,
    ro:RequestOptions, 
    url:null, //if you are submitting immediately
    yourFormData:null, //if you have an existing FormData, file will be appended to it
    contentType:false
}
    this.captured = this.balo.baloAction(fire); //file has been captured

    /*if you are using type:1, i.e you want to submit the image
    as soon as it is selected, you have to subscribe to get your json result

    this.balo.baloAction(fire).subscribe(data=>{
        this.captured = data;
    })
    */
}

```

## Note
```
You may access the file from the returned formdata using the name 'file'
```

## Definitions
```js
```type:``` 0 or 1; 
/* 0 if you only want to capture a file so you can upload later. 
   type:0 Returns form data containing your file.
   1 if you want to upload the file as soon as it is selected.
   type:1 returns a json() response */

```http``` 
/* instance of Http*/

```ro```
/* An instance of RequestOptions
 */

```url```
/* this defines destination of your submitted formData(should you decide 
   to post it immediately) e.g http://localhost:3000/uploads
*/

```yourFormdata```
/* If you have already created an instance of FormData, 
   You can add your file to it and post them at once*/

```contentType```
/* set to true if you want to attach 'Content-Type', 'multipart/form-data'
   to your header. Can be false in Angular 4 */
```

## License

Copyright © 2017, [Amin Balogun] (http://balocodes.herokuapp.com)


