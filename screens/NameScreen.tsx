import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Platform,
  Image,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import React, { useState } from 'react';
import Ionicons from '@react-native-vector-icons/ionicons';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../navigation';

type NameScreenNavProp = NativeStackNavigationProp<RootStackParamList, 'Name'>;

const NameScreen = () => {
  const [firstName, setFirstName] = useState('');

  const navigation = useNavigation<NameScreenNavProp>();

  const handleNext = () => {
    navigation.navigate('Email');
  };

  return (
    <SafeAreaView style={styles.nameScreenContainer}>
      <Text style={styles.infoMessage}>NO BACKGROUND CHECKS ARE CONDUCTED</Text>
      <View style={styles.contentWrapper}>
        <View style={styles.topIconsWrapper}>
          <View style={styles.newspaparIcon}>
            <Ionicons name="newspaper-outline" size={26} color="black" />
          </View>
          <Image
            style={styles.dotImg}
            source={{
              uri: 'https://cdn-icons-png.flaticon.com/128/10613/10613685.png',
            }}
          />
        </View>
        <View style={styles.formWrapper}>
          <Text style={styles.nameDescription}>What's your name?</Text>
          <TextInput
            value={firstName}
            onChangeText={text => setFirstName(text)}
            autoFocus={true}
            placeholder="First name (required)"
            placeholderTextColor={'#BEBEBE'}
            style={styles.textInput}
          />
          <TextInput
            placeholder="Last Name"
            placeholderTextColor={'#BEBEBE'}
            style={styles.textInput}
          />
          <Text style={styles.textInputDescription}>Last name is optional</Text>
        </View>
        <TouchableOpacity activeOpacity={0.8} style={styles.nextButton}>
          <Ionicons
            onPress={handleNext}
            name="chevron-forward-circle-outline"
            size={45}
            color="#581845"
          />
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default NameScreen;

const styles = StyleSheet.create({
  nameScreenContainer: {
    paddingTop: Platform.OS === 'android' ? 35 : 0,
    flex: 1,
    backgroundColor: 'white',
  },
  infoMessage: { marginTop: 50, textAlign: 'center', color: 'gray' },
  contentWrapper: { marginTop: 30, marginHorizontal: 20 },
  topIconsWrapper: { flexDirection: 'row', alignItems: 'center' },
  newspaparIcon: {
    width: 44,
    height: 44,
    borderRadius: 22,
    borderWidth: 2,
    borderColor: 'black',
    justifyContent: 'center',
    alignItems: 'center',
  },
  dotImg: { width: 100, height: 40 },
  formWrapper: {
    marginTop: 30,
  },
  nameDescription: {
    fontSize: 25,
    fontWeight: 'bold',
    fontFamily: 'GeezaPro-Bold',
  },
  textInput: {
    width: 340,
    marginVertical: 10,
    marginTop: 25,
    borderBottomColor: 'black',
    borderBottomWidth: 1,
    paddingBottom: 10,
    fontFamily: 'GeezaPro-Bold',
    fontSize: 22,
  },
  textInputDescription: { fontSize: 15, color: 'gray', fontWeight: '500' },
  nextButton: { marginTop: 30, marginLeft: 'auto' },
});
