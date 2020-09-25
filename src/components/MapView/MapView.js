import * as React from 'react';
import MapView, { Circle, Marker } from 'react-native-maps';
import { View, TouchableOpacity, Text, Alert } from 'react-native';
import * as Location from 'expo-location';
import Icon from 'react-native-vector-icons/MaterialIcons';
import styles from './Styles'
import PlaceCarousel from '../PlaceCarousel/PlaceCarousel'
import TrackButton from '../TrackButton/TrackButton'
import UserPosition from '../../redux/containers/userPosition'
import { bindActionCreators } from 'redux'
import * as userLocationAction from '../../redux/actions/userLocation'
import { connect } from 'react-redux'

class MapViewComponent extends React.Component {
  constructor(props) {
    super(props)
    this.mapView = React.createRef
  }

  // const setOnEventLocation = (e) => { // TOQUE NA TELA
  //   setPosition({
  //     ...position,
  //     latitude: e.nativeEvent.coordinate.latitude,
  //     longitude: e.nativeEvent.coordinate.longitude,
  //     id: 'not-home'
  //   }),
  //   setCirclePos({
  //     latitude: e.nativeEvent.coordinate.latitude,
  //     longitude: e.nativeEvent.coordinate.longitude,
  //     latCircle: {
  //       latitude: e.nativeEvent.coordinate.latitude,
  //       longitude: e.nativeEvent.coordinate.longitude
  //     },
  //     radius: 600
  //   })
  //   setCardText({
  //     text: defaultLabel
  //   })
  // }

  requestUserLocation = async () => { // TOQUE NO BOTÃO, DIRECIONA PARA LOCALIZAÇÃO ATUAL
    let { status } = await Location.requestPermissionsAsync();
    if (status !== 'granted') {
      console.log('Permission to access location was denied');
    }

    let location = await Location.getCurrentPositionAsync({})
    
    const position = {
      id: Math.random(),
      coords: {
        latitude: location.coords.latitude,
        longitude: location.coords.longitude,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421
      }
    }

    this.state.defaulCoords = position
    
    this.state.circleCoords = {
      latitude: location.coords.latitude,
      longitude: location.coords.longitude,
      latCircle: {
        latitude: location.coords.latitude,
        longitude: location.coords.longitude
      },
      radius: 600
    }

    if (this.mapView.current) {
      this.mapView.current.animateCamera({
        center: {
          latitude: location.coords.latitude,
          longitude: location.coords.longitude,
        },
        heading: 100,
        zoom: 14
      }, 2000)
    }
    this.props.updateUserLocation({
      location: position
    })
  }

  state = {
    defaulCoords: {
      id: Math.random(),
      coords: {
        latitude: 37.78825,
        longitude: -122.4324,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421
      }
    },
    circleCoords: {
      latitude: 37.78825,
      longitude: -122.4324,
      latCircle: {
        latitude: 37.78825,
        longitude: -122.4324
      },
      radius: 600
    }
  }

  render () {
    return (
      <View style={styles.container}>
        <MapView
          style={styles.mapStyle}
          region={this.state.defaulCoords.coords}
          ref={this.mapView}
          // onPress={ e => setOnEventLocation(e) }
          >
          <Marker
            coordinate={this.state.defaulCoords.coords}
            title={'Você está aqui...'}
            key={this.state.defaulCoords.id}
          />
          <Circle
            key = { (this.state.circleCoords.latitude + this.state.circleCoords.longitude).toString() }
            center = { this.state.circleCoords.latCircle }
            radius = { this.state.circleCoords.radius }
            strokeWidth = { 1 }
            strokeColor = { '#0B42FF' }
            fillColor = { 'rgba(230,238,255,0.5)' }
          />
        </MapView>
        <View style={styles.positonBox}>
          <PlaceCarousel />
        </View>
        <View>
          <TouchableOpacity onPress={ () => this.requestUserLocation() }>
            <Text>Localizar</Text>
          </TouchableOpacity>
        </View>
      </View>
    )
  }
}

const mapDispatchToProps = dispatch => bindActionCreators(userLocationAction, dispatch)
const mapStateToProps = state => ({
  userLocation: state.userLocation
})

export default connect(mapStateToProps, mapDispatchToProps)(MapViewComponent)
