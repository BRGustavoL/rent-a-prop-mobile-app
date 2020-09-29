import { StyleSheet, Dimensions } from 'react-native'
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

export default styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    flex: 1,
    
  },
  image: {
    width: '100%',
    height: 280,
  },
  content: {
    paddingLeft: 30,
    paddingRight: 30,
    paddingTop: 24,
  },
  touchButton: {
    paddingLeft: 40,
    paddingRight: 40,
    justifyContent: 'flex-end',
    height: hp('20%'),
  },

  imageBackground: {
    width: '100%',
    height: 280,
  },
  title: {
    fontWeight: 'bold',
    fontSize: 28
  },
  distance: {
    flexDirection: 'row',
    alignItems: 'flex-end'
  },
  distanceText: {
    fontSize: 16,
    color: 'rgba(0, 0, 0, 0.6)'
  },
  markerImage: {
    width: 20,
    height: 20,
    marginTop: 8,
    marginRight: 4,
  },
  description: {
    marginTop: 30,
    fontSize: 16,
    color: 'rgba(0, 0, 0, 0.6)'
  },
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    padding: 14,
    borderRadius: 200,
    backgroundColor: '#FF5A5F'
  }
})
