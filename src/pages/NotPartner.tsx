
import { IonApp, IonAvatar, IonBackButton, IonButton, IonButtons, IonCheckbox, IonContent, IonDatetime, IonGrid, IonHeader, IonIcon, IonInput, IonItem, IonItemDivider, IonItemOption, IonItemOptions, IonItemSliding, IonLabel, IonList, IonModal, IonPage, IonRange, IonRoute, IonRow, IonSelect, IonSelectOption, IonText, IonThumbnail, IonTitle, IonToggle, IonToolbar } from '@ionic/react';
import { checkmarkCircle, closeCircle, home, informationCircle, navigate, shuffle, star } from 'ionicons/icons';
import React, { useState } from 'react';
import logoimg from '../theme/logoimg.jpeg';
import BookingModal from '../modals/BookingModal';
import CustomerModal from '../modals/CustomerModal';
import EmployeeModal from '../modals/EmployeeModal';
import ShopModal from '../modals/ShopModal';

type MyModalProps = {
  shopM:ShopModal;
  empM:EmployeeModal;
  custM:CustomerModal;
  bookM:BookingModal;
  tempstr:any[];
}


const NotPartner: React.FC = () => {
    return(<IonContent>
    <IonModal isOpen={true}>

        <IonContent>
        <IonHeader>
        <IonToolbar>
        <IonButtons slot="start">
          <IonBackButton text="" defaultHref="/"></IonBackButton>
        </IonButtons>
        <IonTitle className="homelogo">Haircutline</IonTitle>
        </IonToolbar>
      </IonHeader>
            <IonRow className="aligncenter"><IonAvatar className="homeimglogo"><img src={logoimg}/></IonAvatar></IonRow>
      
      <IonText ><h5 className="margin20 ">This place is not a Haircutline partner yet.</h5></IonText>
      <IonText ><h5 className="margin20 ">If you are the owner of this place and want to get a partnership with us do not hesitate to contact us at ….</h5></IonText>
     
      <IonButton href="/shopregform" className="margin20"  expand="block"><p >Discover for free</p></IonButton>
      <IonText ><h5 className="margin20 aligntextcenter">OR</h5></IonText>
      <IonButton href="/mainhome" className="margin20"  expand="block"><p >Go on Haircutline</p></IonButton>

        </IonContent>
       
    </IonModal>
    
  </IonContent>);
  
};


export default NotPartner;
