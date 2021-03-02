
import { IonApp, IonAvatar, IonButton, IonContent, IonGrid, IonHeader, IonIcon, IonItem, IonItemDivider, IonItemOption, IonItemOptions, IonItemSliding, IonLabel, IonList, IonRow, IonText, IonTitle, IonToolbar, IonImg, IonInput, IonRouterLink, IonButtons, IonBackButton, IonPage, IonSelect, IonSelectOption, IonCol, IonToast } from '@ionic/react';
import { home, star } from 'ionicons/icons';
import React, { useRef, useState } from 'react';
import { useHistory } from 'react-router';
import { customertabs } from '../../components/FooterTabs';
import BookingModal from '../../modals/BookingModal';
import CustomerModal from '../../modals/CustomerModal';
import EmployeeModal from '../../modals/EmployeeModal';
import { lang } from '../../modals/Helper';
import ImageModal from '../../modals/ImageModal';
import ShopModal from '../../modals/ShopModal';
import User from '../../modals/User';


type MyModalProps = {
  shopM:ShopModal;
  empM:EmployeeModal;
  custM:CustomerModal;
  bookM:BookingModal;
  tempstr:any[];
}

const RegCustomer: React.FC <MyModalProps> = ({tempstr,shopM,custM,empM,bookM}) => {
  let hist=useHistory();
  const name=useRef<HTMLIonInputElement>(null);
  const email=useRef<HTMLIonInputElement>(null);
  const mobile=useRef<HTMLIonInputElement>(null);
  const Password=useRef<HTMLIonInputElement>(null);
  const [showToast1, setShowToast1] = useState(false);
  const [showToast2, setShowToast2] = useState(false);
  return(

  <IonPage>
    <IonHeader>
        <IonToolbar>
        <IonButtons slot="start">
          <IonBackButton text="" defaultHref="/clogin"></IonBackButton>
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
    message="Registered Successfully"
    duration={3000}
  />
  <IonToast
    isOpen={showToast2}
    color="danger"
    onDidDismiss={() => setShowToast2(false)}
    message="Email not available"
    duration={3000}
  />
      <IonItem className="dividerline"></IonItem>
      <IonItem  lines="full">
          <IonLabel >
            <h1>Customer Registration</h1>
          </IonLabel>
        </IonItem>
     
        <IonItem>
  <IonLabel position="stacked">{lang[18+tempstr[7]].Name}</IonLabel>
            <IonInput ref={name}> </IonInput>
          </IonItem>
          <IonItem>
  <IonLabel position="stacked">{lang[64+tempstr[7]]["Mobile phone"]}</IonLabel>
            <IonInput type="number" ref={mobile} > </IonInput>
          </IonItem>
          <IonItem>
  <IonLabel position="stacked">{lang[66+tempstr[7]]["Mail address"]}</IonLabel>
            <IonInput  ref={email} > </IonInput>
          </IonItem>
          <IonItem>
  <IonLabel position="stacked">{lang[152+tempstr[7]].Password}</IonLabel>
            <IonInput ref={Password} > </IonInput>
          </IonItem>
          
         
    <IonItem className="dividerline-cen"></IonItem>
    <IonRow><IonCol className="buttonmedium "><IonButton className="boldtext"  expand="full">{lang[88+tempstr[7]].Cancel}</IonButton></IonCol>
    <IonCol className="buttonmedium"><IonButton onClick={async ()=>{
    
    custM.email=""+email.current?.value;
    console.log(custM.email);
    custM.nam=""+name.current?.value;
    custM.mobile=""+mobile.current?.value;
    custM.password=""+Password.current?.value;
    var uid= await User.firebasecreateuser(custM.email,custM.password);
    if(uid.uid!="")
    {custM.id=await CustomerModal.createcustomer(custM);
    var iid= await ImageModal.createimage(true);
    custM.img=iid;
    await CustomerModal.updatecustomer(custM.id,custM);
    var user=new User();
              user.addData(custM.id,"Customer",uid.uid);
              User.createuser(user);
    hist.replace("/clogin");
    }
    else
    setShowToast2(true);
    //hist.goBack();
}} className="boldtext"  expand="full">{lang[12+tempstr[7]]["Validate"]}</IonButton></IonCol></IonRow>
    </IonContent>
    {customertabs}
  </IonPage>
);
}

export default RegCustomer;
