import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

const Rides = () => {
  return (
    <View style={styles.container}>
      <Text>Rides</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    flex: 1,
    justifyContent: 'center'
  }
})

export default Rides
