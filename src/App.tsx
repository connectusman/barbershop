import React from 'react';
import { Redirect, Route, useHistory, withRouter } from 'react-router-dom';
import { IonApp, IonIcon, IonRouterOutlet, IonTabBar, IonTabButton, IonTabs, useIonViewDidEnter } from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';

/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css';

/* Basic CSS for apps built with Ionic */
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';

/* Optional CSS utils that can be commented out */
import '@ionic/react/css/padding.css';
import '@ionic/react/css/float-elements.css';
import '@ionic/react/css/text-alignment.css';
import '@ionic/react/css/text-transformation.css';
import '@ionic/react/css/flex-utils.css';
import '@ionic/react/css/display.css';

/* Theme variables */
import './theme/style.css';
import './theme/variables.css';
import MainHome from './pages/MainHome';
import SearchResult from './pages/customer/SearchResult';
import Login from './pages/Login';
import { albums, chatbubble, home, person, search } from 'ionicons/icons';
import ShopRegForm from './pages/shop/ShopRegForm';
import ShopRegThank from './pages/shop/ShopRegThank';
import Test3 from './pages/Test3';
import BarberMgmnt from './pages/shop/BarberMgmnt';
import HaircutMg from './pages/shop/HaircutMg';
import Bbshopinfo from './pages/shop/BbshopInfo';
import RegCustomer from './pages/customer/RegCustomer';
import { isPlatform, setupConfig } from '@ionic/react';
import ShopModal from './modals/ShopModal';
import EditShop from './pages/shop/EditShop';
import Shophome from './pages/shop/Shophome';
import EmployeeModal from './modals/EmployeeModal';
import CustomerModal from './modals/CustomerModal';
import BookingModal from './modals/BookingModal';
import AddHaircut from './pages/shop/AddHaircut';
import AddBarbar from './pages/shop/AddBarbar';
import EmployeeCard from './pages/shop/EmployeeCard';
import Booking from './pages/shop/Booking';
import PastBookings from './pages/customer/PastBookings';
import Identification from './pages/customer/Identification';
import CustomerCard from './pages/CustomerCard';
import BookingStep1 from './pages/customer/BookingStep1';
import BookingStep2 from './pages/customer/BookingStep2';
import ImageUpload from './pages/ImageUpload';
import SelectedShop from './pages/customer/SelectedShop';
import HaircutAp from './pages/shop/HaircutAp';
import Home from './pages/customer/Home';
import BookingDetails from './pages/BookingDetails';
import Search from './pages/customer/Search';
import PastOrderReview from './pages/customer/PastOrderReview';
import CancelBooking from './pages/customer/Cancelbooking';
import EditCustomer from './pages/customer/EditCustomer';
import MakeBooking from './pages/shop/MakeBooking';
import HaircutModal from './modals/HaircutModal';
import SearchEntity from './pages/admin/SearchEntity';
import ShopCard from './pages/admin/ShopCard';
import FreelancerCard from './pages/admin/FreelanceCard';
import AdminAccount from './pages/admin/AdminAccount';
import AdminAdd from './pages/admin/AdminAdd';
import EntityAdd from './pages/admin/EntityAdd';
import AddShop from './pages/admin/AddShop';
import AddFreelancer from './pages/admin/AddFreelancer';
import { lang } from './modals/Helper';
import Stats from './pages/shop/Stats';
import ForgotPass from './pages/ForgotPass';
import Reviewit from './pages/customer/Reviewit';
import EBbshopInfo from './pages/employee/EBbshopInfo';
import EBooking from './pages/employee/EBooking';
import EEditShop from './pages/employee/EEditShop';
import EHaircutAp from './pages/employee/EHaircutAp';
import EShophome from './pages/employee/EShophome';
import BBooking from './pages/barber/BBooking';
import BShophome from './pages/barber/BShophome';
import BEditShop from './pages/barber/BEditShop';
import EMakeBooking from './pages/employee/EMakeBooking';
import AddLinkFreelancer from './pages/shop/AddLinkFreelancer';
import LinkFreelancer from './pages/shop/LinkFreelancer';
import About from './pages/shop/About';



