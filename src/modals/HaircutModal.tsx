import Axios from "axios";
import { url } from "./Global";

class HaircutModal{
     id:string="";
     nam:string="";
     price:string="";
     duration:string="";
     sid:string="";
   
    addData(id:string,name:string,price:string,dur:string,sid:string)
        {
            this.id=id;
            this.nam=name;
            this.price=price;
            this.duration=dur;
            this.sid=sid;
            
        }

        static async createhaircut(modal:HaircutModal)
        {
            var fd=new FormData();
            fd.append('obj',JSON.stringify(modal));
            const resp= await Axios.post(url()+"/createhaircut",fd,{
                headers: {
                    'content-type': 'multipart/form-data'
                }
            });
            return resp.data;
        }
        static async updatehaircut(id:string,modal:HaircutModal)
        {console.log(id);
            var fd=new FormData();
            fd.append('obj',JSON.stringify(modal));
            fd.append('id',id);
            const resp= await Axios.post(url()+"/updatehaircut",fd,{
                headers: {
                    'content-type': 'multipart/form-data'
                }
            });
            return resp.data;
        }
        static async gethaircuts(id:string)
        {

            var fd=new FormData();
            fd.append('id',id);
            const resp= await Axios.post(url()+"/gethaircuts",fd,{
                headers: {
                    'content-type': 'multipart/form-data'
                }
            });
            return resp.data;
        }
        static async delhaircut(id:string)
        {

            var fd=new FormData();
            fd.append('id',id);
            const resp= await Axios.post(url()+"/delhaircut",fd,{
                headers: {
                    'content-type': 'multipart/form-data'
                }
            });
            return resp.data;
        }
}
export default HaircutModal;