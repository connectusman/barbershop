

import { IonApp, IonAvatar, IonButton, IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle, IonCol, IonContent, IonGrid, IonHeader, IonIcon, IonItem, IonItemDivider, IonItemOption, IonItemOptions, IonItemSliding, IonLabel, IonList, IonRow, IonSegment, IonSegmentButton, IonText, IonTitle, IonToolbar, useIonViewDidEnter, useIonViewWillEnter } from '@ionic/react';
import { caretDown, caretForward } from 'ionicons/icons';

import React, { useState } from 'react';



const MyAccord3: React.FC<any>=({title,data})=> {
  const [isdown, setIsdown] = useState(caretForward);
   
    
   
    
    return (

  <IonRow>
    <IonButton onClick={()=>{
      let acc = document.getElementsByClassName("accordion2") ;
      const ddd=document.getElementById("accord3");
      var cur=document.querySelector(".accordion2.active");
      if(cur&&cur!=ddd)
      {
        cur.classList.toggle("active");
        let panel = cur.nextElementSibling as HTMLElement;
        if (panel.style.maxHeight ==="") {
            panel.style.maxHeight = panel.scrollHeight + "px";
            setIsdown(caretDown);
        } else {
            panel.style.maxHeight = "";
            setIsdown(caretForward);
        }
      }
      if(ddd)
      {

            ddd.classList.toggle("active");
          let panel = ddd.nextElementSibling as HTMLElement;
          if (panel.style.maxHeight ==="") {
              panel.style.maxHeight = panel.scrollHeight + "px";
              
          } else {
              panel.style.maxHeight = "";
          }
        
      }
    }} id="accord3" className="accordion2"><IonText className="floatleft p-size4">{title}</IonText><IonIcon className="floatright" icon={isdown}></IonIcon></IonButton>
      
<IonList id="panel3" className="panel2">
  
    {data}
  
</IonList>


</IonRow>
);}
    

    export default MyAccord3;