const App: React.FC = () => {
  
  setupConfig({
    mode: 'ios'
  });
  const history = useHistory();
  const backToHome = () => {
    history.push("/home");
  };
  
  var shopmodal=new ShopModal();
  var employeemodal=new EmployeeModal();
  var customermodal=new CustomerModal();
  var bookingmodal=new BookingModal();
  var tempmodal:any[]=[];
  tempmodal[7]=0;
  tempmodal[0]=false;
  //0:islogin
  //1:isshop
  //2:isbookingprocess
  //3:selectedIndex
  //4:
  //5:
  //6:segment
  //7:lang

  return(<IonApp >
<IonReactRouter>  
<IonRouterOutlet>
<Route path="/addfreelancer"  exact={true} >
        <AddFreelancer tempstr={tempmodal} bookM={bookingmodal} custM={customermodal} shopM={shopmodal} empM={employeemodal}></AddFreelancer>
      </Route>

      <Route path="/ebbshopinfo"  exact={true} >
        <EBbshopInfo tempstr={tempmodal} bookM={bookingmodal} custM={customermodal} shopM={shopmodal} empM={employeemodal}></EBbshopInfo>
      </Route>
      <Route path="/ebooking"  exact={true} >
        <EBooking tempstr={tempmodal} bookM={bookingmodal} custM={customermodal} shopM={shopmodal} empM={employeemodal}></EBooking>
      </Route>
      <Route path="/bbooking"  exact={true} >
        <BBooking tempstr={tempmodal} bookM={bookingmodal} custM={customermodal} shopM={shopmodal} empM={employeemodal}></BBooking>
      </Route>
      <Route path="/eeditshop"  exact={true} >
        <EEditShop tempstr={tempmodal} bookM={bookingmodal} custM={customermodal} shopM={shopmodal} empM={employeemodal}></EEditShop>
      </Route>
      <Route path="/beditshop"  exact={true} >
        <BEditShop tempstr={tempmodal} bookM={bookingmodal} custM={customermodal} shopM={shopmodal} empM={employeemodal}></BEditShop>
      </Route>
      <Route path="/ehaircutap"  exact={true} >
        <EHaircutAp tempstr={tempmodal} bookM={bookingmodal} custM={customermodal} shopM={shopmodal} empM={employeemodal}></EHaircutAp>
      </Route>
      <Route path="/eshophome"  exact={true} >
        <EShophome tempstr={tempmodal} bookM={bookingmodal} custM={customermodal} shopM={shopmodal} empM={employeemodal}></EShophome>
      </Route>
      <Route path="/bshophome"  exact={true} >
        <BShophome tempstr={tempmodal} bookM={bookingmodal} custM={customermodal} shopM={shopmodal} empM={employeemodal}></BShophome>
      </Route>

      <Route path="/addshop"  exact={true} >
        <AddShop tempstr={tempmodal} bookM={bookingmodal} custM={customermodal} shopM={shopmodal} empM={employeemodal}></AddShop>
      </Route>
      <Route path="/entityadd"  exact={true} >
        <EntityAdd tempstr={tempmodal} bookM={bookingmodal} custM={customermodal} shopM={shopmodal} empM={employeemodal}></EntityAdd>
      </Route>
      <Route path="/adminhome"  exact={true} >
        <AdminAdd tempstr={tempmodal} bookM={bookingmodal} custM={customermodal} shopM={shopmodal} empM={employeemodal}></AdminAdd>
      </Route>
      <Route path="/adminaccount"  exact={true} >
        <AdminAccount tempstr={tempmodal} bookM={bookingmodal} custM={customermodal} shopM={shopmodal} empM={employeemodal}></AdminAccount>
      </Route>
      <Route path="/freelancecard"  exact={true} >
        <FreelancerCard tempstr={tempmodal} bookM={bookingmodal} custM={customermodal} shopM={shopmodal} empM={employeemodal}></FreelancerCard>
      </Route>
      <Route path="/shopcard"  exact={true} >
        <ShopCard tempstr={tempmodal} bookM={bookingmodal} custM={customermodal} shopM={shopmodal} empM={employeemodal}></ShopCard>
      </Route>
      <Route path="/searchentity"  exact={true} >
        <SearchEntity tempstr={tempmodal} bookM={bookingmodal} custM={customermodal} shopM={shopmodal} empM={employeemodal}></SearchEntity>
      </Route>
      <Route path="/booking1"  exact={true} >
        <BookingStep1 tempstr={tempmodal} bookM={bookingmodal} custM={customermodal} shopM={shopmodal} empM={employeemodal}></BookingStep1>
      </Route>
      <Route path="/booking2"  exact={true} >
        <BookingStep2 tempstr={tempmodal} bookM={bookingmodal} custM={customermodal} shopM={shopmodal} empM={employeemodal}></BookingStep2>
      </Route>
      <Route path="/selectedshop"  exact={true} >
        <SelectedShop tempstr={tempmodal} bookM={bookingmodal} custM={customermodal} shopM={shopmodal} empM={employeemodal}></SelectedShop>
      </Route>
        <Route path="/searchr"  exact={true} >
        <SearchResult tempstr={tempmodal} bookM={bookingmodal} custM={customermodal} shopM={shopmodal} empM={employeemodal}></SearchResult>
      </Route>
      <Route path="/cancelbooking"  exact={true} >
        <CancelBooking tempstr={tempmodal} bookM={bookingmodal} custM={customermodal} shopM={shopmodal} empM={employeemodal}></CancelBooking>
      </Route>
      <Route path="/editcustomer"  exact={true} >
        <EditCustomer tempstr={tempmodal} bookM={bookingmodal} custM={customermodal} shopM={shopmodal} empM={employeemodal}></EditCustomer>
      </Route>
      
        <Route path="/home" exact={true} >
        <Home tempstr={tempmodal} bookM={bookingmodal} custM={customermodal} shopM={shopmodal} empM={employeemodal}></Home>
      </Route>
      <Route path="/search"  exact={true} >
          <Search tempstr={tempmodal} bookM={bookingmodal} custM={customermodal} shopM={shopmodal} empM={employeemodal}></Search>
      </Route>
      <Route path="/review"  exact={true} >
          <PastOrderReview tempstr={tempmodal} bookM={bookingmodal} custM={customermodal} shopM={shopmodal} empM={employeemodal}></PastOrderReview>
      </Route>
      <Route path="/identity" exact={true} >
        <Identification tempstr={tempmodal} bookM={bookingmodal} custM={customermodal} shopM={shopmodal} empM={employeemodal}></Identification>
      </Route>
      <Route path="/reviewit"  exact={true} >
        <Reviewit tempstr={tempmodal} bookM={bookingmodal} custM={customermodal} shopM={shopmodal} empM={employeemodal}></Reviewit>
      </Route>
      <Route path="/about"  exact={true} >
        <About tempstr={tempmodal} bookM={bookingmodal} custM={customermodal} shopM={shopmodal} empM={employeemodal}></About>
      </Route>
      <Route path="/addlinkfreelancer"  exact={true} >
        <AddLinkFreelancer tempstr={tempmodal} bookM={bookingmodal} custM={customermodal} shopM={shopmodal} empM={employeemodal}></AddLinkFreelancer>
      </Route>
      <Route path="/linkfreelancer"  exact={true} >
        <LinkFreelancer tempstr={tempmodal} bookM={bookingmodal} custM={customermodal} shopM={shopmodal} empM={employeemodal}></LinkFreelancer>
      </Route>
      <Route path="/shophome"  exact={true} >
        <Shophome tempstr={tempmodal} bookM={bookingmodal} custM={customermodal} shopM={shopmodal} empM={employeemodal}></Shophome>
      </Route>
      <Route path="/haircutap" exact={true} >
        <HaircutAp tempstr={tempmodal} bookM={bookingmodal} custM={customermodal} shopM={shopmodal} empM={employeemodal}></HaircutAp> 
      </Route>
      <Route path="/makeBooking"  exact={true} >
        <MakeBooking tempstr={tempmodal} bookM={bookingmodal} custM={customermodal} shopM={shopmodal} empM={employeemodal}></MakeBooking>
      </Route>
      <Route path="/emakeBooking"  exact={true} >
        <EMakeBooking tempstr={tempmodal} bookM={bookingmodal} custM={customermodal} shopM={shopmodal} empM={employeemodal}></EMakeBooking>
      </Route>
      <Route path="/forgotp"  exact={true} >
        <ForgotPass tempstr={tempmodal} bookM={bookingmodal} custM={customermodal} shopM={shopmodal} empM={employeemodal}></ForgotPass>
      </Route>
      <Route path="/editshop"  exact={true} >
        <EditShop tempstr={tempmodal} bookM={bookingmodal} custM={customermodal} shopM={shopmodal} empM={employeemodal}></EditShop>
      </Route>
      <Route path="/addbarber"  exact={true} >
        <AddBarbar tempstr={tempmodal} bookM={bookingmodal} custM={customermodal} shopM={shopmodal} empM={employeemodal}></AddBarbar>
      </Route>
      <Route path="/employeecard" exact={true} >
        <EmployeeCard tempstr={tempmodal} bookM={bookingmodal} custM={customermodal} shopM={shopmodal} empM={employeemodal}></EmployeeCard>
      </Route>
      <Route path="/pastbookings"  exact={true} >
        <PastBookings tempstr={tempmodal} bookM={bookingmodal} custM={customermodal} shopM={shopmodal} empM={employeemodal}></PastBookings>
      </Route>
      <Route path="/addhaircut" exact={true} >
        <AddHaircut tempstr={tempmodal} bookM={bookingmodal} custM={customermodal} shopM={shopmodal} empM={employeemodal}></AddHaircut>
        </Route>
      <Route path="/Barbermanagement"  exact={true} >
        <BarberMgmnt tempstr={tempmodal} bookM={bookingmodal} custM={customermodal} shopM={shopmodal} empM={employeemodal}></BarberMgmnt>
      </Route>
      <Route path="/Haircutmanagement"  exact={true} >
        <HaircutMg tempstr={tempmodal} bookM={bookingmodal} custM={customermodal} shopM={shopmodal} empM={employeemodal}></HaircutMg>
      </Route>
      <Route path="/bbshopinfo"  exact={true} >
        <Bbshopinfo tempstr={tempmodal} bookM={bookingmodal} custM={customermodal} shopM={shopmodal} empM={employeemodal}></Bbshopinfo>
      </Route>
    
    <Route exact path="/" render={() => <Redirect to="/mainhome" />} />
      <Route path="/mainhome" exact={true} >
        <MainHome tempstr={tempmodal} bookM={bookingmodal} custM={customermodal} shopM={shopmodal} empM={employeemodal}></MainHome>
      </Route>
      <Route path="/clogin" exact={true} >
        <Login tempstr={tempmodal} bookM={bookingmodal} custM={customermodal} shopM={shopmodal} empM={employeemodal}></Login> 
      </Route>
      <Route path="/bdetails" exact={true} >
        <BookingDetails tempstr={tempmodal} bookM={bookingmodal} custM={customermodal} shopM={shopmodal} empM={employeemodal}></BookingDetails> 
      </Route>
      <Route path="/stats" exact={true} >
        <Stats tempstr={tempmodal} bookM={bookingmodal} custM={customermodal} shopM={shopmodal} empM={employeemodal}></Stats>
      </Route>
      
      <Route path="/shopregform"  exact={true} >
        <ShopRegForm tempstr={tempmodal} bookM={bookingmodal} custM={customermodal} shopM={shopmodal} empM={employeemodal}></ShopRegForm>
      </Route>
      <Route path="/shopregthank"  exact={true} >
        <ShopRegThank ></ShopRegThank>
      </Route>
      
      
      <Route path="/regcustomer"  exact={true} >
        <RegCustomer tempstr={tempmodal} bookM={bookingmodal} custM={customermodal} shopM={shopmodal} empM={employeemodal}></RegCustomer>
      </Route>
      
      <Route path="/booking"  exact={true} >
          <Booking tempstr={tempmodal} bookM={bookingmodal} custM={customermodal} shopM={shopmodal} empM={employeemodal}></Booking>
      </Route>
      
      
      
     
     
      <Route path="/customercard" exact={true} >
        <CustomerCard tempstr={tempmodal} bookM={bookingmodal} custM={customermodal} shopM={shopmodal} empM={employeemodal}></CustomerCard>
      </Route>
     
      <Route path="/iupload" component={ImageUpload} exact={true} />
      
      <Route path="/test3" component={Test3} exact={true} />
      </IonRouterOutlet>
    </IonReactRouter>
  </IonApp>
);
  }
export default App;
