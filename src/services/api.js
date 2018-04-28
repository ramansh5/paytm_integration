import config from '../config';
import { getAccessToken } from '../services/authService';
 


class Api {
  constructor() { }

  login(url,data) {
    data = this.serialize(data);
    return fetch(config.api + url, {
      method: "POST",
      'Content-Type': 'application/x-www-form-urlencoded; charset=utf-8',
      body: data
    })
     .then(response => response.json())
    .catch((error) => 
    { 
      console.log('error from login', error)
     });
  }


  post(url,data) {
    return fetch(config.api + url, {
      
      method: "POST",
       headers: {
    'Accept': 'application/json, text/plain, */*',
    'Content-Type': 'application/json',
    'Authorization': 'Bearer '+ getAccessToken()
  },
       
      body: JSON.stringify(data )
     
    })
    .then(response => response.json())
    .catch(() => 
    { 
      //console.log('error', error)
     });
  }


  postFile(url,data) {
    return fetch(config.api + url, {
      contentType: false,
      method: "POST",
      body:  data 
     
    })
    .then(response => response.json())
    .catch(() => 
    { 
      //console.log('error', error)
     });
  }


  serialize (obj) {
    let str = [];
    for(let p in obj)
      if (obj.hasOwnProperty(p)) {
        str.push(encodeURIComponent(p) + "=" + encodeURIComponent(obj[p]));
      }
    return str.join("&");
  }
  get(url) {
    // let bearer = JSON.stringify ('Bearer ' + store.getState().auth.info)
    // 'Authorization': bearer,
    //console.log(data);
    return fetch(config.api + url, {
        method: "GET",

        })
        .then(response => response.json())
        .catch(() => { 
          //console.log('error', error);
         });
    }

    getBlob(url,data) {
      // let bearer = JSON.stringify ('Bearer ' + store.getState().auth.info)
      // 'Authorization': bearer,
      //console.log(data);

      const formData = new FormData()
      formData.append('blob', new Blob(['Hello World!\n']), 'test')

      return fetch(config.api + url, {
          method: "POST",
          headers: {
            'Accept': 'application/json, text/plain, */*',
            'Content-Type': 'application/json',
            'Authorization': 'Bearer '+ getAccessToken()
          }, 
          body: JSON.stringify(data )
          })
          .then(response => response.blob())
          .catch(() => { 
            //console.log('error', error);
           });
      }

       
      
  }
    // this is the signleton instance
    const api = new Api();
    export default api;



    // return axios.get(config.api + url, {
    //   headers: {
    //     Authorization: bearer
    //   }
    // }).then(function (response) {
    //   console.log(response);
    // })
    // .catch(function (error) {
    //   console.log(error);
    // });