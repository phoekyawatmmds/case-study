import React, { Component } from 'react';
import { View, Text,StyleSheet,TextInput, TouchableWithoutFeedback,ScrollView,Image } from 'react-native';
import { Container,DatePicker } from 'native-base';
import Fontawesome from 'react-native-vector-icons/FontAwesome';
import Fontisto from 'react-native-vector-icons/Fontisto';
import Entypo from 'react-native-vector-icons/Entypo';
import AntDesign from 'react-native-vector-icons/AntDesign';
import RBSheet from "react-native-raw-bottom-sheet";

export default class BookingForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
        location :"Yangon",
        chosenDate: new Date()
    };
    this.setDate = this.setDate.bind(this);
  }
setDate(newDate) {
  this.setState({ chosenDate: newDate });
}
  render() {

    var viewArr = [];

    for(let i = 0; i < 10; i++){
  
      viewArr.push(
        <TouchableWithoutFeedback>
        <View style={{flex:1,flexDirection:'column',width:'100%',marginRight:10}}>
        <View style={{flexDirection:'row'}}>
        <Image source={require('../images/one.jpg')} style={{width:300,height:200,borderTopLeftRadius:10,borderTopRightRadius:10}} resizeMode={'cover'} />
         <View style={styles.overimage}>
            <View style={{flexDirection:'row',width:'80%'}}>
            <Entypo name="star" style={{color:'#FFC400',fontSize:25}}/>
            <Text style={{color:'#fff',fontSize:15}}>4.5</Text><Text style={{color:'#fff',fontSize:12}}>  (21 rating)</Text>
            </View>
        </View>
        </View>
        <View style={{flex:1,flexDirection:'row'}}>
              <View style={{flexDirection:'column',width:'100%'}}>
                <Text> The Westeen </Text>
                <Text> Galshan Circle 2,Dhaka </Text>
              </View>
        </View>
        <View style={{backgroundColor:'#a40eff',borderRadius:10,justifyContent:'center',padding:5,height:30,position:'absolute',right:-5,margin:5}}>
                <Text style={{color:'#fff'}}> U$ 999 </Text>
            </View>
    </View>
    </TouchableWithoutFeedback>
      )
    }
    return (
      <Container style={{backgroundColor:'#ccc'}}>
          <View style={{flex:1,margin:10}}>
           <View style={{flexDirection:'row',marginTop:10}}>
              <View style={{width:'50%',justifyContent:'center'}}>
                  <Text style={{fontSize:20,color:'#000'}}> Explore </Text>
              </View>
              <TouchableWithoutFeedback onPress={() => {
            this.RBSheet.open();
          }}>
              <View style={{width:'50%'}}>
                <View style={{flexDirection:'row',backgroundColor:'#fff',borderRadius:100,justifyContent:'center',padding:10}}>
                  <Fontawesome name="filter" style={{color:'#a40eff',fontSize:25}}/>
                  <Text> Filter </Text>
                  </View>
              </View>
              </TouchableWithoutFeedback>
           </View> 

           <RBSheet
          ref={ref => {
            this.RBSheet = ref;
          }}
          height={300}
          duration={250}
          customStyles={{
            container: {
              backgroundColor: '#ccc',
              padding:10
            }
          }}
        >
        <View style={{flexDirection:'column',marginTop:10}}>
            <View style={{flexDirection:'row'}}>
            <TouchableWithoutFeedback onPress={() => {
            this.RBSheet.close();
          }}>
                <View style={{width:'33.33%'}}>
                <Text style={[styles.myfontsize,{color:'#a40eff'}]}> Cancel </Text>
                </View>
            </TouchableWithoutFeedback>
            <View style={{width:'33.33%',alignItems:'center'}}>
                <Text style={{color:'#000',fontSize:20}}> Filter </Text>
                </View>
            <TouchableWithoutFeedback onPress={() => {

          }}>
                 <View style={{width:'33.33%',alignItems:'center'}}>
                <Text style={[styles.myfontsize,{color:'#a40eff',textAlign:'right'}]}> Reset </Text>
                </View>
            </TouchableWithoutFeedback>
            </View>
        </View>

        <View style={{flexDirection:'column',marginTop:10}}>
            <Text style={{fontSize:15,color:'#000'}}>SORT BY</Text>
            <View style={styles.inputStyle}>
                 <View style={{flexDirection:'row',alignContent:'center'}}>
                 <View style={{justifyContent:'center'}}>
                 <Text style={styles.myfontsize}> Price </Text>
                 </View>
                <TextInput
                    value={"$$ > $$$"}
                    underlineColorAndroid={'transparent'}
                    placeholderTextColor={'#000'}
                    style={{color:'#000',fontFamily:'Ubuntu',fontSize:16,width:'70%' }}/>

                 <View style={{width:'20%',alignItems:'center',justifyContent:'center'}}>   
                 <AntDesign name="caretdown"  style={{color:'#000',fontSize:15}} />
                 </View>  
                </View>
                </View>
        </View>
        <View style={{flexDirection:'column',marginTop:10}}>
            <Text style={{fontSize:15,color:'#000'}}>RATING</Text>
            <View style={{flexDirection:'row'}}>
            <View style={styles.starBox}>
                 <View style={{justifyContent:'center'}}>   
                   <Text> None </Text>
                 </View>  
                </View>
            <View style={styles.starBox}>
                 <View style={{alignItems:'center',flexDirection:'row'}}>  
                 <Text> 1 </Text> 
                 <Entypo name="star"  style={{color:'#FFC400',fontSize:15}} />
                </View>
            </View>
            <View style={styles.starBox}>
                 <View style={{alignItems:'center',justifyContent:'center',flexDirection:'row'}}>   
                 <Text> 2 </Text> 
                 <Entypo name="star"  style={{color:'#FFC400',fontSize:15}} />
                 
                </View>
                </View>
            <View style={styles.starBox}>
                 <View style={{alignItems:'center',justifyContent:'center',flexDirection:'row'}}>  
                 <Text> 3 </Text>  
                 <Entypo name="star"  style={{color:'#FFC400',fontSize:15}} />
                   
                </View>
                </View>
                <View style={styles.starBox}>
                 <View style={{justifyContent:'center',flexDirection:'row'}}> 
                 <Text> 4 </Text>   
                 <Entypo name="star"  style={{color:'#FFC400',fontSize:15}} />
                
                </View>
                </View>
                <View style={styles.starBox}>
                 <View style={{justifyContent:'center',flexDirection:'row'}}> 
                 <Text> 5 </Text>   
                 <Entypo name="star"  style={{color:'#FFC400',fontSize:15}} />
                 
                </View>
                </View>
        </View>
        </View>

         <View style={{flexDirection:'row',marginTop:10}}>
             <View style={{width:'80%'}}>
                <TouchableWithoutFeedback>
                    <View style={{backgroundColor:'#a40eff',borderRadius:5,padding:15,alignItems:'center',height:50,marginRight:2}}>
                        <Text style={{textTransform:'capitalize',color:'#fff'}}>SEARCH NOW</Text>
                    </View>
                </TouchableWithoutFeedback>
                </View>
                <View style={{width:'20%'}}>
                <TouchableWithoutFeedback>
                <View style={{backgroundColor:'#a40eff',borderRadius:5,padding:10,alignItems:'center',height:50}}>
                        <Entypo name="map" style={{fontSize:25,color:'#fff'}}/>
                    </View>
                </TouchableWithoutFeedback>
                </View>
           </View>
        </RBSheet>

           <View style={{flexDirection:'column'}}>
                <Text style={styles.myfontsize}> Location </Text>
                <View style={styles.inputStyle}>
                 <View style={{flexDirection:'row',alignContent:'center'}}>
                <TextInput
                    value={this.state.location}
                    underlineColorAndroid={'transparent'}
                    placeholderTextColor={'#000'}
                    style={{color:'#000',fontFamily:'Ubuntu',fontSize:16,width:'80%' }}/>

                 <View style={{width:'20%',alignItems:'center',justifyContent:'center'}}>   
                 <Fontisto name="map-marker-alt"  style={{color:'#a40eff',fontSize:25}} />
                 </View>  
                </View>
                </View>
           </View>  

        <View style={{flexDirection:'row'}}>
        <View style={{flexDirection:'column',marginTop:5,width:'50%',marginRight:2}}>
                <Text style={styles.myfontsize}> Check In </Text>
                <View style={styles.inputStyle}>
                <DatePicker
                    defaultDate={new Date(2018, 4, 4)}
                    minimumDate={new Date(2018, 1, 1)}
                    maximumDate={new Date(2018, 12, 31)}
                    locale={"en"}
                    timeZoneOffsetInMinutes={undefined}
                    modalTransparent={false}
                    animationType={"fade"}
                    androidMode={"default"}
                    placeHolderText="Select date"
                    textStyle={{ color: "green" }}
                    placeHolderTextStyle={{ color: "#000" }}
                    onDateChange={this.setDate}
                    disabled={false}
                    />
                </View>
           </View>
        <View style={{flexDirection:'column',marginTop:5,width:'50%'}}>
                <Text style={styles.myfontsize}> Check Out </Text>
                <View style={styles.inputStyle}>
                <DatePicker
                    defaultDate={new Date(2018, 4, 4)}
                    minimumDate={new Date(2018, 1, 1)}
                    maximumDate={new Date(2018, 12, 31)}
                    locale={"en"}
                    timeZoneOffsetInMinutes={undefined}
                    modalTransparent={false}
                    animationType={"fade"}
                    androidMode={"default"}
                    placeHolderText="Select date"
                    textStyle={{ color: "green" }}
                    placeHolderTextStyle={{ color: "#000" }}
                    onDateChange={this.setDate}
                    disabled={false}
                    />
                </View>
           </View>

           </View>


            <View style={{flexDirection:'row'}}>
                    <View style={{flexDirection:'column',marginTop:5,width:'50%',marginRight:2}}>
                            <Text style={styles.myfontsize}> Counts </Text>
                            <View style={styles.inputStyle}>
                            <TextInput
                                value={"2 Adults"}
                                underlineColorAndroid={'transparent'}
                                placeholderTextColor={'#000'}
                                style={{color:'#000',fontFamily:'Ubuntu',fontSize:16,width:'80%' }}/>
                            </View>
                    </View>
                    <View style={{flexDirection:'column',marginTop:5,width:'50%'}}>
                            <Text style={styles.myfontsize}> Rooms </Text>
                            <View style={styles.inputStyle}>
                            <TextInput
                                value={"03"}
                                underlineColorAndroid={'transparent'}
                                placeholderTextColor={'#000'}
                                style={{color:'#000',fontFamily:'Ubuntu',fontSize:16,width:'80%' }}/>
                            </View>
                    </View>

           </View>

           <View style={{flexDirection:'row',marginTop:10}}>
             <View style={{width:'80%'}}>
                <TouchableWithoutFeedback>
                    <View style={{backgroundColor:'#a40eff',borderRadius:5,padding:15,alignItems:'center',height:50,marginRight:2}}>
                        <Text style={{textTransform:'capitalize',color:'#fff'}}>SEARCH NOW</Text>
                    </View>
                </TouchableWithoutFeedback>
                </View>
                <View style={{width:'20%'}}>
                <TouchableWithoutFeedback>
                <View style={{backgroundColor:'#a40eff',borderRadius:5,padding:10,alignItems:'center',height:50}}>
                        <Entypo name="map" style={{fontSize:25,color:'#fff'}}/>
                    </View>
                </TouchableWithoutFeedback>
                </View>
           </View>


           <View style={{flex:1,flexDirection:'column',marginTop:10}}>
                <Text style={styles.myfontsize}>TOP SEARCH</Text>
                <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} style={{flex:1,height:'100%',marginLeft:10}}>
                    
                    {viewArr}
                </ScrollView>
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
        },
        inputStyle:{
            width:'100%',
            backgroundColor:'#fff',
            borderRadius:5,
            borderColor:'#ccc',
        },
        starBox:{
            width:'15%',
            backgroundColor:'#fff',
            borderRadius:5,
            borderColor:'#ccc',
            marginRight:5,
            padding:8
        },
        myfontsize:{
            fontSize:15
        },
        overimage: {
            width: '100%',
            flexDirection: 'row',
            position: 'absolute',
            top: '80%',
            paddingTop: 10,
            left: 0,
            right: 0,
            bottom: 0,
            marginLeft: 2,
            backgroundColor: '#000000B3',
        
          },
        
    });