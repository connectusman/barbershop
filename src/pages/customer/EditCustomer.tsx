
import { IonApp, IonAvatar, IonButton, IonContent, IonGrid, IonHeader, IonIcon, IonItem, IonItemDivider, IonItemOption, IonItemOptions, IonItemSliding, IonLabel, IonList, IonRow, IonText, IonTitle, IonToolbar, IonImg, IonInput, IonRouterLink, IonButtons, IonBackButton, IonPage, IonToast } from '@ionic/react';
import { home, star } from 'ionicons/icons';
import React, { useEffect, useRef, useState } from 'react';
import { useHistory } from 'react-router';
import { customertabs } from '../../components/FooterTabs';

import BookingModal from '../../modals/BookingModal';
import CustomerModal from '../../modals/CustomerModal';
import EmployeeModal from '../../modals/EmployeeModal';
import { defaultperson, defaultshop } from '../../modals/Global';
import { lang } from '../../modals/Helper';
import ImageModal from '../../modals/ImageModal';
import ShopModal from '../../modals/ShopModal';
import User from '../../modals/User';

type MyModalProps = {
  shopM:ShopModal;
  empM:EmployeeModal;
  custM:CustomerModal;
  bookM:BookingModal;
  tempstr:any[];
}


const EditCustomer: React.FC<MyModalProps> = ({tempstr,shopM,custM,empM,bookM})  => {
  var name=useRef<HTMLIonInputElement>(null);
  var username=useRef<HTMLIonInputElement>(null);
  var mobile=useRef<HTMLIonInputElement>(null);
  var email=useRef<HTMLIonInputElement>(null);
  const [showToast1, setShowToast1] = useState(false);
  let hist=useHistory();
  useEffect(()=>{},[custM]);
  const [img,setimg]=useState("data:image/jpeg;base64,"+defaultperson);
  async function getimage()
  {
    var imgdata= "data:image/jpeg;base64,"+await ImageModal.getimage(custM.img);
    console.log(imgdata);
    setimg(imgdata);
  }
  getimage();
  return(

  <IonPage>
    <IonHeader>
        <IonToolbar>
        <IonButtons slot="start">
          <IonBackButton text=""></IonBackButton>
        </IonButtons>
          <IonTitle size="small" className="applogo">
            Haircutline
          </IonTitle>
          
        </IonToolbar>
      </IonHeader>
    <IonContent>
    <IonToast
    isOpen={showToast1}
    color="danger"
    onDidDismiss={() => setShowToast1(false)}
    message="Update Successfully"
    duration={3000}
  />

        
            <IonRow className="aligncenter"><IonAvatar className="profile">
          <img  src={img} />
          </IonAvatar></IonRow>
          <br></br>

          <IonRow class="aligncenter"><IonRouterLink onClick={async ()=>{
       await ImageModal.updateimage(custM.img);
       getimage();
     }}>{lang[192+tempstr[7]]["Edit profil picture"]}</IonRouterLink></IonRow>
          
        <IonItem>
         
          <IonLabel>
            <h2>{lang[18+tempstr[7]].Name}</h2>
  <IonInput ref={name} value={custM.nam}></IonInput>
          </IonLabel>
        </IonItem>

        <IonItem>
         
          <IonLabel>
            <h2>{lang[194+tempstr[7]].Username}</h2>
  <IonInput ref={username} value={custM.username}></IonInput>
          </IonLabel>
        </IonItem>

        <IonItem>
         
          <IonLabel>
            <h2>{lang[64+tempstr[7]]["Mobile phone"]}</h2>
  <IonInput ref={mobile} value={custM.mobile}></IonInput>
          </IonLabel>
        </IonItem>

        <IonItem>
         
          <IonLabel>
            <h2>{lang[66+tempstr[7]]["Mail address"]}</h2>
  <IonInput ref={email} value={custM.email}></IonInput>
          </IonLabel>
        </IonItem>
        <IonButton expand="full" onClick={async ()=>{
          console.log(email.current?.value);
          User.firebaseupdateemail(custM.email,custM.password,""+email.current?.value);
          custM.email=""+email.current?.value;
          console.log(custM.email);
          custM.username=""+username.current?.value;
          custM.mobile=""+mobile.current?.value;
          custM.nam=""+name.current?.value;
          await CustomerModal.updatecustomer(custM.id,custM);
          hist.replace("/home");
        }}>{lang[196+tempstr[7]].Update}</IonButton>
        <IonRow className="aligncenter margin20">
        <IonRouterLink color="danger" href="/mainhome">{lang[198+tempstr[7]]["Sign out"]}</IonRouterLink>
    </IonRow>
   
    </IonContent>
    {customertabs}
  </IonPage>
);
  }

export default EditCustomer;
