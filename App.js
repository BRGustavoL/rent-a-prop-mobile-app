import React from 'react'
import { StatusBar } from 'expo-status-bar'
import MapView from './src/components/MapView/MapView'
import * as eva from '@eva-design/eva';
import { ApplicationProvider } from '@ui-kitten/components';

export default function App() {
  return (
    <ApplicationProvider {...eva} theme={eva.light}>
      <StatusBar style="auto" />
      <MapView />
    </ApplicationProvider>
  )
}
