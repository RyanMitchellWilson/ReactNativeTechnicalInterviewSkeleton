import { useSelector } from 'react-redux'

import {IState} from './state'

export const useState = () => useSelector((state: IState) => state)