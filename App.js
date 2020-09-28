import React from 'react'
import { StatusBar } from 'expo-status-bar'
import MapView from './src/components/MapView/MapView'
import * as eva from '@eva-design/eva'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import PlaceDetail from './src/components/PlaceDetail/PlaceDetail'
import store from './src/redux/store'
import { Provider } from 'react-redux'

const Stack = createStackNavigator()

function App() {
  return (
    <Provider store={store}>
      <StatusBar style="auto" />
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Map" component={MapView} options={{ title: 'Mapa', headerTintColor: 'black' }}/>
          <Stack.Screen name="Detail" component={PlaceDetail} options={{ title: 'Detalhes do Imóvel' }}/>
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  )
}

export default App
