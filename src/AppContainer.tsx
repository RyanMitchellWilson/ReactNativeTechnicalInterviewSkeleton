import React from 'react'
import { enableScreens } from 'react-native-screens'
import { createNativeStackNavigator } from 'react-native-screens/native-stack'

import AppRoutes from './routes/app'

enableScreens()
const Stack = createNativeStackNavigator()

const AppContainer = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen component={AppRoutes} name="App"/>
    </Stack.Navigator>
  )
}

export default AppContainer
