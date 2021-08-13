//npm i node-fetch 노드 패치를 사용하려면 깔아줘야함
import fetch from "node-fetch";

(async function() {

    let res = await (await fetch('http://localhost:8090/echo',
    {
        method : 'POST',
        body : 'hello post',
        headers : {
            'my-custom-header' : 'hi'
        }
    })).json();

    console.log(res)
})();