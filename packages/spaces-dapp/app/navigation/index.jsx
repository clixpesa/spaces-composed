import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { useWalletConnect } from "@walletconnect/react-native-dapp";

import MainNavigator from './MainNavigator'
import AuthNavigator from './AuthNavigator'

const AppStack = createNativeStackNavigator()

export default function AppNavigator() {
  const connector = useWalletConnect();
  return (
    <NavigationContainer>
      <AppStack.Navigator>
        {connector.connected ? (
          <AppStack.Screen
            name="MainStack"
            component={MainNavigator}
            options={{ headerShown: false }}
          />
        ) : (
          <AppStack.Screen
            name="AuthStack"
            component={AuthNavigator}
            options={{ headerShown: false }}
          />
        )}
      </AppStack.Navigator>
    </NavigationContainer>
  )
}