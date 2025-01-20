import { useState } from "react"
import { useDispatch, useSelector } from "react-redux";
import { FetchJoke } from "./jokeSlice";




function App() {

  // const [data,setData]=useState(null)
  const [category,setCategory] =useState("")
  const [error, setError] = useState("");

  const data = useSelector((state)=>{
      return state.joke.joke
  })

  const dispatch = useDispatch()

//   function handleSubmit(){
//     if(!category.trim()){
//       setError("please enter category")
//       return;
//     }
//     fetch(`https://api.chucknorris.io/jokes/random?category=${category}`).then((res) => {
//       if (!res.ok) {
//         throw new Error("Failed to fetch joke");
//       }
//       return res.json();
//     }).then((data)=>{
//       setData(data.value)
//       setError("");
//     }).catch((err)=>{
//       setError("Joke not found. Please try a valid category.");
//       console.log(err)
//     })
  
// }

  function handleChange(e){
     setCategory(e.target.value)
     setError("") 
  }

  function handleSubmit(){
    dispatch(FetchJoke(category))
  }


  return (
    <>
      <div className="relative h-screen w-full">
        <img src="./joke-app-bg.jpg" className="h-full w-full" alt="joke App Background"></img>
        <div className="bg-orange-700 lg:w-1/2 lg:h-auto absolute w-[90%] top-[190px] left-[25px]  lg:top-[220px] lg:left-[330px] lg:p-5 p-3 shadow-xl rounded ">
        <h1 className="text-center font-bold text-3xl text-white">JOKE APP</h1>
        <div className="flex mt-4">
        <input className=" outline-none lg:w-[80%] w-[75%] p-3 rounded-l-lg" placeholder="enter category..." onChange={handleChange} value={category}></input>
        <button className="lg:w-[20%] w-[25%] p-3  bg-gradient-to-t from-blue-600 to-blue-900 text-white font-semibold rounded-r-lg" onClick={handleSubmit}>SEARCH</button>
        </div>
         {error && <p className="mt-5 text-xl text-white">{error}</p>}
        {data && <p className="mt-5 text-xl text-white">{data}</p>}
        
        </div>
      </div>
    </>
  )
}

export default App
