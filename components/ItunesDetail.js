import React from "react";
import { useDispatch } from "react-redux";
import { View, Text, Image } from "react-native";
import { addMusic } from "../store/reducer";


const ItunesDetail = (item) => {
	const dispatch = useDispatch();
	return (
		<View style={styles.container}>
			<Image style={styles.image} source={item.image} />
			<View style={styles.wrap}>
				<Text style={styles.title}>{item.title}</Text>
				<Text style={styles.text}>{item.artist}</Text>
				<Text style={styles.text}>{item.genre}</Text>
				<Text style={styles.btn} onPress={() => { dispatch(addMusic(item)); }}>Add</Text>
			</View>
		</View>
	)
}					

const styles = {
	container: {
		width:"100%",
		display: "flex",
		flexDirection: "row",
		marginBottom: "20px"
	},
	image :{
		height: "200px",
		width: "200px"
	},
	wrap :{
		flex: 1,
		padding: "16px"
	},
	title:{
		fontSize: 20,
		marginBottom: "10px"
	},
	text:{
		fontSize: 16,
	},
	btn:{
		padding: "8px",
		backgroundColor : "#03224c",
		borderRadius: "4px",
		color: "#fff",
		textAlign: "center",
		marginTop: "10px"
	}
}


export default ItunesDetail;
