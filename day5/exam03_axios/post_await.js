import axios from "axios";

(async function(){
    try{ 
    let res =await axios({
        method : 'POST',
        url : 'http://localhost:8090/echo?title=hello&msg=js',
        data : 'hello axios',
        //params:{
        //    title : '',
        //    msg : ''
        //}
        headers : {
            'my-custom-header' : 'hi'
        }
    })
    //console.log(res);
    console.log(res.status);
    console.log(res.data);
}
catch(e)
{
    //console.log(e);
    console.log(e.code);
}

})();