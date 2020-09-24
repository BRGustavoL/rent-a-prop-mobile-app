import * as React from 'react';
import {
  Text, 
  View,
  ImageBackground } from 'react-native';

import Carousel from 'react-native-snap-carousel';
import styles from './Styles';

export default class App extends React.Component {
    constructor(props){
        super(props);
        this.state = {
          activeIndex: 0,
          carouselItems: [
          {
            title: "Edifício Barry Colins",
            distance: "A 348m de você",
            image: { uri: 'https://freight.cargo.site/t/original/i/8db9435752ceba38f22bd555be59ed9a6ee1452c124797cc631d382d68a20c86/Copy-of-171001_101_008_web.jpg' }
          },
          {
            title: "Cabana Johnson",
            distance: "A 3km de você",
            image: { uri: 'https://media.afar.com/uploads/images/afar_posts/images/dHuDZQ8qbL/original_open-uri20200303-6231-187yjgw?1583268455' }
          },
          {
            title: "Edifício Montreal",
            distance: "A 1km de você",
            image: { uri: 'https://www.galeriadaarquitetura.com.br/Img/projeto/702x415/388/edificio-360%C2%B0395.jpg' }
          }
        ]
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
          data={this.state.carouselItems}
          sliderWidth={400}
          itemWidth={360}
          renderItem={this._renderItem}
          onSnapToItem = { index => this.setState({activeIndex:index}) }
        />
      );
    }
}
