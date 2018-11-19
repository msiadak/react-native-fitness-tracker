import { StatusBar, StyleSheet } from 'react-native';

export default StyleSheet.create({
  screen: {
    marginTop: StatusBar.currentHeight,
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonContainer: {
    flex: 1,
  },
});
