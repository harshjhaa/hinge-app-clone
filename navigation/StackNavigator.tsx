import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from '../screens/HomeScreen';
import LikesScreen from '../screens/LikesScreen';
import ChatScreen from '../screens/ChatScreen';
import ProfileScreen from '../screens/ProfileScreen';
import Entypo from '@react-native-vector-icons/entypo';
import MaterialIcons from '@react-native-vector-icons/material-icons';
import IonIcons from '@react-native-vector-icons/ionicons';
import { NavigationContainer } from '@react-navigation/native';

function RenderIcons(props: { type: string; color: string; size: number }) {
  const { type, color, size } = props;
  switch (type) {
    case 'home':
      return (
        <IonIcons
          name="shuffle-outline"
          size={size}
          color={color}
          style={{ paddingTop: 3 }}
        />
      );
    case 'likes':
      return (
        <Entypo
          name="heart"
          size={size}
          color={color}
          style={{ paddingTop: 3 }}
        />
      );
    case 'chat':
      return (
        <MaterialIcons
          name="chat-bubble-outline"
          size={size}
          color={color}
          style={{ paddingTop: 3 }}
        />
      );
    case 'profile':
      return (
        <IonIcons
          name="person-circle-outline"
          size={size}
          color={color}
          style={{ paddingTop: 3 }}
        />
      );
  }
}

function BottomTabs() {
  const Tab = createBottomTabNavigator();
  return (
    <Tab.Navigator
      screenOptions={() => {
        return {
          tabBarShowLabel: false,
          tabBarStyle: {
            height: 90,
          },
        };
      }}
    >
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarStyle: { backgroundColor: '#101010' },
          headerShown: false,
          tabBarIcon: ({ focused }) =>
            focused ? (
              <RenderIcons type="home" color={'white'} size={27} />
            ) : (
              <RenderIcons type="home" color={'#989898'} size={27} />
            ),
        }}
      />
      <Tab.Screen
        name="Likes"
        component={LikesScreen}
        options={{
          tabBarStyle: { backgroundColor: '#101010' },
          headerShown: false,
          tabBarIcon: ({ focused }) =>
            focused ? (
              <RenderIcons type="likes" color={'white'} size={27} />
            ) : (
              <RenderIcons type="likes" color={'#989898'} size={27} />
            ),
        }}
      />
      <Tab.Screen
        name="Chat"
        component={ChatScreen}
        options={{
          tabBarStyle: { backgroundColor: '#101010' },
          headerShown: false,
          tabBarIcon: ({ focused }) =>
            focused ? (
              <RenderIcons type="chat" color={'white'} size={27} />
            ) : (
              <RenderIcons type="chat" color={'#989898'} size={27} />
            ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={ProfileScreen}
        options={{
          tabBarStyle: { backgroundColor: '#101010' },
          headerShown: false,
          tabBarIcon: ({ focused }) =>
            focused ? (
              <RenderIcons type="profile" color={'white'} size={27} />
            ) : (
              <RenderIcons type="profile" color={'#989898'} size={27} />
            ),
        }}
      />
    </Tab.Navigator>
  );
}

function MainStack() {
  const Stack = createNativeStackNavigator();
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Profile"
        component={BottomTabs}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
}

const StackNavigator = () => {
  return (
    <NavigationContainer>
      <MainStack />
    </NavigationContainer>
  );
};

export default StackNavigator;
