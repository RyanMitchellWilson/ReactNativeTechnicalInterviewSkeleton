import React, { useCallback } from 'react'
import { Pressable, StyleSheet, Text, View } from 'react-native'
import { useDispatch } from 'react-redux'

import { updateHomeCount } from '../../redux/actions'
import { useReduxState } from '../../redux/selectors'

const Home = () => {
  const dispatch = useDispatch()
  const { homeCount } = useReduxState()

  const addToCount = useCallback(() => {
    dispatch(updateHomeCount(homeCount + 1))
  }, [dispatch, homeCount])

  const subtractFromCount = useCallback(() => {
    dispatch(updateHomeCount(homeCount - 1))
  }, [dispatch, homeCount])
  
  return (
    <View style={styles.container}>
      <Text style={styles.titleText}>Example</Text>
      <View style={styles.buttonContainer}>
        <Pressable onPress={addToCount} style={styles.button}>
          <Text style={styles.buttonText}>Add</Text>
        </Pressable>
        <Pressable onPress={subtractFromCount} style={styles.button}>
          <Text style={styles.buttonText}>Subtract</Text>
        </Pressable>
      </View>
      <Text style={styles.countText}>{homeCount}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: '#256BA2',
    borderRadius: 6,
    marginLeft: 5,
    marginRight: 5,
    padding: 12,
    width: 100,
  },
  buttonContainer: {
    flexDirection: 'row'
  },
  buttonText: {
    color: '#fff',
    textAlign: 'center',
  },
  container: {
    alignItems: 'center',
    flex: 1,
    justifyContent: 'center'
  },
  countText: {
    fontSize: 30,
    paddingTop: 20,
  },
  titleText: {
    fontSize: 24,
    paddingBottom: 10,
  }
})

export default Home
