import React, { useState, useRef } from 'react';
import MapView, { Circle, Marker } from 'react-native-maps';
import { StyleSheet, View, Dimensions, TouchableOpacity, Text } from 'react-native';
import * as Location from 'expo-location';
import Icon from 'react-native-vector-icons/MaterialIcons';

export default function MapViewComponent() {
  const [position, setPosition] = useState({
    latitude: 37.78825,
    longitude: -122.4324,
    latitudeDelta: 0.0922,
    longitudeDelta: 0.0421,
  })
  const [circlePos, setCirclePos] = useState({
    latitude: 37.78825,
    longitude: -122.4324,
    latCircle: {
      latitude: 37.78825,
      longitude: -122.4324,
    },
  })
  const defaultLabel = 'Localização marcada'
  const [cardText, setCardText] = useState({
    text: defaultLabel
  })
  const mapView = useRef(null)

  const setOnEventLocation = (e) => {
    setPosition({
      ...position,
      latitude: e.nativeEvent.coordinate.latitude,
      longitude: e.nativeEvent.coordinate.longitude,
    }),
    setCirclePos({
      latitude: e.nativeEvent.coordinate.latitude,
      longitude: e.nativeEvent.coordinate.longitude,
      latCircle: {
        latitude: e.nativeEvent.coordinate.latitude,
        longitude: e.nativeEvent.coordinate.longitude
      }
    })
    setCardText({
      text: defaultLabel
    })
  }

  const requestUserLocation = async () => {
    let { status } = await Location.requestPermissionsAsync();
    if (status !== 'granted') {
      console.log('Permission to access location was denied');
    }

    let location = await Location.getCurrentPositionAsync({});
    setPosition({
      latitude: location.coords.latitude,
      longitude: location.coords.longitude,
      latitudeDelta: location.coords.latitude,
      longitudeDelta: location.coords.longitude,
    })
    setCirclePos({
      latitude: location.coords.latitude,
      longitude: location.coords.longitude,
      latCircle: {
        latitude: location.coords.latitude,
        longitude: location.coords.longitude
      }
    }),
    setCardText({
      text: 'Você está aqui'
    })
    if (mapView.current) {
      mapView.current.animateCamera({
        center: {
          latitude: location.coords.latitude,
          longitude: location.coords.longitude,
        },
        heading: 100,
        zoom: 18
      }, 5000)
    }
  }

  return (
    <View style={styles.container}>
      <MapView
        style={styles.mapStyle}
        region={position}
        ref={mapView}
        onPress={e =>
          setOnEventLocation(e)
        }>
        <Marker
          coordinate={position}
          title={'Você está aqui...'}
          pinColor="blue"
        />
        <Circle
          key = { (circlePos.latitude + circlePos.longitude).toString() }
          center = { circlePos.latCircle }
          radius = { 600 }
          strokeWidth = { 1 }
          strokeColor = { '#0B42FF' }
          fillColor = { 'rgba(230,238,255,0.5)' }
        />
      </MapView>
      <View style={styles.positonBox}>
        <Text style={styles.positonBoxTitle}>{cardText.text}</Text>
        <View style={styles.positonBoxLatLon}>
          <Text style={{fontSize: 16}}>Lat.</Text>
          <Text style={{fontSize: 16}}>{position.latitude}</Text>
        </View>
        <View style={styles.positonBoxLatLon}>
          <Text style={{fontSize: 16}}>Lon.</Text>
          <Text style={{fontSize: 16}}>{position.longitude}</Text>
        </View>
      </View>
      <TouchableOpacity
        style={styles.locationButton}
        onPress={() => {
          requestUserLocation();
        }}>
        <Icon name="my-location" color={'#fff'} size={30} />
      </TouchableOpacity>
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
    color: '#0B42FF',
    marginBottom: 10
  },
  positonBoxLatLon: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  locationButton: {
    backgroundColor: '#0B42FF',
    borderRadius: 150,
    marginTop: -20,
    width: 50,
    height: 50,
    alignSelf: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000',
    elevation: 8,
  },
});