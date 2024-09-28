import { Text, SafeAreaView, StyleSheet,View,Image ,TextInput,FlatList} from 'react-native';

// You can import supported modules from npm
import { Card } from 'react-native-paper';

// or any files within the Snack
import AssetExample from './components/AssetExample';
import { useEffect, useState } from 'react';



export default function App() {
  const [data,setData] = useState([]);
  const [loading,setLoading] = useState(true);

  useEffect(()=> {
    fechApi();
  },[]);
  const fechApi = async() => {
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/posts');
        const json = await response.json();
        
        setData(json.map(item=>({
          ...item,
          "image" : require('./assets/daucam 1.png')
        })));
        
        console.log("data: " , data);
        setLoading(false)
    } catch (error) {
      console.log('Error fetch data Failse!')
      setLoading(false);
    }
  }
  // const data =[{
  //   id:1,
  //   title: 'Cáp chuyển từ Cổng USB sang PS2...',
  //   image : require('./daucam 1.png'),
  //   price : '69.900 d',
  //   voucher : '39%'},
  //   {
  //   id:2,
  //   title: 'Cáp chuyển từ Cổng USB sang PS2...',
  //   image : require('./daucam 1.png'),
  //   price : '69.900 d',
  //   voucher : '39%'},
  //   {
  //   id:3,
  //   title: 'Cáp chuyển từ Cổng USB sang PS2...',
  //   image : require('./daucam 1.png'),
  //   price : '69.900 d',
  //   voucher : '39%'},
  //   {
  //   id:4,
  //   title: 'Cáp chuyển từ Cổng USB sang PS2...',
  //   image : require('./daucam 1.png'),
  //   price : '69.900 d',
  //   voucher : '39%'},
  //   {
  //   id:5,
  //   title: 'Cáp chuyển từ Cổng USB sang PS2...',
  //   image : require('./daucam 1.png'),
  //   price : '69.900 d',
  //   voucher : '39%'},
  //   {
  //   id:6,
  //   title: 'Cáp chuyển từ Cổng USB sang PS2...',
  //   image : require('./daucam 1.png'),
  //   price : '69.900 d',
  //   voucher : '39%'},
  //   {
  //   id:1,
  //   title: 'Cáp chuyển từ Cổng USB sang PS2...',
  //   image : require('./daucam 1.png'),
  //   price : '69.900 d',
  //   voucher : '39%'},
  //   {
  //   id:1,
  //   title: 'Cáp chuyển từ Cổng USB sang PS2...',
  //   image : require('./daucam 1.png'),
  //   price : '69.900 d',
  //   voucher : '39%'},
  //   ]
    const renderItem = ({item}) => {
      return(
      <View style={styles.viewItems}>
        <Image source = {item.image} style={{width:140,height:100}}/>
        <Text style={styles.fontSize}>{item.title}</Text>
        <View style = {{flexDirection : 'row', alignItems:'center'}}>
          <Image source={require('./star.png')} />
          <Image source={require('./star.png')} />
          <Image source={require('./star.png')} />
          <Image source={require('./star.png')} />
          <Image style = {{width:20,height:23}} source={require('./Star 5.png')} />

        </View>
        <View style = {{flexDirection:'row' , justifyContent:'space-between'}}>
          <Text style={styles.fontSize}>{item.price}</Text>
          <Text style={styles.fontSize}>{item.voucher}</Text>
        </View>
      </View>
      )
    }
  return (
    <SafeAreaView style={styles.container}>
      
      <View style = {styles.header}>
        <Image style ={{width:20 , backgroundColor:'#1BA9FF'}} source = {require('./Vector (1).png')} />
         <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
        />
        <Image
          source={require('./Vector (2).png')} // Đường dẫn tới hình ảnh của bạn
          style={styles.icon}
        />
      </View>
        <Image source = {require('./assets/bi_cart-check.png')} />
        <Image source = {require('./assets/Group 2.png')} />
      </View>
      <FlatList 
      data={data}
      renderItem={renderItem}
      keyExtractor={item=>item.id.toString()}
      numColumns={2}
      />
      <View style = {styles.header}>
        <Image style ={{width:20 , backgroundColor:'#1BA9FF'}} source = {require('./Vector (1).png')} />
         <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
        />
        <Image
          source={require('./Vector (2).png')} // Đường dẫn tới hình ảnh của bạn
          style={styles.icon}
        />
      </View>
        <Image source = {require('./assets/bi_cart-check.png')} />
        <Image source = {require('./assets/Group 2.png')} />
      </View>
      
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#ecf0f1',
    padding: 8,
  },
  header : {
    flex:1,
    flexDirection: 'row',
    backgroundColor:'#1BA9FF',
    alignItems:'center',
    justifyContent:'space-around',
    paddingHorizontal:10,
    padding:20
  },
  inputContainer: {
    flexDirection: 'row',
    borderColor: '#ccc',
    paddingHorizontal: 10,
    paddingVertical: 5,
    alignItems:'center'
  },
  icon: {
    width: 22,
    height: 20,
    position: 'absolute',
    left: 15, // Đặt vị trí của hình ảnh bên phải
  },
  input: {
    paddingRight: 40, // Đảm bảo có đủ khoảng trống cho hình ảnh
    backgroundColor:'white',
    height:28,
    borderRadius:3
  },
  viewItems : {
    flex:4,
    borderWidth:5,
  },
  fontSize : {
    fontSize:12,
    fontWeight:700
  }
});
