

import { IonApp, IonAvatar, IonButton, IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle, IonCol, IonContent, IonGrid, IonHeader, IonIcon, IonItem, IonItemDivider, IonItemOption, IonItemOptions, IonItemSliding, IonLabel, IonList, IonRow, IonSegment, IonSegmentButton, IonText, IonTitle, IonToolbar, useIonViewDidEnter, useIonViewWillEnter } from '@ionic/react';
import { caretDown, caretForward } from 'ionicons/icons';

import React, { useEffect, useState } from 'react';



const MyAccordS: React.FC<any> = ({ id, title,data }) => {
const [mydown, setMydown] = useState(caretDown);



  return (
    <IonRow>
    <IonButton onClick={e => {
        let acc = document.getElementsByClassName("accordion");
        let len = acc.length;
        const ddd = document.getElementById(e.currentTarget.id);

        for (let i = 0; i < len; i++) {
          if (acc[i] != ddd) {

            let panel = acc[i].nextElementSibling as HTMLElement;
            if (panel.style.maxHeight != "") {
              acc[i].classList.toggle("active");
              panel.style.maxHeight = "";

            }
          }


        }

        if (ddd) {
          console.log("hukm");
          ddd.classList.toggle("active");
          let panel = ddd.nextElementSibling as HTMLElement;
          if (panel.style.maxHeight === "") {
            
            panel.style.maxHeight = panel.scrollHeight + "px";
          } else {
            panel.style.maxHeight = "";
          }

        }
      }} id={"accord" + id} className="accordion" ><IonText className="floatleft p-size4">{title}</IonText><IonIcon className="floatright" icon={mydown}></IonIcon></IonButton>

<IonList className="panel" >
<div style={{"textAlign":"center"}}>{data}</div>
      </IonList>
    </IonRow>
  );
}


export default MyAccordS;


