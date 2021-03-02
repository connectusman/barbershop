
import { IonApp, IonAvatar, IonButton, IonContent, IonGrid, IonHeader, IonIcon, IonItem, IonItemDivider, IonItemOption, IonItemOptions, IonItemSliding, IonLabel, IonList, IonRow, IonText, IonTitle, IonToolbar, IonRouterLink, IonButtons, IonBackButton, IonPage, IonInput, IonCol, IonSelect, IonSelectOption } from '@ionic/react';
import Axios from 'axios';
import { home } from 'ionicons/icons';
import React, { useRef } from 'react';
import { useHistory } from 'react-router';
import { shoptabs } from '../../components/FooterTabs';
import BookingModal from '../../modals/BookingModal';
import CustomerModal from '../../modals/CustomerModal';
import EmployeeModal from '../../modals/EmployeeModal';
import HaircutModal from '../../modals/HaircutModal';
import { lang } from '../../modals/Helper';
import ImageModal from '../../modals/ImageModal';
import ShopModal from '../../modals/ShopModal';

type MyModalProps = {
  shopM:ShopModal;
  empM:EmployeeModal;
  custM:CustomerModal;
  bookM:BookingModal;
  tempstr:any[];
}


const AddHaircut: React.FC <MyModalProps> = ({tempstr,shopM,custM,empM,bookM}) => {
 let hist=useHistory();
  const name=useRef<HTMLIonInputElement>(null);
  const price=useRef<HTMLIonInputElement>(null);
  const dur=useRef<HTMLIonSelectElement>(null);
  return(

  <IonPage>
    <IonHeader>
        <IonToolbar>
        <IonButtons slot="start">
          <IonBackButton text="" defaultHref="/Haircutmanagement"></IonBackButton>
        </IonButtons>
          <IonTitle size="small" className="applogo">
            Haircutline
          </IonTitle>
          
        </IonToolbar>
      </IonHeader>
    <IonContent>
            <h3 className="margin5">{lang[74+tempstr[7]]["Add a haircut"]}</h3>
          
        
        

    <IonItem>
            <IonLabel position="stacked">{lang[18+tempstr[7]].Name}</IonLabel>
            <IonInput ref={name} value=""> </IonInput>
          </IonItem>
          <IonRow>
            <IonCol size="11">
          <IonItem>
  <IonLabel position="stacked">{lang[90+tempstr[7]].Price}</IonLabel>
            <IonInput ref={price} type={"number"} value=""> </IonInput>
          </IonItem></IonCol>
          <IonCol style={{"marginTop":"auto"}} size="1"><h5>€</h5></IonCol>
    </IonRow>

    <IonItem>
            <IonLabel>Duration</IonLabel>
            <IonSelect ref={dur} >
              <IonSelectOption value="15">15min</IonSelectOption>
              <IonSelectOption value="30">30min</IonSelectOption>
              <IonSelectOption value="45">45min</IonSelectOption>
              <IonSelectOption value="60">60min</IonSelectOption>
              <IonSelectOption value="90">90min</IonSelectOption>
            </IonSelect>
          </IonItem>
<IonButton onClick={async ()=>{
  tempstr[3]=new HaircutModal(); 
    tempstr[3].nam=name.current?.value;
    tempstr[3].price=price.current?.value;
    tempstr[3].duration=dur.current?.value;
    tempstr[3].sid=shopM.id;
     tempstr[3].id=await HaircutModal.createhaircut(tempstr[3]);
    
    //hist.push("/barbermanagement");
    hist.goBack();
}} className="boldtext" expand="full">{lang[12+tempstr[7]]["Validate"]}</IonButton>


    </IonContent>
    {shoptabs}
  </IonPage>
);

}
export default AddHaircut;
