import { legacy_createStore } from 'redux'

import reducers from '.'

export default function configureStore() {
    return legacy_createStore(reducers)
}