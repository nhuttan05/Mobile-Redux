import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { RootState, AppDispatch } from '../store';
import { increment, decrement, reset, incrementByAmount } from '../store/counterSlice';

export default function CounterScreen() {
  const dispatch = useDispatch<AppDispatch>();
  const count = useSelector((state: RootState) => state.counter.value);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Redux Toolkit Counter</Text>
      <Text style={styles.label}>Giá trị hiện tại:</Text>
      <Text style={styles.counterText}>{count}</Text>

      <View style={styles.buttonRow}>
        <TouchableOpacity
          style={[styles.button, styles.btnDecrease]}
          onPress={() => dispatch(decrement())}
        >
          <Text style={styles.buttonText}>- Giảm 1</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[styles.button, styles.btnIncrease]}
          onPress={() => dispatch(increment())}
        >
          <Text style={styles.buttonText}>+ Tăng 1</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.buttonRow}>
        <TouchableOpacity
          style={[styles.button, styles.btnAddFive]}
          onPress={() => dispatch(incrementByAmount(5))}
        >
          <Text style={styles.buttonText}>+ Tăng 5</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[styles.button, styles.btnReset]}
          onPress={() => dispatch(reset())}
        >
          <Text style={styles.buttonText}>Reset về 0</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f5f5f5',
    padding: 20,
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 16,
  },
  label: {
    fontSize: 16,
    color: '#666',
    marginBottom: 4,
  },
  counterText: {
    fontSize: 64,
    fontWeight: 'bold',
    color: '#111',
    marginBottom: 28,
  },
  buttonRow: {
    flexDirection: 'row',
    gap: 12,
    marginBottom: 12,
  },
  button: {
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 8,
    minWidth: 120,
    alignItems: 'center',
  },
  btnIncrease: {
    backgroundColor: '#007AFF',
  },
  btnDecrease: {
    backgroundColor: '#FF3B30',
  },
  btnAddFive: {
    backgroundColor: '#34C759',
  },
  btnReset: {
    backgroundColor: '#8E8E93',
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
  },
});