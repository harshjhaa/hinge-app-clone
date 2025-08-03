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
import Fontisto from '@react-native-vector-icons/fontisto';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../navigation';

type EmailScreenNavProp = NativeStackNavigationProp<
  RootStackParamList,
  'Email'
>;

const EmailScreen = () => {
  const [email, setEmail] = useState<string>('');

  const navigation = useNavigation<EmailScreenNavProp>();

  const handleNext = () => {
    navigation.navigate('Password', {
      email: email,
    });
  };

  return (
    <SafeAreaView style={styles.emailScreenContainer}>
      <View style={styles.contentWrapper}>
        <View style={styles.topIconsWrapper}>
          <View style={styles.newspaparIcon}>
            <Fontisto name="email" size={26} color="black" />
          </View>
          <Image
            style={styles.dotImg}
            source={{
              uri: 'https://cdn-icons-png.flaticon.com/128/10613/10613685.png',
            }}
          />
        </View>
        <View style={styles.formWrapper}>
          <Text style={styles.emailDescription}>Provide your email</Text>
          <Text
            style={[
              styles.textInputDescription,
              styles.textInputDescriptionMargin,
            ]}
          >
            Email verification helps us keep the account secure.
          </Text>
          <TextInput
            value={email}
            onChangeText={text => setEmail(text)}
            autoFocus={true}
            placeholder="Enter email (required)"
            placeholderTextColor={'#BEBEBE'}
            style={styles.textInput}
          />
        </View>
        <Text style={styles.textInputDescription}>
          Note: You will be asked to verify your email.
        </Text>
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

export default EmailScreen;

const styles = StyleSheet.create({
  emailScreenContainer: {
    paddingTop: Platform.OS === 'android' ? 35 : 0,
    flex: 1,
    backgroundColor: 'white',
  },
  infoMessage: { marginTop: 50, textAlign: 'center', color: 'gray' },
  contentWrapper: { marginTop: 80, marginHorizontal: 20 },
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
  emailDescription: {
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
  textInputDescriptionMargin: { marginTop: 7 },
  nextButton: { marginTop: 30, marginLeft: 'auto' },
});
