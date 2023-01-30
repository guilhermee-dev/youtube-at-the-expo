import { StyleSheet } from "react-native";

export const videoHeight = 180;
export const screenSpace = 24;

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
    padding: screenSpace,
  },
  containerPlayer: {
    width: '100%',
    height: videoHeight
  }
});