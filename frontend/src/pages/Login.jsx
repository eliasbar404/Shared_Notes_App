import { useState } from "react";
import { Link } from "react-router-dom";
import useLogin from "../hooks/useLogin.js";

const Login = () => {
    const [username, setUsername] = useState("");
	const [password, setPassword] = useState("");

	const { loading, login } = useLogin();

	const handleSubmit = async (e) => {
		e.preventDefault();
		await login(username, password);
	};
    return (
		<div className='flex flex-col items-center justify-center min-w-96 mx-auto shadow-2xl w-[400px]'>
			<div className='w-full p-6 rounded-lg shadow-md bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0'>
				<h1 className='text-3xl font-semibold text-center text-gray-300 py-5 px-2'>
					Start Sharing Your
					<span className='text-blue-500'> Studying Notes</span>
				</h1>

				<form onSubmit={handleSubmit} className="flex flex-col gap-2">
					<div className="flex flex-col items-start">
						<label className='label font-bold'>
							<span className='text-base label-text'>Username</span>
						</label>
						<input
							type='text'
							placeholder='Enter username'
							className='w-full input input-bordered h-10 rounded-md text-center'
							value={username}
							onChange={(e) => setUsername(e.target.value)}
						/>
					</div>

					<div className="flex flex-col">
						<label className='label font-bold'>
							<span className='text-base label-text'>Password</span>
						</label>
						<input
							type='password'
							placeholder='Enter Password'
							className='w-full input input-bordered h-10 rounded-md text-center'
							value={password}
							onChange={(e) => setPassword(e.target.value)}
						/>
					</div>
					<Link to='/signup' className='text-sm  hover:underline hover:text-blue-600 mt-2 inline-block'>
						{"Don't"} have an account?
					</Link>

					<div className="mt-4">
						<button className='bg-blue-500 font-semibold text-xl text-slate-300 px-10 py-1 hover:bg-blue-900 rounded-md' disabled={loading}>
							{loading ? <span className='loading loading-spinner '></span> : "Login"}
						</button>
					</div>
				</form>
			</div>
		</div>
    )
}

export default Login