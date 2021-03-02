
import { IonApp, IonAvatar, IonButton, IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle, IonCol, IonContent, IonGrid, IonHeader, IonIcon, IonItem, IonItemDivider, IonItemOption, IonItemOptions, IonItemSliding, IonLabel, IonList, IonRow, IonText, IonTitle, IonToolbar, IonSearchbar, IonRouterLink, IonModal, IonRouterOutlet, IonPage, IonButtons, IonTabs, IonTabBar, IonTabButton, IonToggle, IonFooter, IonToast, useIonRouter } from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import { render } from '@testing-library/react';
import Axios from 'axios';
import { albums, home, list, person, search } from 'ionicons/icons';
import React, { useEffect, useLayoutEffect, useRef, useState } from 'react';
import { Redirect, Route, RouteComponentProps, useHistory, withRouter } from 'react-router';
import ReactDOM from 'react-dom';
import logoimg from '../theme/logoimg.jpeg';
import CustomerLogin from './Login';
import BookingModal from '../modals/BookingModal';
import CustomerModal from '../modals/CustomerModal';
import EmployeeModal from '../modals/EmployeeModal';
import ShopModal from '../modals/ShopModal';
import { lang } from '../modals/Helper';

type MyModalProps = {
  shopM:ShopModal;
  empM:EmployeeModal;
  custM:CustomerModal;
  bookM:BookingModal;
  tempstr:any[];
}
const MainHome: React.FC<MyModalProps> = ({tempstr,shopM,custM,empM,bookM})=> {
  const name=useRef<HTMLIonSearchbarElement>(null);
  const [lan, setlan] = useState("English");
  let hist=useHistory();
  useEffect(()=>{
  },[lan]);
  const [showToast1, setShowToast1] = useState(false);
  return(

  <IonPage>
    
    <IonHeader>
        
        <IonToolbar>
        <IonButtons slot="start">
        </IonButtons>
        <IonButtons slot="end">
          <IonIcon onClick={e=>{hist.push("/clogin");}} size="large" icon={person}></IonIcon>
        </IonButtons>

        <IonTitle className="homelogo">Haircutline</IonTitle>
        </IonToolbar>
      </IonHeader>
    <IonContent>
    <IonToast
    isOpen={showToast1}
    color="danger"
    onDidDismiss={() => setShowToast1(false)}
    message="Address Or Postal code is invalid."
    duration={3000}
  />
    <IonRow className="aligncenter margin30">
      <IonAvatar  className="homeimglogo"><img src={logoimg}/></IonAvatar>
      </IonRow>
  <IonText ><h3 className="margin20 aligntextcenter">{lang[0+tempstr[7]]["Your online haircut booking whenever, wherever"]}</h3></IonText>
  <IonText><p className="margin20">{lang[2+tempstr[7]].Free} - {lang[4+tempstr[7]].Easy} - {lang[6+tempstr[7]].Quick}</p></IonText>
    <IonSearchbar ref={name} placeholder={lang[204+tempstr[7]]['Where (address, postal code..)']}></IonSearchbar>
    <IonRow className="aligncenter">
          <IonButton expand="block" onClick={async()=>{
          if(name.current?.value&&name.current.value.length>0)
          {tempstr[3]= name.current.value;
          hist.push('/searchr');}
          else
          setShowToast1(true);
        }}>{lang[120+tempstr[7]].Search}</IonButton>
        </IonRow>
    <IonRow className="aligncenter">
      <IonRouterLink onClick={e=>{hist.push("/shopregform");}}  className="shopreg">{lang[128+tempstr[7]]["I'm a barbershop owner"]}</IonRouterLink>
    </IonRow>
    
    </IonContent>
    <IonFooter>
    <IonItem lines="none" className="">
    <IonLabel >{lan}</IonLabel>
      <IonToggle  color="dark" onIonChange={e=>{
        if(!e.detail.checked)
        {tempstr[7]=0;
            setlan("English");
            
        }
        else
        {tempstr[7]=1;
          setlan("Français");
          
          
        }
      }} >French</IonToggle></IonItem>
    </IonFooter>
  </IonPage>
);
  }

export default MainHome;
