
import Axios from 'axios';
import CustomerModal from './CustomerModal';
import EmployeeModal from './EmployeeModal';
import { url } from './Global';
import HaircutModal from './HaircutModal';
import {  } from './Helper';
import ShopModal from './ShopModal';

class BookingModal{
     id:string="";
	 hname:string="";
	 hprice:string="";
     datetime:string="";
     comment:string="";
     review:string="N/A";
     isComplete:string="false";
	 eid:string="";
     ename:string="";
	cid:string="";
	cname:string="";
	cmobile:string="";
	caddress:string="";
    sid:string="";
    simg:string="";
    countno:string="0";
    sname:string="";
    cimg:string="";
    revdate:string="";
    revrat:string="0";
	
    
    addData(id:string,hname:string,hprice:string,datetime:string,comment:string,review:string,eid:string,ename:string,cid:string,
        cname:string,cmobile:string,caddress:string,sid:string,simg:string,cimg:string,iscomp:string,count:string,revd:string,revr:string,snam:string)
        {
            this.simg=simg;
            this.cimg=cimg;
            this.id=id;
            this.countno=count;
            this.hname=hname;
            this.hprice=hprice;
            this.datetime=datetime;
            this.comment=comment;
            this.review=review;
            this.eid=eid;
            this.isComplete=iscomp;
            this.ename=ename;
            this.cid=cid;
            this.cname=cname;
            this.cmobile=cmobile;
            this.caddress=caddress;
            this.sid=sid;
            this.revdate=revd;
            this.revrat=revr;
            this.sname=snam;

        }
        static async getuniquecustomers(sid:string)
        {
            var fd=new FormData();
            fd.append('sid',sid);
            const resp= await Axios.post(url()+"/getuniquecustomers",fd,{
                headers: {
                    'content-type': 'multipart/form-data'
                }
            });
            return resp.data;
        }
        static async getuniquecustomersofemp(eid:string)
        {
            var fd=new FormData();
            fd.append('eid',eid);
            const resp= await Axios.post(url()+"/getuniquecustomersofemp",fd,{
                headers: {
                    'content-type': 'multipart/form-data'
                }
            });
            return resp.data;
        }
		static async getbookingsbysid(sid:string,sdtime:string,edtime:string,iscomp:string)
        {

            var fd=new FormData();
            fd.append('sid',sid);
            fd.append('stime',sdtime);
            fd.append('etime',edtime);
            fd.append('iscomp',iscomp);
            const resp= await Axios.post(url()+"/getbookingsbysid",fd,{
                headers: {
                    'content-type': 'multipart/form-data'
                }
            });
            return resp.data;
        }
        static async getBookingbyeid(eid:string,sdate:string,edate:string,iscomp:string)
        {
            var fd=new FormData();
            fd.append('eid',eid);
            fd.append('stime',sdate);
            fd.append('etime',edate);
            fd.append('iscomp',iscomp);
            const resp= await Axios.post(url()+"/getbookingsbyeid",fd,{
                headers: {
                    'content-type': 'multipart/form-data'
                }
            });
            return resp.data;
        }

        static async getcountbysid(sid:string)
        {

            var fd=new FormData();
            fd.append('sid',sid);
            const resp= await Axios.post(url()+"/getcountbysid",fd,{
                headers: {
                    'content-type': 'multipart/form-data'
                }
            });
            return resp.data;
        }
        static async getbookingsbycust(sid:string)
        {

            var fd=new FormData();
            fd.append('sid',sid);
            const resp= await Axios.post(url()+"/getbookingsbycust",fd,{
                headers: {
                    'content-type': 'multipart/form-data'
                }
            });
            return resp.data;
        }
        static async getbookingsbydate(sid:string)
        {

            var fd=new FormData();
            fd.append('sid',sid);
            const resp= await Axios.post(url()+"/getbookingsbydate",fd,{
                headers: {
                    'content-type': 'multipart/form-data'
                }
            });
            return resp.data;
        }

        static async getbookingsbycid(cid:string,sdtime:string,edtime:string,iscomp:string)
        {

            var fd=new FormData();
            fd.append('cid',cid);
            fd.append('stime',sdtime);
            fd.append('etime',edtime);
            fd.append('iscomp',iscomp);
            const resp= await Axios.post(url()+"/getbookingsbycid",fd,{
                headers: {
                    'content-type': 'multipart/form-data'
                }
            });
            return resp.data;
        }

        static async getbookingsbycsid(cid:string,sid:string,sdtime:string,edtime:string)
        {

            var fd=new FormData();
            fd.append('cid',cid);
            fd.append('stime',sdtime);
            fd.append('etime',edtime);
            fd.append('sid',sid);
            const resp= await Axios.post(url()+"/getbookingsbycsid",fd,{
                headers: {
                    'content-type': 'multipart/form-data'
                }
            });
            return resp.data;
        }

        static async getbookingsbyceid(cid:string,eid:string,sdtime:string,edtime:string)
        {

            var fd=new FormData();
            fd.append('cid',cid);
            fd.append('stime',sdtime);
            fd.append('etime',edtime);
            fd.append('eid',eid);
            const resp= await Axios.post(url()+"/getbookingsbyceid",fd,{
                headers: {
                    'content-type': 'multipart/form-data'
                }
            });
            return resp.data;
        }
        
        static async delbooking(id:string)
        {

            var fd=new FormData();
            fd.append('id',id);
            const resp= await Axios.post(url()+"/deletebooking",fd,{
                headers: {
                    'content-type': 'multipart/form-data'
                }
            });
            return resp.data;
        }

        static async getbooking(id:string)
        {

            var fd=new FormData();
            fd.append('id',id);
            const resp= await Axios.post(url()+"/getbooking",fd,{
                headers: {
                    'content-type': 'multipart/form-data'
                }
            });
            return resp.data;
        }

        static async updatebooking(id:string,obj:BookingModal)
        {
            console.log(JSON.stringify(obj));
            var fd=new FormData();
            fd.append('id',id);
            fd.append('obj',JSON.stringify(obj));
            const resp= await Axios.post(url()+"/updatebooking",fd,{
                headers: {
                    'content-type': 'multipart/form-data'
                }
            });
            return resp.data;
        }

        static async createbooking(obj:BookingModal)
        {

            var fd=new FormData();
            fd.append('obj',JSON.stringify(obj));
           
            const resp= await Axios.post(url()+"/createbooking",fd,{
                headers: {
                    'content-type': 'multipart/form-data'
                }
            });
            return resp.data;
        }
		

        
        
}
export default BookingModal;