
import { environment } from '../../environments/environment';
export const HOME = window.location.origin;

 export const URL:string = environment.apiUrl


// let params = new URLSearchParams();
// params.set('city',localStorage.getItem('city') );
// let BASEURL = URL + "/all_auth/"
// let NEWBASEURL = URL + "/api/v2/"
//
// //Citrus Sandbox's URLS - Wallet Service Integration Testing
// let CW_BASE_URL = "https://sandboxadmin.citruspay.com";
// let CW_API_ENDPOINT = "/service/um/find_or_create/user/";
//
// MSG91 OTP SERVICE PROVIDER URL
//  let OTP_BASE_URL = 'https://sendotp.msg91.com/api/';

 // export const MEDIAURL = URL;
 // const AUTHURL = URL + "/api/rest-auth/";
 // const AUTH_USER_BASE_URL = URL + '/api/users/';

 export const URLS = {


   MUSICTRACK:URL+"/musictrack/",
   GENRE:URL+"/genre/",
   MUSICPAGE:URL+"/musictrack/?page=",
   MUSICSEARCH:URL+"/musictrack/?search="

 };
