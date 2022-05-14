import "./App.css";
import { Routes, Route } from "react-router-dom";
import { useState } from "react";
import Home from "./components/Home";
import AddPhoto from "./components/AddPhoto";

function App() {
  const [dataArr, setDataArr] = useState([
    {
      descr: "item",
      link:
        "https://cdn.pixabay.com/photo/2018/01/14/23/12/nature-3082832__480.jpg",
    },
  ]);

  const itemObj = (obj) => {
    setDataArr((prev) => [...prev, obj]);
  };

  const removeBtn = (id) => {
    setDataArr(()=>{
      return dataArr.filter((item, index) => {
          return index !== id;
        })
      })
  };

  return (
    <div className="App">
      <Routes>
        <Route
          path="/"
          element={<Home itemObject={dataArr} removeBtn={removeBtn} />}
        />
        <Route path="/AddPhoto" element={<AddPhoto itemObj={itemObj} />} />
      </Routes>
    </div>
  );
}

export default App;
