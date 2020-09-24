import { StyleSheet, Dimensions } from 'react-native';

export default styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  mapStyle: {
    position: 'absolute',
    width: Dimensions.get('window').width,
    top: 0,
    bottom: 0
  },
  positonBox: {
    marginTop: 568,
    width: Dimensions.get('window').width,
    justifyContent: 'flex-start',
    marginBottom: 40
  },
  positonBoxTitle: {
    textAlign: 'center',
    fontSize: 22,
    fontWeight: 'bold',
    color: '#0B42FF',
    marginBottom: 10
  },
  positonBoxLatLon: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  locationButton: {
    backgroundColor: '#0B42FF',
    borderRadius: 150,
    marginTop: -110,
    width: 50,
    height: 50,
    alignSelf: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000',
    elevation: 8,
  },
  actionButtons: {
    flex: 1,
    width: Dimensions.get('window').width - 240,
    flexDirection: 'row',
    justifyContent: 'space-between',
  }
})
