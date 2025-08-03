// import LoginScreen from '../screens/LoginScreen';
import BasicInfoScreen from '../screens/BasicInfoScreen';
import NameScreen from '../screens/NameScreen';
import EmailScreen from '../screens/EmailScreen';
import OtpScreen from '../screens/OtpScreen';
import PasswordScreen from '../screens/PasswordScreen';
import DateOfBirthScreen from '../screens/DateOfBirthScreen';
import LocationScreen from '../screens/LocationScreen';
import GenderScreen from '../screens/GenderScreen';
import TypeScreen from '../screens/TypeScreen';
import DatingTypeScreen from '../screens/DatingTypeScreen';
import LookingForScreen from '../screens/LookingForScreen';
import HomeTownScreen from '../screens/HomeTownScreen';
import WorkPlaceScreen from '../screens/WorkPlaceScreen';
import JobTitleScreen from '../screens/JobTitleScreen';
import PhotoScreen from '../screens/PhotoScreen';
import PromptScreen from '../screens/PromptScreen';
import WritePromptScreen from '../screens/WritePromptScreen';
import PreFinalScreen from '../screens/PreFinalScreen';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { RootStackParamList } from '.';

const Stack = createNativeStackNavigator<RootStackParamList>();

const AuthStack = () => {
  return (
    <Stack.Navigator>
      {/* <Stack.Screen
        name="Login"
        component={LoginScreen}
        options={{ headerShown: false }}
      /> */}
      <Stack.Screen
        name="BasicInfo"
        component={BasicInfoScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Name"
        component={NameScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Email"
        component={EmailScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Otp"
        component={OtpScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Password"
        component={PasswordScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Birth"
        component={DateOfBirthScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Location"
        component={LocationScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Gender"
        component={GenderScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Type"
        component={TypeScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Dating"
        component={DatingTypeScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="LookingFor"
        component={LookingForScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="HomeTown"
        component={HomeTownScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="WorkPlace"
        component={WorkPlaceScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="JobTitle"
        component={JobTitleScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Photos"
        component={PhotoScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Prompts"
        component={PromptScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="ShowPrompts"
        component={PromptScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="WritePrompts"
        component={WritePromptScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="PreFinal"
        component={PreFinalScreen}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
};

export { AuthStack };
