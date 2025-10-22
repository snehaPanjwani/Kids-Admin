export const SERVER = "http://localhost:3000";

class WebService
{
    postCall = async(url,data)=>
    {
        const res = await fetch(url,{
            method : 'POST',
            headers:{
                'Content-Type' : 'application/json'
            },
            body : JSON.stringify(data)
        });
        const response = await res.json();
        return response;
    }
    postCallWithToken = async(url,data,token)=>
    {
        const res = await fetch(url,{
            method : 'POST',
            headers:{
                'Content-Type' : 'application/json',
                "Authorization" : `Bearer ${token}`
            },
            body : JSON.stringify(data)
        });
        const response = await res.json();
        return response;
    }

    getCall = async(url)=>
    {
        const res = await fetch(url,{
            method : 'GET',
        });
        const response = await res.json();
        return response;
    }
    patchCallWithToken = async(url,token)=>
    {
        const res = await fetch(url,{
            method : 'PATCH',
            headers:{
                'Authorization' : `Bearer ${token}`
            }
        });
        const response = await res.json();
        return response;
    }
    postCallDocUpload = async(url,data)=>
    {
        const res = await fetch(url,{
            method : 'POST',
            body : data
        });
        const response = await res.json();
        return response;
    }

    constructor()
    {
        this.URLS = {
           REGISTER : `${SERVER}/admin/register`,
           LOGIN : `${SERVER}/admin/login`,
           ADDITEM : `${SERVER}/admin/additem`,
           PRODUCTS : `${SERVER}/admin/products`
        }
    }
}

export default new WebService();