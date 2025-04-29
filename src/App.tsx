import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function App() {
	return (
		<SafeAreaView>
			<View className="p-6 pt-8">
				<Text className="text-2xl text-orange-600">
					Open up App.tsx to start working on your app!
				</Text>
				<StatusBar style="auto" />
			</View>
		</SafeAreaView>
	);
}
