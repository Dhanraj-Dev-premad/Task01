import {
  Image,
  Pressable,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import React, {useContext} from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import {TodoContext, useTodo} from './TodoContext';

const TodoDataScreen = () => {


  const {tasks:newTaskhere} = useTodo();


  


  const deleteTask = id => {
    const newArr = tasks.filter(task => task.id !== id);

    setTasks(newArr);
  };

  return (
    <SafeAreaView style={{flex: 1, margin: 10}}>
      
      <View style={{flex: 1, padding: 10}}>
        
        <Text style={{fontSize: 33, fontWeight: 'bold'}}>
          Todo Data List
        </Text>
         <View style={styles.taskContainer}>

          {tasks.map(tt => {

            return (
              <View
                key={tt.id}
                style={styles.taskCard}
              >

                {/* Task Row */}
                <View style={styles.taskRow}>

                  {/* Task Name */}
                  <View style={styles.taskNameContainer}>

                    <Text
                      style={styles.taskText}
                      numberOfLines={3}
                      ellipsizeMode="tail"
                    >
                      {tt.name}
                    </Text>

                  </View>

                  {/* Delete Button */}
                  <Pressable
                    onPress={() =>
                      deleteTask(tt.id)
                    }
                    style={styles.deleteButton}
                  >

                    <Image
                      source={require('../Task/dustbin.png')}
                      resizeMode="contain"
                      style={styles.deleteImage}
                    />

                  </Pressable>

                </View>

                {/* Task Category */}
                <View style={styles.categoryTextLowerBox}>

                  <Text
                    style={styles.taskCategoryText}
                  >
                    {tt.Category || 'No Category'}
                  </Text>

                </View>

              </View>
            );
          })}

        </View>
        

        

      </View>

    </SafeAreaView>
  );
};

export default TodoDataScreen;

const styles = StyleSheet.create({
  taskBox: {
    padding: 15,
    marginTop: 15,
    elevation: 2,
    backgroundColor: 'white',
  },

  taskName: {
    fontSize: 20,
    fontWeight: 'bold',
  },

  category: {
    marginTop: 5,
    fontSize: 16,
  },
    // Safe Area
  sav: {
    flex: 1,
    padding: 10,
  },

  // Main Container
  MainContainer: {
    paddingHorizontal: 10,
    gap: 20,
  },

  // Header
  textContaier: {
    height: 80,
    justifyContent: 'center',
    alignItems: 'center',
  },

  title: {
    fontSize: 30,
    fontWeight: 'bold',
  },

  subtitle: {
    fontSize: 18,
    opacity: 0.5,
  },

  // Input + Category Container
  container: {
    height: 190,
    borderColor: 'white',
    elevation: 1,
  },

  // Input + Add Button
  buttonContainer: {
    height: 80,
    flexDirection: 'row',
    gap: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },

  // Input Box
  inputBox: {
    height: 55,
    width: 250,
    borderColor: 'white',
    elevation: 0.5,
  },

  textInput: {
    fontSize: 14,
    color: 'black',
    paddingHorizontal: 12,
  },

  // Add Button
  addButtoncontainer: {
    height: 55,
    width: 100,
    backgroundColor: '#5184dc',
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
  },

  addButtonText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'white',
  },

  // Category Container
  categorycontainer: {
    height: 70,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },

  // CATEGORY:
  categoryHeading: {
    fontSize: 16,
    fontWeight: '600',
  },

  // Horizontal Scroll Content
  categoryScrollContent: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 5,
    paddingRight: 10,
  },

  // Category Button
  categoryTextBox: {
    height: 35,
    width: 70,
    borderRadius: 10,
    backgroundColor: '#f6f0f0',
    justifyContent: 'center',
    alignItems: 'center',
  },

  // Category Text
  categoryText: {
    fontSize: 16,
    color: 'black',
  },

  // Selected Category
  selectedCategory: {
    backgroundColor: '#5184dc',
  },

  selectedCategoryText: {
    color: 'white',
    fontWeight: '600',
  },

  // Task Container
  taskContainer: {
    width: '100%',
    gap: 20,
  },

  // Task Card
  taskCard: {
    minHeight: 80,
    width: '100%',
    position: 'relative',
    borderColor: 'white',
    elevation: 0.5,
    backgroundColor: 'white',
    paddingVertical: 5,
  },

  // Task Row
  taskRow: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    gap: 10,
  },

  // Task Name Container
  taskNameContainer: {
    width: 280,
    minHeight: 50,
    marginLeft: 65,
    paddingTop: 8,
    flexShrink: 1,
  },

  // Task Text
  taskText: {
    fontSize: 20,
    lineHeight: 24,
    flexShrink: 1,
  },

  // Delete Button
  deleteButton: {
    marginTop: 10,
  },

  deleteImage: {
    height: 25,
    width: 25,
    opacity: 0.4,
  },

  // Category displayed on task
  categoryTextLowerBox: {
    position: 'absolute',
    top: -10,
    left: 0,
    height: 35,
    width: 70,
    borderRadius: 10,
    backgroundColor: '#f6f0f0',
    justifyContent: 'center',
    alignItems: 'center',
  },

  taskCategoryText: {
    fontSize: 14,
    color: 'black',
  },
});