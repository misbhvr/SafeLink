import { StyleSheet, View, Pressable, Text } from 'react-native';

export default function Button({ label }) {
  return (
    <View style={styles.buttonContainer}>
      <Pressable style={styles.button} onPress={() => alert('You signed In')}>
        <Text style={styles.buttonLabel}>{label}</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
    buttonContainer: {
      width: 600,           // Adjust the width to make the button longer
      height: 80,
      marginHorizontal: 20,
      alignItems: 'center',
      justifyContent: 'center',
      padding: 3,
    },
    button: {
      borderWidth: 1,
      borderColor: '#3d8af7',
      borderRadius: 5,
      paddingHorizontal: 70,   
      paddingVertical: 10,     
      alignItems: 'center',
    },
    buttonIcon: {
      paddingRight: 8,
    },
    buttonLabel: {
      color: '#3d8af7',
      fontSize: 18,
    },
  });
  
