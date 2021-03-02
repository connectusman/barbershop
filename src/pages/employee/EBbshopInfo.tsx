
import { IonApp, IonAvatar, IonBackButton, IonButton, IonButtons, IonContent, IonDatetime, IonGrid, IonHeader, IonIcon, IonInput, IonItem, IonItemDivider, IonItemOption, IonItemOptions, IonItemSliding, IonLabel, IonList, IonPage, IonRow, IonSelect, IonSelectOption, IonText, IonTitle, IonToast, IonToolbar, useIonViewDidEnter } from '@ionic/react';
import Axios from 'axios';
import { home } from 'ionicons/icons';
import React, { useEffect, useRef, useState } from 'react';
import { useHistory } from 'react-router';
import { eshoptabs, shoptabs } from '../../components/FooterTabs';
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

const EBbshopinfo: React.FC<MyModalProps> = ({tempstr,shopM,custM,empM,bookM}) =>{
  let hist=useHistory();
  useEffect(()=>{});
  console.log(empM.duration);
  const lname=useRef<HTMLIonInputElement>(null);
  const fname=useRef<HTMLIonInputElement>(null);
  const maddress=useRef<HTMLIonInputElement>(null);
  const sname=useRef<HTMLIonInputElement>(null);
  const snaddress=useRef<HTMLIonInputElement>(null);
  const opening=useRef<HTMLIonDatetimeElement>(null);
  const closing=useRef<HTMLIonDatetimeElement>(null);
  const duration=useRef<HTMLIonSelectElement>(null);
  const [madd, setAdd] = useState(empM.address);
  const [lnam, setLnam] = useState(empM.nam);
  const [fnam, setFnam] = useState(empM.fnam);
  const [snam, setSnam] = useState("");
  const [snadd, setSnadd] = useState("");
  const [open, setOpen] = useState(getTimeFormat(empM.opening));
  const [close, setClose] = useState(getTimeFormat(empM.closing));
  const [dur, setDur] = useState(empM.duration);
  const [showToast1, setShowToast1] = useState(false);
  useIonViewDidEnter(()=>{
    loaddata();
  });
  async function loaddata() {
    if(empM.sid!="")
    {
      var d=await ShopModal.getshop(empM.sid);
      var shp=new ShopModal();
      shp.addData(d._id,d.obj.uid,d.obj.nam,d.obj.desc,d.obj.duration,d.obj.rating,d.obj.address,d.obj.postal,d.obj.city,d.obj.opening,d.obj.closing,d.obj.email,d.obj.password,d.obj.mobile,d.obj.img,d.obj.isActive,d.obj.norating);
      setSnam(shp.nam);
      setSnadd(shp.address);
    }
  }
  return (

  <IonPage>
     <IonHeader>
        <IonToolbar>
        <IonButtons slot="start">
          <IonBackButton text="" defaultHref="/eeditshop"></IonBackButton>
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
    message="Last Name, First Name should not be empty"
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
            <IonLabel position="stacked">{lang[18+tempstr[7]].Name}</IonLabel>
            <IonInput ref={lname} value={lnam}> </IonInput>
          </IonItem>
          <IonItem lines="full">
            <IonLabel position="stacked">{lang[86+tempstr[7]]['First name']}</IonLabel>
            <IonInput ref={fname} value={fnam}> </IonInput>
          </IonItem>
        <IonItem lines="full">
            <IonLabel position="stacked">{lang[66+tempstr[7]]['Mail address']}</IonLabel>
            <IonInput disabled={true} ref={maddress} value={madd}> </IonInput>
          </IonItem>
          <IonItem lines="full">
            <IonLabel position="stacked">Current shop name</IonLabel>
            <IonInput disabled={true} ref={sname} value={snam}> </IonInput>
          </IonItem>
          <IonItem lines="full">
            <IonLabel position="stacked">Shop address</IonLabel>
            <IonInput disabled={true} ref={snaddress} value={snadd}> </IonInput>
          </IonItem>
          
          <br></br>
<IonButton onClick={async ()=>{
  console.log(dur);
  if(lname.current?.value&&fname.current?.value&&maddress.current?.value&&closing.current?.value&&opening.current?.value&&duration.current?.value)
  {
    var durr=""+duration.current.value;
    var rdurr=durr.split(' ');
    empM.address=""+(maddress.current?.value);
    empM.nam=""+lname.current.value;
    empM.fnam=""+fname.current.value;
    empM.closing=getTimeNumber(closing.current?.value);
    empM.opening=getTimeNumber(opening.current?.value);
  empM.duration=(rdurr[0]);
  var resp= await EmployeeModal.updateemployee(empM.id,empM);
  console.log(resp);
  hist.replace("/eeditshop");
  }
  else
  setShowToast1(true);
  

  
}} expand="full">{lang[12+tempstr[7]]["Validate"]}</IonButton>
    </IonContent>
    {eshoptabs}
  </IonPage>
);
  }

export default EBbshopinfo;
