import { LuSave } from "react-icons/lu";
import { useAuthContext } from "@/context/AuthContext";
import axios from "axios";


const PdFrame = (props) => {
    
    const { authUser } = useAuthContext();
    // eslint-disable-next-line react/prop-types
    const fileId = props.data._id;
    const userId = authUser._id;

    const save = ()=>{
        axios.post('http://localhost:5000/api/save/create',{
            fileId:fileId,userId:userId
        }).then(()=>{
            alert('You saved this note!')
        })
    }
    
    // console.log(authUser)
    return (
        <div className="bg-slate-50 flex flex-col gap-1 w-[300px] p-2 rounded-md shadow-xl">
            {/* eslint-disable-next-line react/prop-types */}
            <h4 className="font-semibold">{props.data.title}</h4>
            {/* eslint-disable-next-line react/prop-types */}
            <p>{props.data.description}</p>
            
            {/* eslint-disable-next-line react/prop-types */}
            <a target={"_blank"} href={props.data.fileName} className="text-blue-600 text-xl font-black hover:underline">Open PDF</a>
            {/* <object className="h-[460px]" data={props.data.fileName} type="application/pdf"><div>No online PDF viewer installed</div></object> */}

            <button onClick={()=>save()}>
                <LuSave title="Save" className="mt-2 text-3xl text-green-700 self-end cursor-pointer"/>
            </button>
        </div>
)
}

export default PdFrame