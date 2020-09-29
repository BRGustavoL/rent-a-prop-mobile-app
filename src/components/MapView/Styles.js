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
    marginTop: 500,
    width: Dimensions.get('window').width,
    justifyContent: 'flex-start',
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
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: Dimensions.get('window').width,
    paddingLeft: 20,
    paddingRight: 20,
    height: 60,
    borderRadius: 6,
    marginTop: 20
  },
  actionButtonsWithoutPlaces: {
    flexDirection: 'row',
    justifyContent: 'center',
    width: Dimensions.get('window').width,
    paddingLeft: 20,
    paddingRight: 20,
    height: 60,
    borderRadius: 6,
    marginTop: 120
  },
  placeButton: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 20,
    paddingLeft: 60,
    paddingRight: 60,
    paddingBottom: 20,
    borderRadius: 14,
    backgroundColor: '#FF5A5F',
  },
  placeButtonActive: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 20,
    paddingLeft: 60,
    paddingRight: 60,
    paddingBottom: 20,
    borderRadius: 14,
    backgroundColor: '#484848',
  },
  requestButtonSmall: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: 14,
    backgroundColor: 'white',
    borderRadius: 14
  },
  requestButtonLarge: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: 14,
    backgroundColor: 'white',
    borderRadius: 14,
    width: Dimensions.get('window').width - 40
  },
  homeButtonText: {
    color: 'blue',
  }
})
