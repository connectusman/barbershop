
import { IonApp, IonAvatar, IonBackButton, IonButton, IonButtons, IonCol, IonContent, IonDatetime, IonGrid, IonHeader, IonIcon, IonItem, IonItemDivider, IonItemOption, IonItemOptions, IonItemSliding, IonLabel, IonList, IonLoading, IonPage, IonRouterLink, IonRow, IonSelect, IonSelectOption, IonSpinner, IonTabBar, IonTabButton, IonTabs, IonText, IonTitle, IonToolbar, useIonViewDidEnter } from '@ionic/react';
import Axios from 'axios';
import { caretDown, home } from 'ionicons/icons';
import React, { useEffect, useRef, useState } from 'react';
import { useHistory } from 'react-router';
import { shoptabs } from '../../components/FooterTabs';
import MyAccord from '../../components/MyAccord';
import MyAccord2 from '../../components/MyAccord2';
import MyAccord3 from '../../components/MyAccord3';
import BookingModal from '../../modals/BookingModal';
import CustomerModal from '../../modals/CustomerModal';
import EmployeeModal from '../../modals/EmployeeModal';
import HaircutModal from '../../modals/HaircutModal';
import { getDateTimeDisplayFormat, getDateTimeNumber, getDateTimeNumberE, getDateTimeNumberS, lang } from '../../modals/Helper';
import ImageModal from '../../modals/ImageModal';
import ShopModal from '../../modals/ShopModal';

type MyModalProps = {
  shopM:ShopModal;
  empM:EmployeeModal;
  custM:CustomerModal;
  bookM:BookingModal;
  tempstr:any[];
}
const HaircutAp: React.FC <MyModalProps> = ({tempstr,shopM,custM,empM,bookM})  =>{
  
  const [allcustm, setAllcustm] = useState<any>();
  const [allBookings, setAllBookings] = useState<any>();
  const [custidref, setCustidref] = useState("");
  const [dtref, setDtref] = useState("");
useIonViewDidEnter(()=>{
  loaddata();
});
  async function loadBookings(dtr:string,cr:string) {
setLoading(true);
    var bookings:any[]=[];
  console.log("start");
  
  let d=new Date(dtr);
  d.setMinutes(d.getMinutes()-d.getTimezoneOffset(),0,0);
  var dres=await BookingModal.getbookingsbycsid(cr,shopM.id,getDateTimeNumberS(d.toISOString()),getDateTimeNumberE(d.toISOString()))
  let len=dres.length;
  for(let i=0;i<len;i++)
  {
    var imgdata="";
    imgdata= "data:image/jpeg;base64,"+await ImageModal.getimage(dres[i].obj.cimg);
      bookings.push(<IonItem key={i+200000}>
        <IonAvatar slot="start">
        <img src={imgdata} />
        </IonAvatar>
        <IonLabel>
  <h2>{dres[i].obj.cname}</h2>
      <h5>{dres[i].obj.hname}</h5>
          <IonRow><IonCol ><p >{getDateTimeDisplayFormat(dres[i].obj.datetime)}</p></IonCol>
          <IonCol></IonCol>
          <IonCol></IonCol>
          <IonCol > </IonCol></IonRow>
        </IonLabel>
      </IonItem>);
  }
  setAllBookings(bookings);
  setLoading(false);
  }
  async function loaddata() {
    var allids=await BookingModal.getuniquecustomers(shopM.id);
    var len=allids.length;
    console.log("all ids "+len);
    var allc:any[]=[];
    
    for(let i=0;i<len;i++)
    {
      if(allids[i]!="")
      {
      let dd=await CustomerModal.getcustomer(allids[i]);
      allc.push(<IonSelectOption key={i} value={dd._id}>{dd.obj.nam}</IonSelectOption>);
      }
    }
    setAllcustm(allc);
    
  }
  const [loading, setLoading] = useState(false)
return (

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
    <IonLoading
        isOpen={loading}
      />
      <IonList>
    <IonItem  lines="none">
          <IonLabel>
            <h1>Looking for orders</h1>
          </IonLabel>
        </IonItem>
        <IonItem>
            <IonLabel>Customer</IonLabel>
            <IonSelect onIonChange={e=>{
              console.log(e.detail.value + dtref);
              if(e.detail.value&&dtref)
              loadBookings(dtref,e.detail.value);
              setCustidref(e.detail.value);
              
            }}>
              {allcustm}
            </IonSelect>
          </IonItem>
        <br></br>
        <IonItem>
            <IonLabel>Date</IonLabel>
            <IonDatetime onIonChange={e=>{
              console.log(e.detail.value + custidref);
              if(e.detail.value&&custidref)
              loadBookings(e.detail.value!,custidref);
              if(e.detail.value)
              {
                setDtref(e.detail.value);
              }
            }} display-format="DD/MM/YYYY" picker-format="DD/MM/YYYY" ></IonDatetime>
          </IonItem>
        </IonList>
<IonList style={{"marginTop":"2rem"}}>
     
        
        <MyAccord title="Results" data={allBookings}></MyAccord>
        
   </IonList>     
    </IonContent>
    {shoptabs}
  </IonPage>
);
}

export default HaircutAp;
