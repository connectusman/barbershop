import { IonAvatar, IonButton, IonCard, IonCol, IonIcon, IonItem, IonLabel, IonList, IonModal, IonRadio, IonRadioGroup, IonRow, IonSelect, IonSelectOption, IonText, IonThumbnail, useIonViewDidEnter } from '@ionic/react';
import { archive, star, starOutline } from 'ionicons/icons';
import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router';
import BookingModal from '../modals/BookingModal';
import CustomerModal from '../modals/CustomerModal';
import EmployeeModal from '../modals/EmployeeModal';
import HaircutModal from '../modals/HaircutModal';
import {getDateTimeDisplayFormat, getDateTimeNumber, getDateTimeNumberE, getDateTimeNumberS, lang} from '../modals/Helper';
import ImageModal from '../modals/ImageModal';
import ShopModal from '../modals/ShopModal';

type MyModalProps = {
    shopM:ShopModal;
    empM:EmployeeModal;
    custM:CustomerModal;
    bookM:BookingModal;
    tempstr:any;
  }
  
const OrderComponent:React.FC<MyModalProps> = ({tempstr,shopM,custM,empM,bookM})=>{
    let hist=useHistory();
    const [tab, setTab] = useState("");
    
    useEffect(()=>{
        loaddata();
      },[tempstr[6]]);
      const [bolist, setbolist] = useState();
      var blist:any=[];
      var inc:any=[];
      let len=inc.length;
      async function loaddata() {
        var tabval="";  
        console.log(tempstr[6]);
        let d=new Date();
        d.setMinutes(d.getMinutes()-d.getTimezoneOffset(),0,0);
        let d2=new Date();
        d2.setMinutes(d2.getMinutes()-d2.getTimezoneOffset(),0,0);
        
              
        
        if(tempstr[6]==="Past Orders")
          {
              console.log("pastorder");
              console.log(getDateTimeNumberS(new Date(2020,1,1,1,1,1,1).toISOString())+" :::: "+getDateTimeNumberE(d.toISOString()));
            inc=await BookingModal.getbookingsbycid(custM.id,getDateTimeNumberS(new Date(2020,1,1,1,1,1,1).toISOString()),getDateTimeNumberE(d.toISOString()),"false");
            len=inc.length;
            if(len>0)
            tabval="Past Orders";
            else
            tabval="no past";

          }
          else if(tempstr[6]==="Incoming Orders")
          {console.log("incorder")
          
          d2.setDate(d2.getDate()+4);
          console.log(d.toISOString()+" "+d2.toISOString());
              inc=await BookingModal.getbookingsbycid(custM.id,getDateTimeNumberS(d.toISOString()),getDateTimeNumberE(d2.toISOString()),"false");
              len=inc.length;
              if(len>0)
              tabval="Incoming Orders";
              else
              tabval="no incoming";
          }
          blist=[];
          for(let i=0;i<len;i++)
          {
              if(tabval==="Past Orders")
              {
                console.log("pastorder1")
                
                console.log("pastorder2"+inc[i].obj.simg);
                var imgdata="";
              if(inc[i].obj.simg.length>0)
                  imgdata= "data:image/jpeg;base64,"+await ImageModal.getimage(inc[i].obj.simg)
                  blist.push(<IonItem key={i} onClick={()=>{
                  tempstr[3]=inc[i]._id;
                  hist.push("/review");
              }}>
                  <IonAvatar slot="start">
          <img src={imgdata} />
          </IonAvatar>
          
          <IonLabel>
            <IonRow><IonCol className="aligntextleft"><h2 >{inc[i].obj.sname}</h2></IonCol>
            <IonCol></IonCol>
            <IonCol></IonCol>
            <IonCol className="aligntextright"> <p>{getDateTimeDisplayFormat(inc[i].obj.datetime)}</p></IonCol></IonRow>
            <IonRow ><IonCol className="aligntextleft"><p>{lang[174+tempstr[7]].Barber}: {inc[i].obj.ename}</p></IonCol></IonRow>
            <IonRow><IonCol className="aligntextleft" ><p >{lang[22+tempstr[7]].Haircut}: {inc[i].obj.hname}</p></IonCol>
            <IonCol></IonCol>
            <IonCol></IonCol>
            <IonCol></IonCol>
            <IonCol className="aligntextright"> <p>€{inc[i].obj.hprice}</p></IonCol></IonRow>
            
          </IonLabel>
                  </IonItem>);
                  console.log("------++++"+blist.length);
              
          }
          else if(tabval==="Incoming Orders")
          {
            console.log("incorder1")
                 
                console.log("incorder2"+inc[i].obj.simg);
                var imgdata="";
              if(inc[i].obj.simg.length>0)
                  imgdata= "data:image/jpeg;base64,"+await ImageModal.getimage(inc[i].obj.simg)
                  blist.push(<IonItem key={i} onClick={()=>{
                  tempstr[3]=inc[i]._id;
                  hist.push("/cancelbooking");
              }}>
                  <IonAvatar slot="start">
          <img src={imgdata} />
          </IonAvatar>
          
          <IonLabel>
    <IonRow><IonCol className="aligntextleft"><h2 >{inc[i].obj.sname}</h2></IonCol>
            <IonCol></IonCol>
            <IonCol></IonCol>
            <IonCol className="aligntextright"> <p>{getDateTimeDisplayFormat(inc[i].obj.datetime)}</p></IonCol></IonRow>
            <IonRow ><IonCol className="aligntextleft"><p>{lang[174+tempstr[7]].Barber}: {inc[i].obj.ename}</p></IonCol></IonRow>
            <IonRow><IonCol className="aligntextleft" ><p >{lang[22+tempstr[7]].Haircut}: {inc[i].obj.hname}</p></IonCol>
            <IonCol></IonCol>
            <IonCol></IonCol>
            <IonCol></IonCol>
            <IonCol className="aligntextright"> <p>€{inc[i].obj.hprice}</p></IonCol></IonRow>
            
          </IonLabel>
                  </IonItem>);
                  console.log("-----++++"+blist.length);
              
          }
        }
        setbolist(blist);
        setTab(tabval);

        }
        
        console.log("render")
       
    console.log("------"+blist.length);
      if(tab==="Past Orders")
      {
    return (
        <IonList>
                  {bolist}


               

            </IonList>
    );
  }
  else if(tab==="Incoming Orders")
  {
    return(
        
        <IonList>
            {bolist}

  </IonList>);
  }
  else if(tab==="no past")
  {return(
      <div>
    <IonRow className="margin30 aligncenter"><IonThumbnail className="homeimglogo"><IonIcon className="iconsize" icon={archive}></IonIcon></IonThumbnail></IonRow>
      <IonText ><h2 className="margin20 aligntextcenter">No Past Order</h2></IonText>
      </div>);
  }
  else 
  {
    return(
    <div>
        <IonRow className="margin30 aligncenter"><IonThumbnail className="homeimglogo"><IonIcon className="iconsize" icon={archive}></IonIcon></IonThumbnail></IonRow>
          <IonText ><h2 className="margin20 aligntextcenter">No Incoming Order</h2></IonText>
          </div>
    );
  }
}
export default OrderComponent;