import {View, Text, SafeAreaView, StyleSheet,Image,Button ,TouchableOpacity } from 'react-native';

// You can import supported modules from npm
import { Card } from 'react-native-paper';

// or any files within the Snack
import AssetExample from './components/AssetExample';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
    <View style={styles.paragraph1}>
     <Image source={require('./assets/Ellipse8.png')} />
    </View>

     <View style={styles.paragraph2}>
      <Text style={styles.text}>GROW</Text>
      <Text style={styles.text}>YOUR BUSINESS</Text>
    </View>

     <View style={styles.paragraph3}>
        <View style={{justifyContent:'center', alignItems :'center' , width:'302px' , height:'38px'}}>
            <Text style={styles.text1}>
              We will help you to grow your business using
            </Text>
            <Text style={styles.text1}>
              online server
            </Text>

        </View>
    </View>

     <View style={styles.paragraph4}>
       <TouchableOpacity style = {styles.button} >
          <Text style={styles.text1}>LOGIN</Text>
       </TouchableOpacity>
        <TouchableOpacity style = {styles.button} >
          <Text style={styles.text1}>SIGN UP</Text>
       </TouchableOpacity>
    </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#00CCF9',
    padding: 8,
  },
  paragraph1: {
    flex:2,
    justifyContent:'center',
    alignItems:'center'
    // backgroundColor:'red',
  },
   paragraph2: {
    flex:1,
    justifyContent:'center',
    alignItems:'center'
    // backgroundColor:'blue',
  },
   paragraph3: {
    flex:1,
    justifyContent:'center',
    alignItems:'center'
    // backgroundColor:'black',    
  },paragraph4: {
    flex:1,
    justifyContent:'space-around',
    alignItems:'center',
    flexWrap:'no-wrap',
    flexDirection:'row',
    
    // backgroundColor:'black',    
  },
  text:{
    transform:'Roboto',
    fontWeight:700,
    fontSize:'25px',
    lineHeight:'29.3px',
  },
  text1:{
    transform:'Roboto',
    fontWeight:700,
    fontSize:'13px',
    lineHeight:'17.58px',
  },
   button:{
     width:'119px',
     height:'48px',
     backgroundColor:'#E3C000',
     alignItems:'center',
     justifyContent:'center',
     borderRadius:'10px'
  }
});
