import React from 'react'
import { StatusBar } from 'expo-status-bar'
import MapView from './src/components/MapView/MapView'
import * as eva from '@eva-design/eva';
import { ApplicationProvider } from '@ui-kitten/components';

import store from './src/redux/store'
import { Provider } from 'react-redux'

export default function App() {
  return (
    <Provider store={store}>
      <ApplicationProvider {...eva} theme={eva.light}>
        <StatusBar style="auto" />
        <MapView />
      </ApplicationProvider>
    </Provider>
  )
}
