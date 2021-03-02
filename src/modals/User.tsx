import Axios from "axios";
import { url } from "./Global";

class User{
     id:any;
     type:any;
     uid:any;

   
    addData(id:string,type:string,uid:string)
        {
            this.id=id;
            this.type=type;
            this.uid=uid;
        }  
        
        static async createuser(obj:User)
        {

            var fd=new FormData();

            fd.append('obj',JSON.stringify(obj));
            const resp= await Axios.post(url()+"/createuser",fd,{
                headers: {
                    'content-type': 'multipart/form-data'
                }
            });
            return resp.data;
        }
        static async getuser(uid:string)
        {

            var fd=new FormData();
            fd.append('id',uid);
            const resp= await Axios.post(url()+"/getuser",fd,{
                headers: {
                    'content-type': 'multipart/form-data'
                }
            });
            return resp.data;
        }
        static async firebasecreateuser(email:string,password:string)
        {

            var fd=new FormData();
            fd.append('email',email);
            fd.append('password',password);
            const resp= await Axios.post(url()+"/firebasecreateuser",fd,{
                headers: {
                    'content-type': 'multipart/form-data'
                }
            });
            return resp.data;
        }
        
        static async firebasesignin(email:string,password:string)
        {

            var fd=new FormData();
            fd.append('email',email);
            fd.append('password',password);
            const resp= await Axios.post(url()+"/firebasesignin",fd,{
                headers: {
                    'content-type': 'multipart/form-data'
                }
            });
            return resp.data;
        }
        static async firebaseupdatepassword(email:string,pass:string,npass:string)
        {

            var fd=new FormData();
            fd.append('email',email);
            fd.append('password',pass);
            fd.append('npass',npass);
            const resp= await Axios.post(url()+"/firebaseupdatepassword",fd,{
                headers: {
                    'content-type': 'multipart/form-data'
                }
            });
            return resp.data;
        }
        static async firebaseupdateemail(email:string,password:string,newemail:string)
        {

            var fd=new FormData();
            fd.append('email',email);
            fd.append('password',password);
            fd.append('newemail',newemail);
            const resp= await Axios.post(url()+"/firebaseupdateemail",fd,{
                headers: {
                    'content-type': 'multipart/form-data'
                }
            });
            return resp.data;
        }
        static async firebasedelete(email:string,password:string)
        {

            var fd=new FormData();
            fd.append('email',email);
            fd.append('password',password);
            const resp= await Axios.post(url()+"/firebasedelete",fd,{
                headers: {
                    'content-type': 'multipart/form-data'
                }
            });
            return resp.data;
        }
        
        
        
}
export default User;