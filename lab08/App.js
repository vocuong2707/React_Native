import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, Pressable, StyleSheet, FlatList } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { CheckBox } from 'react-native-web';

const Stack = createStackNavigator();

function Login({ navigation }) {
  const [name, setName] = useState('');

  return (
    <View style={styles.loginContainer}>
      <Text style={styles.titleText}>MANAGE YOUR TASKS</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter your name"
        value={name}
        onChangeText={setName}
      />
      <Pressable
        style={styles.button}
        onPress={() => navigation.navigate('Home', { userName: name })}
      >
        <Text style={styles.buttonText}>GET STARTED</Text>
      </Pressable>
    </View>
  );
}

function Home({ route, navigation }) {
  const [data, setData] = useState([]);
  const userName = route.params?.userName || 'Guest';

  const fetchData = async () => {
    const response = await fetch('https://67059c0d031fd46a83108ce7.mockapi.io/food');
    const result = await response.json();
    setData(result);
  };

  useEffect(() => {
    fetchData();
  }, []);

  const toggleCheck = (id) => {
    setData(prev => 
      prev.map(item => (item.id === id ? { ...item, check: !item.check } : item))
    );
  };

  const addTask = (newTask) => {
    setData(prev => [...prev, newTask]);
  };

  const deleteTask = async (id) => {
    try {
      await fetch(`https://67059c0d031fd46a83108ce7.mockapi.io/food/${id}`, {
        method: 'DELETE',
      });
      setData(prev => prev.filter(item => item.id !== id));
    } catch (error) {
      console.error('Error deleting task:', error);
    }
  };

  const editTask = (id, newTitle) => {
    setData(prev =>
      prev.map(item => (item.id === id ? { ...item, title: newTitle } : item))
    );
  };

  const renderItem = ({ item }) => (
    <View style={styles.taskItem}>
      <CheckBox value={item.check} onValueChange={() => toggleCheck(item.id)} />
      <Text style={[styles.taskText, item.check && styles.taskCompleted]}>
        {item.title}
      </Text>
      <View style={styles.taskActions}>
        <Pressable
          style={styles.editButton}
          onPress={() => navigation.navigate('EditTask', { item, editTask })}
        >
          <Text style={styles.editText}>Edit</Text>
        </Pressable>
        <Pressable style={styles.deleteButton} onPress={() => deleteTask(item.id)}>
          <Text style={styles.deleteText}>Delete</Text>
        </Pressable>
      </View>
    </View>
  );

  return (
    <View style={styles.homeContainer}>
      <Text style={styles.welcomeText}>Hi {userName},</Text>
      <Text style={styles.subText}>Here's your task list:</Text>
      <FlatList data={data} renderItem={renderItem} keyExtractor={item => item.id.toString()} />
      <Pressable style={styles.addButton} onPress={() => navigation.navigate('AddTask', { addTask })}>
        <Text style={styles.addButtonText}>Add Task</Text>
      </Pressable>
    </View>
  );
}

function AddTask({ navigation, route }) {
  const [task, setTask] = useState('');
  const { addTask } = route.params;

  const addNewTask = async () => {
    if (task.trim()) {
      try {
        const response = await fetch("https://67059c0d031fd46a83108ce7.mockapi.io/food", {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ title: task, check: false }),
        });

        const data = await response.json();
        addTask(data);
        navigation.goBack();
      } catch (error) {
        console.error('Error adding task:', error);
      }
    }
  };

  return (
    <View style={styles.taskContainer}>
      <TextInput
        style={styles.input}
        placeholder="Input your task"
        value={task}
        onChangeText={setTask}
      />
      <Pressable style={styles.button} onPress={addNewTask}>
        <Text style={styles.buttonText}>Finish</Text>
      </Pressable>
    </View>
  );
}

function EditTask({ route, navigation }) {
  const [newTitle, setNewTitle] = useState(route.params?.item.title);
  const { id } = route.params?.item;
  const editTask = route.params?.editTask;

  const saveChanges = async () => {
    try {
      await fetch(`https://67059c0d031fd46a83108ce7.mockapi.io/food/${id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ title: newTitle }),
      });

      editTask(id, newTitle);
      navigation.goBack();
    } catch (error) {
      console.error('Error editing task:', error);
    }
  };

  return (
    <View style={styles.taskContainer}>
      <TextInput
        style={styles.input}
        placeholder="Edit your task"
        value={newTitle}
        onChangeText={setNewTitle}
      />
      <Pressable style={styles.button} onPress={saveChanges}>
        <Text style={styles.buttonText}>Save Changes</Text>
      </Pressable>
    </View>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="AddTask" component={AddTask} />
        <Stack.Screen name="EditTask" component={EditTask} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  loginContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  homeContainer: {
    flex: 1,
    paddingHorizontal: 20,
    paddingTop: 20,
  },
  taskContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  titleText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#8353E2',
    marginBottom: 20,
  },
  input: {
    width: '100%',
    padding: 10,
    borderWidth: 1,
    borderRadius: 8,
    marginBottom: 20,
    borderColor: '#ccc',
  },
  button: {
    width: '100%',
    padding: 15,
    backgroundColor: '#00BDD6',
    borderRadius: 8,
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  addButton: {
    marginTop: 20,
    padding: 15,
    backgroundColor: '#00BDD6',
    borderRadius: 8,
    alignItems: 'center',
  },
  addButtonText: {
    color: '#fff',
    fontSize: 16,
  },
  welcomeText: {
    fontSize: 22,
    fontWeight: 'bold',
  },
  subText: {
    fontSize: 16,
    color: '#555',
  },
  taskItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 15,
    backgroundColor: '#f9f9f9',
    marginBottom: 10,
    borderRadius: 8,
  },
  taskText: {
    fontSize: 16,
    flex: 1,
    marginLeft: 10,
  },
  taskCompleted: {
    textDecorationLine: 'line-through',
    color: '#aaa',
  },
  taskActions: {
    flexDirection: 'row',
  },
  editButton: {
    marginRight: 10,
    padding: 5,
    backgroundColor: '#FFA500',
    borderRadius: 4,
  },
  editText: {
    color: '#fff',
  },
  deleteButton: {
    padding: 5,
    backgroundColor: '#FF6347',
    borderRadius: 4,
  },
  deleteText: {
    color: '#fff',
  },
});
