import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, TouchableHighlight, SafeAreaView } from 'react-native';

export default function Listik({el}) {
  return (
    <TouchableHighlight>
        <Text style = {styles.main}> {el.text} </Text>
    </TouchableHighlight>

      
  );
  
}
const styles = StyleSheet.create({
  main: {
    flex: 1,
    backgroundColor: '#FF231312',
  }

});
