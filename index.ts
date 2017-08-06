
export class BaloUploader{

  constructor() {   }

  ngOnInit() {
  }
//event, type, http=null, ro=null, url=null, yourFormData:FormData=null, contentType = false
  baloAction(x){ 
    //make sure you import { Headers, RequestOptions } from '@angular/http'
    //we create a list that captures uploaded files
    let fileList: FileList = x.event.target.files;
    //if the list consists of at least one file,
    if(fileList.length>0){
      //we grab only the first file because in this case we are uploading only one file at a time
      let file:File = fileList[0];
      if(x.yourFormData!=null){
        x.yourFormData.append('file', file, file.name);
        var formData:FormData = x.yourFormData; 
      }
      else{
        var formData:FormData = new FormData();
      //we attach the file to the form data
        formData.append('file', file, file.name);
      }
      //we create an instance of FormData
      
      //we have captured the file and may decide to send it immediately of save it for later use
      let myFormData = formData; 
      console.log(myFormData+" Captured!")
      //for later use, type 0
      if(x.type == 0){
        return myFormData;
      }
      //for immediate use type 1
      else if (x.type = 1){
        ////We create an instance of headers////
        let headers:Headers = new Headers();
        ////we then append the necessary headers////
        if(x.contentType == true){
          headers.append('Content-Type', 'multipart/form-data') //not necessary in Angular 4
        }
        headers.append('Accept', 'application/json');
        ////then we add request options////
        let options = new x.ro({headers: headers});
        ////then we send it////
        x.http.post(x.url, myFormData, options).map(res=>res.json).subscribe(data=>{
          return data;
        })
      }
      /* if we wanted to send it immediately,
        
        ///Thats it!
      */
    }
  }

}
