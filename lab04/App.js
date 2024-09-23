import * as React from 'react';
import { View, Text, Image, Pressable, SafeAreaView, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

function HomeScreen({ navigation, route }) {
  const [imageSource, setImageSource] = React.useState(require('./assets/vs_red.png'));

  React.useEffect(() => {
    if (route.params?.selectedColor) {
      setImageSource(route.params.selectedColor);
    }
  }, [route.params?.selectedColor]);

  return (
    <SafeAreaView style={styles.container}>
      <View>
        <Image style={styles.image} source={imageSource} />
      </View>
      <View style={styles.viewDescription}>
        <Text style={styles.title}>Điện Thoại Vsmart Joy 3 - Hàng chính hãng</Text>
        <View style={styles.star}>
          {[...Array(5)].map((_, index) => (
            <Image key={index} source={require('./assets/star.png')} />
          ))}
          <Text style={styles.reviewText}>(Xem 828 đánh giá)</Text>
        </View>
        <View style={styles.viewPrice}>
          <Text>1.790.000 đ</Text>
          <Text style={styles.strikethrough}>1.790.000 đ</Text>
        </View>
        <View style={styles.priceAlert}>
          <Text style={styles.priceAlertText}>Ở ĐÂU RẺ HƠN HOÀN TIỀN</Text>
          <Image style={styles.alertIcon} source={require('./assets/Group1.png')} />
        </View>
        <Pressable style={styles.pressableChoose} onPress={() => navigation.navigate('Details')}>
          <Text style={styles.chooseText}>4 MÀU-CHỌN MÀU</Text>
          <Image source={require('./assets/Vector.png')} />
        </Pressable>
        <Pressable style={styles.pressableBuy}>
          <Text style={styles.buyText}>Chọn Mua</Text>
        </Pressable>
      </View>
    </SafeAreaView>
  );
}

function DetailsScreen({ navigation }) {
  const colors = [
    { color: '#0000FF', image: require('./assets/vs_blue.png') },
    { color: '#F30D0D', image: require('./assets/vs_red.png') },
    { color: '#000000', image: require('./assets/vs_black.png') },
    { color: '#C0C0C0', image: require('./assets/vs_silver.png') },
  ];

  const [selectedColor, setSelectedColor] = React.useState(colors[1].image); // Default to red color

  return (
    <SafeAreaView style={styles.detailsContainer}>
      <View style={styles.detailsHeader}>
        <Image style={styles.detailsImage} source={selectedColor} />
        <Text style={styles.detailsTitle}>Điện Thoại Vsmart Joy 3 Hàng chính hãng</Text>
      </View>
      <View style={styles.colorSelection}>
        <Text>Chọn một màu bên dưới:</Text>
        <View style={styles.colorButtons}>
          {colors.map((item, index) => (
            <Pressable
              key={index}
              style={[styles.colorButton, { backgroundColor: item.color }]}
              onPress={() => setSelectedColor(item.image)}
            />
          ))}
        </View>
        <Pressable
          style={styles.confirmButton}
          onPress={() => navigation.navigate('Home', { selectedColor })}>
          <Text style={styles.confirmText}>XONG</Text>
        </Pressable>
      </View>
    </SafeAreaView>
  );
}

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Details" component={DetailsScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#ecf0f1',
    padding: 8,
    margin: 15,
  },
  image: {
    width: 301,
    height: 361,
  },
  title: {
    fontSize: 15,
    marginTop: 10,
  },
  star: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  viewDescription: {
    flex: 1,
    justifyContent: 'space-between',
  },
  viewPrice: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  strikethrough: {
    textDecorationLine: 'line-through',
    marginRight: 50,
  },
  priceAlert: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  priceAlertText: {
    fontWeight: 'bold',
    fontSize: 12,
    color: 'red',
  },
  alertIcon: {
    width: 20,
    height: 20,
    marginLeft: 5,
  },
  pressableChoose: {
    borderRadius: 10,
    borderColor: 'black',
    borderWidth: 2,
    height: 25,
    justifyContent: 'space-between',
    flexDirection: 'row',
    alignItems: 'center',
  },
  chooseText: {
    fontWeight: 'bold',
  },
  pressableBuy: {
    borderRadius: 10,
    borderColor: 'black',
    height: 34,
    borderWidth: 2,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#CA1536',
  },
  buyText: {
    fontWeight: '700',
    fontSize: 20,
    color: 'white',
  },
  detailsContainer: {
    flex: 1,
    margin: 10,
  },
  detailsHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: 'white',
  },
  detailsImage: {
    width: 112,
    height: 132,
  },
  detailsTitle: {
    color: 'black',
    fontSize: 14,
  },
  colorSelection: {
    flex: 3,
    backgroundColor:'yellow'
  },
  colorButtons: {
    flexDirection: 'column',
    justifyContent: 'space-between',
    marginTop: 10,
    justifyContent:'center',
    alignItems:'center'
  },
  colorButton: {
    width: 85,
    height: 80,
    marginTop:'5px'
  },
  confirmButton: {
    height: 44,
    backgroundColor: '#1952E294',
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  confirmText: {
    color: '#F9F2F2',
    fontWeight: '700',
    fontSize: 20,
  },
});

export default App;