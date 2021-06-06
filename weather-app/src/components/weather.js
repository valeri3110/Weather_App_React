import React from "react";

const Weather = (props) => (
	<div>
		{props.city && (
			<div>
				<p>
					Location: {props.city}, {props.country}
				</p>
				<p>Temperature: {props.temperature}</p>
				<p>Feels like: {props.feels}</p>
				<p>Humidity: {props.humidity}</p>
				<p>Wind speed: {props.wind}</p>
			</div>
		)}
		<p>{props.error}</p>
	</div>
);

export default Weather;
