
import { IonApp, IonAvatar,IonCard, IonButton, IonContent, IonGrid, IonHeader, IonIcon, IonItem, IonItemDivider, IonItemOption, IonItemOptions, IonItemSliding, IonLabel, IonList, IonRow, IonText, IonTitle, IonToolbar, IonCol, IonButtons, IonBackButton, IonPage, useIonViewDidEnter, IonDatetime, IonToast } from '@ionic/react';
import { home } from 'ionicons/icons';
import React, { useRef, useState } from 'react';
import { useHistory } from 'react-router';
import { customertabs } from '../../components/FooterTabs';
import MyAccordS from '../../components/MyAccordS';

import BookingModal from '../../modals/BookingModal';
import CustomerModal from '../../modals/CustomerModal';
import EmployeeModal from '../../modals/EmployeeModal';
import { getDateDisplayfromdate, getDateTimeDisplayFormat, getDateTimeFormat, getDateTimeNumber,  getDateTimeNumberE,  getDateTimeNumberS,  lang } from '../../modals/Helper';
import ImageModal from '../../modals/ImageModal';
import ShopModal from '../../modals/ShopModal';

type MyModalProps = {
  shopM:ShopModal;
  empM:EmployeeModal;
  custM:CustomerModal;
  bookM:BookingModal;
  tempstr:any[];
}
var aslotsbyemp:any=[];
const CancelBooking: React.FC <MyModalProps> = ({tempstr,shopM,custM,empM,bookM})=> {
  
  let hist=useHistory();
  const [showToast1, setShowToast1] = useState(false);
  const [dstat, setDstat] = useState(getDateTimeFormat(bookM.datetime));
  var datet=useRef<HTMLIonDatetimeElement>(null);
  const sdate=new Date().toISOString();
const edate= new Date(new Date().setDate(new Date().getDate() + 2)).toISOString();
  const [img, setimg] = useState("");
  var ndt1 = new Date();
  ndt1.setMinutes(ndt1.getMinutes() - ndt1.getTimezoneOffset(), 0, 0);
  var ndt2 = new Date();
  ndt2.setDate(ndt2.getDate() + 1);
  ndt2.setMinutes(ndt2.getMinutes() - ndt2.getTimezoneOffset(), 0, 0);
  var ndt3 = new Date();
  ndt3.setDate(ndt3.getDate() + 2);
  ndt3.setMinutes(ndt3.getMinutes() - ndt3.getTimezoneOffset(), 0, 0);

  const [datebtn1, setDatebtn1] = useState<any>();
  const [datebtn2, setDatebtn2] = useState<any>();
  const [datebtn3, setDatebtn3] = useState<any>();
  async function loaddata() {
    console.log("cancel:::"+tempstr[3]);
    var d=await BookingModal.getbooking(tempstr[3]);
    bookM.addData(d._id,d.obj.hname,d.obj.hprice,d.obj.datetime,d.obj.comment,d.obj.review,d.obj.eid,d.obj.ename,d.obj.cid,d.obj.cname,d.obj.cmobile,d.obj.caddress,d.obj.sid,d.obj.simg,d.obj.cimg,d.obj.isComplete,d.obj.countno,d.obj.revdate,d.obj.revrat,d.obj.sname);
    setDstat(getDateTimeFormat(bookM.datetime));
    var imgdata="data:image/jpeg;base64,"+await ImageModal.getimage(bookM.simg);
    setimg(imgdata);
    d = await EmployeeModal.getemployee(bookM.eid);
            var empb = new EmployeeModal();
            
            empb.addData(d._id, d.obj.uid, d.obj.nam, d.obj.fnam, d.obj.type, d.obj.holiday, d.obj.sid, d.obj.duration, d.obj.address, d.obj.opening,
              d.obj.closing, d.obj.email, d.obj.password, d.obj.mobile, d.obj.img);
              console.log(empb.id+"    =     "+getDateTimeNumber(ndt1.toISOString())+"  =   "+getDateTimeNumber(ndt3.toISOString()));
              let res = await BookingModal.getBookingbyeid(empb.id,getDateTimeNumberS(ndt1.toISOString()),getDateTimeNumberE(ndt3.toISOString()),"false");
              let dlen=res.length;
              console.log(bookM.eid+" o "+dlen);
              aslotsbyemp=[];
              for(let i=0;i<dlen;i++)
              {
                let bookingbyid=new BookingModal();
                bookingbyid.addData(res[i]._id,res[i].obj.hname,res[i].obj.hprice,res[i].obj.datetime,res[i].obj.comment,res[i].obj.review,res[i].obj.eid,
                  res[i].obj.ename,res[i].obj.cid,res[i].obj.cname,res[i].obj.cmobile,res[i].obj.caddress,res[i].obj.sid,res[i].obj.simg,res[i].obj.cimg,res[i].obj.isComplete,res[i].obj.countno,res[i].obj.revdate,res[i].obj.revrat,res[i].obj.sname);
                aslotsbyemp.push(bookingbyid);
              }
            if (ndt1.getDay() != 1 || empb.holiday != "true") {
              
              ndt1.setHours(Number(empb.opening.substr(0, 2)));
              ndt1.setMinutes(Number(empb.opening.substr(2, 2)));
              var datebtn = [];
              for (let i = 0; i < 100; i++) {
                if (isEmpty(ndt1)) {
                  if (ndt1.getMinutes() === 0) {
                    console.log(ndt1.getHours() + " s " + ndt1.getMinutes() + " "+isEmpty(ndt1) );
                    datebtn.push(<IonButton key={i} id={"dtbtn" + i} onClick={e => {
                      var allele = document.getElementsByClassName("btnpressed");
                      for (let i = 0; i < allele.length; i++) {
                        allele[i].classList.remove("btnpressed");
                      }
                      e.currentTarget.classList.add("btnpressed");
                      e.currentTarget.classList.add("btnpressed1");
                    }} style={{ "margin": "0.1%", "height": "2rem", "width": "33%" }}>{ndt1.getHours() + ":" + ndt1.getMinutes() + "0"}</IonButton>);
                  }
                  else {
                    console.log(ndt1.getHours() + " d " + ndt1.getMinutes() + " "+isEmpty(ndt1) );
                    datebtn.push(<IonButton key={i} id={"dtbtn" + i} onClick={e => {
                      var allele = document.getElementsByClassName("btnpressed");
                      for (let i = 0; i < allele.length; i++) {
                        allele[i].classList.remove("btnpressed");
                      }
                      e.currentTarget.classList.add("btnpressed");
                      e.currentTarget.classList.add("btnpressed1");
                    }} style={{ "margin": "0.1%", "height": "2rem", "width": "33%" }}>{ndt1.getHours() + ":" + ndt1.getMinutes()}</IonButton>);
                  }
                }
                ndt1.setMinutes(ndt1.getMinutes() + Number(empb.duration));
                if (ndt1.getMinutes() === 0) {
                  if (Number("" + ndt1.getHours() + ndt1.getMinutes() + "0") >= Number(empb.closing))
                    break;

                }
                else
                  if (Number("" + ndt1.getHours() + ndt1.getMinutes()) >= Number(empb.closing))
                    break;
              }
              setDatebtn1(datebtn);
            }
            datebtn = [];
            if (ndt2.getDay() != 1 || empb.holiday != "true") {
              ndt2.setHours(Number(empb.opening.substr(0, 2)));
              ndt2.setMinutes(Number(empb.opening.substr(2, 2)));
              var datebtn = [];
              for (let i = 0; i < 100; i++) {
                if (isEmpty(ndt2)) {
                  if (ndt2.getMinutes() === 0) {
                    datebtn.push(<IonButton key={i} id={"dtbtn" + i} onClick={e => {
                      var allele = document.getElementsByClassName("btnpressed");
                      for (let i = 0; i < allele.length; i++) {
                        allele[i].classList.remove("btnpressed");
                      }
                      e.currentTarget.classList.add("btnpressed");
                      e.currentTarget.classList.add("btnpressed2");
                    }} style={{ "margin": "0.1%", "height": "2rem", "width": "33%" }}>{ndt2.getHours() + ":" + ndt2.getMinutes() + "0"}</IonButton>);
                  }
                  else {
                    datebtn.push(<IonButton key={i} id={"dtbtn" + i} onClick={e => {
                      var allele = document.getElementsByClassName("btnpressed");
                      for (let i = 0; i < allele.length; i++) {
                        allele[i].classList.remove("btnpressed");
                      }
                      e.currentTarget.classList.add("btnpressed");
                      e.currentTarget.classList.add("btnpressed2");
                    }} style={{ "margin": "0.1%", "height": "2rem", "width": "33%" }}>{ndt2.getHours() + ":" + ndt2.getMinutes()}</IonButton>);
                  }
                }
                ndt2.setMinutes(ndt2.getMinutes() + Number(empb.duration));
                if (ndt2.getMinutes() === 0) {
                  if (Number("" + ndt2.getHours() + ndt2.getMinutes() + "0") >= Number(empb.closing))
                    break;
                }
                else
                  if (Number("" + ndt2.getHours() + ndt2.getMinutes()) >= Number(empb.closing))
                    break;
              }
              setDatebtn2(datebtn);
            }
            datebtn = [];
            if (ndt3.getDay() != 1 || empb.holiday != "true") {
              ndt3.setHours(Number(empb.opening.substr(0, 2)));
              ndt3.setMinutes(Number(empb.opening.substr(2, 2)));
              var datebtn = [];
              for (let i = 0; i < 100; i++) {
                if (isEmpty(ndt3)) {
                  if (ndt3.getMinutes() === 0) {
                    datebtn.push(<IonButton key={i} id={"dtbtn" + i} onClick={e => {
                      var allele = document.getElementsByClassName("btnpressed");
                      for (let i = 0; i < allele.length; i++) {
                        allele[i].classList.remove("btnpressed");
                      }
                      e.currentTarget.classList.add("btnpressed");
                      e.currentTarget.classList.add("btnpressed3");
                    }} style={{ "margin": "0.1%", "height": "2rem", "width": "33%" }}>{ndt3.getHours() + ":" + ndt3.getMinutes() + "0"}</IonButton>);
                  }
                  else {
                    datebtn.push(<IonButton key={i} id={"dtbtn" + i} onClick={e => {
                      var allele = document.getElementsByClassName("btnpressed");
                      for (let i = 0; i < allele.length; i++) {
                        allele[i].classList.remove("btnpressed");
                      }
                      e.currentTarget.classList.add("btnpressed");
                      e.currentTarget.classList.add("btnpressed3");

                    }} style={{ "margin": "0.1%", "height": "2rem", "width": "33%" }}>{ndt3.getHours() + ":" + ndt3.getMinutes()}</IonButton>);
                  }
                }
                ndt3.setMinutes(ndt3.getMinutes() + Number(empb.duration));
                if (ndt3.getMinutes() === 0) {
                  if (Number("" + ndt3.getHours() + ndt3.getMinutes() + "0") >= Number(empb.closing))
                    break;
                }
                else
                  if (Number("" + ndt3.getHours() + ndt3.getMinutes()) >= Number(empb.closing))
                    break;
              }
              setDatebtn3(datebtn);
            }
  }
  
  function isEmpty( slot: Date) {
    let myslot=new Date(slot);
    myslot.setMinutes(myslot.getMinutes() - myslot.getTimezoneOffset(), 0, 0);
    console.log("------ "+myslot.toISOString());
    let slot_s=getDateTimeNumber(myslot.toISOString());
    let len=aslotsbyemp.length;
    for(let i=0;i<len;i++)
    {
      console.log(slot_s+" p "+aslotsbyemp[i].datetime);
      if(slot_s===aslotsbyemp[i].datetime)
      {
        return false;

      }
    }
    return true;
  }
  useIonViewDidEnter(()=>{
    loaddata();
  });
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
    <IonToast
          isOpen={showToast1}
          color="danger"
          onDidDismiss={() => setShowToast1(false)}
          message="Please select Date and time"
          duration={3000}
        />
      <IonItem className="dividerline"></IonItem>
      <IonItem  lines="none">
          <h1>{lang[184+tempstr[7]]["Your next appointment"]}</h1>
  </IonItem>
        <IonItem lines="none">
  <h1>{bookM.sname}</h1>
     </IonItem>
        <IonCard className="nomargin">
        <img className="coverimgsize " src={img} />
        
        </IonCard>
      <IonList  lines="inset">

        <IonItem>
          
          <IonLabel>
            <h2>{lang[174+tempstr[7]].Barber}</h2>
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
            
            
          </IonLabel>
        </IonItem>
        <MyAccordS id="1" title={getDateDisplayfromdate(ndt1.toISOString())} data={datebtn1}></MyAccordS>
        <br></br>
        <MyAccordS id="2" title={getDateDisplayfromdate(ndt2.toISOString())} data={datebtn2}></MyAccordS>
        <br></br>
        <MyAccordS id="3" title={getDateDisplayfromdate(ndt3.toISOString())} data={datebtn3}></MyAccordS>
        
      </IonList>
    <br></br>
    <IonRow><IonCol className="buttonmedium "><IonButton onClick={async()=>{

      await BookingModal.delbooking(bookM.id);
      hist.replace("/pastbookings");

    }}  expand="full"><h5 className="boldtext">{lang[186+tempstr[7]]["Cancel booking"]}</h5></IonButton></IonCol>
    <IonCol className="buttonmedium"><IonButton  onClick={async()=>{
      var allbtp = document.getElementsByClassName("btnpressed");
      if (allbtp[0].innerHTML.length > 0) {
        let d = new Date();
        if (allbtp[0].classList.contains("btnpressed2"))
          d.setDate(d.getDate() + 1);
        else if (allbtp[0].classList.contains("btnpressed3"))
          d.setDate(d.getDate() + 2);
        let toks = allbtp[0].innerHTML.split(":");
        console.log(Number(toks[0]) + "  " + Number(toks[1]));
        d.setHours(Number(toks[0]));
        d.setMinutes(Number(toks[1]));
        d.setMinutes(d.getMinutes() - d.getTimezoneOffset(), 0, 0);
        bookM.datetime = getDateTimeNumber(d.toISOString());
        await BookingModal.updatebooking(bookM.id,bookM);
      hist.replace("/pastbookings");
      }
      else {
        setShowToast1(true);
      }
      
}}  expand="full"><h5 className="boldtext">{lang[188+tempstr[7]]["Change booking"]}</h5></IonButton></IonCol></IonRow>
    </IonContent>
    {customertabs}
  </IonPage>
);

  }


export default CancelBooking;
