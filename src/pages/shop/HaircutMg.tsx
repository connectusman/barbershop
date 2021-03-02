
import { IonApp, IonAvatar, IonButton, IonContent, IonGrid, IonHeader, IonIcon, IonItem, IonItemDivider, IonItemOption, IonItemOptions, IonItemSliding, IonLabel, IonList, IonRow, IonText, IonTitle, IonToolbar, IonRouterLink, IonButtons, IonBackButton, IonPage, IonInput, IonSelect, IonSelectOption, IonRadio, IonRadioGroup, IonListHeader, IonTabs, IonTabBar, IonTabButton, IonRouterOutlet, IonFooter, useIonViewDidEnter, IonCol, IonToast } from '@ionic/react';
import Axios from 'axios';
import { forceUpdate } from 'ionicons/dist/types/stencil-public-runtime';
import { albums, barbell, caretDown, caretForward, home, person, search } from 'ionicons/icons';
import React, { useEffect, useRef, useState } from 'react';
import { useHistory } from 'react-router';
import { idText, updateDo } from 'typescript';
import { shoptabs } from '../../components/FooterTabs';
import MyAccord from '../../components/MyAccord';
import BookingModal from '../../modals/BookingModal';
import CustomerModal from '../../modals/CustomerModal';
import EmployeeModal from '../../modals/EmployeeModal';
import HaircutModal from '../../modals/HaircutModal';
import { lang } from '../../modals/Helper';
import ShopModal from '../../modals/ShopModal';

type MyModalProps = {
  shopM:ShopModal;
  empM:EmployeeModal;
  custM:CustomerModal;
  bookM:BookingModal;
  tempstr:any[];
}


const HaircutMg: React.FC<MyModalProps> = ({tempstr,shopM,custM,empM,bookM}) => {
  let hist=useHistory();
  var AllHaircuts:HaircutModal[]=[];
  const [hnam,sethnam]=useState();
  const [hpri,sethpri]=useState();
  const name=useRef<HTMLIonInputElement>(null);
  const price=useRef<HTMLIonInputElement>(null);
  var type=useRef<HTMLIonSelectElement>(null);
  var barberl:any[]=[];
  useIonViewDidEnter(async ()=>{
    console.log("Ss");
    await loaddata();
   });
   
   const [showToast1,setShowToast1]=useState(false);
  const [barbers, setBarbers] = useState<any>([]);
  
    async function loaddata() {
      AllHaircuts=[];
      var res=await HaircutModal.gethaircuts(shopM.id);
      var len=res.length;
      console.log("h"+len);
      for(var i=0;i<len;i++)
      {
        var bookin=new HaircutModal();
        var d=res[i];
      bookin.addData(d._id,d.obj.nam,d.obj.price,d.obj.duration,d.obj.sid);
      AllHaircuts.push(bookin);
      }
      barberl=[];
      for (let i=0;i<len;i++) {
        barberl.push(
          <IonItem key={i} onClick={()=>{
            console.log("sjsj");
            tempstr[3]=AllHaircuts[i];
            sethnam(tempstr[3].nam);
            sethpri(tempstr[3].price);
          }}>
          <IonCol size="6"><IonLabel>{AllHaircuts[i].nam}</IonLabel></IonCol>
          <IonCol size="5"></IonCol>
          <IonCol><IonLabel>{AllHaircuts[i].price}</IonLabel></IonCol>
          <IonRadio slot="start" value={i} />
        </IonItem>
        );
      }
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
    <IonContent>
    <IonToast
    isOpen={showToast1}
    color="primary"
    onDidDismiss={() => setShowToast1(false)}
    message="Haircut deleted successful"
    duration={3000}
  />
    <div className="dividerline"></div>
        <br></br>
            <h3 className="margin5 p-size3">{lang[46+tempstr[7]]["Haircut management"]}</h3>
            <br></br>
        
        <IonButton onClick={()=>{hist.push("/addhaircut");}} expand="full" ><IonText className="floatleft p-size4">{lang[74+tempstr[7]]["Add a haircut"]}</IonText><IonIcon className="floatright" icon={caretForward}></IonIcon></IonButton>
        <br></br>
        
          <MyAccord title={lang[76+tempstr[7]]["Haircut list"]} data={<IonRadioGroup >
           

           {
           barbers
           }

          </IonRadioGroup>}></MyAccord>
          
        <br></br>
    {/* <IonItem className="colorwhiteitem" lines="full"><p slot="start">{}</p><IonIcon slot="end" icon={caretDown}></IonIcon></IonItem>
    <br></br> */}
    <IonList>
          
        </IonList>
    {/* <IonItem  lines="full">
            <IonLabel position="stacked">{lang[78+tempstr[7]]["Haircut name"]}</IonLabel>
            <IonInput ref={name}  value={hnam}> </IonInput>
          </IonItem>
          <IonItem  lines="none">
            <IonLabel position="stacked">{lang[80+tempstr[7]]["Haircut price"]}</IonLabel>
            <IonInput ref={price} type={"number"} value={hpri}> </IonInput>
          </IonItem> */}
    
<IonButton onClick={async()=>{
  tempstr[3].nam=name.current?.value;
  tempstr[3].price=price.current?.value;
 await HaircutModal.updatehaircut(tempstr[3].id,tempstr[3]);
 loaddata();
}} className="boldtext" expand="full">{lang[12+tempstr[7]]["Validate"]}</IonButton>

<IonRow  class="aligncenter"><IonRouterLink onClick={async()=>{
  setShowToast1(true);
  await HaircutModal.delhaircut(tempstr[3].id);

  loaddata();
}} className="colorred " ><h3>{lang[82+tempstr[7]]["Delete haircut"]}</h3></IonRouterLink></IonRow>

    </IonContent>
    {shoptabs}
    
  </IonPage>
);

}
export default HaircutMg;
