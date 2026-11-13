
import { StyleSheet, Text, View } from 'react-native';

export default function TipsTab() {
  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Why Hydrate? 🌊</Text>

      <Text style={styles.tip}>
        Boosts skin health and beauty
      </Text>

      <Text style={styles.tip}>
        Regulates body temperature
      </Text>

      <Text style={styles.tip}>
        Flushes body waste
      </Text>

      <Text style={styles.tip}>
        Maintains blood pressure
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F2F2F2',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  heading: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#0EA5E9',
    marginBottom: 15,
  },
  tip: {
    fontSize: 14,
    color: '#555555',
    marginVertical: 5,
  },
});
