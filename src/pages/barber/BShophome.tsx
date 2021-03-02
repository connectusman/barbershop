
import { IonApp, IonAvatar,IonCard, IonButton, IonContent, IonGrid, IonHeader, IonIcon, IonItem, IonItemDivider, IonItemOption, IonItemOptions, IonItemSliding, IonLabel, IonList, IonRow, IonText, IonTitle, IonToolbar, IonButtons, IonBackButton, IonPage, IonTabs, IonTabBar, IonTabButton, IonRouterOutlet, IonLoading, IonFooter, useIonViewDidEnter } from '@ionic/react';
import Axios from 'axios';
import { chatbubble, home, person, search } from 'ionicons/icons';
import React, { useEffect, useState } from 'react';
import { Route, useHistory } from 'react-router';
import { bshoptabs, eshoptabs, shoptabs } from '../../components/FooterTabs';
import BookingModal from '../../modals/BookingModal';
import CustomerModal from '../../modals/CustomerModal';
import EmployeeModal from '../../modals/EmployeeModal';
import HaircutModal from '../../modals/HaircutModal';
import { lang } from '../../modals/Helper';
import ImageModal from '../../modals/ImageModal';
import ShopModal from '../../modals/ShopModal';
import PastBookings from '../customer/PastBookings';
type MyModalProps = {
  shopM:ShopModal;
  empM:EmployeeModal;
  custM:CustomerModal;
  bookM:BookingModal;
  tempstr:any[];
}


const BShophome:React.FC<MyModalProps> = ({tempstr,shopM,custM,empM,bookM})=> {
  let hist=useHistory();
  const [sname, setSname] = useState("");
  const [sadd, setSadd] = useState("");
  useIonViewDidEnter(()=>{
    loaddata();
  });
  const [img,setimg]=useState("");
  useEffect(()=>{

  },[empM]);
  async function loaddata()
  {
    var d=await EmployeeModal.getemployee(empM.id);
    empM=new EmployeeModal();
       empM.addData(d._id,d.obj.uid,d.obj.nam,d.obj.fnam,d.obj.type,d.obj.holiday,d.obj.sid,d.obj.duration,d.obj.address,d.obj.opening,
        d.obj.closing,d.obj.email,d.obj.password,d.obj.mobile,d.obj.img);
       setSname(empM.fnam);
      setSadd(empM.address);
    var imgdata= "data:image/jpeg;base64,"+await ImageModal.getimage(empM.img);
    console.log(imgdata);
    setimg(imgdata);
  }
  
  const [load,setload]=useState(false);
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
    
  
    
      <IonItem className="dividerline"></IonItem>
      <IonItem  lines="full">
          <IonLabel>
            <h1>{sname}</h1>
            <p>{sadd}</p>
          </IonLabel>
        </IonItem>
      <IonList  lines="inset">

      <IonCard>
        <img className="coverimgsize"  src={img} />
        
        </IonCard>
        </IonList>
        <IonRow className="aligncenter"><IonButton className="buttonmedium boldtext" onClick={
          ()=>{
            console.log("inshop"+empM.address);
            hist.push("/bbooking");
          }
        } expand="full"   >{lang[8+tempstr[7]]["Booking's day"]}</IonButton></IonRow>
       
    </IonContent>
    {bshoptabs}
  </IonPage>
);
  }

export default BShophome;