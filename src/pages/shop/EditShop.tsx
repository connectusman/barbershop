
import { IonApp, IonAvatar, IonBackButton, IonButton, IonButtons, IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle, IonCol, IonContent, IonGrid, IonHeader, IonIcon, IonInput, IonItem, IonItemDivider, IonItemOption, IonItemOptions, IonItemSliding, IonLabel, IonList, IonListHeader, IonPage, IonRadio, IonRadioGroup, IonRouterLink, IonRouterOutlet, IonRow, IonSegment, IonSegmentButton, IonSelect, IonSelectOption, IonTabBar, IonTabButton, IonTabs, IonText, IonTitle, IonToolbar, useIonViewDidEnter, useIonViewWillEnter } from '@ionic/react';
import { business, caretForwardOutline, chatbubble, cut, home, person, search, star, starOutline } from 'ionicons/icons';
import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router';
import { shoptabs } from '../../components/FooterTabs';

import BookingModal from '../../modals/BookingModal';
import CustomerModal from '../../modals/CustomerModal';
import EmployeeModal from '../../modals/EmployeeModal';
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

const EditShop: React.FC<MyModalProps> = ({tempstr,shopM,custM,empM,bookM}) => {
  const [sname, setSname] = useState("");
  const [sadd, setSadd] = useState("");
  let hist=useHistory();
  const [img,setimg]=useState("");
  useIonViewDidEnter(()=>{
    loaddata();
  });
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
  
  console.log("asdasd");
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
        <IonItem  lines="full">
          <IonLabel>
  <h1>{sname}</h1>
  <p>{sadd}</p>
            
          </IonLabel>
        </IonItem>
          <IonCard className="imgmargin">
        <img className="coverimgsize" src={img} />
      </IonCard >
<br></br>

     <IonRow class="aligncenter"><IonRouterLink onClick={async ()=>{
       await ImageModal.updateimage(shopM.img);
       var imgdata= "data:image/jpeg;base64,"+await ImageModal.getimage(shopM.img);
    console.log(imgdata);
    setimg(imgdata);
     }}>Edit barbershop picture</IonRouterLink></IonRow>
     <br></br>
    <IonButton onClick={e=>{hist.push("/bbshopinfo")}} expand="full" ><IonText className="floatleft">{lang[44+tempstr[7]].Informations}</IonText><IonIcon className="floatright" icon={caretForwardOutline}></IonIcon></IonButton>
    <br></br>
    <IonButton onClick={e=>{hist.push("/Haircutmanagement")}} expand="full" ><IonText className="floatleft">{lang[46+tempstr[7]]["Haircut management"]}</IonText><IonIcon className="floatright" icon={caretForwardOutline}></IonIcon></IonButton>
    <br></br>
    <IonButton onClick={e=>{hist.push("/Barbermanagement")}} expand="full" ><IonText className="floatleft">{lang[48+tempstr[7]]["Employee management"]}</IonText><IonIcon className="floatright" icon={caretForwardOutline}></IonIcon></IonButton>    
    <br></br>
    <IonRow className="aligncenter margin20">
        <IonRouterLink color="danger" href="/mainhome">{lang[198+tempstr[7]]["Sign out"]}</IonRouterLink>
    </IonRow>
    </IonContent>
    {shoptabs}
  </IonPage>
);

  }
export default EditShop;
