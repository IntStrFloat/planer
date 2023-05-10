import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View,TouchableOpacity,TouchableHighlight,TextInput } from 'react-native';
import {useState } from 'react';

export default function Header() {
    const [items, setItems] = useState([]);
    const [showList, setShowList] = useState(true);
    const [selectedItemIndex, setSelectedItemIndex] = useState(null);
    const [text, setValue] = useState('');

  const onChange = (text) => {
    setValue(text);
  };
  const handleAddItem = () => {
    setShowList(true);
    const newItem = `Новый элемент ${items.length + 1}`;
    setItems([newItem, ...items]);
  };
  const handleClear = () => {
    setItems([]);
    setShowList(false);
  };
  const handleItemPress = (index) => {
    setSelectedItemIndex(index);
  };
  const handleItemChange = (text) => {
    const updatedItems = [...items];
    updatedItems[selectedItemIndex] = text;
    setItems(updatedItems);
    setSelectedItemIndex(null);
  };

  return (
    <View style={styles.main}>
      <Text style = {[styles.buttonText, {left: '50%'},
      {backgroundColor: '#fff'}]}> Список дел: </Text>
      <View style={styles.button}>
      <TouchableOpacity style={[styles.button,{bottom:-1},{left:-10},{fontSize:30}]} onPress={handleAddItem}>
        <Text style={[styles.buttonText,{fontSize:48},{left:10}]}>+</Text>
        </TouchableOpacity>
        </View>
        <TouchableOpacity style={[styles.button,{bottom:-535},{left:260}]} onPress = {handleClear}>
        <Text style={[styles.buttonText,{fontSize: 48}]}>Меню</Text>
        </TouchableOpacity>
        {showList && items.length > 0 && (
  <View style={[ { left: "50%" },{fontSize:30}]}>
    {items.map((item, index) => {
      if (selectedItemIndex === index) {
        // отображаем текстовое поле для редактирования выбранного элемента
        return (
          <View key={index} style={[{top: -120},{fontSize:30}]}>
            <TextInput
              style={styles.items}
              value={item}
              onChangeText={(text) => {
                const newItems = [...items];
                newItems[index] = text;
                setItems(newItems);
              }}
            />
          </View>
        );
      } else {
        // отображаем элемент списка и добавляем обработчик нажатия для выбора элемента
        return (
          <TouchableHighlight key={index} onPress={() => setSelectedItemIndex(index)}>
            <View style={[styles.items, {top: -120},{fontSize:30}]}>
              <Text>{item}</Text>
            </View>
          </TouchableHighlight>
        );
      }
    })}
  </View>
)}
      </View>
  );
}

const styles = StyleSheet.create({
    main: {
      paddingTop: 40,
      left: -200,
      alignItems: 'center',
    },
    text: {
      fontSize: 18,
      fontStyle: 'italic',
      flexGrow: 1,
      textAlign: 'center',
      borderRadius:3,
      backgroundColor: '#fff',
      paddingVertical: 2,
      paddingHorizontal: 2,  
    },
    button: {
      backgroundColor: '#fff',
      borderRadius: 10,
      paddingVertical: 0,
      paddingHorizontal: 20,
      left: 80,
      bottom: -600,
    },
    buttonText: {
      color: '#000',
      fontSize: 30,
      fontWeight: 'bold',
      textAlign: 'center',
    },
    items: {
      padding:15,
      textAlign: 'center',
      alignItems: 'stretch',
      borderRadius: 20,
      borderWidth: 2,
      marginTop:15,
      fontSize:30,
      backgroundColor: '#fff',
      
    },
  });