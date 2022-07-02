import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { Navigate, Route, Routes } from "react-router-dom";
import Home from "./components/home/Home";
import { getAllDrinks } from "./services/drinks";
import AdminContainer from "./components/admin/AdminContainer";
import AddDrinkForm from "./components/admin/addDrinkForm/AddDrinkForm";
import AdminArchiveDrinks from "./components/admin/adminArchiveDrinks/AdminArchiveDrinks";
import { setDrinks } from "./configureStore/drinksSlice";
import { initSortedDrinks } from "./configureStore/sortedDrinks";
import EditDrink from "./components/admin/editDrink/EditDrink";

function App() {
  // const [getDrinks, setDrinks] = useState([]);
  // const [filteredDrinks, setFilteredDrinks] = useState([]);

  const dispatch = useDispatch();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data: drinksArray } = await getAllDrinks();
        dispatch(setDrinks(drinksArray));
        dispatch(initSortedDrinks(drinksArray));
      } catch (err) {
        console.log(err.message);
      }
    };
    fetchData();
  }, []);

  return (
    <Routes>
      <Route path="/" element={<Navigate to="/drinks" />} />
      <Route
        path="/drinks"
        element={
          <Home
          // getDrinks={getDrinks}
          // filteredDrinks={filteredDrinks}
          // setFilteredDrinks={setFilteredDrinks}
          />
        }
      >
        <Route
          path=":drinkId"
          element={
            <Home
            // getDrinks={getDrinks}
            // filteredDrinks={filteredDrinks}
            // setFilteredDrinks={setFilteredDrinks}
            />
          }
        />
      </Route>
      <Route path="/admin" element={<AdminContainer />}>
        <Route path="drinks" element={<AdminArchiveDrinks />} />
        <Route path="addDrink" element={<AddDrinkForm />} />
        <Route path="edit/:id" element={<EditDrink/>} />
      </Route>
    </Routes>
  );
}

export default App;
