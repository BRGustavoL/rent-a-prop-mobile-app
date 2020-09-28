import React from 'react'
import { Image, View } from 'react-native'
import { StatusBar } from 'expo-status-bar'
import MapView from './src/components/MapView/MapView'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import PlaceDetail from './src/components/PlaceDetail/PlaceDetail'
import store from './src/redux/store'
import { Provider } from 'react-redux'
import { StyleSheet, Dimensions } from 'react-native';

const Stack = createStackNavigator()

function LogoTitle() {
  return (
    <View style={styles.view}>
      <Image
        style={styles.logo}
        source={require('./assets/splash.png')}
      />
    </View>
  )
}

function App() {
  return (
    <Provider store={store}>
      <StatusBar style="auto" />
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Map" component={MapView} options={{ headerTitle: props => <LogoTitle {...props} /> }}/>
          <Stack.Screen name="Detail" component={PlaceDetail} options={{ title: 'Detalhes' }}/>
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  )
}

const styles = StyleSheet.create({
  view: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  logo: {
    width: 280,
    height: 280
  }
})

export default App
