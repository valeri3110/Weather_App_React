import React from "react";
import Info from "./components/info";
import Form from "./components/form";
import Weather from "./components/weather";
import axios from "axios";

const API_KEY = "35e9b0f20931247faa00922da3985b2b";

class App extends React.Component {
	state = {
		temperature: undefined,
		city: undefined,
		country: undefined,
		humidity: undefined,
		feels: undefined,
		wind: undefined,
		error: undefined,
	};

	getWeather = async (event) => {
		event.preventDefault();

		const city = event.target.elements.city.value;
		let data = undefined;

		if (city) {
			const apiUrl = `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`;

			await axios.get(apiUrl).then((response) => {
				data = response.data;
			});

			this.setState({
				temperature: data.main.temp,
				city: data.name,
				country: data.sys.country,
				humidity: data.main.humidity,
				feels: data.main.feels_like,
				wind: data.wind.speed,
				error: undefined,
			});
		} else {
			this.setState({
				temperature: undefined,
				city: undefined,
				country: undefined,
				humidity: undefined,
				feels: undefined,
				wind: undefined,
				error: "Enter the name of the city",
			});
		}
	};

	render() {
		return (
			<div className="wrapper">
				<div className="main">
					<div className="container">
						<div className="row">
							<div className="col-sm-5 info">
								<Info />
							</div>
							<div className="col-sm-7 form">
								<Form weatherData={this.getWeather} />
								<Weather
									temperature={this.state.temperature}
									city={this.state.city}
									country={this.state.country}
									humidity={this.state.humidity}
									feels={this.state.feels}
									wind={this.state.wind}
									error={this.state.error}
								/>
							</div>
						</div>
					</div>
				</div>
			</div>
		);
	}
}

export default App;
