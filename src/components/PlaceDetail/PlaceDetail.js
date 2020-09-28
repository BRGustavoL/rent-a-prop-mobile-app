import React, { Component } from 'react'
import { View, Text, ImageBackground, TouchableOpacity } from 'react-native'
import styles from './Styles'

class PlaceDetail extends Component {

  state = {
    markerUrl: 'https://www.iconfinder.com/data/icons/small-n-flat/24/678111-map-marker-512.png'
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.image}></View>
        <View style={styles.content}>
          <View>
            <Text style={styles.title}>{this.props.route.params.title}</Text>
            <View style={styles.distance}>
              <ImageBackground source={{ uri: this.state.markerUrl }} style={styles.markerImage}></ImageBackground>
              <Text style={styles.distanceText}>A {this.props.route.params.distance}m de você</Text>
            </View>
            <Text style={styles.description}>asdsadusaduhsuadhuhsadhusadhusaduhsaduhsaduhsadhusadhusadhusadsahdhiasdaisodhashdaskjahdskjsadhjksadkjhsadkjhaskdjhsakdjhkjh</Text>
          </View>
          <View>
            <TouchableOpacity></TouchableOpacity>
          </View>
        </View>
      </View>      
    )
  }
}

export default PlaceDetail
