import { Platform, StyleSheet, Text, TextInput, View } from 'react-native';
import React, { useEffect, useRef, useState } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { RouteProp, useNavigation, useRoute } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../navigation';

type OtpScreenProps = NativeStackNavigationProp<RootStackParamList, 'Otp'>;

const OtpScreen = () => {
  const [otp, setOtp] = useState<Array<string>>(new Array(6).fill(''));
  console.log('otp ==> ', otp);
  const otpInputsRef = useRef<Array<TextInput | null>>([]);

  const navigation = useNavigation<OtpScreenProps>();
  const route = useRoute<RouteProp<RootStackParamList, 'Otp'>>();

  const { email } = route.params.email ?? null;

  const handleConfirmSignUp = () => {
    navigation.navigate('Birth');
  };

  useEffect(() => {
    if (otp.every(digit => digit !== '')) {
      handleConfirmSignUp();
    }
  }, [otp]);

  const handleChange = (text: string, index: number) => {
    //dont allow non-numeric input
    if (text && !/^\d$/.test(text)) {
      return;
    }

    const newOtp = [...otp];
    newOtp[index] = text;
    setOtp(newOtp);

    // Move to the next input if the current one is filled
    if (text && index < 5) {
      otpInputsRef.current[index + 1]?.focus();
    }

    // If backspace is pressed and the current input is empty, focus on the previous input
    if (!text && index > 0) {
      otpInputsRef.current[index - 1]?.focus();
    }
  };

  return (
    <SafeAreaView style={styles.otpScreenContainer}>
      <View style={styles.contentWrapper}>
        <Text style={styles.infoHeading}>Verification code</Text>
        <Text style={styles.infoSubHeading}>
          Enter the 6 digit code sent to your email
        </Text>
        <View style={styles.otpInputsWrapper}>
          {otp?.map((_, index) => (
            <TextInput
              key={index}
              style={styles.otpTextInput}
              ref={el => {
                otpInputsRef.current[index] = el;
              }}
              keyboardType="number-pad"
              maxLength={1}
              value={otp[index]}
              onChangeText={text => handleChange(text, index)}
              onKeyPress={({ nativeEvent }) => {
                if (nativeEvent.key === 'Backspace') {
                  handleChange('', index);
                }
              }}
              autoFocus={index === 0}
            />
          ))}
        </View>
      </View>
    </SafeAreaView>
  );
};

export default OtpScreen;

const styles = StyleSheet.create({
  otpScreenContainer: {
    paddingTop: Platform.OS === 'android' ? 35 : 0,
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
  },
  contentWrapper: {
    height: 60,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 80,
  },
  infoHeading: { fontSize: 18, fontWeight: '500' },
  infoSubHeading: { fontSize: 14, color: 'gray', marginTop: 5 },
  otpInputsWrapper: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '80%',
    marginTop: 30,
  },
  otpTextInput: {
    width: 45,
    height: 45,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    textAlign: 'center',
    fontSize: 18,
    color: '#333',
  },
});
