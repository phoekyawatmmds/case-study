import React, { Component } from 'react';
import { View, Text,StyleSheet } from 'react-native';
import { Container } from 'native-base';

export default class BookingForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <Container>
           <View style={{flex:1,marginTop:10}}>
            <View style={styles.fieldSet}>
                <Text style={styles.legend}>Check In</Text>
                <Text>Some Text or control</Text>
            </View>
            </View>
      </Container>    
    );
  }



}
    const styles = StyleSheet.create({
        fieldSet:{
            margin: 10,
            paddingHorizontal: 10,
            paddingBottom: 10,
            borderRadius: 5,
            borderWidth: 1,
            alignItems: 'center',
            borderColor: '#000'
        },
        legend:{
            position: 'absolute',
            top: -5,
            left: 20,
            fontWeight: 'bold',
            backgroundColor: '#FFFFFF'
        }
    });