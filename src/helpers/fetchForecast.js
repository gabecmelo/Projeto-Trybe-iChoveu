const TOKEN = import.meta.env.VITE_TOKEN;
const DIAS = 7

export const fetchForecast = async (URL_CIDADE) => {
  const response = await (await fetch(`http://api.weatherapi.com/v1/forecast.json?lang=pt&key=${TOKEN}&q=${URL_CIDADE}&days=${DIAS}`)).json();
  const forecast = response.forecast.forecastday;

  return forecast.map((previsão) => {
    return {
      date: previsão.date,
      maxTemp: previsão.day.maxtemp_c,
      minTemp: previsão.day.mintemp_c,
      condition: previsão.day.condition.text,
      icon: previsão.day.condition.icon
    };
  });
};
