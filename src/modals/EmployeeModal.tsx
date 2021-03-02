import Axios from "axios";
import { url } from "./Global";
import ShopModal from "./ShopModal";

class EmployeeModal{
    id:string="";
    nam:string="";
     uid:string="";
     type:string="Regular";
     holiday:string="true";
     sid:string="";
     duration:string="30";
     address:string="";
     opening:string="0900";
     closing:string="1700";
     email:string="";
     password:string="admin123";
     mobile:string="";
     img:string="";
     fnam:string="";

    
    addData(id:string,uid:string,name:string,fname:string,type:string,holiday:string,sid:string,duration:string,address:string,opening:string,closing:string,email:string,
        password:string,mobile:string,img:string)
        {
            this.id=id;
            this.uid=uid;
            this.type=type;
            this.holiday=holiday;
            this.sid=sid;
           this .nam=name;
           this.fnam=fname;
            this.address=address;
            this.email=email;
            this.password=password;
            this.opening=opening;
            this.duration=duration;
            this.closing=closing;
            this.mobile=mobile;
            this.img=img;
        }
        static async createemployee(modal:EmployeeModal)
        {
            var fd=new FormData();
            fd.append('obj',JSON.stringify(modal));
            const resp= await Axios.post(url()+"/createemployee",fd,{
                headers: {
                    'content-type': 'multipart/form-data'
                }
            });
            return resp.data;
        }
        static async updateemployee(id:string,modal:EmployeeModal)
        {console.log(id);
            var fd=new FormData();
            fd.append('obj',JSON.stringify(modal));
            fd.append('id',id);
            const resp= await Axios.post(url()+"/updateemployee",fd,{
                headers: {
                    'content-type': 'multipart/form-data'
                }
            });
            return resp.data;
        }
        
        static async getemployees(id:string,time:string)
        {

            var fd=new FormData();
            fd.append('id',id);
            fd.append('time',time);
            const resp= await Axios.post(url()+"/getemployees",fd,{
                headers: {
                    'content-type': 'multipart/form-data'
                }
            });
            return resp.data;
        }
        static async getemployeesbysid(id:string)
        {

            var fd=new FormData();
            fd.append('id',id);
            const resp= await Axios.post(url()+"/getemployeesbysid",fd,{
                headers: {
                    'content-type': 'multipart/form-data'
                }
            });
            return resp.data;
        }

        static async getemployee(id:string)
        {

            var fd=new FormData();
            fd.append('id',id);
            const resp= await Axios.post(url()+"/getemployee",fd,{
                headers: {
                    'content-type': 'multipart/form-data'
                }
            });
            return resp.data;
        }

        static async delemployee(id:string)
        {

            var fd=new FormData();
            fd.append('id',id);
            const resp= await Axios.post(url()+"/delemployee",fd,{
                headers: {
                    'content-type': 'multipart/form-data'
                }
            });
            return resp.data;
        }
        
}
export default EmployeeModal;