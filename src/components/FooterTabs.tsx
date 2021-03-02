import React from 'react';
import { IonFooter, IonIcon, IonTabBar, IonTabButton, IonToolbar } from "@ionic/react";
import { albums, chatbubble, home, person, search } from 'ionicons/icons';

export const customertabs=(<IonFooter>
    <IonTabBar className="tabcolor">
    <IonTabButton className="tabbuttoncolor" href="/home" tab="home">
            <IonIcon icon={home} />
          </IonTabButton>
    
          <IonTabButton className="tabbuttoncolor" href="/search" tab="search">
            <IonIcon icon={search} />
          </IonTabButton>
    
          <IonTabButton className="tabbuttoncolor" href="/pastbookings" tab="order">
            <IonIcon icon={albums} />
          </IonTabButton>
    
          <IonTabButton className="tabbuttoncolor" href="/editcustomer" tab="account">
            <IonIcon icon={person}/>
          </IonTabButton>
          </IonTabBar>
</IonFooter>);
export const eshoptabs=(<IonFooter>
  <IonTabBar className="tabcolor">
  <IonTabButton className="tabbuttoncolor" href="/eshophome" tab="home">
          <IonIcon icon={home} />
        </IonTabButton>
  
        <IonTabButton className="tabbuttoncolor" href="/ehaircutap" tab="search">
          <IonIcon icon={search} />
        </IonTabButton>
  
        <IonTabButton className="tabbuttoncolor" href="/ebooking" tab="order">
          <IonIcon icon={chatbubble} />
        </IonTabButton>
  
        <IonTabButton className="tabbuttoncolor" href="/eeditshop" tab="account">
          <IonIcon icon={person}/>
        </IonTabButton>
        </IonTabBar>
</IonFooter>);
export const bshoptabs=(<IonFooter>
  <IonTabBar className="tabcolor">
  <IonTabButton className="tabbuttoncolor" href="/bshophome" tab="home">
          <IonIcon icon={home} />
        </IonTabButton>
  
        <IonTabButton className="tabbuttoncolor" href="/beditshop" tab="account">
          <IonIcon icon={person}/>
        </IonTabButton>
        </IonTabBar>
</IonFooter>);
export const shoptabs=(<IonFooter>
    <IonTabBar className="tabcolor">
    <IonTabButton className="tabbuttoncolor" href="/shophome" tab="home">
            <IonIcon icon={home} />
          </IonTabButton>
    
          <IonTabButton className="tabbuttoncolor" href="/haircutap" tab="search">
            <IonIcon icon={search} />
          </IonTabButton>
    
          <IonTabButton className="tabbuttoncolor" href="/booking" tab="order">
            <IonIcon icon={chatbubble} />
          </IonTabButton>
    
          <IonTabButton className="tabbuttoncolor" href="/editshop" tab="account">
            <IonIcon icon={person}/>
          </IonTabButton>
          </IonTabBar>
</IonFooter>);
export const admintabs=(<IonFooter>
  <IonTabBar className="tabcolor">
  <IonTabButton  className="tabbuttoncolor" href="/adminhome" tab="home">
          <IonIcon icon={home} />
        </IonTabButton>
  
        <IonTabButton className="tabbuttoncolor" href="/searchentity" tab="search">
          <IonIcon icon={search} />
        </IonTabButton>
  
        <IonTabButton className="tabbuttoncolor" href="/addentity" tab="order">
          <IonIcon icon={chatbubble} />
        </IonTabButton>
  
        <IonTabButton className="tabbuttoncolor" href="/adminaccount" tab="account">
          <IonIcon icon={person}/>
        </IonTabButton>
        </IonTabBar>
</IonFooter>);