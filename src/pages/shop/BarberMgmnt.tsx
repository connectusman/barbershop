
import { IonApp, IonAvatar, IonButton, IonContent, IonGrid, IonHeader, IonIcon, IonItem, IonItemDivider, IonItemOption, IonItemOptions, IonItemSliding, IonLabel, IonList, IonRow, IonText, IonTitle, IonToolbar, IonRouterLink, IonButtons, IonBackButton, IonPage, IonInput, IonSelect, IonSelectOption, useIonViewWillEnter, useIonViewDidEnter } from '@ionic/react';
import Axios from 'axios';
import { caretDown, caretForward, handRight, home } from 'ionicons/icons';
import React, { useEffect, useRef, useState } from 'react';

import { useHistory } from 'react-router';
import { shoptabs } from '../../components/FooterTabs';
import MyAccord from '../../components/MyAccord';
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


const BarberMgmnt: React.FC<MyModalProps> = ({tempstr,shopM,custM,empM,bookM}) => {
  var AllEmployee:EmployeeModal[]=[];
  let hist=useHistory();
 useIonViewDidEnter( ()=>{
  loaddata();
 });
  
const [barbers, setBarbers] = useState<any>([]);
  async function loaddata() {
    AllEmployee=[];
    var res=await EmployeeModal.getemployeesbysid(shopM.id);
    var len=res.length;
    console.log(shopM.id);
    for(var i=0;i<len;i++)
    {
      var bookin=new EmployeeModal();
      var d=res[i];
    bookin.addData(d._id,d.obj.uid,d.obj.nam,d.obj.fnam,d.obj.type,d.obj.holiday,d.obj.sid,d.obj.duration,d.obj.address,d.obj.opening,
        d.obj.closing,d.obj.email,d.obj.password,d.obj.mobile,d.obj.img);
    AllEmployee.push(bookin);

    }
    const barberl:any[]=[];
    for (let i=0;i<len;i++) {
      barberl.push(
      <IonItem key={i} onClick={()=>{
        tempstr[3]=AllEmployee[i];
        hist.push("/employeecard");
        
      }} ><p >{AllEmployee[i].fnam} {AllEmployee[i].nam}</p></IonItem>
      );
    }
    console.log("starto");
    setBarbers(barberl);
  }
  
  
  
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
    <IonContent><br></br>
        <div className="dividerline"></div>
        <br></br>
            <h3 className="margin5 p-size3">{lang[48+tempstr[7]]["Employee management"]}</h3>
            <br></br>
        
        <IonButton onClick={ e=>{
        hist.push("/addbarber");}} expand="full" ><IonText className="floatleft p-size4">{lang[70+tempstr[7]]["Add a employee"]}</IonText><IonIcon className="floatright" icon={caretForward}></IonIcon></IonButton>
    <br></br>
    <IonButton onClick={ e=>{
        hist.push("/addlinkfreelancer");}} expand="full" ><IonText className="floatleft p-size4">Add a freelancer</IonText><IonIcon className="floatright" icon={caretForward}></IonIcon></IonButton>
    <br></br>
    
         <MyAccord title={lang[72+tempstr[7]]["Employee list"]} data={barbers}></MyAccord>
        <br></br>
    </IonContent>
    {shoptabs}
  </IonPage>
);

}

export default BarberMgmnt;
