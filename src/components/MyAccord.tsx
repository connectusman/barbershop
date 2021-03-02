

import { IonApp, IonAvatar, IonButton, IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle, IonCol, IonContent, IonGrid, IonHeader, IonIcon, IonItem, IonItemDivider, IonItemOption, IonItemOptions, IonItemSliding, IonLabel, IonList, IonRow, IonSegment, IonSegmentButton, IonText, IonTitle, IonToolbar, useIonViewDidEnter, useIonViewWillEnter } from '@ionic/react';
import { caretDown, caretForward } from 'ionicons/icons';

import React, { useState } from 'react';



const MyAccord: React.FC<any>=({title,data})=> {
   
   const [isdown, setIsdown] = useState(caretForward);
    // useIonViewDidEnter(()=>{
    //   const ddd=document.getElementById("accord1");
    //   if(ddd?.classList.contains("active"))
    //   {
    //     let panel = ddd.nextElementSibling as HTMLElement;
    //     panel.style.maxHeight = "";
    //           setIsdown(caretForward);
    //   }
    // });
   
    
    return (

  <IonRow>
    <IonButton onClick={()=>{
      let acc = document.getElementsByClassName("accordion") ;
      const ddd=document.getElementById("accord1");
      if(ddd)
      {
          
         

             
              console.log("hukm");

            ddd.classList.toggle("active");
          let panel = ddd.nextElementSibling as HTMLElement;
          if (panel.style.maxHeight ==="") {
              panel.style.maxHeight = panel.scrollHeight + "px";
              setIsdown(caretDown);
          } else {
              panel.style.maxHeight = "";
              setIsdown(caretForward);
          }
        
      }
    }} id="accord1" className="accordion"><IonText className="floatleft p-size4">{title}</IonText><IonIcon className="floatright" icon={isdown}></IonIcon></IonButton>
      
<IonList id="panel1" className="panel">
  
    {data}
  
</IonList>


</IonRow>
);}
    

    export default MyAccord;


