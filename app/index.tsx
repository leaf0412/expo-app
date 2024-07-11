import { useNavigation, useRouter } from 'expo-router';
import { StyleSheet, Text, View, Pressable } from 'react-native';
import { useEffect } from 'react';

export default function Home() {
  const navigation = useNavigation();
  const router = useRouter();

  useEffect(() => {
    navigation.setOptions({ headerShown: false });
  }, [navigation]);

  const goToHelloWorld = () => {
    router.navigate('hello-world');
  };

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text style={styles.title}>导航界面</Text>
      <Pressable style={styles.button} onPress={goToHelloWorld}>
        <Text style={styles.text}>跳转 hello-world 界面</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  title: {
    fontSize: 30,
    fontWeight: 'bold',
  },
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 4,
    elevation: 3,
    marginTop: 16,
    backgroundColor: '#2196F3',
  },
  text: {
    fontSize: 16,
    lineHeight: 20,
    letterSpacing: 0.25,
    textAlign: 'center',
    color: 'white',
  },
});
