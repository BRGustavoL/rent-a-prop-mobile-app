import { StyleSheet } from 'react-native'

export default styles = StyleSheet.create({
  carousel: {
    backgroundColor: 'white',
    elevation: 5,
    shadowColor: '#000',
    borderRadius: 6,
  },
  item: {
    padding: 10,
    flexDirection: 'row',
    justifyContent: 'flex-start',
  },
  imageConfig: {
    width: 80,
    height: 80,
    borderRadius: 5,
    marginRight: 18,
    overflow: 'hidden',
  },
  markerImage: {
    width: 20,
    height: 20,
    marginTop: 8,
    marginRight: 4,
  },
  title: {
    fontSize: 24,
    marginTop: 6,
  },
  mapInfo: {
    flexDirection: 'row',
    alignItems: 'flex-end',
  },
  distanceText: {
    color: 'rgba(0, 0, 0, 0.6)'
  }
})
