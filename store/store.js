import { configureStore } from "@reduxjs/toolkit"
import libraryReducer from "./reducer"

export default configureStore({
	reducer: {
		musics: libraryReducer,
	},
})
