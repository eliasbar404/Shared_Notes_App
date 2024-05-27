import Header from "@/components/main/Header"
import { useState,useEffect } from "react"
import axios from "axios";
import { useAuthContext } from "@/context/AuthContext";
// import PdFrame from "@/components/main/PdFrame";

const SavedPage = () => {
    const { authUser } = useAuthContext();


    // const [data,setData] = useState([]);
    // const [search,setSearch] = useState("");
    useEffect(() => {
        axios.get(`http://localhost:5000/api/save/fetch/${authUser._id}`).then((res)=>console.log(res))

    }, [])
    return (
    <div>
        <Header/>
        <div className="w-full mt-3 h-[400px] rounded-sm relative">
        {/* <input className="absolute left-[50%] translate-x-[-50%] top-5 w-[400px] text-center p-2 rounded-md border-black border-2" placeholder="Search...." type="text" value={search} onChange={(e)=>setSearch(e.target.value)}/> */}
        <div className="w-[98%] mx-auto relative top-24 rounded-sm grid grid-cols-4 gap-4">
        {/* {data.filter((val)=>val.userId === authUser._id).map((val,key)=>(<PdFrame key={key} data={val}/>))} */}
        </div>
    </div>
    </div>
    )
}

export default SavedPage