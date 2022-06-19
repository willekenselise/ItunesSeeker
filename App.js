import React from "react";
import { Provider } from "react-redux";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { MaterialCommunityIcons } from '@expo/vector-icons'; 
import { createStackNavigator } from "@react-navigation/stack";
import LibraryList from "./components/LibraryList";
import ItunesList from "./components/ItunesList";
import Music from "./components/Music";
import store from "./store/store";

const Tabs = createBottomTabNavigator();
const MainStack = createStackNavigator();

const Main = () => {
	return (
		<Tabs.Navigator>
			<Tabs.Screen 
				name="Library"
				options={{
					tabBarLabel: 'Library',
					tabBarIcon: () => (
					  <MaterialCommunityIcons name="home" size={24} color="grey" />
					),
				  }} >
				{(props) => <LibraryList {...props} />}
			</Tabs.Screen>
			<Tabs.Screen 
				name="Itunes"
				options={{
					tabBarLabel: 'Itunes',
					tabBarIcon: () => (
					  <MaterialCommunityIcons name="music" size={24} color="grey" />
					),
				  }}>
				{(props) => <ItunesList {...props} />}
			</Tabs.Screen>
		</Tabs.Navigator>
	)
}

const App = () => {
	return (
		<Provider store={store}>
			<NavigationContainer>
				<MainStack.Navigator screenOptions={{ headerMode:"screen"}}>
					<MainStack.Screen
						name="Main"
						options={{ headerShown: false }}
						component={Main}
					/>
					<MainStack.Screen
						name="Music"
						component={Music}
					/>
				</MainStack.Navigator>
			</NavigationContainer>
		</Provider>
	)
	
}
  

export default App
