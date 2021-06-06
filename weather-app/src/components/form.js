import React from "react";

const Form = (props) => (
	<form onSubmit={props.weatherData}>
		<input type="text" name="city" placeholder="City" autoComplete="off" />
		<button>Get weather</button>
	</form>
);

export default Form;
