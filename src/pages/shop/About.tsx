
import { IonApp, IonAvatar,IonCard, IonButton, IonContent, IonGrid, IonHeader, IonIcon, IonItem, IonItemDivider, IonItemOption, IonItemOptions, IonItemSliding, IonLabel, IonList, IonRow, IonText, IonTitle, IonToolbar, IonButtons, IonBackButton, IonPage, IonTabs, IonTabBar, IonTabButton, IonRouterOutlet, IonLoading, IonFooter, useIonViewDidEnter } from '@ionic/react';
import Axios from 'axios';
import { chatbubble, home, person, search } from 'ionicons/icons';
import React, { useEffect, useState } from 'react';
import { Route, useHistory } from 'react-router';
import { shoptabs } from '../../components/FooterTabs';
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


const About:React.FC<MyModalProps> = ({tempstr,shopM,custM,empM,bookM})=> {
  let hist=useHistory();
  const [sname, setSname] = useState("");
  const [sadd, setSadd] = useState("");
  useIonViewDidEnter(()=>{
    loaddata();
  });
  const [img,setimg]=useState("");
  useEffect(()=>{

  },[shopM]);
  async function loaddata()
  {
    var d=await ShopModal.getshop(shopM.id);
    shopM=new ShopModal();
       shopM.addData(d._id,d.obj.uid,d.obj.nam,d.obj.desc,d.obj.duration,d.obj.rating,d.obj.address,d.obj.postal,d.obj.city,d.obj.opening,d.obj.closing,d.obj.email,d.obj.password,d.obj.mobile,d.obj.img,d.obj.isActive,d.obj.norating);
       setSname(shopM.nam);
      setSadd(shopM.address);
    var imgdata= "data:image/jpeg;base64,"+await ImageModal.getimage(shopM.img);
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
            console.log("inshop"+shopM.address);
            hist.push("/booking");
          }
        } expand="full"   >{lang[8+tempstr[7]]["Booking's day"]}</IonButton></IonRow>
        <br></br>
        <IonRow className="aligncenter"><IonButton  className="buttonmedium boldtext" onClick={
          ()=>{
            hist.push("/makeBooking");
          }
        } expand="full"   >{lang[16+tempstr[7]]["Customer mode"]}</IonButton></IonRow>
        <br></br>
        <IonRow className="aligncenter"><IonButton className="buttonmedium boldtext" onClick={
          ()=>{
            hist.push("/stats");
          }
        } expand="full"   >{lang[10+tempstr[7]]["Statistics"]}</IonButton></IonRow>
    </IonContent>
   {shoptabs}
  </IonPage>
);
  }

export default About;