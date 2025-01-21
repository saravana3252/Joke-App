import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";



const FetchJoke = createAsyncThunk("jokes/jokescategory",async (category)=>{
     return fetch(`https://api.chucknorris.io/jokes/random?category=${category}`).then((res) => res.json()
    ).then((data)=>{
      console.log(data.value)
      return data.value
    }).catch((err)=>{
      console.log(err)
    })
})


const initialState= {
    joke:"Available joke categories : [ animal, career, celebrity, dev, explicit, fashion, food, history, money, movie, music, political, religion, science, sport, travel ]"
}

const jokeSlice = createSlice({
    name:"joke",
    initialState,
    reducers:{
      
    },
    extraReducers:(build)=>{
        build.addCase(FetchJoke.pending,()=>{
            console.log("loading...")
        }).addCase(FetchJoke.fulfilled,(state,action)=>{
            state.joke = action.payload
        })
    }
})



export default jokeSlice;

export {FetchJoke}