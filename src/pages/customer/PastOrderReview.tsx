
import { IonApp, IonAvatar,IonCard, IonButton, IonContent, IonGrid, IonHeader, IonIcon, IonItem, IonItemDivider, IonItemOption, IonItemOptions, IonItemSliding, IonLabel, IonList, IonRow, IonText, IonTitle, IonToolbar, IonCol, IonButtons, IonBackButton, IonPage, useIonViewDidEnter, IonTextarea, IonSegment, IonSegmentButton, IonModal } from '@ionic/react';
import { heart, home, star } from 'ionicons/icons';
import React, { useRef, useState } from 'react';
import { useHistory } from 'react-router';
import { customertabs } from '../../components/FooterTabs';
import BookingModal from '../../modals/BookingModal';
import CustomerModal from '../../modals/CustomerModal';
import EmployeeModal from '../../modals/EmployeeModal';
import { getDateTimeDisplayFormat, getDateTimeFormat, getDateTimeNumber, lang } from '../../modals/Helper';
import ImageModal from '../../modals/ImageModal';
import ShopModal from '../../modals/ShopModal';

type MyModalProps = {
  shopM:ShopModal;
  empM:EmployeeModal;
  custM:CustomerModal;
  bookM:BookingModal;
  tempstr:any[];
}




const PastOrderReview: React.FC <MyModalProps> = ({tempstr,shopM,custM,empM,bookM}) =>{
  useIonViewDidEnter(()=>{
    loaddata();
    
  });
  let hist=useHistory();
  const [dstat, setDstat] = useState(getDateTimeFormat(bookM.datetime));
  const [ishowb, setIshowb] = useState(true);
  
  const [img, setimg] = useState("");
  async function loaddata() {
    console.log("cancel:::"+tempstr[3]);
    var d=await BookingModal.getbooking(tempstr[3]);
    bookM.addData(d._id,d.obj.hname,d.obj.hprice,d.obj.datetime,d.obj.comment,d.obj.review,d.obj.eid,d.obj.ename,d.obj.cid,d.obj.cname,d.obj.cmobile,d.obj.caddress,d.obj.sid,d.obj.simg,d.obj.cimg,d.obj.isComplete,d.obj.countno,d.obj.revdate,d.obj.revrat,d.obj.sname);
    var imgdata="data:image/jpeg;base64,"+await ImageModal.getimage(bookM.simg);
    
    setimg(imgdata);
    d=await ShopModal.getshop(bookM.sid);
    shopM.addData(d._id,d.obj.uid,d.obj.nam,d.obj.desc,d.obj.duration,d.obj.rating,d.obj.address,d.obj.postal,d.obj.city,d.obj.opening,d.obj.closing,d.obj.email,d.obj.password,d.obj.mobile,d.obj.img,d.obj.isActive,d.obj.norating);
    if(bookM.review==="N/A")
    setIshowb(false);
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
      
      <IonItem className="dividerline"></IonItem>
      <IonItem  lines="none">
          <h1>{lang[176+tempstr[7]]["Past order detailed"]}</h1>
  </IonItem>
        <IonItem lines="none">
  <h1>{bookM.sname}</h1>
     </IonItem>
        <IonCard className="nomargin">
        <img className="coverimgsize " src={img} />
        
        </IonCard>
        <IonItem>
          
          <IonLabel>
            <h2>Hairdresser Name</h2>
  <p>{bookM.ename}</p>
          </IonLabel>
        </IonItem>
        <IonItem>
         
          <IonLabel>
            <h2>{lang[22+tempstr[7]].Haircut}</h2>
  <p>{bookM.hname}</p>
          </IonLabel>
        </IonItem>
        <IonItem>
         
          <IonLabel>
            <h2>{lang[166+tempstr[7]].Date} & {lang[164+tempstr[7]].Time}</h2>
  <p>{getDateTimeDisplayFormat(bookM.datetime)}</p>
          </IonLabel>
        </IonItem>
        <IonRow className="aligncenter">
        <IonButton hidden={ishowb} onClick={()=>{
          hist.push("/reviewit");
        }}  expand="full">{lang[178+tempstr[7]]["Review this order"]}</IonButton>
        </IonRow>
    </IonContent>
    {customertabs}
  </IonPage>
);

  }
export default PastOrderReview;
