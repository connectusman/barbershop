
import { IonApp, IonAvatar, IonBackButton, IonButton, IonButtons, IonContent, IonDatetime, IonGrid, IonHeader, IonIcon, IonItem, IonItemDivider, IonItemOption, IonItemOptions, IonItemSliding, IonLabel, IonList, IonPage, IonRow, IonSelect, IonSelectOption, IonText, IonTitle, IonToast, IonToolbar, useIonViewDidEnter, useIonViewWillEnter } from '@ionic/react';
import { caretDown, caretForward, home } from 'ionicons/icons';
import React, { useRef, useState } from 'react';
import { useHistory } from 'react-router';
import { customertabs } from '../../components/FooterTabs';
import MyAccord from '../../components/MyAccord';
import MyAccord2 from '../../components/MyAccord2';
import MyAccord3 from '../../components/MyAccord3';
import MyAccordS from '../../components/MyAccordS';

import BookingModal from '../../modals/BookingModal';
import CustomerModal from '../../modals/CustomerModal';
import EmployeeModal from '../../modals/EmployeeModal';
import { getDateDisplayFormat, getDateDisplayfromdate, getDateTimeDisplayFormat, getDateTimeNumber, getDateTimeNumberE, getDateTimeNumberS, lang } from '../../modals/Helper';
import ShopModal from '../../modals/ShopModal';

type MyModalProps = {
  shopM: ShopModal;
  empM: EmployeeModal;
  custM: CustomerModal;
  bookM: BookingModal;
  tempstr: any[];
}

var aslotsbyemp:any=[];
const BookingStep1: React.FC<MyModalProps> = ({ tempstr, shopM, custM, empM, bookM }) => {
  var hist = useHistory();
  const [showToast1, setShowToast1] = useState(false);
  const sdate = new Date().toISOString();
  const edate = new Date(new Date().setDate(new Date().getDate() + 2)).toISOString();
  var mvalues = "";
  var hvalues = "" + (Number(shopM.opening) / 100);
  for (let i = (Number(shopM.opening) / 100) + 1; i <= (Number(shopM.closing) / 100); i++) {
    hvalues += "," + i;
  }
  console.log();
  if (shopM.duration === "15")
    mvalues = "0,15,30,45";
  else if (shopM.duration === "30")
    mvalues = "0,30";
  else if (shopM.duration === "45")
    mvalues = "0,45,30,15";
  //if(shopM.opening)
  var barber: any = [];
  useIonViewDidEnter(() => {
    console.log("----" + shopM.img + " : " + shopM.nam);
    loaddata();
  });
  const [eindex, setEindex] = useState(0);
  const [blist, setBlist] = useState();
  var d: any = [];
  async function loaddata() {
    barber = [];
    console.log("emp:  :" + shopM.id);
    setEindex(0);
    setDatebtn1([]);
    setDatebtn2([]);
    setDatebtn3([]);
    d = await EmployeeModal.getemployeesbysid(bookM.sid);
    let len = d.length;
    console.log("emp:  :" + len);
    for (let i = 0; i 
      
      
      < len; i++) {
      barber.push(<IonSelectOption key={i} value={d[i]._id}>{d[i].obj.nam}</IonSelectOption>);
    }
    setBlist(barber);
  }
  var seldate = useRef<HTMLIonDatetimeElement>(null);
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
          message="Please select both barber and time"
          duration={3000}
        />
        <IonItem lines="none">
          <IonLabel>
            <h1>{bookM.sname}</h1>
            <IonItem className="dividerline-cen1"></IonItem>
          </IonLabel>
        </IonItem>

        <IonItem lines="none"><h1 className="p-size">1. {lang[142 + tempstr[7]]["Selected haircut"]}</h1></IonItem>
        <div className="makeflex">
          <p className="counterleft">{bookM.hname}</p>
          <p > {bookM.hprice}€</p>

        </div>
        <IonItem className="colorwhiteitem">
          <IonLabel>{lang[144 + tempstr[7]]["Choose your barber"]}</IonLabel>
          <IonSelect  value={eindex} onIonChange={async e => {
            setEindex(e.detail.value);
            console.log("empclick:" + e.detail.value);
            var d = await EmployeeModal.getemployee("" + e.detail.value);
            var empb = new EmployeeModal();

            empb.addData(d._id, d.obj.uid, d.obj.nam, d.obj.fnam, d.obj.type, d.obj.holiday, d.obj.sid, d.obj.duration, d.obj.address, d.obj.opening,
              d.obj.closing, d.obj.email, d.obj.password, d.obj.mobile, d.obj.img);
              
              let res = await BookingModal.getBookingbyeid(empb.id,getDateTimeNumberS(ndt1.toISOString()),getDateTimeNumberE(ndt3.toISOString()),"false");
              let dlen=res.length;
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
          }}>
            {blist}
          </IonSelect>
        </IonItem>


        <IonItem className="margin-top1" lines="none"><h1 className="p-size">2. {lang[146 + tempstr[7]]["What time & date"]}</h1></IonItem>


        
        <MyAccordS id="1" title={getDateDisplayfromdate(ndt1.toISOString())} data={datebtn1}></MyAccordS>
        <br></br>
        <MyAccordS id="2" title={getDateDisplayfromdate(ndt2.toISOString())} data={datebtn2}></MyAccordS>
        <br></br>
        <MyAccordS id="3" title={getDateDisplayfromdate(ndt3.toISOString())} data={datebtn3}></MyAccordS>
        <br></br>
        <br></br>
        <IonButton onClick={() => {
          var allbtp = document.getElementsByClassName("btnpressed");
          if (allbtp[0].innerHTML.length > 0 && eindex!=0) {
            console.log("final" + bookM.eid);
            bookM.eid = ""+eindex;
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
            console.log("done " + bookM.datetime);
            if (tempstr[0])
              hist.push('/booking2');
            else
              hist.push('/identity');
          } else {
            setShowToast1(true);
          }
        }} expand="full">Next</IonButton>
      </IonContent>
      {customertabs}
    </IonPage>
  );

}
export default BookingStep1;
