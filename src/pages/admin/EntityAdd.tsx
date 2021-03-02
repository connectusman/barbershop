import { IonBackButton, IonButton, IonButtons, IonContent, IonHeader, IonLabel, IonPage, IonRow, IonTitle, IonToolbar } from '@ionic/react';
import React from 'react';
import { admintabs } from '../../components/FooterTabs';
import BookingModal from '../../modals/BookingModal';
import CustomerModal from '../../modals/CustomerModal';
import EmployeeModal from '../../modals/EmployeeModal';
import ShopModal from '../../modals/ShopModal';
import logoadmin from '../../theme/adminlogo.png';
type MyModalProps = {
  shopM:ShopModal;
  empM:EmployeeModal;
  custM:CustomerModal;
  bookM:BookingModal;
  tempstr:string[];
}
const EntityAdd:React.FC <MyModalProps> = ({tempstr,shopM,custM,empM,bookM})=>{

    return(<IonPage>
        <IonHeader>
        <IonToolbar>
        <IonButtons slot="start">
          <IonBackButton text="" defaultHref="/adminhome"></IonBackButton>
        </IonButtons>
          <IonTitle size="small" className="applogo">
            Haircutline
          </IonTitle>
          
        </IonToolbar>
      </IonHeader>
        <IonContent>
        <div className="dividerline"></div>
        <br></br>
        <IonRow className="margin5">
          <IonLabel >
            <h1>Admin Panel</h1>
          </IonLabel>
</IonRow>
     <br></br>
        <img className="coverimgsize"  src={logoadmin} />
        
       
        <br></br>
        <br></br>
        <br></br>
        <IonRow className="aligncenter"><IonButton className="buttonmedium boldtext" expand="full"  href="/addshop" >Add Shop</IonButton></IonRow>
       <br></br>
        <IonRow className="aligncenter"><IonButton className="buttonmedium boldtext"  expand="full" href="/addfreelancer"  >Add Freelancer</IonButton></IonRow>
        
        </IonContent>
        {admintabs}
    </IonPage>);
}

export default EntityAdd;