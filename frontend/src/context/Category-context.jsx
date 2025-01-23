import { createContext, useContext, useState } from "react";



const CategoryContext = createContext(null);

const CategoryProvider = ({ children , initialValue = "National Parks"}) => {
  const [hotelCategory, setHotelCategory] = useState(initialValue);

  return (
    <CategoryContext.Provider value={{ hotelCategory, setHotelCategory }}>
      {children}
    </CategoryContext.Provider>
  );
};

// const useCategory = () => useContext(CategoryContext);

const useCategory = () => {
  const context = useContext(CategoryContext);
  if (!context) {
    throw new Error("useCategory must be used within a CategoryProvider");
  }
  return context;
};

export { useCategory, CategoryProvider };