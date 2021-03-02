
import { IonApp, IonAvatar, IonBackButton, IonButton, IonButtons, IonCheckbox, IonContent, IonDatetime, IonGrid, IonHeader, IonIcon, IonInput, IonItem, IonItemDivider, IonItemOption, IonItemOptions, IonItemSliding, IonLabel, IonList, IonModal, IonPage, IonRange, IonRoute, IonRow, IonSelect, IonSelectOption, IonText, IonThumbnail, IonTitle, IonToggle, IonToolbar } from '@ionic/react';
import { checkmarkCircle, closeCircle, home, informationCircle, navigate, shuffle, star } from 'ionicons/icons';
import React, { useState } from 'react';
import logoimg from '../../theme/logoimg.jpeg';


const ShopRegThank: React.FC = () => {
    return(<IonPage>
    <IonHeader>
        <IonToolbar>
        <IonButtons slot="start">
          <IonBackButton text="" defaultHref="/shopregform"></IonBackButton>
        </IonButtons>
        <IonTitle className="homelogo">Haircutline</IonTitle>
        </IonToolbar>
      </IonHeader>
        <IonContent>
            
            <IonRow className="aligncenter"><IonAvatar className="homeimglogo"><img src={logoimg}/></IonAvatar></IonRow>
      <IonText ><h2 className="margin20 aligntextcenter">Thank you !</h2></IonText>
      <IonText ><h5 className="margin20 ">Your request has been saved!<br/>We will contact you as soon as possible to show you Haircutline.</h5></IonText>
      <IonText ><h5 className="margin20 ">If needed, we are available from Monday to Saturday, +33(0)658410075</h5></IonText>
     
      <IonButton href="/clogin" className="margin20" color="success" expand="block"><p className="colorwhite">Go on Haircutline</p></IonButton>
        

        </IonContent>
       
    
  </IonPage>);
  
};


export default ShopRegThank;
