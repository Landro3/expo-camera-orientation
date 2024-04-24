import { StyleSheet, Text, View } from 'react-native';
import { CameraView } from 'expo-camera/next';

export default function App() {

  return (
    <View style={styles.container}>
      <CameraView
        style={{ flex: 1, borderWidth: 1 }}
        responsiveOrientationWhenOrientationLocked
        onResponsiveOrientationChanged={(e) => {
          console.log(e.orientation);
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
