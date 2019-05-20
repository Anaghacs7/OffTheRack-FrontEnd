import { getToken } from "./authentication";

function loginRequest({email, password}){
  return new Promise((resolve, reject) => {
    fetch("https://myprojectbackend.herokuapp.com/users/login", {
      method: "post",
      headers: {
        "Content-Type": "application/json; charset=utf-8"
      },
      body: JSON.stringify({
        email,
        password
      })
    }).then(response => {
      response.json().then(json => {
        if (!response.ok){
          return reject(json);
        }
        resolve(json);
      }).catch(e => reject(e));
    }).catch(e => reject(e))
  });
}


function registerRequest({email, password,name}){
  return new Promise((resolve, reject) => {
    fetch("https://myprojectbackend.herokuapp.com/users/register", {
      method: "post",
      headers: {
        "Content-Type": "application/json; charset=utf-8"
      },
      body: JSON.stringify({
        email,
        password,
        name
      })
    }).then(response => {
      response.json().then(json => {
        if (!response.ok){
          return reject(json);
        }
        resolve(json);
      }).catch(e => reject(e));
    }).catch(e => reject(e))
  });
}

function inquiryRequest({name,email,message}){
  return new Promise((resolve, reject) => {
  fetch("https://myprojectbackend.herokuapp.com/inquiries/inquiries", {
 // fetch("http://localhost:5000/inquiries/inquiries", {
    method: "post",
      headers: {
        "Content-Type": "application/json; charset=utf-8"
      },
      body: JSON.stringify({
        name,
        email,
        message
      })
    }).then(response => {
      response.json().then(json => {
        if (!response.ok){
          return reject(json);
        }
        resolve(json);
      }).catch(e => reject(e));
    }).catch(e => reject(e))
  });
}

function getInquiries(){
  return new Promise((resolve, reject) => {
    fetch("https://myprojectbackend.herokuapp.com/inquiries/inquiries", {
    //fetch("http://localhost:5000/inquiries/inquiries", {
      method:"get",
      headers: {
       "Authorization": getToken(),
       "Content-Type": "application/json; charset=utf-8"
      }
    }).then(response => {
      if (!response.ok){
        reject(new Error("Unathorized"));
        return;
      }else{
      response.json().then(json => {
        resolve(json); console.log(json);
      }).catch(e => reject(e));}
    }).catch(err => reject(err))
  })
 
}

function uploadProductDetails({rentAmount,productName,company,suitableFor,size,material,other,rentierName,rentierEmail}){
  return new Promise((resolve, reject) => {
  fetch("https://myprojectbackend.herokuapp.com/products/products", {
  //fetch("http://localhost:5000/products/products", {
    method: "post",
      headers: {
        "Authorization": getToken(),
        "Content-Type": "application/json; charset=utf-8"
      },
      body: JSON.stringify({
        rentAmount,productName,company,suitableFor,size,material,other,rentierName,rentierEmail
      })
    }).then(response => {
      response.json().then(json => {
        if (!response.ok){
          return reject(json);
        }
        resolve(json);
      }).catch(e => reject(e));
    }).catch(e => reject(e))
  });
}

function getProductDetails(){
  return new Promise((resolve, reject) => {
    fetch("https://myprojectbackend.herokuapp.com/products/products", {
    //fetch("http://localhost:5000/products/products", {
      method:"get",
      headers: {
       "Authorization": getToken(),
       "Content-Type": "application/json; charset=utf-8"
      }
    }).then(response => {
      if (!response.ok){
        reject(new Error("Unathorized"));
        return;
      }
      response.json().then(json => {
        resolve(json); console.log(json);
      }).catch(e => reject(e));
    }).catch(err => reject(err))
  })
 
}

export {
  loginRequest,
  registerRequest,
  getInquiries,
  inquiryRequest,
  uploadProductDetails,
  getProductDetails
}