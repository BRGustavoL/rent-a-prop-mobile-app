import React, { useState, useRef } from 'react';
import MapView, { Circle, Marker } from 'react-native-maps';
import { View, TouchableOpacity, Text, Alert } from 'react-native';
import * as Location from 'expo-location';
import Icon from 'react-native-vector-icons/MaterialIcons';
import styles from './Styles'
import PlaceCarousel from '../PlaceCarousel/PlaceCarousel'

export default function MapViewComponent() {
  const defaultLocation = {
    latitude: 37.78825,
    longitude: -122.4324,
    latitudeDelta: 0.0922,
    longitudeDelta: 0.0421,
  }

  const [position, setPosition] = useState({
    latitude: defaultLocation.latitude,
    longitude: defaultLocation.longitude,
    latitudeDelta: defaultLocation.latitudeDelta,
    longitudeDelta: defaultLocation.longitudeDelta,
    id: '1'
  })

  const [additionalMarker, setAdditionalMarker] = useState({
    latitude: defaultLocation.latitude,
    longitude: defaultLocation.longitude,
    latitudeDelta: defaultLocation.latitudeDelta,
    longitudeDelta: defaultLocation.longitudeDelta,
    id: '4'
  })

  const [circlePos, setCirclePos] = useState({
    latitude: defaultLocation.latitude,
    longitude: defaultLocation.longitude,
    latCircle: {
      latitude: defaultLocation.latitude,
      longitude: defaultLocation.longitude,
    },
    radius: 600
  })
  const defaultLabel = 'Localização marcada'
  const [cardText, setCardText] = useState({
    text: defaultLabel
  })
  const mapView = useRef(null)

  const setOnEventLocation = (e) => { // TOQUE NA TELA
    setPosition({
      ...position,
      latitude: e.nativeEvent.coordinate.latitude,
      longitude: e.nativeEvent.coordinate.longitude,
      id: 'not-home'
    }),
    setCirclePos({
      latitude: e.nativeEvent.coordinate.latitude,
      longitude: e.nativeEvent.coordinate.longitude,
      latCircle: {
        latitude: e.nativeEvent.coordinate.latitude,
        longitude: e.nativeEvent.coordinate.longitude
      },
      radius: 600
    })
    setCardText({
      text: defaultLabel
    })
  }

  const searchMarkers = () => {
    const text = 'Você está aqui'
    if (cardText.text === text) {
      console.log('Posição Usuário')
      console.log(position)
    } else {
      Alert.alert(
        "Ops...",
        "Busque por sua localização antes de buscar os imóveis :)",
        [
          { text: "Ok, entendi", onPress: () => console.log("OK Pressed") }
        ],
        { cancelable: false }
      )
    }
  }

  const requestUserLocation = async () => { // TOQUE NO BOTÃO, DIRECIONA PARA LOCALIZAÇÃO ATUAL
    let { status } = await Location.requestPermissionsAsync();
    if (status !== 'granted') {
      console.log('Permission to access location was denied');
    }

    let location = await Location.getCurrentPositionAsync({})
    
    setPosition({
      latitude: location.coords.latitude,
      longitude: location.coords.longitude,
      latitudeDelta: location.coords.latitude,
      longitudeDelta: location.coords.longitude,
      id: '3'
    })
    setCirclePos({
      latitude: location.coords.latitude,
      longitude: location.coords.longitude,
      latCircle: {
        latitude: location.coords.latitude,
        longitude: location.coords.longitude
      },
      radius: 600
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
        zoom: 14
      }, 2000)
    }
  }

  return (
    <View style={styles.container}>
      <MapView
        style={styles.mapStyle}
        region={position}
        ref={mapView}
        onPress={ e => setOnEventLocation(e) }>
        <Marker
          coordinate={position}
          title={'Você está aqui...'}
          key={position.id}
        />
        <Marker
          coordinate={additionalMarker}
          title={'Imóvel 1'}
          key={additionalMarker.id}
        />
        <Circle
          key = { (circlePos.latitude + circlePos.longitude).toString() }
          center = { circlePos.latCircle }
          radius = { circlePos.radius }
          strokeWidth = { 1 }
          strokeColor = { '#0B42FF' }
          fillColor = { 'rgba(230,238,255,0.5)' }
        />
      </MapView>
      <View style={styles.positonBox}>
        <PlaceCarousel />
        {/* <Text style={styles.positonBoxTitle}>{cardText.text}</Text>
        <View style={styles.positonBoxLatLon}>
          <Text style={{fontSize: 16}}>Lat.</Text>
          <Text style={{fontSize: 16}}>{position.latitude}</Text>
        </View>
        <View style={styles.positonBoxLatLon}>
          <Text style={{fontSize: 16}}>Lon.</Text>
          <Text style={{fontSize: 16}}>{position.longitude}</Text>
        </View> */}
      </View>
      
      {/* <View style={styles.actionButtons}>
        
        <TouchableOpacity
          style={styles.locationButton}
          onPress={() => {
            requestUserLocation();
          }}>
          <Icon name="my-location" color={'#fff'} size={30} />
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.locationButton}
          onPress={() => {
            searchMarkers();
          }}>
          <Icon name="search" color={'#fff'} size={30} />
        </TouchableOpacity>
      </View> */}
    </View>
  )
}
