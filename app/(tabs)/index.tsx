import { Image, StyleSheet, Platform } from 'react-native';

import { HelloWave } from '@/components/HelloWave';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';

import {
  
  View,
  Text,
  TextInput,
  TouchableOpacity,
} from "react-native";
import { useState } from 'react';

const HomeScreen = () => {
  const [title, setTitle] = useState("title default");
  const [taskData, setTaskData] = useState({});
  const [tasks, setTasks] = useState<any>([
    {
      id: 1,
      title: "Open Laptop",
      description: "Laptop MSI",
      author: "FPT",
      status: "pending",
    },
  ]);

  const changeText = (typeData: string) => (valueData: string) => {
    const _taskData: any = { ...taskData };
    _taskData[typeData] = valueData;
    setTaskData(_taskData);
  };

  const addTask = () => {
    const _tasks = [...tasks];
    _tasks.push(taskData);
    setTasks(_tasks);
  };

  return (
    <View style={styles.container}>
      <View style={styles.form}>
        <TextInput
          placeholder="Enter title"
          style={styles.input}
          onChangeText={changeText("title")}
        />
        <TextInput
          placeholder="Enter description"
          style={styles.input}
          onChangeText={changeText("description")}
        />
        <TextInput
          placeholder="Enter author"
          style={styles.input}
          onChangeText={changeText("author")}
        />
        <TextInput
          placeholder="Enter status"
          style={styles.input}
          onChangeText={changeText("status")}
        />
        <TouchableOpacity onPress={addTask}>
          <View style={styles.button}>
            <Text style={{ color: "white" }}>Add Task</Text>
          </View>
        </TouchableOpacity>
      </View>

      <View style={styles.list}>
        {tasks.map((item: any, index: number) => (
          <View key={index} style={styles.item}>
            <View>
              <Text>{item.title}</Text>
              <Text style={{ fontSize: 12 }}>{item.description}</Text>
            </View>

            <View>
              <Text style={{ fontSize: 12 }}>{item.author}</Text>
              <Text style={{ fontSize: 10 }}>{item.status}</Text>
            </View>
          </View>
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  form: {
    flex: 4,
    width: "100%",
    paddingHorizontal: 15,
    paddingTop: 30,
  },
  list: {
    flex: 6,
    width: "100%",
    paddingHorizontal: 15,
  },
  input: {
    width: "100%",
    height: 45,
    borderWidth: 1,
    borderColor: "grey",
    borderRadius: 8,
    paddingLeft: 12,
    marginBottom: 8,
  },
  button: {
    width: 120,
    height: 40,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 8,
    backgroundColor: "purple",
  },
  item: {
    width: "100%",
    height: 55,
    borderWidth: 0.5,
    borderColor: "purple",
    borderRadius: 8,
    paddingHorizontal: 10,
    paddingVertical: 2,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 5
  },
});

export default HomeScreen;
