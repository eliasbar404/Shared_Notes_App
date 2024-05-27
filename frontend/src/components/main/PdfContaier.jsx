import { useState,useEffect } from "react"
import axios from "axios";
import PdFrame from "./PdFrame";

const PdfContaier = () => {
    const [data,setData] = useState([]);
    const [search,setSearch] = useState("");
    useEffect(() => {
        axios.get('http://localhost:5000/api/files/get-files').then((res)=>setData(res.data.data))

    }, [])
    
    return (
    <div className="w-full mt-3 h-[400px] rounded-sm relative">
        <input className="absolute left-[50%] translate-x-[-50%] top-5 w-[400px] text-center p-2 rounded-md border-black border-2" placeholder="Search...." type="text" value={search} onChange={(e)=>setSearch(e.target.value)}/>
        <div className="w-[98%] mx-auto relative top-24 rounded-sm grid grid-cols-4 gap-4">
        {data.filter((val)=>search.length>0?val.title.toLowerCase().includes(search.toLowerCase()):val).map((val,key)=>(<PdFrame key={key} data={val}/>))}
        </div>
    </div>
    )
}

export default PdfContaier