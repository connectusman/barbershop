
import { IonApp, IonAvatar,IonCard, IonButton, IonContent, IonGrid, IonHeader, IonIcon, IonItem, IonItemDivider, IonItemOption, IonItemOptions, IonItemSliding, IonLabel, IonList, IonRow, IonText, IonTitle, IonToolbar, IonCol, IonButtons, IonBackButton, IonPage, IonSelect, useIonViewDidEnter, IonSelectOption, IonInput } from '@ionic/react';
import { home } from 'ionicons/icons';
import React, { useRef, useState } from 'react';
import { useHistory } from 'react-router';
import { eshoptabs, shoptabs } from '../../components/FooterTabs';
import BookingModal from '../../modals/BookingModal';
import CustomerModal from '../../modals/CustomerModal';
import EmployeeModal from '../../modals/EmployeeModal';
import HaircutModal from '../../modals/HaircutModal';
import { getDateTimeNumber, lang } from '../../modals/Helper';
import ShopModal from '../../modals/ShopModal';

type MyModalProps = {
  shopM:ShopModal;
  empM:EmployeeModal;
  custM:CustomerModal;
  bookM:BookingModal;
  tempstr:any[];
}




const EMakeBooking: React.FC <MyModalProps> = ({tempstr,shopM,custM,empM,bookM}) =>{
  let hist=useHistory();
  useIonViewDidEnter(()=>{
    loaddata();
  });
  var chind=-1;
  var hlist:any;
  var cnam=useRef<HTMLIonInputElement>(null);
  var haircuts:any=[];
  const [shaircut, setShaircut] = useState<any>();
  const [hairlist, setHairlist] = useState(haircuts);
  async function loaddata()
  {
    var d=await ShopModal.getshop(empM.sid);
      shopM=new ShopModal();
      shopM.addData(d._id,d.obj.uid,d.obj.nam,d.obj.desc,d.obj.duration,d.obj.rating,d.obj.address,d.obj.postal,d.obj.city,d.obj.opening,d.obj.closing,d.obj.email,d.obj.password,d.obj.mobile,d.obj.img,d.obj.isActive,d.obj.norating);
    //yahan se shoro karo
      hlist=await HaircutModal.gethaircuts(shopM.id);
        let len=hlist.length;
        haircuts=[];
        setShaircut(hlist);
        for(let i=0;i<len;i++)
        {
          tempstr[3]=hlist[i];
          console.log("haircu: "+hlist[i].obj.nam);
            haircuts.push(
              <IonSelectOption value={i} key={i}>{hlist[i].obj.nam+":    "+hlist[i].obj.price+"€"}</IonSelectOption>
            );
        }
        setHairlist(haircuts);
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
    <IonContent>
     
        <IonItem lines="none">
 <h1>Boston Cut</h1>
     </IonItem>
        <IonCard className="nomargin">
        <img className="coverimgsize " src="https://miro.medium.com/max/3840/1*yjH3SiDaVWtpBX0g_2q68g.png" />
        
        </IonCard>
      <IonList  lines="inset">

        <IonItem lines="none">
          
          <IonLabel>
            <b><h2>Write your name below to be the next one</h2></b>
            
          </IonLabel>
        </IonItem>
       
        <IonItem>
         
          <IonLabel>
            <h3 className="lpadding">{lang[18+tempstr[7]].Name}</h3>
            <IonInput ref={cnam}></IonInput>
          </IonLabel>
        </IonItem>
        <IonItem>
    <IonLabel>Select a haircut</IonLabel>
    <IonSelect onIonChange={e=>{
        chind=e.detail.value;
    }}>
      {hairlist}
    </IonSelect></IonItem>
       
        
      </IonList>
    <br></br>
        <IonRow className="aligncenter">
        <IonButton  onClick={()=>{
          if(chind!=-1&&cnam&&cnam.current?.value)
          {
            bookM=new BookingModal();
            bookM.sid=shopM.id;
            bookM.simg=shopM.img;
            bookM.sname=shopM.nam;
            bookM.cname=""+cnam.current.value;
            bookM.hname=shaircut[chind].obj.nam;
            bookM.hprice=shaircut[chind].obj.price;
            let dat=new Date();
            dat.setMinutes(dat.getMinutes() - dat.getTimezoneOffset(), 0, 0);
            bookM.datetime=getDateTimeNumber(dat.toISOString());
            BookingModal.createbooking(bookM);
            hist.push("/eshophome");
          }
        }}  expand="full"><b>{lang[12+tempstr[7]]["Validate"]}</b></IonButton>
        </IonRow>
    </IonContent>
    {eshoptabs}
  </IonPage>
);

  }
export default EMakeBooking;
