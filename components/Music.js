import React from "react";
import { View, Text, Image, TouchableOpacity, TextInput, Button, ScrollView, } from "react-native";
import { updateMusic } from "../store/reducer";
import { useDispatch} from "react-redux";

const Music = ({ navigation, route }) => {

	const dispatch = useDispatch();
	const item = route.params;

	const rating = (value) => {
        item.rating = value;
    }

    const saveMusic = async () => {
		dispatch(updateMusic({id: item.id, item: item}));
		navigation.navigate('Main');
    }

	return (
		<View style={styles.container}>
			<Image style={styles.image} source={item.image} />
		
			<ScrollView style={styles.container}>				
				<View>
					<Text style={styles.title}>{item.title}</Text>
					<Text style={styles.text}>{item.artist} - {item.genre}</Text>
					{ item.rating ? <Text style={styles.text}>{item.rating} / 5</Text> : null }
					<View style={styles.rating}>
						<Text>Rating: (/5)</Text>
						<TextInput  style={styles.input} onChangeText ={rating} keyboardType="numeric" placeholder={item.rating}/>
						<Button title="Save" onPress={saveMusic}></Button>
					</View>
				</View>
			</ScrollView>
		</View>
	)
}

const styles = {
	image:{
		height: "200px",
	},
	container:{
		flex: 1,
	},
	title:{
		fontSize: 25,
	},
	rating:{
		flexDirection: "row",
		alignItems: "center"
	},
	input:{
		marginRight: "10px",
		marginLeft: "10px",
		borderWidth: 1, 
	}
}

export default Music;
