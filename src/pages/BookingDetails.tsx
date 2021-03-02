import { IonApp, IonAvatar, IonButton, IonContent, IonGrid, IonHeader, IonIcon, IonItem, IonItemDivider, IonItemOption, IonItemOptions, IonItemSliding, IonLabel, IonList, IonRow, IonText, IonTitle, IonToolbar, IonCol, IonButtons, IonBackButton, IonPage, useIonViewDidEnter } from '@ionic/react';
import { home } from 'ionicons/icons';
import React, { useState } from 'react';
import BookingModal from '../modals/BookingModal';
import CustomerModal from '../modals/CustomerModal';
import EmployeeModal from '../modals/EmployeeModal';
import { getDateTimeDisplayFormat, lang } from '../modals/Helper';
import ImageModal from '../modals/ImageModal';
import ShopModal from '../modals/ShopModal';

type MyModalProps = {
  shopM:ShopModal;
  empM:EmployeeModal;
  custM:CustomerModal;
  bookM:BookingModal;
  tempstr:any[];
}

const BookingDetails: React.FC <MyModalProps> = ({tempstr,shopM,custM,empM,bookM}) =>{
  useIonViewDidEnter(()=>{
    loaddata();

  });
  const [img, setImg] = useState("");
   bookM=tempstr[3][tempstr[4]];
   async function loaddata() {
    var imgdata="";
    if(bookM.cimg.length>0)
    imgdata= "data:image/jpeg;base64,"+await ImageModal.getimage(bookM.cimg);
      setImg(imgdata);
    }

  return(

    <IonPage>
    <IonHeader>
        <IonToolbar>
        <IonButtons slot="start">
          <IonBackButton text="" defaultHref="/booking"></IonBackButton>
        </IonButtons>
          <IonTitle size="small" className="applogo">
            Haircutline
          </IonTitle>
          
        </IonToolbar>
      </IonHeader>
    <IonContent>
    
        <IonItem  lines="none">
          <IonTitle>
  <h1>{bookM.cname}</h1>
          </IonTitle>
        </IonItem>
        <IonRow className="aligncenter"><IonAvatar className="profile">
          <img  src={img} />
          </IonAvatar></IonRow>
             
            <IonRow className="aligncenter margin20"><h1 className="margin0">{lang[22+tempstr[7]]["Haircut"]}: {bookM.hname}</h1></IonRow>
            <IonRow className="aligncenter margin20"><h1 className="margin0">{lang[24+tempstr[7]]["Time"]}: {getDateTimeDisplayFormat(bookM.datetime)}</h1></IonRow>
      <IonList  lines="full">
  
     
        <IonRow>
            
      
         <div className="div1">
             <h3>{lang[26+tempstr[7]]["Comments"]}</h3>
  <p>{bookM.comment}</p>
         </div>
        
        </IonRow>  


        <div><p>  </p></div>
        
         
         <div className="makeflex">
             <p className="counterleft">{lang[30+tempstr[7]]["Visit's number in the barbershop"]}</p>
  <p className="counterright"> {bookM.countno+1}</p>
             </div>
       
       
  
    
   </IonList>
    </IonContent>
  </IonPage>
);
  }
export default BookingDetails;