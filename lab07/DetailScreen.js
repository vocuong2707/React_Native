import React, { useState } from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons'; // For icons

const DetailScreen = () => {
  const [quantity, setQuantity] = useState(1);

  // Function to increment quantity
  const incrementQuantity = () => {
    setQuantity(quantity + 1);
  };

  // Function to decrement quantity
  const decrementQuantity = () => {
    if (quantity > 1) setQuantity(quantity - 1);
  };

  return (
    <View style={styles.container}>
      {/* Donut Image */}
      <Image source={require('./assets/pink_donut.png')} style={styles.image} />

      {/* Product Info Row */}
      <View style={styles.productRow}>
        <View style={styles.productInfo}>
          <Text style={styles.title}>Pink Donut</Text>
          <Text style={styles.subtitle}>Spicy tasty donut family</Text>
        </View>
        <Text style={styles.price}>$20.00</Text>
      </View>

      {/* Delivery Info and Quantity Selector in the same row */}
      <View style={styles.deliveryAndQuantityRow}>
        {/* Delivery Info */}
        <View style={styles.deliveryInfo}>
          <MaterialIcons name="access-time" size={20} color="#777" />
          <Text style={styles.deliveryText}>Delivery in</Text>
          <Text style={styles.deliveryTime}>30 min</Text>
        </View>

        {/* Quantity Selector */}
        <View style={styles.quantityContainer}>
          <TouchableOpacity style={styles.quantityButton} onPress={decrementQuantity}>
            <Text style={styles.buttonText}>-</Text>
          </TouchableOpacity>
          <Text style={styles.quantity}>{quantity}</Text>
          <TouchableOpacity style={styles.quantityButton} onPress={incrementQuantity}>
            <Text style={styles.buttonText}>+</Text>
          </TouchableOpacity>
        </View>
      </View>

      {/* Restaurant Info */}
      <Text style={styles.restaurantInfoTitle}>Restaurant Info</Text>
      <Text style={styles.restaurantInfoText}>
        Order a Large Pizza but the size is the equivalent of a medium/small from other places at the same price range.
      </Text>

      {/* Add to Cart Button */}
      <TouchableOpacity style={styles.addToCartButton}>
        <Text style={styles.addToCartButtonText}>Add to Cart</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#FFFFFF',
  },
  image: {
    width: 200,
    height: 200,
    alignSelf: 'center',
    marginVertical: 20,
  },
  productRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10,
  },
  productInfo: {
    flexDirection: 'column',
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    textDecorationLine: 'underline',
    color: '#000',
  },
  subtitle: {
    fontSize: 14,
    color: '#777',
    marginTop: 2,
  },
  price: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
  },

  // Delivery and Quantity in the same row
  deliveryAndQuantityRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginVertical: 20,
  },

  // Delivery Info
  deliveryInfo: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  deliveryText: {
    fontSize: 14,
    color: '#777',
    marginLeft: 5,
  },
  deliveryTime: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#000',
    marginLeft: 5,
  },

  // Quantity Selector
  quantityContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  quantityButton: {
    backgroundColor: '#F1B000',
    padding: 10,
    borderRadius: 5,
    width: 40,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#FFFFFF',
  },
  quantity: {
    fontSize: 18,
    fontWeight: 'bold',
    marginHorizontal: 10,
  },

  // Restaurant Info
  restaurantInfoTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 10,
    color: '#333',
  },
  restaurantInfoText: {
    fontSize: 14,
    color: '#777',
    marginVertical: 10,
  },

  // Add to Cart Button
  addToCartButton: {
    backgroundColor: '#F1B000',
    padding: 15,
    borderRadius: 50,
    alignItems: 'center',
    marginTop: 30,
  },
  addToCartButtonText: {
    fontSize: 18,
    fontWeight: '600',
    color: '#fff',
  },
});

export default DetailScreen;
