/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  View,
  Picker,
  Image,
  ScrollView,
  TouchableWithoutFeedback
} from 'react-native';
import {createStackNavigator,DrawerNavigator} from 'react-navigation';
import { Container, Header, Tab, Tabs, TabHeading, Text,Footer, FooterTab, Button, Badge } from 'native-base';
import Icon from 'react-native-vector-icons/Entypo';
import SimpleLineIcon from 'react-native-vector-icons/SimpleLineIcons';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Feather from 'react-native-vector-icons/Feather';
import BookingForm from './BookingForm';
const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' +
    'Cmd+D or shake for dev menu',
  android: 'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

class MainaActivity extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
        isActive:true,
        initialPosition:0,
        language : 0
    }
  }
  goBookingForm = (name) => () =>{
    this.props.navigation.navigate("BookingForm",{name:name});
  }
  render() {
    var viewArr = [];

    for(let i = 0; i < 10; i++){
  
      viewArr.push(
        <TouchableWithoutFeedback onPress={this.goBookingForm('The Weesten')}>
        <View style={{flexDirection:'column'}}>
        <View style={{flexDirection:'row',margin:10}}>
        <Image source={require('../images/one.jpg')} style={{width:'100%',height:150,borderTopLeftRadius:10,borderTopRightRadius:10}} resizeMode={'cover'} />
         <View style={styles.overimage}>
            <View style={{flexDirection:'row',width:'80%'}}>
            <Icon name="star" style={{color:'#FFC400',fontSize:25}}/>
            <Text style={{color:'#fff',fontSize:15}}>4.5</Text><Text style={{color:'#fff',fontSize:12}}>  (21 rating)</Text>
            </View>
            <View style={{backgroundColor:'#a40eff',borderRadius:10,justifyContent:'center',padding:5,height:30}}>
                <Text style={{color:'#fff'}}> U$ 999 </Text>
            </View>
        </View>
        </View>
        <View style={{flexDirection:'row',marginLeft:10,marginRight:10}}>
              <View style={{flexDirection:'column',width:'60%'}}>
                <Text> The Westeen </Text>
                <Text> Galshan Circle 2,Dhaka </Text>
              </View>
              <View style={{flexDirection:'column',width:'40%'}}>
                <Text style={{color:'#E91E63',fontSize:15,textAlign:'right'}}> Get 50% Off </Text>
                <Text style={{textAlign:'right'}}> Free Wifi </Text>
              </View>
        </View>
    </View>
    </TouchableWithoutFeedback>
      )
    }
    const NearByTab = () => (
      
      <View style={{flex:1,flexDirection:'column'}}>
            <ScrollView>
            {viewArr}
            </ScrollView>
      </View>
      

    );
    return (
      <Container style={{marginLeft:5,marginRight:5}}>
        <View style={{flex:1,flexDirection:'column',marginTop:10}}>
         <View style={{flexDirection:'row',marginTop:5}}>
         <View style={{width:'80%'}}>
         <View style={{flexDirection:'row',alignItems:'center'}}>
            <Icon name="location-pin" style={{fontSize:25,color:'#a40eff'}}/>
            <View style={styles.locationgroup}>
            <Text>Location</Text>
            <Picker
              selectedValue={this.state.language}
              style={{height: 50, width:150}}
              onValueChange={(itemValue, itemIndex) =>
                this.setState({language: itemValue})
              }>
              <Picker.Item label="Yangon" value="Yangon" />
              <Picker.Item label="Mandalay" value="Mandalay" />
            </Picker>
            </View>
        </View>
        </View>
        <View style={{textAlign:'right'}}>
            
              <Image source={require('../images/profile.jpg')} style={{height:50,width:50,borderRadius:100,marginTop:10}} resizeMode={'center'} />
              <Badge style={{ position: 'absolute',right:-1 }}>
            <Text>2</Text>
           </Badge>
        </View>
        </View>
      <Tabs  tabBarUnderlineStyle={{ borderBottomRightRadius:500, borderBottomWidth: 5, borderBottomColor: '#a40eff' }}>
        <Tab activeTextStyle={{ color: '#000', fontWeight: 'normal' }} textStyle={{ color: '#ccc', fontFamily: 'Roboto' }} tabStyle={{ backgroundColor: '#fff' }} activeTabStyle={{ backgroundColor: '#fff' }} heading="Near By">
              <NearByTab/>
        </Tab>
        <Tab activeTextStyle={{ color: '#000', fontWeight: 'normal' }} textStyle={{ color: '#ccc', fontFamily: 'Roboto' }} tabStyle={{ backgroundColor: '#fff' }} activeTabStyle={{ backgroundColor: '#fff' }}  heading="Popular">
          
        </Tab>
        <Tab activeTextStyle={{ color: '#000', fontWeight: 'normal' }} textStyle={{ color: '#ccc', fontFamily: 'Roboto' }} tabStyle={{ backgroundColor: '#fff' }} activeTabStyle={{ backgroundColor: '#fff' }} heading="All">
         
        </Tab>
      </Tabs>
      </View>
      <Footer style={{backgroundColor:'#fff'}}>
          <FooterTab style={{backgroundColor:'#fff',borderTopWidth:2,borderTopColor:'#ccc'}}>
            <Button>
              <SimpleLineIcon name="home"  style={{fontSize:25,color:'#a40eff'}}/>
            </Button>
            <Button>
              <AntDesign name="search1"  style={{fontSize:25,color:'#a40eff'}}/>
            </Button>
            <Button>
              <SimpleLineIcon active name="calendar"  style={{fontSize:25,color:'#a40eff'}}/>
            </Button>
            <Button>
              <Feather name="bookmark"  style={{fontSize:25,color:'#a40eff'}}/>
            </Button>
          </FooterTab>
        </Footer>
    </Container>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
  locationgroup:{
    flexDirection:'column'
  },
  overimage: {
    width: '100%',
    flexDirection: 'row',
    position: 'absolute',
    top: '60%',
    paddingTop: 20,
    left: 0,
    right: 0,
    bottom: 0,
    marginLeft: 2,
    backgroundColor: '#000000B3',

  },
});

const MainRoute = DrawerNavigator({
  MainaActivity:{ screen : MainaActivity },
  BookingForm:{ screen : BookingForm },
});

export default MainRoute;