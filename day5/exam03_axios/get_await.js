import axios from "axios";

(async function(){
    let res = await axios.get('http://localhost:8090/echo?title=hello&msg=nodejs')
    //비동기를 동기로 반환
    console.log(res.data);
    console.log(res.status);
})();