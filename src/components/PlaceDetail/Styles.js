import { StyleSheet, Dimensions } from 'react-native'

export default styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
  },
  content: {
    width: Dimensions.get('window').width,
    padding: 40
  },
  image: {
    width: Dimensions.get('window').width,
    height: 280
  },
  imageBackground: {
    width: Dimensions.get('window').width,
    height: 300,
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
    marginTop: 40,
    fontSize: 16
  },
  touchButton: {
    paddingLeft: 40,
    paddingRight: 40,
    height: 240,
    justifyContent: 'flex-end',
  },
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    padding: 14,
    borderRadius: 200,
    backgroundColor: '#FF5A5F'
  },
  buttonLabel: {
    marginLeft: 8,
    color: 'white',
    fontSize: 20,
    fontWeight: '800',
  }
})
