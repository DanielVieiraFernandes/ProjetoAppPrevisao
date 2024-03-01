const ApiKey =
  "https://api.hgbrasil.com/weather?key=35e65368&city_name=Campinas,SP";

export const FetchApiWeather = async () => {
  try {
    const apiUrl = `${ApiKey}`;
    const response = await fetch(apiUrl);
    const apiData = await response.json();
    return apiData.results;
  } catch (error) {
    console.log("Erro na requisição de dados do clima!");
    return null;
  }
};
