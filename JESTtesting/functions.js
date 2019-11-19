const axios=require('axios');
const functions={
  add:(num1,num2)=>num1+num2,
  isNull:()=>null,
  isUndefined:()=>undefined,
  checkValue:(val)=>val,
  createUser:()=>{
    const user={firstName:"Debarun"};
    user['lastName']="Mitra";
    return user;
  },
  fetchUser:()=>
    axios.get('https://jsonplaceholder.typicode.com/users/1')
    .then(res=>res.data)
    .catch(err=>err)
};

module.exports=functions;
