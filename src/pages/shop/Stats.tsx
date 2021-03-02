import React, { useRef, useState } from 'react';
import { IonBackButton, IonButtons, IonContent, IonDatetime, IonHeader, IonInput, IonItem, IonLabel, IonPage, IonSelect, IonTitle, IonToolbar } from "@ionic/react";
import { shoptabs } from '../../components/FooterTabs';

import BookingModal from '../../modals/BookingModal';
import CustomerModal from '../../modals/CustomerModal';
import EmployeeModal from '../../modals/EmployeeModal';
import ShopModal from '../../modals/ShopModal';
import { getDateTimeNumber, lang } from '../../modals/Helper';

type MyModalProps = {
  shopM:ShopModal;
  empM:EmployeeModal;
  custM:CustomerModal;
  bookM:BookingModal;
  tempstr:any[];
}

const Stats:React.FC<MyModalProps> = ({tempstr,shopM,custM,empM,bookM})=>{
    const sdate=useRef<HTMLIonDatetimeElement>(null);
    const edate=useRef<HTMLIonDatetimeElement>(null);
    const [nobook, setNobook] = useState(0);
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
        <h1 className="bigfont">{lang[50+tempstr[7]]["Booking's statistic"]}</h1>
    <IonItem  lines="none">
          <IonLabel>
          <h1>{lang[52+tempstr[7]]["Booking from a period"]}</h1>
          </IonLabel>
        </IonItem>
        
            <IonItem className="colorwhiteitem" >
          <IonLabel >{lang[54+tempstr[7]].From}</IonLabel>
          <IonDatetime ref={sdate} onIonChange={async ()=>{
            if(sdate.current?.value&&edate.current?.value)
            {
              let d=new Date(sdate.current.value);
  d.setMinutes(d.getMinutes()-d.getTimezoneOffset(),0,0);
  let d2=new Date(edate.current.value);
  d2.setMinutes(d2.getMinutes()-d2.getTimezoneOffset(),0,0);
                var res=await BookingModal.getbookingsbysid(shopM.id,getDateTimeNumber(d.toISOString()),getDateTimeNumber(d2.toISOString()),"true");
                var len=res.length;
                if(len>0)
                setNobook(len);
            }
          }}   display-format="YYYY-MM-DD" picker-format="YYYY-MM-DD" ></IonDatetime>
        </IonItem>
        <IonItem className="colorwhiteitem" >
          <IonLabel >{lang[56+tempstr[7]].To}</IonLabel>
          <IonDatetime ref={edate} onIonChange={async ()=>{
              console.log("aklsdj");
            if(sdate.current?.value&&edate.current?.value)
            {
                var res=await BookingModal.getbookingsbysid(shopM.id,getDateTimeNumber(sdate.current.value),getDateTimeNumber(edate.current.value),"true");
                var len=res.length;
                if(len>0)
                setNobook(len);
            }
          }}   display-format="YYYY-MM-DD" picker-format="YYYY-MM-DD" ></IonDatetime>
        </IonItem>
    
          <IonItem>
              <IonLabel position="stacked">{lang[58+tempstr[7]]["Number of booking"]}</IonLabel>
        <IonInput>{nobook}</IonInput>
          </IonItem>
        
    </IonContent>
    {shoptabs}
  </IonPage>
    );
}
export default Stats;