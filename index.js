"use strict";
exports.__esModule = true;
var BaloUploader = (function () {
    function BaloUploader() {
    }
    BaloUploader.prototype.ngOnInit = function () {
    };
    //event, type, http=null, ro=null, url=null, yourFormData:FormData=null, contentType = false
    BaloUploader.prototype.baloAction = function (x) {
        //make sure you import { Headers, RequestOptions } from '@angular/http'
        //we create a list that captures uploaded files
        var fileList = x.event.target.files;
        //if the list consists of at least one file,
        if (fileList.length > 0) {
            //we grab only the first file because in this case we are uploading only one file at a time
            var file = fileList[0];
            if (x.yourFormData != null) {
                x.yourFormData.append('file', file, file.name);
                var formData = x.yourFormData;
            }
            else {
                var formData = new FormData();
                //we attach the file to the form data
                formData.append('file', file, file.name);
            }
            //we create an instance of FormData
            //we have captured the file and may decide to send it immediately of save it for later use
            var myFormData = formData;
            console.log(myFormData + " Captured!");
            //for later use, type 0
            if (x.type == 0) {
                return myFormData;
            }
            else if (x.type = 1) {
                ////We create an instance of headers////
                var headers = new Headers();
                ////we then append the necessary headers////
                if (x.contentType == true) {
                    headers.append('Content-Type', 'multipart/form-data'); //not necessary in Angular 4
                }
                headers.append('Accept', 'application/json');
                ////then we add request options////
                var options = new x.ro({ headers: headers });
                ////then we send it////
                x.http.post(x.url, myFormData, options).map(function (res) { return res.json; }).subscribe(function (data) {
                    return data;
                });
            }
            /* if we wanted to send it immediately,
              
              ///Thats it!
            */
        }
    };
    return BaloUploader;
}());
exports.BaloUploader = BaloUploader;
