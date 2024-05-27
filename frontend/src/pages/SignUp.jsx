import { Link } from "react-router-dom";
// import GenderCheckbox from "../components/GenderCheckbox";
import { useState } from "react";
import useSignup from "../hooks/useSignup";

const SignUp = () => {
  const [inputs, setInputs] = useState({
		fullName: "",
		username: "",
		password: "",
		confirmPassword: "",
	});
	const { loading, signup } = useSignup();


	const handleSubmit = async (e) => {
		e.preventDefault();
		await signup(inputs);
	};

  return (
		<div className='flex flex-col items-center justify-center min-w-96 mx-auto shadow-2xl w-[450px]'>
			<div className='w-full py-6 px-10 rounded-lg shadow-md bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0'>
				<h1 className='text-3xl font-semibold text-center text-gray-300 py-5 px-2'>
					Sign Up <span className='text-blue-500'> Share Your Notes</span>
				</h1>

				<form onSubmit={handleSubmit} className="flex flex-col gap-2">
					<div>
						<label className='label font-bold'>
							<span className='text-base label-text'>Full Name</span>
						</label>
						<input
							type='text'
							placeholder='Full Name'
							className='w-full input input-bordered h-10 rounded-md text-center'
							value={inputs.fullName}
							onChange={(e) => setInputs({ ...inputs, fullName: e.target.value })}
						/>
					</div>

					<div>
						<label className='label font-bold'>
							<span className='text-base label-text'>Username</span>
						</label>
						<input
							type='text'
							placeholder='User Name'
							className='w-full input input-bordered h-10 rounded-md text-center'
							value={inputs.username}
							onChange={(e) => setInputs({ ...inputs, username: e.target.value })}
						/>
					</div>

					<div>
						<label className='label font-bold'>
							<span className='text-base label-text'>Password</span>
						</label>
						<input
							type='password'
							placeholder='Enter Password'
							className='w-full input input-bordered h-10 rounded-md text-center'
							value={inputs.password}
							onChange={(e) => setInputs({ ...inputs, password: e.target.value })}
						/>
					</div>

					<div>
						<label className='label font-bold'>
							<span className='text-base label-text'>Confirm Password</span>
						</label>
						<input
							type='password'
							placeholder='Confirm Password'
							className='w-full input input-bordered h-10 rounded-md text-center'
							value={inputs.confirmPassword}
							onChange={(e) => setInputs({ ...inputs, confirmPassword: e.target.value })}
						/>
					</div>

					

					<Link
						to={"/login"}
						className='text-sm hover:underline hover:text-blue-600 mt-2 inline-block'
						href='#'
					>
						Already have an account?
					</Link>

					<div className="mt-4">
						<button className='bg-blue-500 font-semibold text-xl text-slate-300 px-10 py-1 hover:bg-blue-900 rounded-md' disabled={loading}>
							{loading ? <span className='loading loading-spinner'></span> : "Sign Up"}
						</button>
					</div>
				</form>
			</div>
		</div>
  )
}

export default SignUp