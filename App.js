import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, TextInput, SafeAreaView, Button, Alert } from 'react-native';

export default function App() {
  const [number, onChangeNumber] = React.useState(null);
  return (
    <SafeAreaView style={styles.container}>
      <TextInput style={styles.TextInput} 
      onChangeText={onChangeNumber} value={number} 
      placeholder="Entrez un nombre ici" 
      keyboardType="numeric"></TextInput>
      <Button title="Mon super bouton" 
      onPress={() => Alert.alert('Ah non celui la ne fonctionne pas non plus')}></Button>
      <StatusBar style="auto" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
