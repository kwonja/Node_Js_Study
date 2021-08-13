import axios from "axios";

axios({
    method : 'POST',
    url : 'http://localhost:8090/echo?title=hello&msg=nodejs',
    data : 'hello axios',
    //params:{
    //    title : '',
    //    msg : ''
    //}
    headers : {
        'my-custom-header' : 'hi'
    }
}).then((res)=>{
    console.log(res.status);
    console.log(res.data);
}).catch(err=>{
    //console.log(err)
    console.log(err.code);
})