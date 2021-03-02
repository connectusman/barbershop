
import { IonApp, IonAvatar, IonBackButton, IonButton, IonButtons, IonCheckbox, IonCol, IonContent, IonDatetime, IonGrid, IonHeader, IonIcon, IonInput, IonItem, IonItemDivider, IonItemOption, IonItemOptions, IonItemSliding, IonLabel, IonList, IonModal, IonPage, IonRange, IonRoute, IonRouterOutlet, IonRow, IonSegment, IonSegmentButton, IonSelect, IonSelectOption, IonTabBar, IonTabButton, IonTabs, IonText, IonThumbnail, IonTitle, IonToggle, IonToolbar, useIonViewDidEnter } from '@ionic/react';
import { albums, archive, chatbubble, checkmarkCircle, closeCircle, home, informationCircle, navigate, person, search, shuffle, star } from 'ionicons/icons';
import React, { useState } from 'react';
import { customertabs } from '../../components/FooterTabs';
import OrderComponent from '../../components/OrderComponent';
import BookingModal from '../../modals/BookingModal';
import CustomerModal from '../../modals/CustomerModal';
import EmployeeModal from '../../modals/EmployeeModal';
import { lang } from '../../modals/Helper';
import ShopModal from '../../modals/ShopModal';

type MyModalProps = {
  shopM:ShopModal;
  empM:EmployeeModal;
  custM:CustomerModal;
  bookM:BookingModal;
  tempstr:any[];
}

const PastBookings: React.FC<MyModalProps> = ({tempstr,shopM,custM,empM,bookM})=> {
  
  const [temp, setTemp] = useState("Past Orders");
  tempstr[6]=temp;
  useIonViewDidEnter(()=>{
    setTemp("Past Orders");
    
  });
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
        <IonSegment value={temp} onIonChange={e=>{
        if(e.detail.value==="Past Orders")
          {
            
            setTemp("Past Orders");
          }
          else
          {
            setTemp("Incoming Orders");
          }
          
    }}>
         <IonSegmentButton style={{"--indicator-color":"#fff","--color-checked":"#000"}} value="Past Orders" >
            <IonLabel>{lang[170+tempstr[7]]["Past orders"]}</IonLabel>
          </IonSegmentButton>
          <IonSegmentButton style={{"--indicator-color":"#fff","--color-checked":"#000"}} value="Incoming Orders">
            <IonLabel>{lang[172+tempstr[7]]["Incoming order"]}</IonLabel>
          </IonSegmentButton>
        </IonSegment>
            
        <OrderComponent tempstr={tempstr} bookM={bookM} custM={custM} shopM={shopM} empM={empM} />
   

        </IonContent>
        {customertabs}
        </IonPage>
    );
}
   

export default PastBookings;
