
import { IonPage, IonAvatar, IonBackButton, IonButton, IonButtons, IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle, IonCol, IonContent, IonGrid, IonHeader, IonIcon, IonItem, IonItemDivider, IonItemOption, IonItemOptions, IonItemSliding, IonLabel, IonList, IonRow, IonText, IonTitle, IonToolbar, IonTabs, IonTabBar, IonTabButton, IonRouterOutlet, useIonViewDidEnter } from '@ionic/react';
import { albums, home, person, search, star, starOutline } from 'ionicons/icons';
import React, { useEffect, useState } from 'react';
import { Route, RouteComponentProps, useHistory } from 'react-router';
import { customertabs } from '../../components/FooterTabs';
import BestyModal from '../../modals/BestyModal';
import BookingModal from '../../modals/BookingModal';
import CustomerModal from '../../modals/CustomerModal';
import EmployeeModal from '../../modals/EmployeeModal';
import { IHash } from '../../modals/Global';
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


const SearchResult: React.FC<MyModalProps> = ({tempstr,shopM,custM,empM,bookM}) => {
 const [isReload, setIsReload] = useState("none");
  var AllShops:ShopModal[]=[];
  let hist=useHistory();
 useEffect(()=>{
  console.log("reloading start");
  loaddata();
  console.log("reloading complete");
  
 },[isReload]);
 function updateMybesty(sid:string,cid:string)
 {
    BestyModal.updatebesty(sid,cid);
 }
 function createMybesty(name:string,address:string,sid:string,cid:string,img:string)
 {
     var best=new BestyModal();
     best.nam=name;
     best.address=address;
     best.sid=sid;
     best.cid=cid;
     best.img=img;
     BestyModal.createbesty(best);
 }
  
const [barbers, setBarbers] = useState<any>([]);
  async function loaddata() {
    var res=await ShopModal.getshops(tempstr[3]);
    console.log(tempstr[3]);
    if(res)
    {
    var len=res.length;
    console.log(len);
    for(var i=0;i<len;i++)
    {
      var bookin=new ShopModal();
      var d=res[i];
    bookin.addData(d._id,d.obj.uid,d.obj.nam,d.obj.desc,d.obj.duration,d.obj.rating,d.obj.address,d.obj.postal,d.obj.city,d.obj.opening,d.obj.closing,d.obj.email,d.obj.password,d.obj.mobile,d.obj.img,d.obj.isActive,d.obj.norating);
    AllShops.push(bookin);

    }
    const barberl:any[]=[];
    var allbshopids:IHash={};
    let dd=await BestyModal.getbestys(custM.id);
    let bestlen=dd.length;
    for(let i=0;i<bestlen;i++)
    {
      allbshopids[dd[i].obj.sid]=dd[i].obj.sid;
    }
    
    for (let i=0;i<len;i++) {
      
      var imgdata=await ImageModal.getimage(AllShops[i].img);
      if(allbshopids[AllShops[i].id]===AllShops[i].id)
      {
      barberl.push(
        <IonCard key={i} >
        <img onClick={()=>{tempstr[3]=AllShops[i].id;
        hist.push('/selectedshop');}} className="coverimgsize" src={"data:image/jpeg;base64,"+imgdata} />
        <IonCardHeader>
          <IonRow>
            <IonCol size="10"><IonCardTitle>{AllShops[i].nam}</IonCardTitle></IonCol>
            <IonCol size="2"><IonIcon size="large"  icon={star} onClick={async()=>{
              var res=await updateMybesty(AllShops[i].id,custM.id);
              console.log(res);
              
              setIsReload("star");
            }}></IonIcon></IonCol>
      </IonRow>
          <IonRow>
      <IonCol><IonCardSubtitle>{AllShops[i].address}</IonCardSubtitle></IonCol>
        <IonCol><IonCardSubtitle  className="ion-float-right">{AllShops[i].rating} {lang[130+tempstr[7]]["F-B"]}</IonCardSubtitle></IonCol>
          </IonRow>
        </IonCardHeader>
      </IonCard>
      );
          }
          else
          {
            barberl.push(
              <IonCard key={i} >
              <img onClick={()=>{tempstr[3]=AllShops[i].id;
              hist.push('/selectedshop');}} className="coverimgsize" src={"data:image/jpeg;base64,"+imgdata} />
              <IonCardHeader>
                <IonRow>
                <IonCol size="10"><IonCardTitle>{AllShops[i].nam}</IonCardTitle></IonCol>
            <IonCol size="2"><IonIcon size="large"  icon={starOutline}  onClick={async()=>{
                    var res=await createMybesty(AllShops[i].nam,AllShops[i].address,AllShops[i].id,custM.id,AllShops[i].img);
                    console.log(res);
                    
                    setIsReload("out");
                  }}></IonIcon></IonCol>
            </IonRow>
                <IonRow>
            <IonCol><IonCardSubtitle>{AllShops[i].address}</IonCardSubtitle></IonCol>
              <IonCol><IonCardSubtitle  className="ion-float-right">{AllShops[i].rating} {lang[130+tempstr[7]]["F-B"]}</IonCardSubtitle></IonCol>
                </IonRow>
              </IonCardHeader>
            </IonCard>
            );
          }
    }
    setBarbers(barberl);
  }
  }
  return (

  <IonPage>
    <IonHeader>
        <IonToolbar>
        <IonButtons slot="start">
          <IonBackButton text="" defaultHref="/mainhome"></IonBackButton>
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
            <h1>{lang[122+tempstr[7]]["Booking with a hairdresser"]}</h1>
  <p>{lang[124+tempstr[7]].nearby} {tempstr[3]}</p>
          </IonLabel>
        </IonItem>
      <IonList  lines="inset">
        
      {barbers}
      
        
      </IonList>
    
    </IonContent>
{customertabs}
    
  </IonPage>
);
  }


export default SearchResult;
