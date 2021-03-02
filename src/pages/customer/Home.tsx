
import { IonApp, IonAvatar, IonBackButton, IonButton, IonButtons, IonContent, IonGrid, IonHeader, IonIcon, IonItem, IonItemDivider, IonItemOption, IonItemOptions, IonItemSliding, IonLabel, IonList, IonPage, IonRow, IonText, IonTitle, IonToolbar, useIonViewDidEnter } from '@ionic/react';
import { home } from 'ionicons/icons';
import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router';
import { customertabs } from '../../components/FooterTabs';
import BestyModal from '../../modals/BestyModal';
import BookingModal from '../../modals/BookingModal';
import CustomerModal from '../../modals/CustomerModal';
import EmployeeModal from '../../modals/EmployeeModal';
import { lang } from '../../modals/Helper';
import ImageModal from '../../modals/ImageModal';
import ShopModal from '../../modals/ShopModal';
type MyModalProps = {
  shopM:ShopModal;
  empM:EmployeeModal;
  custM:CustomerModal;
  bookM:BookingModal;
  tempstr:any[];
}


const Home: React.FC<MyModalProps> = ({tempstr,shopM,custM,empM,bookM})=> {
  var darr:any[]=[];
  const [allbestylist, setAllbestylist] = useState<any>();
  var hist=useHistory();
  const [isreload, setIsreload] = useState(0);
  useIonViewDidEnter(()=>{
    loaddata();
  });
// useEffect(()=>{
//   console.log("reloading start");
//   loaddata();
//   console.log("reloading complete");
// },[isreload]);

async function loaddata() {
  console.log("agya");
  darr=[];
  darr =await BestyModal.getbestys(custM.id);
  setIsreload(darr.length);
  const flist=[];
    let len=darr.length;
    console.log(darr);
    
    var imgdata;
    for(let i=0;i<len;i++)
    {
      imgdata= "data:image/jpeg;base64,"+await ImageModal.getimage(darr[i].obj.img)
      flist.push(<IonItem lines="none" key={i} onClick={()=>{
        tempstr[3]=darr[i].obj.sid;
        hist.push('/selectedshop');
      }}>
        <IonAvatar slot="start">
        <img src={imgdata} />
        </IonAvatar>
        <IonLabel>
<h2>{darr[i].obj.nam}</h2>
          <p>{darr[i].obj.address}</p>
        </IonLabel>
      </IonItem>);
   }
   setAllbestylist(flist);
}
console.log("buy"+darr.length);

  if(isreload>0)
   {

    

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
      <div className="dividerline"></div>
     
      <IonItem  lines="none">
          <IonLabel>
            <h1>{lang[114+tempstr[7]]["Favorites places"]}</h1>
          </IonLabel>
        </IonItem>
       
      <IonList  lines="inset">

        {allbestylist}
        
        
      </IonList>


    <div className="dividerline-cen"></div>
    
    <IonRow className="aligncenter"><IonButton onClick={()=>{hist.push('/search');}} >{lang[116+tempstr[7]]["Make a booking"]}</IonButton>
    </IonRow>
    </IonContent>
    {customertabs}
  </IonPage>
);
  
}
else
{
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
    
      <div className="dividerline"></div>
      <IonItem  lines="none">
          <IonLabel>
            <h1>{lang[114+tempstr[7]]["Favorites places"]}</h1>
          </IonLabel>
        </IonItem>
       
        <IonText ><h5 className="margin30 aligntextcenter">You don't have any barbershop in your favorites list.</h5></IonText>


    <div className="dividerline-cen"></div>
    
    <IonRow className="aligncenter"><IonButton onClick={()=>{hist.push('/search');}}>{lang[116+tempstr[7]]["Make a booking"]}</IonButton>
    </IonRow>
    </IonContent>
    {customertabs}
  </IonPage>
  );
  
}
}


export default Home;
