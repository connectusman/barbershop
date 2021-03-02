
import { IonApp, IonAvatar, IonButton, IonContent, IonGrid, IonHeader, IonIcon, IonItem, IonItemDivider, IonItemOption, IonItemOptions, IonItemSliding, IonLabel, IonList, IonRow, IonText, IonTitle, IonToolbar, IonCol, IonButtons, IonBackButton, IonInput, IonSelect, IonSelectOption, IonPage, IonToast } from '@ionic/react';
import Axios from 'axios';
import { home } from 'ionicons/icons';
import { type } from 'os';
import React, { useRef, useState } from 'react';
import { useHistory } from 'react-router';
import { shoptabs } from '../../components/FooterTabs';
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

const AddBarbar: React.FC<MyModalProps> = ({tempstr,shopM,custM,empM,bookM})  => {
  let hist=useHistory();
  const name=useRef<HTMLIonInputElement>(null);
  const fname=useRef<HTMLIonInputElement>(null);
  const mobile=useRef<HTMLIonInputElement>(null);
  const email=useRef<HTMLIonInputElement>(null);
  const passw=useRef<HTMLIonInputElement>(null);
  const typ=useRef<HTMLIonSelectElement>(null);
  const [showToast1, setShowToast1] = useState(false);
  return(

  <IonPage>
    <IonHeader>
        <IonToolbar>
        <IonButtons slot="start">
          <IonBackButton text="" defaultHref="/Barbermanagement"></IonBackButton>
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
    message="Email not available"
    duration={3000}
  />
      <IonItem className="dividerline"></IonItem>
      <IonItem  lines="full">
          <IonLabel >
            <h1>Add a barbar</h1>
          </IonLabel>
        </IonItem>
     
        <IonItem>
            <IonLabel position="stacked">{lang[18+tempstr[7]].Name}</IonLabel>
            <IonInput ref={name} value=""> </IonInput>
          </IonItem>
          <IonItem>
            <IonLabel position="stacked">{lang[86+tempstr[7]]["First name"]}</IonLabel>
            <IonInput ref={fname} value=""> </IonInput>
          </IonItem>
          <IonItem>
            <IonLabel position="stacked">{lang[64+tempstr[7]]["Mobile phone"]}</IonLabel>
            <IonInput ref={mobile} value=""> </IonInput>
          </IonItem>
          <IonItem>
            <IonLabel position="stacked">{lang[66+tempstr[7]]["Mail address"]}</IonLabel>
            <IonInput ref={email} value=""> </IonInput>
          </IonItem>
          <IonItem>
            <IonLabel position="stacked">{lang[152+tempstr[7]].Password}</IonLabel>
            <IonInput type="password" minlength={5} ref={passw} value=""> </IonInput>
          </IonItem>
         
    <IonItem className="dividerline-cen"></IonItem>
    <IonRow><IonCol className="buttonmedium "><IonButton className="boldtext"  expand="full">{lang[88+tempstr[7]].Cancel}</IonButton></IonCol>
    <IonCol className="buttonmedium"><IonButton onClick={async ()=>{
    empM.email=""+email.current?.value;
    empM.nam=""+name.current?.value;
    empM.fnam=""+fname.current?.value;
    empM.mobile=""+mobile.current?.value;
    empM.password=""+passw.current?.value;
    //empM.type="Regular";//default
    empM.sid=shopM.id;
    var uid= await User.firebasecreateuser(empM.email,empM.password);
    if(uid.uid!="")
    {
     empM.id=await EmployeeModal.createemployee(empM);
    var iid= await ImageModal.createimage(true);
    empM.img=iid;
    await EmployeeModal.updateemployee(empM.id,empM);
    var user=new User();
              user.addData(empM.id,"Employee",uid.uid);
              User.createuser(user);
    //hist.push("/barbermanagement");
    hist.goBack();
    }
    else
    setShowToast1(true);
}} className="boldtext"  expand="full">{lang[12+tempstr[7]]["Validate"]}</IonButton></IonCol></IonRow>
    </IonContent>
    {shoptabs}
  </IonPage>
);

}
export default AddBarbar;
