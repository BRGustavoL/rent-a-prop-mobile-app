import * as React from 'react';
import {
  Text, 
  View } from 'react-native';

import Carousel from 'react-native-snap-carousel';
import { StyleSheet } from 'react-native';

export default class App extends React.Component {
    constructor(props){
        super(props);
        this.state = {
          activeIndex:0,
          carouselItems: [
          {
              title:"Item 1",
              text: "Text 1",
          },
          {
              title:"Item 2",
              text: "Text 2",
          },
          {
              title:"Item 3",
              text: "Text 3",
          },
          {
              title:"Item 4",
              text: "Text 4",
          },
          {
              title:"Item 5",
              text: "Text 5",
          },
        ]
      }
    }

    _renderItem({item,index}){
      return (
        <View style={styles.item}>
          <Text style={{fontSize: 30}}>{item.title}</Text>
          <Text>{item.text}</Text>
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
          sliderHeight={10}
          itemWidth={200}
          itemHeight={10}
          renderItem={this._renderItem}
          onSnapToItem = { index => this.setState({activeIndex:index}) }
        />
      );
    }
}

const styles = StyleSheet.create({
  carousel: {
    backgroundColor: 'black',
    elevation: 5,
    shadowColor: '#000',
  },
  item: {
    borderRadius: 5,
    padding: 50,
    marginLeft: 25,
    marginRight: 25,
  }
})
