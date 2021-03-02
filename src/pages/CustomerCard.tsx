
import { IonApp, IonAvatar, IonButton, IonContent, IonGrid, IonHeader, IonIcon, IonItem, IonItemDivider, IonItemOption, IonItemOptions, IonItemSliding, IonLabel, IonList, IonRow, IonText, IonTitle, IonToolbar, IonImg, IonButtons, IonBackButton, IonPage, useIonViewDidEnter, IonToast } from '@ionic/react';
import { home } from 'ionicons/icons';
import React, { useState } from 'react';
import { useLocation } from 'react-router';

import BookingModal from '../modals/BookingModal';
import CustomerModal from '../modals/CustomerModal';
import EmployeeModal from '../modals/EmployeeModal';
import { lang } from '../modals/Helper';
import ImageModal from '../modals/ImageModal';
import ShopModal from '../modals/ShopModal';

type MyModalProps = {
  shopM:ShopModal;
  empM:EmployeeModal;
  custM:CustomerModal;
  bookM:BookingModal;
  tempstr:any[];
}

const CustomerCard: React.FC<MyModalProps> = ({tempstr,shopM,custM,empM,bookM}) => {
  custM=tempstr[3];
  const [showToast1,setShowToast1]=useState(false);
    
  useIonViewDidEnter(()=>{
    
    loaddata();

  });

  
  const [img, setImg] = useState("");
   async function loaddata() {
      
    var imgdata="";
    
    imgdata= "data:image/jpeg;base64,"+await ImageModal.getimage(custM.img);
      setImg(imgdata);
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
    <IonToast
    isOpen={showToast1}
    color="danger"
    onDidDismiss={() => setShowToast1(false)}
    message="Blacklisted successfully"
    duration={3000}
  />
<IonItem  lines="none">
          <IonLabel>
            <h1>{lang[62+tempstr[7]]["Customer card"]}</h1>
          </IonLabel>
        </IonItem>
        <IonItem  lines="none">
          <IonTitle>
  <h1>{custM.nam}</h1>
          </IonTitle>
        </IonItem>
<IonRow className="aligncenter"><IonAvatar className="profile">
          <img  src={img} />
          </IonAvatar></IonRow>
        
      <IonList  lines="full">
  
     
          
        <IonItem>
         
          <IonLabel>
            <h2>{lang[64+tempstr[7]]["Mobile phone"]}</h2>
  <p>{custM.mobile}</p>
          </IonLabel>
        </IonItem>
        <IonItem>
         
          <IonLabel>
            <h2>{lang[66+tempstr[7]]["Mail address"]}</h2>
            <p>{custM.email}</p>
          </IonLabel>
        </IonItem>
        
        </IonList>
        <div><p></p></div>
        <IonRow className="aligncenter margin"><IonButton onClick={async()=>{
          custM.blacklister="true";
          await CustomerModal.updatecustomer(custM.id,custM);
          setShowToast1(true);
        }} className="buttonmedium" expand="full" >BlackLister</IonButton>
    </IonRow>
    
   
    </IonContent>
  </IonPage>
);

  }
export default CustomerCard;
