import { IonButton, IonCard, IonCol, IonIcon, IonItem, IonLabel, IonList, IonModal, IonRadio, IonRadioGroup, IonRow, IonSelect, IonSelectOption, IonText, IonToast, useIonViewDidEnter } from '@ionic/react';
import { star, starOutline } from 'ionicons/icons';
import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router';
import BookingModal from '../modals/BookingModal';
import CustomerModal from '../modals/CustomerModal';
import EmployeeModal from '../modals/EmployeeModal';
import HaircutModal from '../modals/HaircutModal';
import { getDateDisplayFormat, getDateTimeNumber, getDateTimeNumberE, getDateTimeNumberS, lang } from '../modals/Helper';
import ImageModal from '../modals/ImageModal';
import ShopModal from '../modals/ShopModal';

type MyModalProps = {
  shopM: ShopModal;
  empM: EmployeeModal;
  custM: CustomerModal;
  bookM: BookingModal;
  tempstr: any;
}

const BookingComponent: React.FC<MyModalProps> = ({ tempstr, shopM, custM, empM, bookM }) => {

  useIonViewDidEnter(() => {

    console.log(tempstr[6]);
    //if(tempshaircuts.length==0)
    loaddata(); console.log(shopM.img + " shsh " + tempstr[3]);
  });
  const [img, setImg] = useState("");
  const [showToast1, setShowToast1] = useState(false);
  var stars: any = [];
  var chind = -1;
  var feedbacks: any = [];
  var haircuts: any = [];
  const [feedlist, setFeedlist] = useState<any>();
  const [shaircut, setShaircut] = useState<any>();
  const [hairlist, setHairlist] = useState(haircuts);
  const [selected, setSelected] = useState("");
  const [showPopover, setShowPopover] = useState(false);
  const [sname, setSname] = useState("");
  const [saddress, setSaddress] = useState("");
  const [sstars, setSstars] = useState<any>();
  const [count, setCount] = useState(0);
  const [avrat, setAvrat] = useState(0.0);

  async function loaddata() {
    console.log("again");
    var d = await ShopModal.getshop(tempstr[3]);
    shopM = new ShopModal();

    shopM.addData(d._id, d.obj.uid, d.obj.nam, d.obj.desc, d.obj.duration, d.obj.rating, d.obj.address, d.obj.postal, d.obj.city, d.obj.opening, d.obj.closing, d.obj.email, d.obj.password, d.obj.mobile, d.obj.img, d.obj.isActive, d.obj.norating);
    var imgdata = await ImageModal.getimage(shopM.img);
    setImg("data:image/jpeg;base64," + imgdata);
    bookM.sid = shopM.id;
    bookM.sname = shopM.nam;
    bookM.simg = shopM.img;
    setAvrat(Number(Number(shopM.rating).toFixed(1)));
    console.log("arat "+Math.floor(Number(shopM.rating)));
    let diffno = 5 - Math.floor(Number(shopM.rating));
    stars = [];
    for (let i = 0; i < Math.floor(Number(shopM.rating)); i++) {
      stars.push(<IonIcon key={i} icon={star} />);
    }
    for (let i = 0; i < diffno; i++) {
      stars.push(<IonIcon key={i + 5} icon={starOutline} />);
    }
    var edate = new Date();
    edate.setMinutes(edate.getMinutes() - edate.getTimezoneOffset(), 0, 0);
    var dd = await BookingModal.getbookingsbysid(shopM.id, getDateTimeNumberS(new Date(2020, 1, 1, 1, 1, 1, 1).toISOString()), getDateTimeNumberE(edate.toISOString()), "false");


    let booklen = dd.length;
    console.log("booklen " + booklen);
    feedbacks = [];
    let totfeed = 0;
    let fstars = [];
    for (let i = 0; i < booklen; i++) {
      if (dd[i].obj.review != "N/A") {
        fstars = [];
        for (let j = 0; j < Number(dd[i].obj.revrat); j++) {
          fstars.push(<IonIcon key={j} icon={star} />);
        }
        feedbacks.push(<div key={i} style={{ "paddingTop": "0.5rem", "textAlign": "center", "background": "#fff", "color": "#000", "height": "4rem", "marginBottom": "2rem" }}>
          <IonRow ><IonText className="p-sizemy3">{dd[i].obj.revrat + ".0"}{" "}{fstars}{" "}{getDateDisplayFormat(dd[i].obj.revdate)}</IonText></IonRow>
          <IonRow ><IonText className="p-sizemy4">{dd[i].obj.review}</IonText></IonRow>
        </div>);
        totfeed++;
      }
    }
    setCount(totfeed);
    setFeedlist(feedbacks);

    tempstr[3] = dd;
    //bookM.addData(d._id,d.hname,d.hprice,d.datetime,d.comment,d.review,d.eid,d.ename,d.cid,d.cname,d.cmobile,d.caddress,d.sid);

    hlist = await HaircutModal.gethaircuts(shopM.id);
    let len = hlist.length;
    console.log("shopid:" + shopM.id + "  sd" + len);
    haircuts = [];
    setShaircut(hlist);
    for (let i = 0; i < len; i++) {
      tempstr[3] = hlist[i];
      console.log("haircu: " + hlist[i].obj.nam);
      haircuts.push(
        <IonSelectOption value={i} key={i}>{hlist[i].obj.nam + ":    " + hlist[i].obj.price + "€"}</IonSelectOption>
      );
    }
    setHairlist(haircuts);
    setSaddress(shopM.address);
    setSname(shopM.nam);
    setSstars(stars);


  }
  var hlist: any;
  if (tempstr[6] === "Booking"&&count>0) {
    return (
      <div>
        <IonToast
          isOpen={showToast1}
          color="danger"
          onDidDismiss={() => setShowToast1(false)}
          message="Please select haircut"
          duration={3000}
        />
        <IonItem lines="none">
          <IonLabel>
            <h1>{sname}</h1>
            <p>{saddress}</p>
            <IonRow>
              <IonCol>
                {avrat}
              </IonCol>
              <IonCol>
                {sstars}
              </IonCol>
              <IonCol><p>{count} feedbacks</p></IonCol>
              <IonCol></IonCol>
              <IonCol></IonCol>
              <IonCol></IonCol>
            </IonRow>
          </IonLabel>
        </IonItem>
        <IonCard className="imgmargin">
          <img className="coverimgsize" src={img} />
        </IonCard >


        <IonItem><p>{lang[138 + tempstr[7]].About}</p></IonItem>
        <IonItem lines="none"><h3>{lang[136 + tempstr[7]]["Choose a haircut service"]}</h3></IonItem>



        <IonItem>
          <IonLabel>Select a haircut</IonLabel>
          <IonSelect value={""} onIonChange={e => {
            chind = e.detail.value;
          }}>
            {hairlist}
          </IonSelect></IonItem>
        <br></br>
        <IonButton onClick={() => {
          if (chind != -1) {
            bookM.hname = shaircut[chind].obj.nam;
            bookM.hprice = shaircut[chind].obj.price;

            tempstr[9].push('/booking1');
          }
          else
            setShowToast1(true);
        }} expand="full">Next</IonButton>
      </div>
    );
  }else  if (tempstr[6] === "Booking"&&count===0) {
    return (
      <div>
        <IonToast
          isOpen={showToast1}
          color="danger"
          onDidDismiss={() => setShowToast1(false)}
          message="Please select haircut"
          duration={3000}
        />
        <IonItem lines="none">
          <IonLabel>
            <h1>{sname}</h1>
            <p>{saddress}</p>
           
          </IonLabel>
        </IonItem>
        <IonCard className="imgmargin">
          <img className="coverimgsize" src={img} />
        </IonCard >


        <IonItem><p>{lang[138 + tempstr[7]].About}</p></IonItem>
        <IonItem lines="none"><h3>{lang[136 + tempstr[7]]["Choose a haircut service"]}</h3></IonItem>



        <IonItem>
          <IonLabel>Select a haircut</IonLabel>
          <IonSelect value={""} onIonChange={e => {
            chind = e.detail.value;
          }}>
            {hairlist}
          </IonSelect></IonItem>
        <br></br>
        <IonButton onClick={() => {
          if (chind != -1) {
            bookM.hname = shaircut[chind].obj.nam;
            bookM.hprice = shaircut[chind].obj.price;

            tempstr[9].push('/booking1');
          }
          else
            setShowToast1(true);
        }} expand="full">Next</IonButton>
      </div>
    );
  }
  else {
    return (
      <div>
        <div style={{ "textAlign": "center" }}>
          <h1 className="bigfont">{lang[202+tempstr[7]]['Customers Feed-Backs']}</h1>
        </div>

        <br></br>
        <IonList>

          {feedlist}
        </IonList>
      </div>
    );
  }
}
export default BookingComponent;