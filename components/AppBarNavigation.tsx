import React from 'react';
import { Appbar } from 'react-native-paper';
import { StyleSheet, TouchableOpacity, Image } from 'react-native';

const styles = StyleSheet.create({
  header: {
    height: 100,
  },
  titleText: {
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: 25,
    marginLeft: 20,
  },
  icon: {
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: 20,
  },
})

const AppBarNavigation = ({ navigation, title }) => {
  const _goBack = () => navigation.navigate('Service')

  return (
    <Appbar.Header style={styles.header}>
      {title !== "bTaskee" &&
        <TouchableOpacity style={styles.touchArea} onPress={_goBack}>
          <Image source={require('../assets/images/arrow.png')} style={styles.icon} />
        </TouchableOpacity>}
      <Appbar.Content title={title} color='white' titleStyle={styles.titleText} />
    </Appbar.Header>
  );
};

export default AppBarNavigation;