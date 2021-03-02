
import { IonApp, IonAvatar, IonBackButton, IonButton, IonButtons, IonCheckbox, IonContent, IonDatetime, IonGrid, IonHeader, IonIcon, IonInput, IonItem, IonItemDivider, IonItemOption, IonItemOptions, IonItemSliding, IonLabel, IonList, IonModal, IonPage, IonRange, IonRoute, IonRow, IonSelect, IonSelectOption, IonText, IonThumbnail, IonTitle, IonToast, IonToggle, IonToolbar } from '@ionic/react';
import Axios from 'axios';
import { checkmarkCircle, closeCircle, home, informationCircle, navigate, shuffle, star } from 'ionicons/icons';
import React, { useRef, useState } from 'react';
import { useHistory } from 'react-router';
import ShopModal from '../../modals/ShopModal';
import logoimg from '../../theme/logoimg.jpeg';


import BookingModal from '../../modals/BookingModal';
import CustomerModal from '../../modals/CustomerModal';
import EmployeeModal from '../../modals/EmployeeModal';
import ImageModal from '../../modals/ImageModal';
import User from '../../modals/User';
import { lang } from '../../modals/Helper';

type MyModalProps = {
  shopM:ShopModal;
  empM:EmployeeModal;
  custM:CustomerModal;
  bookM:BookingModal;
  tempstr:any[];
}



const ShopRegForm: React.FC<MyModalProps> = ({tempstr,shopM,custM,empM,bookM}) => {
  let hist=useHistory();
  const name=useRef<HTMLIonInputElement>(null);
  const email=useRef<HTMLIonInputElement>(null);
  const mobile=useRef<HTMLIonInputElement>(null);
  const passwd=useRef<HTMLIonInputElement>(null);
  const regas=useRef<HTMLIonSelectElement>(null);
  const [showToast1, setShowToast1] = useState(false);
    return(
    <IonPage>
<IonHeader>
        <IonToolbar>
        <IonButtons slot="start">
          <IonBackButton text="" defaultHref="/mainhome"></IonBackButton>
        </IonButtons>
        <IonTitle className="homelogo">Haircutline</IonTitle>
        </IonToolbar>
      </IonHeader>
        <IonContent>
        <IonToast
    isOpen={showToast1}
    color="danger"
    onDidDismiss={() => setShowToast1(false)}
    message="Email not available"
    duration={3000}
  />
            <IonRow className="aligncenter"><IonAvatar className="homeimglogo"><img src={logoimg}/></IonAvatar></IonRow>
      <IonText ><h3 className="margin20 aligntextcenter">Discover the platform to develop your activity</h3></IonText>
   <IonItem>
            <IonLabel position="stacked">{lang[18+tempstr[7]].Name}</IonLabel>
            <IonInput ref={name} placeholder="Your name"> </IonInput>
          </IonItem>
          <IonItem>
            <IonLabel position="stacked">{lang[66+tempstr[7]]["Mail address"]}</IonLabel>
            <IonInput ref={email} placeholder="Your mail"> </IonInput>
          </IonItem>
          <IonItem>
            <IonLabel position="stacked">{lang[64+tempstr[7]]["Mobile phone"]}</IonLabel>
            <IonInput ref={mobile} placeholder="Your phone"> </IonInput>
          </IonItem>
          <IonItem>
            <IonLabel position="stacked">{lang[152+tempstr[7]].Password}</IonLabel>
            <IonInput ref={passwd} > </IonInput>
          </IonItem>
          <IonItem>
            <IonLabel>Register as</IonLabel>
            <IonSelect ref={regas} value="1" >
              <IonSelectOption value="1">Owner/Shop</IonSelectOption>
              <IonSelectOption value="2">Freelancer</IonSelectOption>
            </IonSelect>
          </IonItem>
            <IonButton onClick={async e=>{
              var uid= await User.firebasecreateuser(""+email.current?.value,""+passwd.current?.value);
              if(uid.uid!="")
              {
              var user=new User();
              if(regas.current?.value==1)
              {
              shopM.email=""+email.current?.value;
              shopM.nam=""+name.current?.value;
              shopM.mobile=""+mobile.current?.value;
              shopM.password=""+passwd.current?.value;
              
               shopM.id=await ShopModal.createshop(shopM);
              var iid= await ImageModal.createimage(false);
              shopM.img=iid;
              await ShopModal.updateshop(shopM.id,shopM); 
              user.addData(shopM.id,"Shop",uid.uid);
              }
              else
              { 
              empM.email=""+email.current?.value;
              empM.fnam=""+name.current?.value;
              empM.mobile=""+mobile.current?.value;
              empM.password=""+passwd.current?.value;
              empM.type="Freelancer";
               empM.id=await EmployeeModal.createemployee(empM);
              var iid= await ImageModal.createimage(true);
              empM.img=iid;
              await EmployeeModal.updateemployee(empM.id,empM); 
              user.addData(empM.id,"Employee",uid.uid);
              }
              User.createuser(user);
              hist.push("/shopregthank");
            }
            else
              setShowToast1(true);
            }}  className="margin20" color="success" expand="block"><p className="colorwhite">Discover for free</p></IonButton>
          
          <IonText ><p className="aligntextcenter">By clicking on this button I confirm I have read and accept terms of use and privacy policy</p></IonText>
          
        </IonContent>
       
    </IonPage>
    
  );
  
};


export default ShopRegForm;
