// Context temelini olustur...

import { createContext, useEffect, useState } from "react";
import { categories } from "../constants";
import { getData } from "../utils/getData";
import { data } from "autoprefixer";

// 1) context temelini olusturur
export const YoutubeContext = createContext();

// 2) Context' de tutulan verileri uygulamaya aktarıcak aracı görev goüyor

export const YoutubeProvider = ({ children }) => {
  const [selectedcategory, setselectedcategory] = useState(categories[0]);
  const [video, setvideos] = useState(null);

  // selectedcategory her değiştiğinde api'den ilgili kategorinin verilerini çek
  useEffect(() => {
    // Egerki secili kategorisini tipi home veya trending ise seçilen kategorinin (selectedcategory.type) tipine göre attıgımz istek bize degerleri döndürücektir.

    // Farkli verileri alırken önceki verileri temızledik ve yüklenme ekranını getirdik.
    setvideos(null);

    if (
      selectedcategory.type == "home" ||
      selectedcategory.type == "trending"
    ) {
      getData(`${selectedcategory.type}`).then((data) => setvideos(data.data));
    }
    if (selectedcategory.type === "category") {
      getData(`./search?query= ${selectedcategory.name}`).then((data) =>
        setvideos(data.data)
      );
    }
    //Eğer ki seçili kategorinin tipi category ise o zaman search endpointine istel at
  }, [selectedcategory]);

  console.log(video);
  return (
    <YoutubeContext.Provider
      value={{ selectedcategory, setselectedcategory, video }}
    >
      {children}
    </YoutubeContext.Provider>
  );
};
