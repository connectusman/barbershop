
import { IonApp, IonAvatar, IonButton, IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle, IonCol, IonContent, IonGrid, IonHeader, IonIcon, IonItem, IonItemDivider, IonItemOption, IonItemOptions, IonItemSliding, IonLabel, IonList, IonRow, IonText, IonTitle, IonToolbar, IonSearchbar, IonRouterLink, IonInput, IonModal, IonButtons, IonBackButton, IonPage, IonToast } from '@ionic/react';
import { home } from 'ionicons/icons';
import React, { useRef, useState } from 'react';
import { useHistory } from 'react-router';
import { customertabs } from '../../components/FooterTabs';
import BookingModal from '../../modals/BookingModal';
import CustomerModal from '../../modals/CustomerModal';
import EmployeeModal from '../../modals/EmployeeModal';
import { lang } from '../../modals/Helper';
import ShopModal from '../../modals/ShopModal';
import User from '../../modals/User';

type MyModalProps = {
  shopM:ShopModal;
  empM:EmployeeModal;
  custM:CustomerModal;
  bookM:BookingModal;
  tempstr:any[];
}

const Identification: React.FC <MyModalProps> = ({tempstr,shopM,custM,empM,bookM})=>{
  let hist=useHistory();
  const [showToast1,setShowToast1]=useState(false);
  
  const password=useRef<HTMLIonInputElement>(null);
  const email=useRef<HTMLIonInputElement>(null);
  const logincustomer=async(id:string)=>{
    
    var d=await CustomerModal.getcustomer(id);
    custM.addData(d._id,d.obj.uid,d.obj.nam,d.obj.type,d.obj.email,d.obj.username,d.obj.password,d.obj.mobile,d.obj.blacklister,d.obj.img);
   tempstr[0]=true;
   
    hist.replace("/booking2");
    

}

return (

    
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
    message="INVALID Email/Password"
    duration={3000}
  />
      <div className="dividerline"></div>
      <IonItem lines="none"><h3>3. {lang[148+tempstr[7]].Identification}</h3></IonItem>
    <IonItem lines="none">{lang[150+tempstr[7]]["Have you already used haircutline"]}</IonItem>
            
          <IonItem>
            <IonLabel position="stacked">{lang[66+tempstr[7]]["Mail address"]}</IonLabel>
            <IonInput ref={email} placeholder="axelajavon@gmail.com"> </IonInput>
          </IonItem>
          <IonItem>
            <IonLabel position="stacked">{lang[152+tempstr[7]].Password}</IonLabel>
            <IonInput ref={password} type="password"> </IonInput>
          </IonItem>
          
            <IonRow className="aligncenter margin20 "><IonButton className="buttonmedium boldtext" expand="full" onClick={async()=>{
                if(email.current?.value&&password.current?.value)
                {
                  var uid= await User.firebasesignin(""+email.current.value,""+password.current?.value);
                  console.log(uid);
                  var user=await User.getuser(uid.uid) ;
                  if(user.obj.type==="Customer")
                  logincustomer(user.obj.id);
                  else
                setShowToast1(true);
                  
                }else
                setShowToast1(true);
                
            }} >{lang[154+tempstr[7]]["Sign In"]}</IonButton></IonRow>
            <IonRow className="aligncenter margin20">{lang[156+tempstr[7]]["Forgot your password"]}</IonRow>
          <IonRow className="aligncenter">or</IonRow>
          <IonButton onClick={
            ()=>{
              hist.push("/regcustomer");
            }
          } expand="full">{lang[158+tempstr[7]]["New on Haircutline"]}</IonButton>
          
    </IonContent>
    {customertabs}
    </IonPage>
);

          }
export default Identification;
