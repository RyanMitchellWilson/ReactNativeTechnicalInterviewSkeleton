import React, {useCallback} from 'react'
import { Pressable, StyleSheet, Text, View } from 'react-native'
import { useDispatch } from 'react-redux'

import { updateHomeCount } from '../../redux/actions'
import { useState } from '../../redux/selectors'

const Home = () => {
  const dispatch = useDispatch()
  const {homeCount} = useState()

  const addToCount = useCallback(() => {
    dispatch(updateHomeCount(homeCount + 1))
  }, [dispatch, homeCount])

  const subtractFromCount = useCallback(() => {
    dispatch(updateHomeCount(homeCount - 1))
  }, [dispatch, homeCount])
  
  return (
    <View style={styles.container}>
      <Text>Home</Text>
      <Text>{homeCount}</Text>
      <View style={styles.buttonContainer}>
        <Pressable onPress={subtractFromCount} style={styles.button}>
          <Text style={styles.buttonText}>Subtract</Text>
        </Pressable>
        <Pressable onPress={addToCount} style={styles.button}>
          <Text style={styles.buttonText}>Add</Text>
        </Pressable>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: '#256BA2',
    borderRadius: 6,
    marginLeft: 5,
    marginRight: 5,
    padding: 12
  },
  buttonContainer: {
    flexDirection: 'row'
  },
  buttonText: {
    color: '#fff',
  },
  container: {
    alignItems: 'center',
    flex: 1,
    justifyContent: 'center'
  }
})

export default Home
