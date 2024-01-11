import axios from "axios";

// yapıcagımız bütün api isteklerinin başına bu url 'i ekler ..
axios.defaults.baseURL = "https://yt-api.p.rapidapi.com";

const options = {
  params: { geo: "US", lang: "us" },
  headers: {
    "X-RapidAPI-Key": "68a97228c3msh9e1bf386323b005p1d0f69jsn778d08f45bfa",
    "X-RapidAPI-Host": "yt-api.p.rapidapi.com",
  },
};

// parametre olarak aldığı ulr'e api isteği atıp elde
// ettiğimiz sonucu dönduren yardımcı fonksıyondr..

export const getData = async () => {
  try {
    const response = await axios.get("https://yt-api.p.rapidapi.com", options);
    console.log(response.data, "AAAAA");

    return response.data;
  } catch (err) {
    console.log(err);
  }
};
