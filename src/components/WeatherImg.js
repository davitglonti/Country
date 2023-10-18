import Clear from "../Images/Clear.png";
import Clouds from "../Images/Clouds.png";
import Rain from "../Images/Rain.png";
import Haze from "../Images/Haze.png";

const WeatherImg = ({ weatherData }) => {
  return (
    <div className="weather-img">
      {weatherData.weather[0].main === "Clear" ? (
        <img src={Clear} alt={weatherData.weather[0].main} />
      ) : (
        ""
      )}
      {weatherData.weather[0].main === "Clouds" ? (
        <img src={Clouds} alt={weatherData.weather[0].main} />
      ) : (
        ""
      )}
      {weatherData.weather[0].main === "Rain" ? (
        <img src={Rain} alt={weatherData.weather[0].main} />
      ) : (
        ""
      )}
      {weatherData.weather[0].main === "Haze" ? (
        <img src={Haze} alt={weatherData.weather[0].main} />
      ) : (
        ""
      )}
      {weatherData.weather[0].main === "Fog" ? (
        <img src={Haze} alt={weatherData.weather[0].main} />
      ) : (
        ""
      )}
    </div>
  );
};

export default WeatherImg;
