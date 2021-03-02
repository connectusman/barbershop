
import { IonApp, IonAvatar, IonButton, IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle, IonCol, IonContent, IonGrid, IonHeader, IonIcon, IonItem, IonItemDivider, IonItemOption, IonItemOptions, IonItemSliding, IonLabel, IonList, IonRow, IonText, IonTitle, IonToolbar, IonSearchbar, IonRouterLink, IonModal, IonRouterOutlet, IonPage, IonButtons, IonTabs, IonTabBar, IonTabButton, IonInput, IonToast, IonBackButton } from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import { albums, home, list, person, search } from 'ionicons/icons';
import React, { useRef, useState } from 'react';
import { Route, RouteComponentProps, useHistory, withRouter } from 'react-router';
import BookingModal from '../modals/BookingModal';
import CustomerModal from '../modals/CustomerModal';
import EmployeeModal from '../modals/EmployeeModal';
import { lang } from '../modals/Helper';
import ShopModal from '../modals/ShopModal';
import User from '../modals/User';
import logoimg from '../theme/logoimg.jpeg';
import CustomerLogin from './Login';
type MyModalProps = {
    shopM:ShopModal;
    empM:EmployeeModal;
    custM:CustomerModal;
    bookM:BookingModal;
    tempstr:any[];
  }

const ForgotPass: React.FC<MyModalProps> = ({tempstr,shopM,custM,empM,bookM})=> {

    const password=useRef<HTMLIonInputElement>(null);
  const email=useRef<HTMLIonInputElement>(null);
  const npass=useRef<HTMLIonInputElement>(null);
  let hist=useHistory();
const [showToast1, setShowToast1] = useState(false);
const [showToast2, setShowToast2] = useState(false);
const [showToast3, setShowToast3] = useState(false);
  return(

  <IonPage>
    <IonHeader>
        <IonToolbar>
        <IonButtons slot="start">
          <IonBackButton text="" ></IonBackButton>
        </IonButtons>
        <IonTitle className="homelogo">Haircutline</IonTitle>
        </IonToolbar>
      </IonHeader>
    
    <IonContent>
    <IonToast
    isOpen={showToast1}
    color="danger"
    onDidDismiss={() => setShowToast1(false)}
    message="Email/Password is incorrect"
    duration={3000}
  />
  <IonToast
    isOpen={showToast2}
    color="danger"
    onDidDismiss={() => setShowToast2(false)}
    message="Password length should be 8 or greater"
    duration={3000}
  />

    <IonItem>
            <IonLabel position="stacked">{lang[66+tempstr[7]]["Mail address"]}</IonLabel>
            <IonInput ref={email}  placeholder="Enter your mail address"> </IonInput>
          </IonItem>
          <IonItem>
            <IonLabel position="stacked">{lang[152+tempstr[7]]["Password"]}</IonLabel>
            <IonInput ref={password} type="password"> </IonInput>
          </IonItem>
          <br></br>
          <IonItem>
            <IonLabel position="stacked">{"New "+lang[152+tempstr[7]]["Password"]}</IonLabel>
            <IonInput ref={npass} type="password"> </IonInput>
          </IonItem>
          <br></br>
          <IonButton onClick={async()=>{
                 console.log(email.current?.value);
              if(email.current?.value&&email.current.value.toString().length>4&&password.current?.value&&password.current.value.toString().length>7)
              {
                
                if(npass.current?.value&&npass.current.value.toString().length>4)//eml.length>0
                {
                let usr=await User.firebasesignin(""+email.current.value,""+password.current.value);
                if(usr.uid!="")
                {
                    let user=await User.getuser(usr.uid);
                    await User.firebaseupdatepassword(""+email.current.value,""+password.current.value,""+npass.current.value);
                    if(user.obj.type==="Customer")
                    {
                        let d=await CustomerModal.getcustomer(user.obj.id);
                        let temp=new CustomerModal();
                        temp.addData(d._id,d.obj.uid,d.obj.nam,d.obj.type,d.obj.email,d.obj.username,d.obj.password,d.obj.mobile,d.obj.blacklister,d.obj.img);
                        temp.password=""+npass.current.value;
                        CustomerModal.updatecustomer(user.obj.id,temp);
                    }
                    else if(user.obj.type==="Employee")
                    {
                        let d=await EmployeeModal.getemployee(user.obj.id);
                        let temp=new EmployeeModal();
                        temp.addData(d._id,d.obj.uid,d.obj.nam,d.obj.fnam,d.obj.type,d.obj.holiday,d.obj.sid,d.obj.duration,d.obj.address,d.obj.opening,
                            d.obj.closing,d.obj.email,d.obj.password,d.obj.mobile,d.obj.img);
                        temp.password=""+npass.current.value;
                        EmployeeModal.updateemployee(user.obj.id,temp);
                    }
                    else if(user.obj.type==="Shop")
                    {
                        let d=await ShopModal.getshop(user.obj.id);
                        let temp=new ShopModal();
                        temp.addData(d._id,d.obj.uid,d.obj.nam,d.obj.desc,d.obj.duration,d.obj.rating,d.obj.address,d.obj.postal,d.obj.city,d.obj.opening,d.obj.closing,d.obj.email,d.obj.password,d.obj.mobile,d.obj.img,d.obj.isActive,d.obj.norating);
                        temp.password=""+npass.current.value;
                        ShopModal.updateshop(user.obj.id,temp);
                    }
                    hist.replace("/clogin");
                }
                else
                setShowToast1(true);
              
              }else
              setShowToast2(true);
            
            }else
              setShowToast1(true);
          }} className="margin20" expand="block"><p >{lang[154+tempstr[7]]["Sign In"]}</p></IonButton>
    </IonContent>
    
  </IonPage>
);
  }

export default ForgotPass;
