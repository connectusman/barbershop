
import { IonApp, IonAvatar, IonBackButton, IonButton, IonButtons, IonContent, IonDatetime, IonGrid, IonHeader, IonIcon, IonItem, IonItemDivider, IonItemOption, IonItemOptions, IonItemSliding, IonLabel, IonList, IonPage, IonRow, IonSelect, IonSelectOption, IonText, IonTextarea, IonTitle, IonToolbar, useIonViewDidEnter } from '@ionic/react';
import { home } from 'ionicons/icons';
import React, { useRef } from 'react';
import { useHistory } from 'react-router';
import { customertabs } from '../../components/FooterTabs';

import BookingModal from '../../modals/BookingModal';
import CustomerModal from '../../modals/CustomerModal';
import EmployeeModal from '../../modals/EmployeeModal';
import {getDateTimeDisplayFormat, lang } from '../../modals/Helper';
import ShopModal from '../../modals/ShopModal';
import { Plugins, CameraResultType } from '@capacitor/core';

type MyModalProps = {
  shopM:ShopModal;
  empM:EmployeeModal;
  custM:CustomerModal;
  bookM:BookingModal;
  tempstr:any[];
}


const BookingStep2: React.FC <MyModalProps> = ({tempstr,shopM,custM,empM,bookM}) =>{
  let hist=useHistory();
  var name=useRef<HTMLIonTextareaElement>(null);
  useIonViewDidEnter(()=>{
    loaddata();
  });
  async function loaddata() {
    var d=await EmployeeModal.getemployee(bookM.eid);
    var emp=new EmployeeModal();
    emp.addData(d._id,d.obj.uid,d.obj.nam,d.obj.fnam,d.obj.type,d.obj.holiday,d.obj.sid,d.obj.duration,d.obj.address,d.obj.opening,
      d.obj.closing,d.obj.email,d.obj.password,d.obj.mobile,d.obj.img);
      bookM.ename=emp.nam;
    
  }

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
    <div className="dividerline"></div>
         <br></br>
          <IonText  className="p-sizemy">
            {bookM.sname}
            </IonText>
            <div className="dividerline-cen"></div>
         

      
    <IonText className="p-sizemy2">4. {lang[162+tempstr[7]].Resume}</IonText>
    <p>{lang[142+tempstr[7]]["Selected haircut"]}</p>
    
        
    <div className="makeflex">
  <p className="counterleft">{bookM.hname}</p>
  <p > {bookM.hprice}€</p>
           
            </div>
  <p >{lang[166+tempstr[7]].Date} & {lang[164+tempstr[7]].Time}</p>
    
        
    <div className="makeflex">
            <p className="counterleft">Selected Date & Time</p>
  <p > {getDateTimeDisplayFormat(bookM.datetime)}</p>
           
            </div>
            <p>{lang[168+tempstr[7]]["Add a comments (optional)"]}</p>
            <IonList>
            <IonTextarea ref={name} value={""} className="bgcolrwhite" rows={4} placeholder="Any Comments"></IonTextarea>
            <div><p></p></div>
            </IonList>
        <IonButton  onClick={async()=>{
          console.log("validatestart "+bookM.datetime);
          bookM.cmobile=custM.mobile;
          bookM.cname=custM.nam;
          bookM.cid=custM.id;
          bookM.cimg=custM.img;
          bookM.comment=""+name.current?.value;
          bookM.countno=await BookingModal.getcountbysid(bookM.sid);
          await BookingModal.createbooking(bookM);
          console.log("edi "+bookM.eid);
          
          hist.replace("/home");
        }}  expand="full">{lang[12+tempstr[7]]["Validate"]}</IonButton>
        
    </IonContent>
    {customertabs}
  </IonPage>
);

  }
export default BookingStep2;
