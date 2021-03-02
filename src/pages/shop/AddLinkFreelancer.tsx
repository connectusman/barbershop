
import { IonApp, IonAvatar, IonBackButton, IonButton, IonButtons, IonContent, IonGrid, IonHeader, IonIcon, IonItem, IonItemDivider, IonItemOption, IonItemOptions, IonItemSliding, IonLabel, IonList, IonPage, IonRedirect, IonRow, IonSearchbar, IonText, IonTitle, IonToast, IonToolbar } from '@ionic/react';
import { home } from 'ionicons/icons';
import React, { useRef, useState } from 'react';
import {useHistory} from 'react-router-dom';
import { customertabs } from '../../components/FooterTabs';
import BookingModal from '../../modals/BookingModal';
import CustomerModal from '../../modals/CustomerModal';
import EmployeeModal from '../../modals/EmployeeModal';
import { lang } from '../../modals/Helper';
import ShopModal from '../../modals/ShopModal';
type MyModalProps = {
  shopM:ShopModal;
  empM:EmployeeModal;
  custM:CustomerModal;
  bookM:BookingModal;
  tempstr:any[];
}


const AddLinkFreelancer: React.FC <MyModalProps> = ({tempstr,shopM,custM,empM,bookM}) => {
  let hist=useHistory();
  const name=useRef<HTMLIonSearchbarElement>(null);
  const [showToast1, setShowToast1] = useState(false);
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
    message="Address Or Postal code is invalid."
    duration={3000}
  />
      <div className="dividerline"></div>
      
          <IonText >
            <h2 className="aligntextcenter">{lang[126+tempstr[7]].Research}</h2>
          </IonText>
        
        <IonSearchbar ref={name} placeholder="First Name and Last Name" onIonChange={e => {}}></IonSearchbar>
        <IonRow className="aligncenter">
          <IonButton expand="block" onClick={async()=>{
          if(name.current?.value&&name.current.value.length>0)
          {tempstr[3]= name.current.value;
          hist.push('/linkfreelancer');}
          else
          setShowToast1(true);
        }}>{lang[120+tempstr[7]].Search}</IonButton>
        </IonRow>
        
    </IonContent>
    {customertabs}
  </IonPage>
);}


export default AddLinkFreelancer;
