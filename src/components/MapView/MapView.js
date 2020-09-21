import React, { useState } from 'react';
import MapView, { Marker } from 'react-native-maps';
import { StyleSheet, View, Dimensions, Text } from 'react-native';

export default function MapViewComponent() {
  const [position, setPosition] = useState({
    latitude: 37.78825,
    longitude: -122.4324,
    latitudeDelta: 0.0922,
    longitudeDelta: 0.0421,
  })

  return (
    <View style={styles.container}>
      <MapView
        style={styles.mapStyle}
        region={position}
        onPress={e =>
          setPosition({
            ...position,
            latitude: e.nativeEvent.coordinate.latitude,
            longitude: e.nativeEvent.coordinate.longitude,
          })
        }>
        <Marker
          coordinate={position}
          title={'Marcador'}
          description={'Testando o marcador no mapa'}
        />
      </MapView>
      <View style={styles.positonBox}>
        <Text style={styles.positonBoxTitle}>Sua Localização</Text>
        <View style={styles.positonBoxLatLon}>
          <Text style={{fontSize: 16}}>Lat.</Text>
          <Text style={{fontSize: 16}}>{position.latitude}</Text>
        </View>
        <View style={styles.positonBoxLatLon}>
          <Text style={{fontSize: 16}}>Lon.</Text>
          <Text style={{fontSize: 16}}>{position.longitude}</Text>
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  mapStyle: {
    position: 'absolute',
    width: Dimensions.get('window').width,
    top: 0,
    bottom: 0
  },
  positonBox: {
    backgroundColor: '#fff',
    borderRadius: 20,
    marginTop: 600,
    marginHorizontal: 40,
    padding: 25,
    shadowColor: '#000',
    elevation: 5,
  },
  positonBoxTitle: {
    textAlign: 'center',
    fontSize: 22,
    fontWeight: 'bold',
    color: '#FF5A60',
    marginBottom: 10
  },
  positonBoxLatLon: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});