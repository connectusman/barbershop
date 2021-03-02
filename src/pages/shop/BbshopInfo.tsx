
import { IonApp, IonAvatar, IonBackButton, IonButton, IonButtons, IonContent, IonDatetime, IonGrid, IonHeader, IonIcon, IonInput, IonItem, IonItemDivider, IonItemOption, IonItemOptions, IonItemSliding, IonLabel, IonList, IonPage, IonRow, IonSelect, IonSelectOption, IonText, IonTitle, IonToast, IonToolbar } from '@ionic/react';
import Axios from 'axios';
import { home } from 'ionicons/icons';
import React, { useEffect, useRef, useState } from 'react';
import { useHistory } from 'react-router';
import { shoptabs } from '../../components/FooterTabs';
import BookingModal from '../../modals/BookingModal';
import CustomerModal from '../../modals/CustomerModal';
import EmployeeModal from '../../modals/EmployeeModal';
import { getTimeFormat, getTimeNumber, lang } from '../../modals/Helper';
import ShopModal from '../../modals/ShopModal';

type MyModalProps = {
  shopM:ShopModal;
  empM:EmployeeModal;
  custM:CustomerModal;
  bookM:BookingModal;
  tempstr:any[];
}

const Bbshopinfo: React.FC<MyModalProps> = ({tempstr,shopM,custM,empM,bookM}) =>{
  let hist=useHistory();
  useEffect(()=>{});
  console.log(shopM.duration);
  const sname=useRef<HTMLIonInputElement>(null);
  const address=useRef<HTMLIonInputElement>(null);
  const desc=useRef<HTMLIonInputElement>(null);
  const opening=useRef<HTMLIonDatetimeElement>(null);
  const closing=useRef<HTMLIonDatetimeElement>(null);
  const duration=useRef<HTMLIonSelectElement>(null);
  const [add, setAdd] = useState(shopM.address);
  const [snam, setSnam] = useState(shopM.nam);
  const [des, setDes] = useState(shopM.desc);
  const [open, setOpen] = useState(getTimeFormat(shopM.opening));
  const [close, setClose] = useState(getTimeFormat(shopM.closing));
  const [dur, setDur] = useState(shopM.duration);
  const [showToast1, setShowToast1] = useState(false);
  return (

  <IonPage>
     <IonHeader>
        <IonToolbar>
        <IonButtons slot="start">
          <IonBackButton text="" defaultHref="/editshop"></IonBackButton>
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
    message="Shop name and address should not be empty"
    duration={3000}
  />
      <IonItem className="dividerline"></IonItem>
      
      <IonItem className="pdingall" lines="none">
          <IonTitle >
            <h1 >{lang[92+tempstr[7]]["About us"]}</h1>
          </IonTitle>
        </IonItem>
        <IonItem  className="colorwhiteitem">
          <IonLabel  >{lang[94+tempstr[7]]["Appointment duration "]}</IonLabel>
          <IonSelect ref={duration}  value={dur+" min"} >
            <IonSelectOption value="15 min">15 Min</IonSelectOption>
            <IonSelectOption value="30 min">30 Min</IonSelectOption>
            <IonSelectOption value="45 min">45 Min</IonSelectOption>
          </IonSelect>
        </IonItem>
        <div><p></p></div>
        <IonItem className="colorwhiteitem" >
          <IonLabel >{lang[96+tempstr[7]]["Opening time"]}</IonLabel>
          <IonDatetime ref={opening} hourValues="9,10,11,12,13,14" minuteValues="0,15,30,45"  display-format="HH:mm" picker-format="HH:mm" value={open}></IonDatetime>
        </IonItem>
        <div><p></p></div>
        <IonItem className="colorwhiteitem" >
          <IonLabel>Closing Time</IonLabel>
          <IonDatetime ref={closing} hourValues="14,15,16,17,18,19" minuteValues="0,15,30,45" display-format="HH:mm" picker-format="HH:mm" value={close}></IonDatetime>
        </IonItem>
        <br></br>
        <br></br>
        <IonItem lines="full">
            <IonLabel position="stacked">Shop name</IonLabel>
            <IonInput ref={sname} value={snam}> </IonInput>
          </IonItem>
        <IonItem lines="full">
            <IonLabel position="stacked">{lang[98+tempstr[7]].Address}</IonLabel>
            <IonInput ref={address} value={add}> </IonInput>
          </IonItem>
          <IonItem lines="full">
            <IonLabel position="stacked">{lang[100+tempstr[7]]["Who are we ?"]}</IonLabel>
            <IonInput ref={desc} value={des}> </IonInput>
          </IonItem>
          <br></br>
<IonButton onClick={async ()=>{
  console.log(dur);
  if(sname.current?.value&&address.current?.value&&closing.current?.value&&opening.current?.value&&desc.current?.value&&duration.current?.value)
  {
    var durr=""+duration.current.value;
    var rdurr=durr.split(' ');
    shopM.nam=""+sname.current.value;
    shopM.address=""+(address.current?.value);
    shopM.closing=getTimeNumber(closing.current?.value);
    shopM.opening=getTimeNumber(opening.current?.value);
    shopM.desc=""+(desc.current.value);
  shopM.duration=(rdurr[0]);
  var resp= await ShopModal.updateshop(shopM.id,shopM);
  console.log(resp);
  hist.replace("/editshop");
  }
  else
  setShowToast1(true);
  

 
}} expand="full">{lang[12+tempstr[7]]["Validate"]}</IonButton>
    </IonContent>
    {shoptabs}
  </IonPage>
);
  }

export default Bbshopinfo;
