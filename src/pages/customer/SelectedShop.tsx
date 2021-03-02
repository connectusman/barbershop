
import { IonActionSheet, IonApp, IonAvatar, IonBackButton, IonButton, IonButtons, IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle, IonCol, IonContent, IonGrid, IonHeader, IonIcon, IonInput, IonItem, IonItemDivider, IonItemOption, IonItemOptions, IonItemSliding, IonLabel, IonList, IonListHeader, IonModal, IonPage, IonPopover, IonRadio, IonRadioGroup, IonRow, IonSegment, IonSegmentButton, IonSelect, IonSelectOption, IonText, IonTitle, IonToolbar, useIonViewDidEnter } from '@ionic/react';
import { forceUpdate } from 'ionicons/dist/types/stencil-public-runtime';
import { home, star, starOutline } from 'ionicons/icons';
import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router';
import { start } from 'repl';
import BookingComponent from '../../components/BookingComponent';
import { customertabs } from '../../components/FooterTabs';
import BookingModal from '../../modals/BookingModal';
import CustomerModal from '../../modals/CustomerModal';
import EmployeeModal from '../../modals/EmployeeModal';
import HaircutModal from '../../modals/HaircutModal';
import { lang } from '../../modals/Helper';
import ShopModal from '../../modals/ShopModal';
type MyModalProps = {
  shopM:ShopModal;
  empM:EmployeeModal;
  custM:CustomerModal;
  bookM:BookingModal;
  tempstr:any[];
}


const SelectedShop: React.FC <MyModalProps> = ({tempstr,shopM,custM,empM,bookM})=> {
  
  var hist=useHistory();
  
  const [temp, setTemp] = useState("Booking");
  tempstr[6]=temp;
  tempstr[9]=hist;
  useIonViewDidEnter(()=>{
    tempstr[6]="Booking";
  });
  return(
    
  <IonPage>
    <IonHeader>
        <IonToolbar>
        <IonButtons slot="start">
          <IonBackButton text="" defaultHref="/search"></IonBackButton>
        </IonButtons>
          <IonTitle size="small" className="applogo">
            Haircutline
          </IonTitle>
          
        </IonToolbar>
      </IonHeader>
    <IonContent> 
    <div className="dividerline"></div>
    <IonSegment value={temp} onIonChange={e=>{
        if(e.detail.value==="Booking")
          setTemp("Booking");
          else
          setTemp("Feedbacks");
          
    }}>
          <IonSegmentButton value="Booking">
            <IonLabel>{lang[132+tempstr[7]].Booking}</IonLabel>
          </IonSegmentButton>
          <IonSegmentButton value="Feedbacks">
            <IonLabel>{lang[134+tempstr[7]].Feedbacks}</IonLabel>
          </IonSegmentButton>
        </IonSegment>
        
        <BookingComponent tempstr={tempstr} bookM={bookM} custM={custM} shopM={shopM} empM={empM} />
    </IonContent>
    {customertabs}
  </IonPage>
);

  }
export default SelectedShop;
