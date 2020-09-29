import React, { Component } from 'react'
import { ScrollView , View, Text, ImageBackground, TouchableOpacity, Alert } from 'react-native'
import Icon from 'react-native-vector-icons/MaterialIcons'
import styles from './Styles'

class PlaceDetail extends Component {

  state = {
    markerUrl: 'https://www.iconfinder.com/data/icons/small-n-flat/24/678111-map-marker-512.png',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.'
  }

  confirmAndNavigate = () => {
    Alert.alert(
      "Ótima escolha!!",
      "Tem certeza que deseja comprar?",
      [
        {
          text: "Não, obrigado",
          style: "cancel"
        },
        { text: "Comprar", onPress: () => this.props.navigation.navigate('Map') }
      ],
      { cancelable: false }
    )
  }

  render() {
    return (
      <ScrollView style={styles.container}>
        <View style={styles.image}>
          <ImageBackground style={styles.imageBackground} source={this.props.route.params.image}></ImageBackground>
        </View>
        <View style={styles.content}>
          <View>
            <Text style={styles.title}>{this.props.route.params.title}</Text>
            <View style={styles.distance}>
              <ImageBackground source={{ uri: this.state.markerUrl }} style={styles.markerImage}></ImageBackground>
              <Text style={styles.distanceText}>{this.props.route.params.distance}</Text>
            </View>
            <Text style={styles.description}>{this.state.description}</Text>
          </View>
        </View>
        <View style={styles.touchButton}>
          <TouchableOpacity style={styles.button} onPress={ () => this.confirmAndNavigate() }>
            <Icon name="check" color={'white'} size={30} />
          </TouchableOpacity>
        </View>
      </ScrollView>      
    )
  }
}

export default PlaceDetail
