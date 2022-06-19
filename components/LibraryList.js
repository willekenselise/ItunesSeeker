import React from "react";
import { View, ScrollView, FlatList, StyleSheet,  TouchableOpacity } from "react-native";
import MusicDetail from "./MusicDetail";
import { musicSelect } from "../store/reducer";
import { useSelector } from "react-redux";

const ItunesList = ({navigation}) => {
	const listMusic = useSelector(musicSelect)
	return (
		<View style={styles.container}>	
			<ScrollView style={styles.container}>
				<FlatList
					data={listMusic}
					renderItem={({ item }) => (
						<TouchableOpacity onPress={ () => {  navigation.navigate("Music", { ...item, })}}>
							<MusicDetail {...item}  />	
						</TouchableOpacity>
					)}
					keyExtractor={(item) => item.id.toString()}
				/>		
			</ScrollView>
		</View>
	)
}

const styles = {
	container: {
		flex:1,
	},
	wrap:{
		flex: 1,
	}
};


export default ItunesList;
