import {useState, useRef, useEffect} from "react"
import WebService from "./services/WebService";
import "./AddItem.css"

export default function AddItem() {
    const [msg,setmsg] = useState("");
    const [constants,setConstants]= useState(undefined)
    useEffect(()=>{
      loadConstants();
    },[]);
    const loadConstants = async ()=>{
    const res = await fetch("http://localhost:3000/admin/constants");
    const responses = await res.json();
    if(responses.status){
      setConstants(responses.data);
    }
  }
  
  
  const itmidRef = useRef();
  const itmnameRef = useRef();
  const despRef = useRef();
  const mpRef = useRef();
  const spRef = useRef();
  const disRef = useRef();
  const sizeRef = useRef();
  const qtyRef = useRef();
  const stockRef = useRef();
  const catRef = useRef();
  const imgRef = useRef();
  const stsRef = useRef();

  const handleSubmit = async (e)=>{
    e.preventDefault();
    const frm = new FormData();
    frm.append("id",itmidRef.current.value);
    frm.append("name",itmnameRef.current.value);
    frm.append("markedPrice",mpRef.current.value);    
    frm.append("sellPrice",spRef.current.value);
    frm.append("discount",disRef.current.value);
    frm.append("description",despRef.current.value); 
    frm.append("size", sizeRef.current.value); 
    frm.append("category",catRef.current.value);  
    frm.append("stock",stockRef.current.value);  
    frm.append("quantity",qtyRef.current.value);  
    frm.append("image",imgRef.current.files[0]);  
    frm.append("status",stsRef.current.value);  
    console.log(frm);
    const response = await WebService.postCallDocUpload(WebService.URLS.ADDITEM,frm);
    console.log(response);
    if(response.status){
      e.target.reset();
    }
    setmsg(response.msg)
  };
  return (
        <>
           <div className="form">

            <form className="add-item-form" onSubmit={handleSubmit}>
                <input type="text" ref={itmidRef} placeholder="Item ID" required/>
                <input type="text" ref={itmnameRef} placeholder="Item Name" required/>
                <input type="number" ref={mpRef} placeholder="Marked Price" required/>
                <input type="number" ref={spRef} placeholder="Sell Price" required/>
                <input type="number" ref={disRef} placeholder="Discount" required/>
                <input type="text" ref={despRef} placeholder="Description" required/>
                <input ref={sizeRef} type="text" placeholder="Sizes (comma-separated e.g. S,M,L,XL)" required />
                <select ref={catRef} placeholder="Category" required>
                    {constants?.category.map((ctg) => (
                        <option key={ctg} value={ctg}>{ctg}</option>
                    ))}
                </select>
                <input ref={qtyRef} type="number" placeholder="Quantity" required/>
                <input type="number" ref={stockRef} placeholder="Stock" required/>
                <input ref={imgRef} type="file" placeholder="Upload Image" required/>
                <select ref={stsRef}>
                  <option value="">True</option>
                  <option value="">False</option>
                </select>
                <b className="text-danger">{msg}</b>
                &nbsp;&nbsp;
                <button type="submit">Add Item</button> 
            </form>
            
           </div>
        </>
    )
}
