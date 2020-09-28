import React, { Component } from 'react'
import { View, Text, ImageBackground, TouchableOpacity } from 'react-native'
import Icon from 'react-native-vector-icons/MaterialIcons'
import styles from './Styles'

class PlaceDetail extends Component {

  state = {
    markerUrl: 'https://www.iconfinder.com/data/icons/small-n-flat/24/678111-map-marker-512.png',
    cabana: 'https://moraremteresopolis.com.br/wp-content/uploads/2019/05/cabana.png',
    image: this.props.route.params.image
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.image}>
          <ImageBackground style={styles.imageBackground} source={this.props.route.params.image}></ImageBackground>
        </View>
        <View style={styles.content}>
          <View>
            <Text style={styles.title}>{this.props.route.params.title}</Text>
            <View style={styles.distance}>
              <ImageBackground source={{ uri: this.state.markerUrl }} style={styles.markerImage}></ImageBackground>
              <Text style={styles.distanceText}>A {this.props.route.params.distance}m de você</Text>
            </View>
            <Text style={styles.description}>{this.props.route.params.description}</Text>
          </View>
        </View>
        <View style={styles.touchButton}>
          <TouchableOpacity style={styles.button} onPress={ () => this.props.navigation.navigate('Map') }>
            <Icon name="check" color={'white'} size={30} />
          </TouchableOpacity>
        </View>
      </View>      
    )
  }
}

export default PlaceDetail
