import {
  BottomTabBarOptions,
  BottomTabNavigationOptions,
  createBottomTabNavigator
} from '@react-navigation/bottom-tabs'
import { RouteProp } from '@react-navigation/native'
import React from 'react'
import { enableScreens } from 'react-native-screens'
import Ionicons from 'react-native-vector-icons/Ionicons'
import Home from '../screens/Home/Home'
import Rides from '../screens/Rides/Rides'


enableScreens()
const Tab = createBottomTabNavigator()

const activeColor = '#256BA2'

const ScreenTabOptions: (props: {
  route: RouteProp<Record<string, object | undefined>, string>
}) => BottomTabNavigationOptions = ({ route }) => {
  return {
    tabBarIcon: ({focused}) => {
      const color = focused ? activeColor : undefined
      switch(route.name) {
        case 'Home':
          return <Ionicons color={color} name='home' size={20}/>
        case 'Rides':
          return <Ionicons color={color} name='car' size={20}/>
      }
    }
  }
}

export const tabBarOptionsProperties: BottomTabBarOptions = {
  activeTintColor: activeColor,
}

const AppRoutes = () => {
  return (
    <Tab.Navigator
      backBehavior='history'
      initialRouteName='Home'
      screenOptions={ScreenTabOptions}
      tabBarOptions={tabBarOptionsProperties}
    >
      <Tab.Screen component={Home} name='Home' />
      <Tab.Screen component={Rides} name='Rides' />
    </Tab.Navigator>
  )
}

export default AppRoutes
