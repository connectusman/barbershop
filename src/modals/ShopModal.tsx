

import Axios from 'axios';
import { timeSharp } from 'ionicons/icons';
import BookingModal from './BookingModal';
import EmployeeModal from './EmployeeModal';
import { url } from './Global';
import HaircutModal from './HaircutModal';
class ShopModal{
	img:string="";
     id:string="";
     uid:string="";
     nam:string="";
     desc:string="no Desc";
     duration:string="15";
     address:string="paris";
     norating:string="0";
     opening:string="0900";
     closing:string="1700";
     email:string="";
     password:string="123";
     mobile:string="";
     rating:string="0";
     city:string="";
     postal:string="";
     isActive:string="false";

     addData(id:string,uid:string,name:string,desc:string,duration:string,rating:string,address:string,postal:string,city:string,opening:string,closing:string,email:string,
        password:string,mobile:string,img:string,isactive:string,norat:string)
        {
            this.nam=name;
            this.uid=uid;
            this.norating=norat;
            this.isActive=isactive;
            this.id=id;
            this.address=address;
            this.city=city;
            this.email=email;
            this.password=password;
            this.desc=desc;
            this.rating=rating;
            this.duration=duration;
            this.postal=postal;
            this.opening=opening;
            this.closing=closing;
            this.mobile=mobile;
            this.img=img;
        }

        static async getshops(address:string)
        {
            var fd=new FormData();
            fd.append('address',address);
            const resp= await Axios.post(url()+"/getshops",fd,{
                headers: {
                    'content-type': 'multipart/form-data'
                }
            });
            return resp.data;
        }

        

        static async getshop(id:string)
        {
            var fd=new FormData();
            fd.append('id',id);
            const resp= await Axios.post(url()+"/getshop",fd,{
                headers: {
                    'content-type': 'multipart/form-data'
                }
            });
            return resp.data;
        }

        static async createshop(modal:ShopModal)
        {
            var fd=new FormData();
            fd.append('obj',JSON.stringify(modal));
            const resp= await Axios.post(url()+"/createshop",fd,{
                headers: {
                    'content-type': 'multipart/form-data'
                }
            });
            return resp.data;
        }
        static async updateshop(id:string,modal:ShopModal)
        {console.log(JSON.stringify(modal));
            var fd=new FormData();
            fd.append('obj',JSON.stringify(modal));
            fd.append('id',id);
            const resp= await Axios.post(url()+"/updateshop",fd,{
                headers: {
                    'content-type': 'multipart/form-data'
                }
            });
            return resp.data;
        }
        
         
        
}
export default ShopModal;