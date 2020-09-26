import React, { Component } from 'react'
import { Text, View, ImageBackground } from 'react-native'
import Carousel from 'react-native-snap-carousel'
import styles from './Styles'

export default class PlaceCarousel extends Component {
    constructor(props){
        super(props)
        this.state = {
          activeIndex: 0
      }
    }

    _renderItem({item, index}){
      return (
        <View style={styles.item}>
          <View>
            <ImageBackground source={item.image} style={styles.imageConfig}></ImageBackground>
          </View>
          <View>
            <Text style={styles.title}>{item.title}</Text>
            <View style={styles.mapInfo}>
              <ImageBackground source={{ uri: 'https://www.iconfinder.com/data/icons/small-n-flat/24/678111-map-marker-512.png' }} style={styles.markerImage}></ImageBackground>
              <Text style={styles.distanceText}>{item.distance}</Text>
            </View>
          </View>
        </View>
      )
    }

    render() {
      return (
        <Carousel
          slideStyle={styles.carousel}
          layout={"default"}
          ref={ref => this.carousel = ref}
          data={this.props.places}
          sliderWidth={400}
          itemWidth={360}
          renderItem={this._renderItem}
          onSnapToItem = { index => this.setState({ activeIndex: index }) }
        />
      );
    }
}
