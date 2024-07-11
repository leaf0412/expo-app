import { useNavigation } from 'expo-router';
import { useEffect } from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function HomeScreen() {
  const navigation = useNavigation();

  useEffect(() => {
    navigation.setOptions({
      headerStyle: {
        backgroundColor: '#f4511e',
      },
      headerTintColor: '#fff',
      headerTitleStyle: {
        fontWeight: 'bold',
      },
      headerTitleAlign: 'center',
      headerTitle: 'Hello World',
    });
  }, [navigation]);

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Hello World</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 40,
    letterSpacing: 0.25,
    textAlign: 'center',
  },
});
