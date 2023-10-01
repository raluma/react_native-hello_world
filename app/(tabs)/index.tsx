import { Button, StyleSheet } from 'react-native';

import EditScreenInfo from '../../components/EditScreenInfo';
import { Text, View } from '../../components/Themed';
import { useState } from 'react';

export default function TabOneScreen() {
  const [state, setState] = useState(true);

  const handleClick = () => {
    setState(!state);
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome { state ? "👋" : "🙏"}</Text>
      <Button onPress={handleClick} title="click me" color="blue"
      accessibilityLabel="blue button" />
      <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
      <EditScreenInfo path="app/(tabs)/index.tsx" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 20
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
});
