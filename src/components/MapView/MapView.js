import * as React from 'react';
import MapView, { Circle, Marker } from 'react-native-maps';
import { View, TouchableOpacity } from 'react-native';
import * as Location from 'expo-location';
import Icon from 'react-native-vector-icons/MaterialIcons';
import styles from './Styles'
import PlaceCarousel from '../PlaceCarousel/PlaceCarousel'
import { bindActionCreators } from 'redux'
import * as userLocationAction from '../../redux/actions/userLocation'
import { connect } from 'react-redux'
import { getDistance } from 'geolib'

class MapViewComponent extends React.Component {
  state = {
    isNearMeActivated: false,
    isUserLocation: false,
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
      radius: 2000
    },
    carouselItems: [
      {
        id: 0,
        title: 'Edifício Barry Colins',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
        distance: 0,
        coords: {
          latitude: -27.101241867015556,
          longitude: -52.63208828866482,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421
        },
        image: { uri: 'https://freight.cargo.site/t/original/i/8db9435752ceba38f22bd555be59ed9a6ee1452c124797cc631d382d68a20c86/Copy-of-171001_101_008_web.jpg' }
      },
      {
        id: 1,
        title: "Cabana Johnson",
        distance: 0,
        coords: {
          latitude: -27.099906830520297,
          longitude: -52.625152096152306,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421
        },
        image: { uri: 'https://media.afar.com/uploads/images/afar_posts/images/dHuDZQ8qbL/original_open-uri20200303-6231-187yjgw?1583268455' }
      },
      {
        id: 2,
        title: "Edifício Montreal",
        distance: 0,
        coords: {
          latitude: -27.087274382887554,
          longitude: -52.62402724474668,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421
        },
        image: { uri: 'https://www.galeriadaarquitetura.com.br/Img/projeto/702x415/388/edificio-360%C2%B0395.jpg' }
      },
      {
        id: 3,
        title: "Casa J. América 337D",
        distance: 0,
        coords: {
          latitude: -27.100448248983373,
          longitude: -52.63705104589462,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421
        },
        image: { uri: 'https://s2.glbimg.com/2DaQ8YKTdA6NGYgA28eVbmQ6g1k=/512x320/smart/e.glbimg.com/og/ed/f/original/2020/01/20/leve-e-iluminada-esta-casa-na-bahia-mistura-estrutura-metalica-madeira-e-vidro_9.jpg' }
      },
      {
        id: 4,
        title: "UNOESC",
        distance: 0,
        coords: {
          latitude: -27.1345326,
          longitude: -52.5993848,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421
        },
        image: { uri: 'https://www.unoesc.edu.br/images/uploads/unoesc/410/foto_anuncio__large.jpg' }
      },
      {
        id: 5,
        title: "IL Centenário",
        distance: 0,
        coords: {
          latitude: -27.106504,
          longitude: -52.6178051,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421
        },
        image: { uri: 'https://i.imgur.com/Paz4b4E.jpg' }
      },
      {
        id: 6,
        title: "Casa do Tony Stark",
        distance: 0,
        coords: {
          latitude: -27.092489372754393,
          longitude: -52.61805530637503,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421
        },
        image: { uri: 'https://media.comicbook.com/uploads1/2015/06/iron-man-aeral-700x467-138304.png' }
      }
    ]
  }

  NearMeButtonInactive = () => {
    return (
      <TouchableOpacity style={styles.placeButton} onPress={ () => this.rentPlace() }>
        <Icon name="near-me" color={'white'} size={30} />
      </TouchableOpacity>
    )
  }

  NearMeButtonActive = () => {
    return (
      <TouchableOpacity style={styles.placeButtonActive} onPress={ () => this.setState({ isNearMeActivated: false }) }>
        <Icon name="clear" color={'white'} size={30} />
      </TouchableOpacity>
    )
  }

  rentPlace = () => {
    this.setState({ isNearMeActivated: true })
    let place = {}
    this.state.carouselItems.forEach(el => {
      if (el.id === this.props.carouselPosition.index) {
        place = {
          id: el.id,
          title: el.title,
          description: el.description,
          distance: el.distance,
          image: el.image
        }
      }
    })
    this.props.navigation.navigate('Detail', {
      id: place.id,
      title: place.title,
      description: place.description,
      image: place.image,
      distance: place.distance
    })
    setTimeout(() => {
      this.setState({ isNearMeActivated: false })
    }, 1000)
  }

  updateItemsDistance = () => {
    const items = this.state.carouselItems
    const origin = {
      latitude: this.state.defaulCoords.coords.latitude,
      longitude: this.state.defaulCoords.coords.longitude
    }
    let remoduledCarouselItems = []
    let marker = {}
    items.forEach(el => {
      marker = {
        latitude: el.coords.latitude,
        longitude: el.coords.longitude
      }
      remoduledCarouselItems.push({
        id: el.id,
        title: el.title,
        distance: Number(this.returnCalculatedDistance(origin, marker), 10),
        coords: el.coords,
        image: el.image
      })
    })
    this.setState({
      carouselItems: remoduledCarouselItems
    })
  }

  NearMeButton = () => {
    return (this.state.isNearMeActivated) ? this.NearMeButtonActive() : this.NearMeButtonInactive()
  }

  PlaceCarouselComponent = () => {
    return (this.state.isUserLocation) ? <PlaceCarousel places={this.state.carouselItems}/> : null
  }

  returnCalculatedDistance = (origin, marker) => {
    return getDistance(
      {latitude: origin.latitude, longitude: origin.longitude},
      {latitude: marker.latitude, longitude: marker.longitude}
    )
  }

  setOnEventLocation = (e) => { // TOQUE NA TELA
    this.setState({
      defaulCoords: {
        id: Math.random(),
        coords: {
          latitude: e.nativeEvent.coordinate.latitude,
          longitude: e.nativeEvent.coordinate.longitude,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421
        }
      }
    })

    this.setState({
      circleCoords: {
        latitude: e.nativeEvent.coordinate.latitude,
        longitude: e.nativeEvent.coordinate.longitude,
        latCircle: {
          latitude: e.nativeEvent.coordinate.latitude,
          longitude: e.nativeEvent.coordinate.longitude
        },
        radius: 2000
      }
    })

    this.setState({ isUserLocation: false })
  }

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

    this.setState({
      defaulCoords: position
    })

    this.setState({
      circleCoords: {
        latitude: location.coords.latitude,
        longitude: location.coords.longitude,
        latCircle: {
          latitude: location.coords.latitude,
          longitude: location.coords.longitude
        },
        radius: 2000
      }
    })

    if (this.mapRef) {
      this.mapRef.animateCamera({
        center: {
          latitude: location.coords.latitude,
          longitude: location.coords.longitude,
        },
        heading: 100,
        zoom: 16
      }, 2000)
    }

    this.setState({ isUserLocation: true })

    this.props.setUserLocation({
      location: position
    })

    this.updateItemsDistance()
  }

  render () {
    return (
      <View style={styles.container}>
        <MapView
          style={styles.mapStyle}
          region={this.state.defaulCoords.coords}
          ref={(map) => { this.mapRef = map }}
          onPress={ e => this.setOnEventLocation(e) }
          >
          <Marker
            coordinate={this.state.defaulCoords.coords}
            title={'Você está aqui...'}
            key={this.state.defaulCoords.id}
            pinColor="#FC642D"
          />
          {this.state.carouselItems.map((prop) => {
            return (
              <Marker
                coordinate={prop.coords}
                title={prop.title}
                key={prop.id}
                pinColor="#FF5A5F"
              />
            );
          })}
          <Circle
            key = { (this.state.circleCoords.latitude + this.state.circleCoords.longitude).toString() }
            center = { this.state.circleCoords.latCircle }
            radius = { this.state.circleCoords.radius }
            strokeWidth = { 1 }
            strokeColor = { '#FF5A5F' }
            fillColor = { 'rgba(255, 90, 95, 0.1)' }
          />
        </MapView>
        <View style={styles.positonBox}>
          { this.PlaceCarouselComponent() }
        </View>
        <View style={this.state.isUserLocation ? styles.actionButtons : styles.actionButtonsWithoutPlaces}>
          <TouchableOpacity style={styles.homeButton} onPress={ () => this.requestUserLocation() }>
            <Icon name="my-location" color={'#FF5A5F'} size={30} />
          </TouchableOpacity>
          { this.NearMeButton() }
        </View>
      </View>
    )
  }
}

const mapDispatchToProps = dispatch => bindActionCreators(userLocationAction, dispatch)
const mapStateToProps = state => ({
  userLocation: state.userLocation,
  carouselPosition: state.placesCarouselPosition
})

export default connect(mapStateToProps, mapDispatchToProps)(MapViewComponent)
