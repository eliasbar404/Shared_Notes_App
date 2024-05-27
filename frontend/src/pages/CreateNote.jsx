import {  useState } from "react";
import axios from "axios";
import { useAuthContext } from "@/context/AuthContext";
import { FaFileAlt } from "react-icons/fa";
import { FaBackspace } from "react-icons/fa";
import { Link ,useNavigate} from "react-router-dom";
// title description userId file
const CreateNote = () => {
  const navigate = useNavigate();

  const { authUser } = useAuthContext();

  const [title, setTitle]            = useState("");
  const [file, setFile]              = useState("");
  const [description,setDescription] = useState("")


  const submitFile = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("userId",authUser._id)
    formData.append("title", title);
    formData.append("description", description);
    formData.append("file", file);

    console.log();

    await axios.post(
      "http://localhost:5000/api/files/upload-files",
      formData,
      {
        headers: { "Content-Type": "multipart/form-data" },
      }
    ).then(()=>{
      alert("Uploaded Successfully!!!")
      navigate('/');

    });

  };
  return (
    <div>
      <Link to="/" title="Back to home Page">
          <FaBackspace className="text-7xl text-blue-700"/>
      </Link>

    
    <form onSubmit={submitFile} className="flex flex-col shadow-xl bg-blue-100 rounded-md p-8 w-[400px] gap-2 absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]">
      <h4 className="font-black self-center text-2xl">Upload Your <span className="text-blue-500">Notes</span></h4>
      {/*---- Title --------- */}
      <label htmlFor="title" className="font-medium mt-5">Title</label>
      <input type="text"
            id="title"
            className="rounded-sm p-1 border-black border-2"
            // placeholder="Title"
            required
            onChange={(e) => setTitle(e.target.value)}
      />
      {/* ------ Description ----------- */}
      <label htmlFor="description" className="font-medium mt-5">Description</label>
      <textarea className="rounded-sm p-1 border-black border-2 resize-none" 
                id="description"
                rows={4}
                onChange={(e) => setDescription(e.target.value)}
      />
      {/* --------- File --------------- */}
      <label htmlFor="file" className="text-6xl cursor-pointer self-center mt-5"><FaFileAlt /></label>
      <input className="hidden"
            id="file"
            type="file"
            accept="application/pdf"
            required
            onChange={(e) => setFile(e.target.files[0])}
      />

      <button className="bg-blue-700 mt-3 text-slate-50 font-bold p-2 rounded-md hover:bg-blue-900" type="submit">
          UPLOAD
      </button>
  </form>
  </div>
  )
}

export default CreateNote