import Axios from "axios";
import BestyModal from "./BestyModal";
import { url } from "./Global";


class CustomerModal{
     id:string="";
    uid:string="";
     nam:string="";
     type:string="";
     username:string="";
     email:string="";
     password:string="123";
     loginas="customer"
     mobile:string="";
     blacklister:string="false";
     img:string="";

    
    addData(id:string,uid:string,name:string,type:string,email:string,username:string,password:string,mobile:string,blacklister:string,img:string)
        {
            this.id=id;
            this.nam=name;
            this.email=email;
            this.password=password;
            this.type=type;
            this.username=username;
            this.mobile=mobile;
            this.blacklister=blacklister;
            this.img=img;
        }

        static async getcustomer(id:string)
        {
            var fd=new FormData();
            fd.append('id',id);
            const resp= await Axios.post(url()+"/getcustomer",fd,{
                headers: {
                    'content-type': 'multipart/form-data'
                }
            });
            return resp.data;
        }
        static async createcustomer(modal:CustomerModal)
        {
            var fd=new FormData();
            fd.append('obj',JSON.stringify(modal));
            const resp= await Axios.post(url()+"/createcustomer",fd,{
                headers: {
                    'content-type': 'multipart/form-data'
                }
            });
            return resp.data;
        }
        static async updatecustomer(id:string,modal:CustomerModal)
        {console.log(id);
            var fd=new FormData();
            fd.append('obj',JSON.stringify(modal));
            fd.append('id',id);
            const resp= await Axios.post(url()+"/updatecustomer",fd,{
                headers: {
                    'content-type': 'multipart/form-data'
                }
            });
            return resp.data;
        }
      
        
}
export default CustomerModal;