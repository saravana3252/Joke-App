import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { FetchJoke } from "./jokeSlice";
import { clearJoke } from "./jokeSlice";

function App() {
  const [category, setCategory] = useState("");

  
  const { joke, loading, error } = useSelector((state) => state.joke);
  const dispatch = useDispatch();

 
  function handleChange(e) {
    setCategory(e.target.value);
    dispatch(clearJoke()); 

  }

 
  function handleSubmit() {
    if (!category.trim()) {
      return; 
    }
    dispatch(FetchJoke(category));
    dispatch(clearJoke()); 

  }

  return (
    <div className="relative h-screen w-full bg-gray-900">

      <img
        src="./joke-app-bg.jpg"
        className="h-full w-full object-cover"
        alt="Joke App Background"
      />
      <div className="bg-orange-700 lg:w-1/2 lg:h-auto absolute w-[90%] top-[255px] left-[20px] lg:top-[220px] lg:left-[330px] lg:p-5 p-3 shadow-xl rounded">
        <h1 className="text-center font-bold text-3xl text-white">JOKE APP</h1>

    
        <div className="flex mt-4">
          <input
            className="outline-none lg:w-[80%] w-[70%] p-3 rounded-l-lg text-gray-800"
            placeholder="Enter category..."
            onChange={handleChange}
            value={category}
          />
          <button
            className={`lg:w-[20%] w-[30%] p-3 bg-gradient-to-t from-blue-600 to-blue-900 text-white font-semibold rounded-r-lg ${
              loading ? "opacity-70 cursor-not-allowed" : ""
            }`}
            onClick={handleSubmit}
            disabled={loading} 
          >
            {loading ? "Loading..." : "SEARCH"}
          </button>
        </div>

        {!category.trim() && (
          <p className="mt-5 text-xl text-white">Please enter a category.</p>
        )}
        {error && category.trim() && <p className="mt-5 text-xl text-white">{error}</p>}

   
        {!loading && joke && !error && category.trim() && (
          <p className="mt-5 text-xl text-white">{joke}</p>
        )}
      </div>
    </div>
  );
}

export default App;

