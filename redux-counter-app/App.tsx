import React from 'react';
import { SafeAreaView, StyleSheet } from 'react-native';
import { Provider } from 'react-redux';
import { store } from './store';
import CounterScreen from './components/CounterScreen';

export default function App() {
  return (
    <Provider store={store}>
      <SafeAreaView style={styles.root}>
        <CounterScreen />
      </SafeAreaView>
    </Provider>
  );
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
});