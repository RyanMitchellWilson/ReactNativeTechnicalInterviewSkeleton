import React from 'react'
import { StatusBar } from 'react-native'
import { NavigationContainer } from '@react-navigation/native'
import { Provider } from 'react-redux'
import { SafeAreaProvider } from 'react-native-safe-area-context'

import AppContainer from './src/AppContainer'
import store from './src/redux/store'

const App = () => {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <SafeAreaProvider>
          <StatusBar barStyle={'dark-content'} />
          <AppContainer/>
        </SafeAreaProvider>
      </NavigationContainer>
    </Provider>
  )
}

export default App
