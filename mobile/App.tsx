import { StatusBar } from 'expo-status-bar'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>pode react native no grupo?😔</Text>
      <Button label="click me" />
      <StatusBar style="auto" />
    </View>
  )
}

interface ButtonProps {
  label: string
}

const Button = ({ label }: ButtonProps) => {
  return (
    <TouchableOpacity>
      <Text style={styles.buttonTitle}>{label}</Text>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#040404',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 24,
    color: '#fcfcfc',
  },
  buttonTitle: {
    fontSize: 16,
    color: '#ccc',
  },
})
