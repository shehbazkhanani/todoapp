import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import LoginOne from '../screen/loginOne';
import Login from '../screen/login';
import Todo from '../screen/todo';
import Signup from '../screen/signup';
import SignupOne from '../screen/signupOne';

const Stack = createNativeStackNavigator();

function Navigation() {
  return(
  <>
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="LoginOne" component={LoginOne} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Todo" component={Todo} />
        <Stack.Screen name="Signup" component={Signup} />
        <Stack.Screen name="SignupOne" component={SignupOne} />
      </Stack.Navigator>
    </NavigationContainer>
  </>)
}
export default Navigation;
