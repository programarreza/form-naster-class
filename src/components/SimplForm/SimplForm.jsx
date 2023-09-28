
const SimplForm = () => {


	const handleForm = (e) => {
		e.preventDefault();
		console.log(e.target.name.value);
		console.log(e.target.email.value);
		console.log(e.target.phone.value);
	}

	return (
		<div>
			<form onSubmit={handleForm}>
				<input type="text" name="name"/>
				<br />
				<input type="email" name="email" id="" />
				<br />
				<input type="password" name="password" id="" />
				<br />
				<input type="submit" value="Submit" />
			</form>
		</div>
	);
};

export default SimplForm;