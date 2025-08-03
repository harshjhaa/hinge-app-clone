import {
  StyleSheet,
  Text,
  SafeAreaView,
  Platform,
  View,
  Pressable,
} from 'react-native';
import React from 'react';
import LottieView from 'lottie-react-native';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../navigation';

type BasicInfoScreenNavProp = NativeStackNavigationProp<
  RootStackParamList,
  'BasicInfo'
>;

const BasicInfoScreen = () => {
  const navigation = useNavigation<BasicInfoScreenNavProp>();

  const handlePressEvent = () => {
    navigation.navigate('Name');
  };

  return (
    <SafeAreaView style={styles.basicInfoContainer}>
      <View style={styles.viewContents}>
        <Text style={styles.heading1}>You're one of a kind.</Text>
        <Text style={styles.heading2}>Your profile should be too.</Text>
      </View>
      <View>
        <LottieView
          style={styles.lottieView1}
          source={require('../assets/love.json')}
          autoPlay
          loop={true}
          speed={0.7}
        />
      </View>
      <Pressable style={styles.basicInfoTextWrapper} onPress={handlePressEvent}>
        <Text style={styles.basicInfoText}>Enter Basic Info</Text>
      </Pressable>
    </SafeAreaView>
  );
};

export default BasicInfoScreen;

const styles = StyleSheet.create({
  basicInfoContainer: {
    paddingTop: Platform.OS === 'android' ? 35 : 0,
    flex: 1,
    backgroundColor: 'white',
  },
  viewContents: { marginTop: 80 },
  heading1: {
    fontSize: 32,
    fontWeight: 'bold',
    fontFamily: 'GeezaPro-Bold',
    marginLeft: 20,
  },
  heading2: {
    fontSize: 32,
    fontWeight: 'bold',
    fontFamily: 'GeezaPro-Regular',
    marginLeft: 20,
    marginTop: 10,
  },
  lottieView1: {
    width: 260,
    height: 300,
    alignSelf: 'center',
    marginTop: 50,
    justifyContent: 'center',
  },
  basicInfoTextWrapper: {
    marginTop: 'auto',
    backgroundColor: '#900C3F',
    padding: 15,
  },
  basicInfoText: {
    textAlign: 'center',
    color: 'white',
    fontWeight: '600',
    fontSize: 15,
  },
});
