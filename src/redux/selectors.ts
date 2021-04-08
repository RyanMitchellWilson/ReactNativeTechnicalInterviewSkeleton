import { useSelector } from 'react-redux'

import {IState} from './state'

export const useReduxState = () => useSelector((state: IState) => state)