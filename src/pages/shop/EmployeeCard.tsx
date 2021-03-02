
import { IonApp,IonRouterLink, IonAvatar, IonButton, IonContent, IonGrid, IonHeader, IonIcon, IonItem, IonItemDivider, IonItemOption, IonItemOptions, IonItemSliding, IonLabel, IonList, IonRow, IonText, IonTitle, IonToolbar, IonImg, IonToggle, IonCheckbox, IonButtons, IonBackButton, IonInput, IonPage, useIonViewDidEnter, IonDatetime } from '@ionic/react';
import Axios from 'axios';
import { home } from 'ionicons/icons';
import React, { useRef, useState } from 'react';
import { useHistory } from 'react-router';
import { shoptabs } from '../../components/FooterTabs';
import BookingModal from '../../modals/BookingModal';
import CustomerModal from '../../modals/CustomerModal';
import EmployeeModal from '../../modals/EmployeeModal';
import { getTimeFormat, getTimeNumber, lang } from '../../modals/Helper';
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


const EmployeeCard: React.FC<MyModalProps> = ({tempstr,shopM,custM,empM,bookM})=>{
  console.log("asd");
  empM=tempstr[3];
  var mobile=useRef<HTMLIonInputElement>(null);
  var email=useRef<HTMLIonInputElement>(null);
  var opening=useRef<HTMLIonDatetimeElement>(null);
  var closing=useRef<HTMLIonDatetimeElement>(null);
  const [open, setOpen] = useState(getTimeFormat(empM.opening));
  const [close, setClose] = useState(getTimeFormat(empM.closing));
  let hist=useHistory();
  async function getimage()
  {
    var imgdata= "data:image/jpeg;base64,"+await ImageModal.getimage(empM.img);
    //console.log(imgdata);
    setImgsrc(imgdata);
  }
  
  const [imgsrc, setImgsrc] = useState("");
  const [check, setCheck] = useState<any>();
  useIonViewDidEnter(()=>{
    getimage();
    if(empM.holiday=="true")
    setCheck(true);
    else
    setCheck(false);});
  return(

  <IonPage>
   <IonHeader>
        <IonToolbar>
        <IonButtons slot="start">
          <IonBackButton text="" defaultHref="/barbermanagement"></IonBackButton>
        </IonButtons>
          <IonTitle size="small" className="applogo">
            Haircutline
          </IonTitle>
          
        </IonToolbar>
      </IonHeader>
    <IonContent>
<IonItem  lines="none">
          <IonLabel>
            <h1>{lang[108+tempstr[7]]["Employee card"]}</h1>
          </IonLabel>
        </IonItem>
        <IonItem  lines="none">
          <IonTitle>
            <h1>{empM.nam}</h1>
          </IonTitle>
        </IonItem>
<IonRow className="aligncenter"><IonAvatar className="profile">
          <img  src={imgsrc} />
          </IonAvatar></IonRow>
        
          <IonItem>
            <IonLabel position="stacked">{lang[64+tempstr[7]]["Mobile phone"]}</IonLabel>
            <IonInput  ref={mobile} value={empM.mobile}> </IonInput>
          </IonItem>
          <IonItem>
            <IonLabel position="stacked">{lang[66+tempstr[7]]["Mail address"]}</IonLabel>
            <IonInput ref={email} value={empM.email}> </IonInput>
          </IonItem>
       <br></br>
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
       <IonItem lines="none" color="primary"><IonCheckbox onIonChange={e=>{
         if(e.detail.checked===true)
         setCheck(true);
         else
         setCheck(false);
       }} slot="start" color="danger" checked={check} /><IonText className="boldtext">{lang[110+tempstr[7]]["Off Work (Holiday)"]}</IonText></IonItem>
       <IonButton onClick={async ()=>{
  User.firebaseupdateemail(empM.email,empM.password,""+email.current?.value);
  empM.email=""+email.current?.value;
  console.log("holiday"+email.current?.value);
  empM.opening=getTimeNumber(""+opening.current?.value);
  empM.mobile=""+mobile.current?.value;
  empM.closing=getTimeNumber(""+closing.current?.value);
  console.log(check);
  empM.holiday=""+check;
  await EmployeeModal.updateemployee(empM.id,empM);
  hist.replace("/barbermanagement");
}} className="boldtext" expand="full">{lang[196+tempstr[7]].Update}</IonButton>
       <IonRow class="aligncenter"><IonRouterLink onClick={async ()=>{
  await User.firebasedelete(empM.email,empM.password);
  EmployeeModal.delemployee(empM.id);
  
  hist.replace("/barbermanagement");
}} className="colorred " ><h4 className="boldtext">{lang[112+tempstr[7]]["Delete employee"]}</h4></IonRouterLink></IonRow>
    </IonContent>
    {shoptabs}
  </IonPage>
);

}
export default EmployeeCard;
