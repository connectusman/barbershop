
import { IonApp, IonAvatar, IonButton, IonCheckbox, IonContent, IonDatetime, IonGrid, IonHeader, IonIcon, IonInput, IonItem, IonItemDivider, IonItemOption, IonItemOptions, IonItemSliding, IonLabel, IonList, IonPage, IonRange, IonRow, IonSelect, IonSelectOption, IonText, IonThumbnail, IonTitle, IonToggle, IonToolbar } from '@ionic/react';
import Axios,{AxiosRequestConfig} from 'axios';
import React from 'react';
import { Plugins, CameraResultType } from '@capacitor/core';

const { Camera } = Plugins;

const axConf: AxiosRequestConfig = {
  headers: {
    'enctype':'multipart/form-data'
  }
};
async function takePicture() {
  const image = await Camera.getPhoto({
    quality: 90,
    allowEditing: true,
    resultType: CameraResultType.Base64
  });
  // image.webPath will contain a path that can be set as an image src.
  // You can access the original file using image.path, which can be
  // passed to the Filesystem API to read the raw data of the image,
  // if desired (or pass resultType: CameraResultType.Base64 to getPhoto)
  var imageUrl = image.webPath;
  console.log(image);
  var ssd:string="shani";
  
  // Can be set to the src of an image now
  console.log(Axios);

  let xhr = new XMLHttpRequest();

  let json = JSON.stringify({"name":image.base64String,
  "email":"shanssi@gmail.com",
  "username":"sdasd",
  "password":"shani123",
  "location":"pasr",
  "mobile":"mobile",
  "blacklister":"false"});
  

  
  xhr.open("POST", 'https://barber7.herokuapp.com/createcustomer')
  xhr.setRequestHeader('Content-type', 'multipart/form-data; boundary=---WebKitFormBoundary7MA');
  
  xhr.send(json);
}


  
const ImageUpload:React.FC = () => {
    
  return (
    <IonPage>
      <IonContent>
        <IonButton onClick={()=>takePicture()}></IonButton>
      </IonContent>
    </IonPage>
  );
}

export default ImageUpload;
