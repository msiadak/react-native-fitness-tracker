import React from 'react';
import PropTypes from 'prop-types';
import { Text, View, Button } from 'react-native';
import styles from './styles';

export default class HomeScreen extends React.Component {
  static navigationOptions = {
    title: 'Home',
  };

  static propTypes = {
    navigation: PropTypes.shape({
      navigate: PropTypes.func.isRequired,
    }).isRequired,
  };

  render() {
    const { navigation } = this.props;

    return (
      <View style={styles.screen}>
        <Text>Welcome to fitness-tracker</Text>
        <View style={styles.buttonContainer}>
          <Button onPress={() => navigation.navigate('Lift')} title="Lift" />
        </View>
      </View>
    );
  }
}
