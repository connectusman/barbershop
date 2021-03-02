import Axios from "axios";
import { url } from "./Global";

class BestyModal{
     id:any;
     nam:any;
     address:any;
     sid:any;
     cid:any;
	 img:any;
   
    addData(id:string,name:string,address:string,sid:string,cid:string,img:string)
{
            this.id=id;
            this.nam=name;
            this.sid=sid;
            this.address=address;
            this.cid=cid;
            this.img=img;
        }        
        
        static async createbesty(modal:BestyModal)
        {
            var fd=new FormData();
            fd.append('obj',JSON.stringify(modal));
            const resp= await Axios.post(url()+"/createbesty",fd,{
                headers: {
                    'content-type': 'multipart/form-data'
                }
            });
            return resp.data;
        }
        static async getbestys(id:string)
        {
            var fd=new FormData();
            fd.append('id',id);
            const resp= await Axios.post(url()+"/getbestys",fd,{
                headers: {
                    'content-type': 'multipart/form-data'
                }
            });
            return resp.data;
        }
        static async updatebesty(sid:string,cid:string)
        {
            var fd=new FormData();
            fd.append('sid',sid);
            fd.append('cid',cid);
            const resp= await Axios.post(url()+"/updatebesty",fd,{
                headers: {
                    'content-type': 'multipart/form-data'
                }
            });
            return resp.data;
        }
}
export default BestyModal;