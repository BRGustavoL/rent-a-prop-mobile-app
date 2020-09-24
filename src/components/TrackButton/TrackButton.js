import React from 'react'
import { StyleSheet, View } from 'react-native';
import { Button } from '@ui-kitten/components';

export default function TrackButton(props) {
  return (
    <View>
      <Button appearance={props.color} status={props.status} size={props.size}>{props.label}</Button>
    </View>
  )
}
