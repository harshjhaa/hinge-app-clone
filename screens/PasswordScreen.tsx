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
import MaterialDesignIcons from '@react-native-vector-icons/material-icons';
import { RouteProp, useNavigation, useRoute } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../navigation';

type PasswordScreenNavProp = NativeStackNavigationProp<
  RootStackParamList,
  'Password'
>;

const PasswordScreen = () => {
  const [password, setPassword] = useState<string>('');

  const navigation = useNavigation<PasswordScreenNavProp>();
  const route = useRoute<RouteProp<RootStackParamList, 'Password'>>();

  const email = route.params.email ?? null;

  const handleNext = () => {
    navigation.navigate('Otp', {
      email: email,
    });
  };

  return (
    <SafeAreaView style={styles.passwordScreenContainer}>
      <View style={styles.contentWrapper}>
        <View style={styles.topIconsWrapper}>
          <View style={styles.newspaparIcon}>
            <MaterialDesignIcons name="lock" size={26} color="black" />
          </View>
          <Image
            style={styles.dotImg}
            source={{
              uri: 'https://cdn-icons-png.flaticon.com/128/10613/10613685.png',
            }}
          />
        </View>
        <View style={styles.formWrapper}>
          <Text style={styles.passwordDescription}>
            Please choose a password
          </Text>
          <Text
            style={[
              styles.textInputDescription,
              styles.textInputDescriptionMargin,
            ]}
          >
            Password should be at least 8 characters long and contain a mix of
            letters, numbers, and special characters.
          </Text>
          <TextInput
            value={password}
            onChangeText={text => setPassword(text)}
            autoFocus={true}
            placeholder="Enter password (required)"
            placeholderTextColor={'#BEBEBE'}
            style={styles.textInput}
          />
        </View>
        <Text style={styles.textInputDescription}>
          Note: Your details are safe with us.
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

export default PasswordScreen;

const styles = StyleSheet.create({
  passwordScreenContainer: {
    paddingTop: Platform.OS === 'android' ? 35 : 0,
    flex: 1,
    backgroundColor: 'white',
  },
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
  passwordDescription: {
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
