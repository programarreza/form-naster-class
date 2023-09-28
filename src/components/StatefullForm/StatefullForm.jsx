import { useState } from "react";

const StatefullForm = () => {
	const [name, setName] = useState(null);
	const [email, setEmail] = useState(null);
	const [password, setPassword] = useState(null);
	const [error, setError] = useState('')

	const handleEmailChange = e => {
		console.log(e.target.value);
		setEmail(e.target.value);
	}

	const handlePasswordChange = e => {
		setPassword(e.target.value);
	}

	const handleNameChange = e => {
		setName(e.target.value);		
	}

	const handleSubmit = (e) => {
		e.preventDefault();
		if(password.length < 6){
			setError('Password must be 6 characters or longer');
		}else{
			setError('')
		}
		console.log(email, password, name);
	}

	return (
		<div>
			<form onSubmit={handleSubmit}>
				<input onChange={handleNameChange} type="text" name="name"/>
				<br />
				<input onChange={handleEmailChange} type="email" name="email" id="" />
				<br />
				<input onChange={handlePasswordChange} type="password" name="password" id="" required/>
				<br />
				<input type="submit" value="Submit" />
				{
					error && <p>{error}</p>
				}
			</form>
		</div>
	);
};

export default StatefullForm;