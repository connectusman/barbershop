
import { IonApp, IonAvatar, IonButton, IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle, IonCol, IonContent, IonGrid, IonHeader, IonIcon, IonItem, IonItemDivider, IonItemOption, IonItemOptions, IonItemSliding, IonLabel, IonList, IonRow, IonText, IonTitle, IonToolbar, IonSearchbar, IonRouterLink, IonModal, IonRouterOutlet, IonPage, IonButtons, IonTabs, IonTabBar, IonTabButton } from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import { albums, home, list, person, search } from 'ionicons/icons';
import React, { useState } from 'react';
import { Route, RouteComponentProps, useHistory, withRouter } from 'react-router';
import logoimg from '../theme/logoimg.jpeg';
import CustomerLogin from './Login';

import { Plugins } from '@capacitor/core';
import ShopModal from '../modals/ShopModal';

const { Storage } = Plugins;

const Test3: React.FC = () => {

    var [da,setda]=useState("shni");
    const setItem=async ()=> {
        await Storage.set({
          key: 'name',
          value: 'Max'
        });
      }
      
    const getItem=async ()=> {
        const { value } = await Storage.get({ key: 'name' });
        setda(""+value?.toString());
      }
      
      const removeItem= async () =>{
        await Storage.remove({ key: 'name' });
      }
  
  let hist=useHistory();
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
    <IonRow className="aligncenter margin30">
      <IonAvatar  className="homeimglogo"><img src={logoimg}/></IonAvatar>
      </IonRow>
  <IonButton onClick={setItem}>{}</IonButton>
      <IonButton onClick={getItem}>Get</IonButton>
  <IonText>{da}</IonText>
      <IonText ><h3 className="margin20 aligntextcenter">Your online haircut booking whenever, wherever.</h3></IonText>
    <IonText><p className="margin20">Free - Easy - Quick</p></IonText>
    <IonSearchbar  onClick={e=>{hist.push("/searchr");}}  placeholder="Where (address, postal code..)"></IonSearchbar>
    <IonRow className="aligncenter">
      <IonRouterLink onClick={e=>{hist.push("/shopregform");}}  className="shopreg">I'm a barbershop owner</IonRouterLink>
    </IonRow>
    </IonContent>
    
  </IonPage>
);
  }

export default Test3;
