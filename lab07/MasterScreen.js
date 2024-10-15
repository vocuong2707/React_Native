import React, { useState } from 'react';
import { View, Text, FlatList, TextInput, StyleSheet, TouchableOpacity, Image } from 'react-native';

// Dữ liệu mẫu Donut
const donuts = [
  { id: '1', name: 'Tasty Donut', price: '$10.00', image: require('./assets/yellow_donut.png'), description: 'Spicy tasty donut family' },
  { id: '2', name: 'Pink Donut', price: '$20.00', image: require('./assets/tasty_donut.png'), description: 'Spicy tasty donut family' },
  { id: '3', name: 'Floating Donut', price: '$30.00', image: require('./assets/green_donut.png'), description: 'Spicy tasty donut family' },
  { id: '4', name: 'Tasty Donut', price: '$10.00', image: require('./assets/red_donut.png'), description: 'Spicy tasty donut family' },
];

const pink = [
  { id: '1', name: 'Tasty Pink', price: '$10.00', image: require('./assets/yellow_donut.png'), description: 'Spicy tasty donut family' },
  { id: '2', name: 'Pink Pink', price: '$20.00', image: require('./assets/tasty_donut.png'), description: 'Spicy tasty donut family' },
  { id: '3', name: 'Floating Pink', price: '$30.00', image: require('./assets/green_donut.png'), description: 'Spicy tasty donut family' },
  { id: '4', name: 'Tasty Pink', price: '$10.00', image: require('./assets/red_donut.png'), description: 'Spicy tasty donut family' },
];

const floating = [
  { id: '1', name: 'Tasty Floating', price: '$10.00', image: require('./assets/yellow_donut.png'), description: 'Spicy tasty donut family' },
  { id: '2', name: 'Pink Floating', price: '$20.00', image: require('./assets/tasty_donut.png'), description: 'Spicy tasty donut family' },
  { id: '3', name: 'Floating Floating', price: '$30.00', image: require('./assets/green_donut.png'), description: 'Spicy tasty donut family' },
  { id: '4', name: 'Tasty Floating', price: '$10.00', image: require('./assets/red_donut.png'), description: 'Spicy tasty donut family' },
];

// Đối tượng chứa dữ liệu theo danh mục
const categoriesData = {
  Donut: donuts,
  'Pink Donut': pink,
  Floating: floating,
};

const MasterScreen = ({ navigation }) => {
  const [selectedCategory, setSelectedCategory] = useState('Donut');
  const [searchQuery, setSearchQuery] = useState(''); // Tạo state lưu giá trị tìm kiếm

  // Hàm lọc dữ liệu theo từ khóa tìm kiếm
  const filteredData = categoriesData[selectedCategory].filter((item) =>
    item.name.toLowerCase().includes(searchQuery.toLowerCase()) // So sánh không phân biệt chữ hoa chữ thường
  );

  return (
    <View style={styles.container}>
      <Text style={styles.welcomeText}>Chào mừng, Jala!</Text>
      <Text style={styles.title}>Chọn món ăn yêu thích của bạn</Text>

      {/* Thanh tìm kiếm */}
      <TextInput
        style={styles.searchBar}
        placeholder="Tìm món ăn"
        value={searchQuery}
        onChangeText={(text) => setSearchQuery(text)} // Cập nhật giá trị tìm kiếm khi người dùng nhập
      />

      {/* Nút chọn danh mục */}
      <View style={styles.categoryContainer}>
        {['Donut', 'Pink Donut', 'Floating'].map((category) => (
          <TouchableOpacity
            key={category}
            style={[styles.categoryButton, selectedCategory === category && styles.selectedCategory]}
            onPress={() => setSelectedCategory(category)}
          >
            <Text style={styles.categoryText}>{category}</Text>
          </TouchableOpacity>
        ))}
      </View>

      {/* Danh sách Donut dựa trên danh mục được chọn và từ khóa tìm kiếm */}
      <FlatList
        data={filteredData} // Hiển thị dữ liệu đã được lọc
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <TouchableOpacity style={styles.itemContainer} onPress={() => navigation.navigate('Detail', { donut: item })}>
            <Image source={item.image} style={styles.image} />
            <View style={styles.info}>
              <Text style={styles.name}>{item.name}</Text>
              <Text>{item.description}</Text>
              <Text style={styles.price}>{item.price}</Text>
            </View>
            {/* Nút thêm vào giỏ hàng */}
            <TouchableOpacity style={styles.addButton}>
              <Text style={styles.addButtonText}>+</Text>
            </TouchableOpacity>
          </TouchableOpacity>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    backgroundColor: '#FFFFFF',
  },
  welcomeText: {
    fontSize: 16,
    fontWeight: '600',
    color: '#000',
    marginBottom: 5,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 15,
  },
  searchBar: {
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 5,
    padding: 10,
    marginBottom: 20,
  },
  categoryContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  categoryButton: {
    paddingVertical: 10,
    paddingHorizontal: 15,
    borderRadius: 5,
  },
  selectedCategory: {
    backgroundColor: '#FFCC00',
  },
  categoryText: {
    color: '#333',
    fontWeight: '500',
  },
  itemContainer: {
    flexDirection: 'row',
    padding: 15,
    backgroundColor: '#F8F8F8',
    marginBottom: 10,
    borderRadius: 10,
    alignItems: 'center',
  },
  image: {
    width: 75,
    height: 75,
    marginRight: 10,
  },
  info: {
    flex: 1,
  },
  name: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  price: {
    fontSize: 16,
    color: '#444',
  },
  addButton: {
    backgroundColor: '#F1B000',
    width: 30,
    height: 30,
    borderRadius: 15,
    justifyContent: 'center',
    alignItems: 'center',
  },
  addButtonText: {
    fontSize: 18,
    color: '#FFF',
  },
});

export default MasterScreen;
