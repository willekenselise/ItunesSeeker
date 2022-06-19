import { createSlice } from "@reduxjs/toolkit"

export const musicLibrary = createSlice({
	name: "musics",
	initialState: [],
	reducers: {
		addMusic: (state, action) => {
			return [...state, { ...action.payload }]
		},
		removeMusic: (state, action) => {
			return state.filter((item) => item.id !== action.payload.id)
		},
		updateMusic: (state, action) => {
			return state.map((item) =>
          item.id == action.payload.id
            ? { ...item, rating: action.payload.item.rating }
            : item
        );
		}
	},
})

export const { addMusic, removeMusic, updateMusic } = musicLibrary.actions
export const musicSelect = (state) => state.musics
export default musicLibrary.reducer
