const TOKEN = import.meta.env.VITE_TOKEN

// Remova os comentários a medida que for implementando as funções

export const searchCities = async (term) => {
  const TERMO_DE_BUSCA = term
  const data = await (await fetch(`http://api.weatherapi.com/v1/search.json?lang=pt&key=${TOKEN}&q=${TERMO_DE_BUSCA}&aqi=no`)).json()

  if (data.length === 0 || !term) alert('Nenhuma cidade encontrada')
  return data
};

export const getWeatherByCity = (/* cityURL */) => {
//   seu código aqui
};
