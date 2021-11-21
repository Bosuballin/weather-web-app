const request = require("postman-request");

const forecast = (lat, long, callback) => {
  const url = `http://api.weatherstack.com/current?access_key=14a50602a0058bef83282f1fbb14a77f&query=${lat},${long}&units=f`;

  request({ url, json: true }, (error, { body }) => {
    if (error) {
      callback(`Unable to connect to location services`, undefined);
    } else if (body.error) {
      callback(`Unable to find location. Try another search.`, undefined);
    } else {
      callback(
        undefined,
        `${body.current.weather_descriptions[0]}. It is currently ${body.current.temperature} degrees out. It feels like ${body.current.feelslike} degrees out.`
      );
    }
  });
};

module.exports = forecast;
