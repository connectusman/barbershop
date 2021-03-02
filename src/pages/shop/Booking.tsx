
import { IonApp, IonAvatar, IonButton, IonContent, IonGrid, IonHeader, IonIcon, IonItem, IonItemDivider, IonItemOption, IonItemOptions, IonItemSliding, IonLabel, IonList, IonRow, IonText, IonTitle, IonToolbar, IonCol, IonRouterLink, IonButtons, IonBackButton, useIonViewDidEnter, IonPage, IonLoading, IonSpinner } from '@ionic/react';
import Axios from 'axios';
import { forceUpdate } from 'ionicons/dist/types/stencil-public-runtime';
import { home } from 'ionicons/icons';
import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router';
import { shoptabs } from '../../components/FooterTabs';

import BookingModal from '../../modals/BookingModal';
import CustomerModal from '../../modals/CustomerModal';
import EmployeeModal from '../../modals/EmployeeModal';
import HaircutModal from '../../modals/HaircutModal';
import { getDateTimeDisplayFormat, getDateTimeendNumber, getDateTimeFormat, getDateTimeNumber, getDateTimeNumberE, getDateTimeNumberS, getDatetimestartNumber, lang} from '../../modals/Helper';
import ImageModal from '../../modals/ImageModal';
import ShopModal from '../../modals/ShopModal';

type MyModalProps = {
  shopM:ShopModal;
  empM:EmployeeModal;
  custM:CustomerModal;
  bookM:BookingModal;
  tempstr:any[];
}

const Booking: React.FC<MyModalProps> = ({tempstr,shopM,custM,empM,bookM}) =>{
  let hist=useHistory();
  const [bolist, setbolist] = useState<any>();
  var CBookings:BookingModal[]=[];
  console.log(getDatetimestartNumber(new Date().toISOString())+"   "+getDateTimeendNumber(new Date().toISOString()));
  useIonViewDidEnter(async ()=>{

    await loaddata();
  });
  async function loaddata()
  {
    let d=new Date();
  d.setMinutes(d.getMinutes()-d.getTimezoneOffset(),0,0);
  let d2=new Date();
  d2.setMinutes(d2.getMinutes()-d2.getTimezoneOffset(),0,0);
    var res=await BookingModal.getbookingsbysid(shopM.id,getDateTimeNumberS(d.toISOString()),getDateTimeNumberE(d.toISOString()),"false");
    var len=res.length;
    CBookings=[];
    for(var i=0;i<len;i++)
    {
      var bookin=new BookingModal();
    bookin.addData(res[i]._id,res[i].obj.hname,res[i].obj.hprice,res[i].obj.datetime,res[i].obj.comment,res[i].obj.review,res[i].obj.eid,
      res[i].obj.ename,res[i].obj.cid,res[i].obj.cname,res[i].obj.cmobile,res[i].obj.caddress,res[i].obj.sid,res[i].obj.simg,res[i].obj.cimg,res[i].obj.isComplete,res[i].obj.countno,res[i].obj.revdate,res[i].obj.revrat,res[i].obj.sname);
    CBookings.push(bookin);
    } 
  len=CBookings.length;
  console.log("len:"+len);
  
  const allbks:any=[];
  for(let i=0;i<len;i++)
  {

    var imgdata="";
    if(CBookings[i].cimg.length>0)
    imgdata= "data:image/jpeg;base64,"+await ImageModal.getimage(CBookings[i].cimg);
    allbks.push(    <IonItem key={i}>
      <IonAvatar slot="start">
      <img src={imgdata} />
      </IonAvatar>
      <IonLabel>
<h2>{CBookings[i].cname}</h2>
    <h5>{CBookings[i].hname}</h5>
        <IonRow><IonCol ><p >{getDateTimeDisplayFormat(CBookings[i].datetime)}</p></IonCol>
        <IonCol></IonCol>
        <IonCol></IonCol>
        <IonCol > <IonRouterLink onClick={()=>{
          tempstr[3]=CBookings;
          tempstr[4]=i;
          console.log(tempstr[3]);
          hist.push("/bdetails");
        }}>More details</IonRouterLink></IonCol></IonRow>
      </IonLabel>
    </IonItem>);
  }
  setbolist(allbks);
  }
  
  
 
  
  return(

  <IonPage>
    <IonHeader>
        <IonToolbar>
        <IonButtons slot="start">
          <IonBackButton text="" defaultHref="/shophome"></IonBackButton>
        </IonButtons>
          <IonTitle size="small" className="applogo">
            Haircutline
          </IonTitle>
          
        </IonToolbar>
      </IonHeader>
     
    <IonContent>
      <IonItem className="dividerline"></IonItem>
      <IonItem className=" margin_header" lines="none">
          <IonLabel>
            <h1>{lang[20+tempstr[7]]["Booking of the day"]} </h1>
            
          </IonLabel>
        </IonItem>
        
      <IonList className="margin" lines="inset">

    
       { bolist}
        
      </IonList>
   
   
    </IonContent>
    {shoptabs}
  </IonPage>
);

  }
export default Booking;
