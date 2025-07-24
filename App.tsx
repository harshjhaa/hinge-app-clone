/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import { NewAppScreen } from '@react-native/new-app-screen';
import { Text } from 'react-native';
import { StyleSheet, useColorScheme, View } from 'react-native';
import Entypo from '@react-native-vector-icons/entypo';
import FontAwesome from '@react-native-vector-icons/fontawesome';

function App() {
  const isDarkMode = useColorScheme() === 'dark';

  return (
    <View style={styles.container}>
      <Text>Harsh</Text>
      <Entypo name="heart" size={24} color="black" />
      <FontAwesome name="rocket" size={30} color="#900" />
      <Text>Harsh</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100%',
  },
});

export default App;
