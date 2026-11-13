
import * as Notifications from 'expo-notifications';
import { useEffect, useState } from 'react';
import {
  Alert,
  Button,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';

export default function ReminderTab() {
  const [isReminding, setIsReminding] = useState(false);
  const [message, setMessage] = useState('Time to drink a glass of water!');
  const [intervalMinutes, setIntervalMinutes] = useState(1);

  // Request notification permissions
  useEffect(() => {
    async function requestPermissions() {
      const { status } =
        await Notifications.requestPermissionsAsync();

      if (status !== 'granted') {
        Alert.alert(
          'Permission required',
          'We need notifications to remind you to drink water!'
        );
      }
    }

    requestPermissions();
  }, []);

  // Schedule a notification
  async function scheduleReminder() {
    await Notifications.requestPermissionsAsync();

    // Clear old notifications
    await Notifications.cancelAllScheduledNotificationsAsync();

    // Schedule the new notification
    await Notifications.scheduleNotificationAsync({
      content: {
        title: '💧 Hydration Alert',
        body: message,
        sound: true,
      },
      trigger: {
        type: Notifications.SchedulableTriggerInputTypes.TIME_INTERVAL,
        seconds: intervalMinutes * 60,
        repeats: true,
      },
    });

    setIsReminding(true);
    Alert.alert('Set!', `Reminding you every ${intervalMinutes} minutes.`);
  }

  // Stop reminders
  async function stopReminder() {
    await Notifications.cancelAllScheduledNotificationsAsync();
    setIsReminding(false);
    Alert.alert('Stopped', 'Reminders cancelled.');
  }

  return (
    <View style={styles.container}>
      <Text style={styles.emoji}>🥤</Text>

      <Text style={styles.heading}>Add a Custom Message</Text>

      <TextInput
        style={styles.input}
        value={message}
        onChangeText={setMessage}
        placeholder="Enter your reminder message"
      />

      <Text style={styles.heading}>Set Interval (minutes)</Text>

      <TextInput
        style={styles.input}
        value={intervalMinutes.toString()}
        onChangeText={(text) =>
          setIntervalMinutes(parseInt(text) || 1)
        }
        keyboardType="numeric"
      />

      <Text style={styles.status}>
        Status: {isReminding ? 'Active 🟢' : 'Inactive 🔴'}
      </Text>

      <View style={styles.button}>
        <Button
          title="START REMINDERS"
          onPress={scheduleReminder}
          color="#0EA5E9"
        />
      </View>

      <View style={styles.button}>
        <Button
          title="STOP REMINDERS"
          onPress={stopReminder}
          color="#EF4444"
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E0F7FA',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  emoji: {
    fontSize: 60,
    marginBottom: 20,
  },
  heading: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 10,
    marginTop: 10,
  },
  input: {
    width: '100%',
    backgroundColor: 'white',
    padding: 12,
    borderRadius: 8,
    marginBottom: 15,
    textAlign: 'center',
  },
  status: {
    fontSize: 16,
    fontWeight: 'bold',
    marginVertical: 15,
  },
  button: {
    width: '80%',
    marginVertical: 5,
  },
});
