import { Navigate, Route, Routes } from "react-router-dom";
import { Toaster } from "react-hot-toast";

import Home from "./pages/Home";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";

import EditProfile from "./pages/EditProfile";
import CreateNote from "./pages/CreateNote";
import SavedPage from "./pages/SavedPage";

import { useAuthContext } from "./context/AuthContext";


function App() {

  const { authUser } = useAuthContext();
  
  return (
	// p-4 h-screen flex items-center justify-center
		<div className='p-4 h-screen'>
			<Routes>
				<Route path='/' element={authUser ? <Home /> : <Navigate to={"/login"} />} />
				<Route path='/edit-profile' element={authUser ? <EditProfile /> : <Navigate to={"/login"} />} />
				<Route path='/saved-notes' element={authUser ? <SavedPage /> : <Navigate to={"/login"} />} />
				<Route path='/create-note' element={authUser ? <CreateNote /> : <Navigate to={"/login"} />} />
				<Route path='/login' element={authUser ? <Navigate to='/' /> : <Login />} />
				<Route path='/signup' element={authUser ? <Navigate to='/' /> : <SignUp />} />
			</Routes>
			<Toaster />
		</div>
  )
}

export default App
