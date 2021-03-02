
import { IonApp, IonAvatar, IonButton, IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle, IonCol, IonContent, IonGrid, IonHeader, IonIcon, IonItem, IonItemDivider, IonItemOption, IonItemOptions, IonItemSliding, IonLabel, IonList, IonRow, IonText, IonTitle, IonToolbar, IonSearchbar, IonRouterLink, IonModal, IonRouterOutlet, IonPage, IonButtons, IonTabs, IonTabBar, IonTabButton, IonSegment, IonSegmentButton, IonTextarea, IonBackButton } from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import { albums, home, list, person, search, star } from 'ionicons/icons';
import React, { useRef, useState } from 'react';
import { Route, RouteComponentProps, useHistory, withRouter } from 'react-router';
import BookingModal from '../../modals/BookingModal';
import CustomerModal from '../../modals/CustomerModal';
import EmployeeModal from '../../modals/EmployeeModal';
import { getDateTimeNumber, lang } from '../../modals/Helper';
import ShopModal from '../../modals/ShopModal';

type MyModalProps = {
    shopM:ShopModal;
    empM:EmployeeModal;
    custM:CustomerModal;
    bookM:BookingModal;
    tempstr:any[];
  }

const Reviewit: React.FC<MyModalProps> = ({tempstr,shopM,custM,empM,bookM})=> {

    
  let hist=useHistory();
  var name=useRef<HTMLIonTextareaElement>(null);
  var rat=useRef<HTMLIonSegmentElement>(null);
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
    <h5 className="margin5 colorwhite">Ratings</h5>
            
            <IonSegment ref={rat} value="1">
            <IonSegmentButton style={{"color":"#000","background":"#fff","--indicator-color":"#fff"}} id="oneabc1" onClick={()=>{
              document.getElementById("oneabc1")?.style.setProperty("color","#000");
              document.getElementById("oneabc1")?.style.setProperty("background","#fff");
              document.getElementById("oneabc2")?.style.setProperty("color","#fff");
              document.getElementById("oneabc2")?.style.setProperty("background","#000");
              document.getElementById("oneabc3")?.style.setProperty("color","#fff");
              document.getElementById("oneabc3")?.style.setProperty("background","#000");
              document.getElementById("oneabc4")?.style.setProperty("color","#fff");
              document.getElementById("oneabc4")?.style.setProperty("background","#000");
              document.getElementById("oneabc5")?.style.setProperty("color","#fff");
              document.getElementById("oneabc5")?.style.setProperty("background","#000");

              
              }} value="1">
            <IonIcon icon={star} />
          </IonSegmentButton>
          <IonSegmentButton style={{"color":"#fff","background":"#000","--indicator-color":"#fff"}} id="oneabc2" value="2" onClick={()=>{
              document.getElementById("oneabc1")?.style.setProperty("color","#000");
              document.getElementById("oneabc1")?.style.setProperty("background","#fff");
              document.getElementById("oneabc2")?.style.setProperty("color","#000");
              document.getElementById("oneabc2")?.style.setProperty("background","#fff");
              document.getElementById("oneabc3")?.style.setProperty("color","#fff");
              document.getElementById("oneabc3")?.style.setProperty("background","#000");
              document.getElementById("oneabc4")?.style.setProperty("color","#fff");
              document.getElementById("oneabc4")?.style.setProperty("background","#000");
              document.getElementById("oneabc5")?.style.setProperty("color","#fff");
              document.getElementById("oneabc5")?.style.setProperty("background","#000");

              
              }}>
            <IonIcon icon={star} />
          </IonSegmentButton>
          <IonSegmentButton style={{"color":"#fff","background":"#000","--indicator-color":"#fff"}} id="oneabc3" value="3" onClick={()=>{
              document.getElementById("oneabc1")?.style.setProperty("color","#000");
              document.getElementById("oneabc1")?.style.setProperty("background","#fff");
              document.getElementById("oneabc2")?.style.setProperty("color","#000");
              document.getElementById("oneabc2")?.style.setProperty("background","#fff");
              document.getElementById("oneabc3")?.style.setProperty("color","#000");
              document.getElementById("oneabc3")?.style.setProperty("background","#fff");
              document.getElementById("oneabc4")?.style.setProperty("color","#fff");
              document.getElementById("oneabc4")?.style.setProperty("background","#000");
              document.getElementById("oneabc5")?.style.setProperty("color","#fff");
              document.getElementById("oneabc5")?.style.setProperty("background","#000");

              
              }}>
            <IonIcon icon={star} />
          </IonSegmentButton>
          <IonSegmentButton style={{"color":"#fff","background":"#000","--indicator-color":"#fff"}} id="oneabc4" value="4" onClick={()=>{
              document.getElementById("oneabc1")?.style.setProperty("color","#000");
              document.getElementById("oneabc1")?.style.setProperty("background","#fff");
              document.getElementById("oneabc2")?.style.setProperty("color","#000");
              document.getElementById("oneabc2")?.style.setProperty("background","#fff");
              document.getElementById("oneabc3")?.style.setProperty("color","#000");
              document.getElementById("oneabc3")?.style.setProperty("background","#fff");
              document.getElementById("oneabc4")?.style.setProperty("color","#000");
              document.getElementById("oneabc4")?.style.setProperty("background","#fff");
              document.getElementById("oneabc5")?.style.setProperty("color","#fff");
              document.getElementById("oneabc5")?.style.setProperty("background","#000");

              
              }}>
            <IonIcon icon={star} />
          </IonSegmentButton>
          <IonSegmentButton style={{"color":"#fff","background":"#000","--indicator-color":"#fff"}} id="oneabc5" value="5" onClick={()=>{
              document.getElementById("oneabc1")?.style.setProperty("color","#000");
              document.getElementById("oneabc1")?.style.setProperty("background","#fff");
              document.getElementById("oneabc2")?.style.setProperty("color","#000");
              document.getElementById("oneabc2")?.style.setProperty("background","#fff");
              document.getElementById("oneabc3")?.style.setProperty("color","#000");
              document.getElementById("oneabc3")?.style.setProperty("background","#fff");
              document.getElementById("oneabc4")?.style.setProperty("color","#000");
              document.getElementById("oneabc4")?.style.setProperty("background","#fff");
              document.getElementById("oneabc5")?.style.setProperty("color","#000");
              document.getElementById("oneabc5")?.style.setProperty("background","#fff");

              
              }}>
            <IonIcon icon={star} />
          </IonSegmentButton>
          
            </IonSegment>
            <br></br>
            <IonTextarea ref={name} value={""} className="bgcolrwhite" rows={4} placeholder="Add a Review"></IonTextarea>
            
            <br></br>
        <IonRow className="aligncenter">
        <IonButton onClick={async()=>{
            console.log("shop id"+shopM.id);
          let no=Number(shopM.norating);
          let sum=Number(shopM.rating)*no;
          shopM.norating=""+(no+1);
          shopM.rating=""+((Number(rat.current?.value)+sum)/(no+1));
          await ShopModal.updateshop(shopM.id,shopM);
          bookM.review=""+name.current?.value;
          bookM.revrat=""+rat.current?.value;
          let dt=new Date();
          dt.setMinutes(dt.getMinutes()-dt.getTimezoneOffset(),0,0);
          bookM.revdate=""+getDateTimeNumber(dt.toISOString());
          console.log("book id"+bookM.id);
          await BookingModal.updatebooking(bookM.id,bookM);
         hist.replace("/pastbookings");
          //setIshowb(true);
        }}  expand="full">{lang[178+tempstr[7]]["Review this order"]}</IonButton>
        </IonRow>
    </IonContent>
    
  </IonPage>
);
  }

export default Reviewit;
