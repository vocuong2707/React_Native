import { Text, SafeAreaView, StyleSheet ,FlatList,View,Image,Pressable,ScrollView} from 'react-native';

// You can import supported modules from npm
import { Card } from 'react-native-paper';

// or any files within the Snack
import AssetExample from './components/AssetExample';

  const data = [
    { id : 1 ,
      title : 'ca nau lau my mini...',
      supplier: 'Shop Devang',
      image: require('./assets/ca_nau_lau.png')
    },
    { id : 2 ,
      title : 'ca nau lau my mini...',
      supplier: 'Shop Devang',
      image: require('./assets/do_choi_dang_mo_hinh.png')
    },
    { id : 3 ,
      title : 'ca nau lau my mini...',
      supplier: 'Shop Devang',
      image: require('./assets/ga_bo_toi.png')
    },
    { id : 4 ,
      title : 'ca nau lau my mini...',
      supplier: 'Shop Devang',
      image: require('./assets/hieu_long_con_tre (1).png')
    },
    { id : 5 ,
      title : 'ca nau lau my mini...',
      supplier: 'Shop Devang',
      image: require('./assets/snack-icon.png')
    },
    { id : 6 ,
      title : 'ca nau lau my mini...',
      supplier: 'Shop Devang',
      image: require('./assets/trump1.png')
    },
    { id : 6 ,
      title : 'ca nau lau my mini...',
      supplier: 'Shop Devang',
      image: require('./assets/trump1.png')
    },
    { id : 6 ,
      title : 'ca nau lau my mini...',
      supplier: 'Shop Devang',
      image: require('./assets/trump1.png')
    },
    { id : 6 ,
      title : 'ca nau lau my mini...',
      supplier: 'Shop Devang',
      image: require('./assets/trump1.png')
    }
  ]
 
export default function App() {
  const renderItem = ({item})=>( 
    <View style= {[styles.viewsItems ,{marginTop: 10}]}>
          <View style = {styles.item}>
            <Image style = {{width:88 , height:70, }} source = {item.image} />
            <View> 
              <Text> {item.title} </Text>
              <Text> {item.supplier} </Text>
            </View>
            <Pressable style = {styles.button}> 
              <Text style ={{color: 'white'}}> Chat </Text>
            </Pressable>
          </View>
          <View style = {{width:'100%',borderWidth : 1 , backgroundColor:'#C4C4C4' }}> </View>
    </View>
  );
  return (
    
    <SafeAreaView style={styles.container}>
        <View style = {styles.header}>
          <Image style = {styles.imageHeader} source = {require('./assets/bi_cart-check.png')} />
          <Text style = {{color:'white'}}>Chat</Text>
          <Image style = {styles.imageHeader} source = {require('./assets/Vector.png')} />
        </View>
        <View style= {styles.viewsItems}>
          <View style = {[styles.item , {    marginHorizontal: 20}]}>
            <Text>Bạn có thắc mắc với sản phẩm vừa xem đừng ngại chát với shop!</Text>
        </View>
        <View style = {{width:'100%',borderWidth : 1 , backgroundColor:'#C4C4C4' }}> </View>
        </View>
        
          <FlatList 
          data={data}
          renderItem={renderItem}
          keyExtractor={item=>item.id.toString()}  
          style = {{flex: 9}}
          />
        <View style = {styles.footer}>
          <Image style = {styles.imageHeader} source = {require('./assets/Group10.png')} />
          <Image style = {styles.imageHeader} source = {require('./assets/Vector(Stroke).png')} />
          <Image style = {styles.imageHeader} source = {require('./assets/Vector1(Stroke).png')} />
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
 
  imageHeader : {
    width:20,
    height:20,
  },
  header: {
    flex: 1,
    flexDirection:'row',
    justifyContent: 'space-around',
    alignItems:'center',
    backgroundColor:'#1BA9FF',
    paddingVertical: 10,

  },
  footer : {
    flex: 1,
    flexDirection:'row',
    justifyContent: 'space-around',
    alignItems:'center',
    backgroundColor:'#1BA9FF',
    paddingVertical: 10,
  },
  item : {
    flexDirection:'row',
    justifyContent: 'space-around',
    alignItems:'center',
    padding:10
  },
  viewsItems : {
      justifyContent:'center',
  },
  button: {
    backgroundColor:'#F31111',
    width:88,
    height:38,
    borderRadius:2,
    justifyContent:'center',
    alignItems:'center'
  },
  gridItem: {
    flex: 1,
    margin: 5,
    backgroundColor: '#f1f1f1',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
    borderRadius: 10,
  },
});
