import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import { HealthRings } from './components/HealthRings/HealthRing';

export default function App() {
  return (
    <View style={styles.container}>
      <HealthRings />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
