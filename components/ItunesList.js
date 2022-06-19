import React, { useState, useEffect } from "react";
import { View, Text, ScrollView, TextInput, StyleSheet, FlatList } from "react-native";
import ItunesDetail from "./ItunesDetail";

const format = (item) => {
	return {
		id: item.trackId.toString(),
		title: item.trackName,
		artist: item.artistName,
		genre: item.primaryGenreName,
		rating: '',
		image: item.artworkUrl100,
	}
}

const searchItunes = async (query) => {
	const response = await fetch(`https://itunes.apple.com/search?term=${query}&kind=music`)
	const json = await response.json()
	return json.results.filter((item) => item.trackId && item.trackName).map(format)
}

const ItunesList = () => {
	const [searchTerm, setSearchTerm] = useState("")
	const [resultSearch, setResultSearch] = useState([])

	const submitSearchTerm = () => {
		searchItunes(searchTerm).then((result) => {
			setResultSearch(result)
		})
	}

	useEffect(() => {
		const timeout = setTimeout(submitSearchTerm, 1000)
		return () => {
			clearTimeout(timeout)
		}
	}, [searchTerm])

	return (
		<View style={styles.container}>	
			<Text>Rechercher :</Text>		
			<TextInput 
					placeholder="Artist, song, ..."
					style={styles.input}
					onChangeText={setSearchTerm}
					value={searchTerm}
				/>
				<ScrollView style={styles.container}>
					<FlatList
						data={resultSearch}
						renderItem={({ item }) => (
							<ItunesDetail {...item} />
						)}
						keyExtractor={(item) => item.id.toString()}
					/>
				</ScrollView>
		</View>
	)
}


const styles = StyleSheet.create({
	container: {
	  flex: 1,
	},
	input:{
		margin : "10px",
		width: "300px",
		borderWidth: 1,
		borderRadius: "6px",
		padding: "8px",
	}
  });

  
export default ItunesList;
