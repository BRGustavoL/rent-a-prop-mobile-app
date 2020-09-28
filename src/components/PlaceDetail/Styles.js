import { StyleSheet, Dimensions } from 'react-native'

export default styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
  },
  content: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
    backgroundColor: 'rgba(0, 0, 0, 0.6)',
    padding: 40
  },
  image: {
    width: Dimensions.get('window').width,
    height: 280
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
  }
})
