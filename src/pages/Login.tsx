
import { IonApp, IonAvatar, IonButton, IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle, IonCol, IonContent, IonGrid, IonHeader, IonIcon, IonItem, IonItemDivider, IonItemOption, IonItemOptions, IonItemSliding, IonLabel, IonList, IonRow, IonText, IonTitle, IonToolbar, IonSearchbar, IonRouterLink, IonInput, IonModal, IonPage, IonRouterOutlet, IonButtons, IonBackButton, useIonViewWillEnter, IonRedirect, IonSelect, IonSelectOption, IonToast, useIonViewDidEnter, IonSpinner, IonLoading } from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import { home } from 'ionicons/icons';
import React, { useRef, useState } from 'react';
import { Redirect, Route, RouteComponentProps, useHistory, withRouter } from 'react-router';

import logoimg from '../theme/logoimg.jpeg';
import MainHome from './MainHome';
import Axios from 'axios';
import CustomerModal from '../modals/CustomerModal';
import ShopModal from '../modals/ShopModal';
import EmployeeModal from '../modals/EmployeeModal';
import BookingModal from '../modals/BookingModal';
import HaircutModal from '../modals/HaircutModal';
import ImageModal from '../modals/ImageModal';
import User from '../modals/User';
import { lang } from '../modals/Helper';
type MyModalProps = {
  shopM:ShopModal;
  empM:EmployeeModal;
  custM:CustomerModal;
  bookM:BookingModal;
  tempstr:any[];
}



const Login: React.FC<MyModalProps> = ({tempstr,shopM,custM,empM,bookM}) => {
  let hist=useHistory();
  
  const [showToast2,setShowToast2]=useState(false);
  const [showToast1,setShowToast1]=useState(false);
  
  const password=useRef<HTMLIonInputElement>(null);
  const email=useRef<HTMLIonInputElement>(null);

  const logincustomer=async(id:string)=>{
    
       var d=await CustomerModal.getcustomer(id);
       custM.addData(d._id,d.obj.uid,d.obj.nam,d.obj.type,d.obj.email,d.obj.username,d.obj.password,d.obj.mobile,d.obj.blacklister,d.obj.img);
      tempstr[0]=true;
      
       hist.replace("/home");
 
  }

  const loginshop=async(id:string)=>{
   
    var d=await ShopModal.getshop(id);
       shopM.addData(d._id,d.obj.uid,d.obj.nam,d.obj.desc,d.obj.duration,d.obj.rating,d.obj.address,d.obj.postal,d.obj.city,d.obj.opening,d.obj.closing,d.obj.email,d.obj.password,d.obj.mobile,d.obj.img,d.obj.isActive,d.obj.norating);
       tempstr[0]="true";
       tempstr[1]="true";
      console.log(shopM.nam);
       hist.push("/shophome");
    
  }

  const loginemployee=async(id:string)=>{
    
    var d=await EmployeeModal.getemployee(id);
       empM.addData(d._id,d.obj.uid,d.obj.nam,d.obj.fnam,d.obj.type,d.obj.holiday,d.obj.sid,d.obj.duration,d.obj.address,d.obj.opening,
        d.obj.closing,d.obj.email,d.obj.password,d.obj.mobile,d.obj.img);
        tempstr[1]="false";
       tempstr[0]="true";
      console.log(shopM.nam);
      if(empM.type==="Freelancer")
      hist.replace("/eshophome");
      else
      hist.replace("/bshophome");
  }


  return(
  <IonPage>
   
    
    <IonHeader>
        <IonToolbar>
        <IonButtons slot="start">
          <IonBackButton text="" defaultHref="/"></IonBackButton>
        </IonButtons>
        <IonTitle className="homelogo">Haircutline</IonTitle>
        </IonToolbar>
      </IonHeader>
    <IonContent>
   
    <IonToast
    isOpen={showToast1}
    color="danger"
    onDidDismiss={() => setShowToast1(false)}
    message="INVALID Email/Password"
    duration={3000}
  />
  <IonToast
    isOpen={showToast2}
    color="danger"
    onDidDismiss={() => setShowToast2(false)}
    message="INVALID Email"
    duration={3000}
  />
  
    <IonRow className="aligncenter"><IonAvatar className="homeimglogo"><img src={logoimg}/></IonAvatar></IonRow>
      
   
            
          <IonItem>
            <IonLabel position="stacked">{lang[66+tempstr[7]]["Mail address"]}</IonLabel>
            <IonInput ref={email}  placeholder={lang[200+tempstr[7]]['Enter your mail address']}> </IonInput>
          </IonItem>
          <IonItem>
            <IonLabel position="stacked">{lang[152+tempstr[7]]["Password"]}</IonLabel>
            <IonInput ref={password} type="password"> </IonInput>
          </IonItem>
          <br></br>
         
          
            <IonButton onClick={async e=>{
              if(email.current?.value&&email.current.value.toString().length>4&&password.current?.value&&password.current.value.toString().length>6)
              {
                
                var eml=""+email.current.value.toString().match("");
                if(true)//eml.length>0
                {
                  console.log(email.current.value);
                var uid= await User.firebasesignin(""+email.current.value,""+password.current?.value);
                
                if(uid.uid.length>0)
                {
                console.log(uid);
                var user=await User.getuser(uid.uid);
                
              if(user.obj.type==="Customer")
                logincustomer(user.obj.id);
                else if(user.obj.type==="Shop")
                loginshop(user.obj.id);
                else if(user.obj.type==="Employee")
                loginemployee(user.obj.id);
                else if(user.obj.type==="Admin")
                {
                  hist.push("/adminhome");
                }
                else
                setShowToast1(true);
                }
                else
                setShowToast1(true);
              }else
              setShowToast1(true);
            
            }else
              setShowToast1(true);

            }}  className="margin20" expand="block"><p >{lang[154+tempstr[7]]["Sign In"]}</p></IonButton>
            <IonRow className="aligncenter">
      <IonRouterLink onClick={()=>{hist.push("/forgotp");}} >{lang[156+tempstr[7]]["Forgot your password"]}</IonRouterLink>
    
    </IonRow>
            
            
      <br></br>
    <IonButton href="/regcustomer"  expand="full">{lang[158+tempstr[7]]["New on Haircutline"]} {lang[160+tempstr[7]]["Create your account"]}</IonButton>
          
    </IonContent>
  </IonPage>);
}


export default Login;
