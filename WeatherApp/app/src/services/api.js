const API_KEY = "******************************";
 
export const getWeather = async (ville) => {
  try {
    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${ville}&units=metric&lang=fr&appid=${API_KEY}`
    );
    if (!response.ok) throw new Error("Ville non trouvée");
    return await response.json();
  } catch (error) {
    throw error;
  }
};
