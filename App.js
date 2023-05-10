import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, FlatList, SafeAreaView } from 'react-native';
import Header from './components/Header';
import Listik from './components/List';

export default function App() {
  return (
    <View style = {styles.main}>
      <Header/>
    </View>

      
  );
  
}
const styles = StyleSheet.create({
  main: {
    flex: 1,
    backgroundColor: '#FFEFD5',
  }

});
