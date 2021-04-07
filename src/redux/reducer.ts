import { createReducer } from '@reduxjs/toolkit'

import { updateHomeCount } from './actions'
import {initialState} from './state'

const reducer = createReducer(initialState, builder => {
  builder
    .addCase(updateHomeCount, (state, { payload }) => {
      return {
        ...state,
        homeCount: payload
      }
    })
})

export default reducer
