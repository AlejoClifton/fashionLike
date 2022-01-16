import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
  name: "user",
  initialState: {
    user: {},
  },
  reducers: {
      setUser: (state,action)=>{
          state.user = action.payload;
      }
  },
});
export const { setUser } = userSlice.actions;
export default userSlice.reducer;

export const loginFetch = (email, password) => (dispatch) => {  
  const api = process.env.REACT_APP_API
  fetch(`${api}?email=${email}&password=${password}`)
    .then( response => response.json())
    .then( user => {
        dispatch(setUser(user))
    })
    .catch((er) => console.log(er));
};
