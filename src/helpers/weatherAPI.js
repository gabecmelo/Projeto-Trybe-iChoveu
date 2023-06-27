const TOKEN = import.meta.env.VITE_TOKEN;

export const searchCities = async (term) => {
  const TERMO_DE_BUSCA = term;
  const data = await (await fetch(`http://api.weatherapi.com/v1/search.json?lang=pt&key=${TOKEN}&q=${TERMO_DE_BUSCA}&aqi=no`)).json();
  if (data.length === 0 || !term) alert('Nenhuma cidade encontrada');
  return data;
};

export const getWeatherByCity = (cityURL) => {
  cityURL.map(async (city) => {
    const URL_CIDADE = city.url;
    const response = await (await fetch(`http://api.weatherapi.com/v1/current.json?lang=pt&key=${TOKEN}&q=${URL_CIDADE}`)).json();
    const currentInfos = response.current;

    return {
      temp: currentInfos.temp_c,
      condition: currentInfos.condition.text,
      icon: currentInfos.condition.icon,
    };
  });
};
