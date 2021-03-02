import Axios from "axios";
import { defaultperson, defaultshop, url } from './Global';
import { Plugins, CameraResultType } from '@capacitor/core';
const { Camera } = Plugins;


class ImageModal{

    static b64toBlob(b64Data:any, contentType:any) {
        
        var sliceSize = 512;
      
        var byteCharacters = atob(b64Data);
        var byteArrays = [];
      
        for (var offset = 0; offset < byteCharacters.length; offset += sliceSize) {
          var slice = byteCharacters.slice(offset, offset + sliceSize);
      
          var byteNumbers = new Array(slice.length);
          for (var i = 0; i < slice.length; i++) {
            byteNumbers[i] = slice.charCodeAt(i);
          }
      
          var byteArray = new Uint8Array(byteNumbers);
      
          byteArrays.push(byteArray);
        }
          
        var blob = new Blob(byteArrays, {type: contentType});
        return blob;
      }
  
   static async createimage(isperson:boolean)
   {

    var b64Data ;
    if(isperson)
    b64Data=defaultperson;
    else
    b64Data=defaultshop;
    var contentType = 'image/jpeg';
    
    
    var blob = ImageModal.b64toBlob(b64Data, contentType);
        var fd=new FormData();
        fd.append('avatar',blob,'img1.jpeg');
        const resp=  await Axios.post(url()+"/createimage", fd,{
                  headers: {
                      'content-type': 'multipart/form-data'
                  }
              });
            return resp.data;
   }
    static async updateimage(id:string)
   {
    const image = await Camera.getPhoto({ 
      resultType: CameraResultType.Base64,
    });
    var b64Data = image.base64String;
    var contentType = 'image/jpeg';
    
    
    var blob = ImageModal.b64toBlob(b64Data, contentType);
      var fd=new FormData();
      fd.append('avatar',blob,'img1.jpeg');
      fd.append('id',id);
      const resp=  await Axios.post(url()+"/updateimage", fd,{
                headers: {
                    'content-type': 'multipart/form-data'
                }
            });
        return  resp.data;
   }
   static async getimage(id:string)
   {
    var fd=new FormData();
    fd.append('id',id);
    const resp=  await Axios.post(url()+"/getimage", fd,{
      headers: {
          'content-type': 'multipart/form-data'
      }
  });
return  resp.data.img.buffer;
   }   
}
export default ImageModal;