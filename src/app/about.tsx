
import { StyleSheet, Text, View } from 'react-native';

export default function AboutTab() {
  return (
    <View style={styles.container}>
      <Text style={styles.heading}>
        About This App
      </Text>

      <Text style={styles.description}>
        Built for Mobile Application Development
        Lab 6. Demonstrates local notifications
        and Expo Router tab navigation.
      </Text>

      <Text style={styles.developer}>
        Developed with React Native and Expo.
        {'\n'}
        Created by [Kaveesha Nethmini].
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
    marginBottom: 15,
  },
  description: {
    fontSize: 14,
    color: '#777777',
    textAlign: 'center',
    marginBottom: 30,
  },
  developer: {
    fontSize: 14,
    color: '#777777',
    textAlign: 'center',
  },
});
