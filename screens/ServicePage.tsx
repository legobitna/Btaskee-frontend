import React, { useEffect } from 'react';
import { StyleSheet, ScrollView } from 'react-native';
import ServiceCard from '../components/ServiceCard';
import { useDispatch } from "react-redux";
import { View } from '../components/Themed';
import AppBarNavigation from '../components/AppBarNavigation';

const styles = StyleSheet.create({

  container: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
});

export default function ServicePage({ navigation }) {
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch({ type: "CHANGE_ROUTE", payload: "ServicePage" })
  }, [])
  return (
    <View>
      <AppBarNavigation title="bTaskee" />
      <ScrollView  >
        <View style={styles.container}>
          <ServiceCard image="https://www.btaskee.com/wp-content/uploads/2018/11/uu-tien-nguoi-lam.jpg" title="Home Cleaning" path="HomeCleaning" navigation={navigation} />
          <ServiceCard image="https://www.btaskee.com/wp-content/uploads/2018/11/uu-tien-nguoi-lam.jpg" title="subscription" path="HomeCleaning" navigation={navigation} />
          <ServiceCard image="https://www.btaskee.com/wp-content/uploads/2018/11/uu-tien-nguoi-lam.jpg" title="Deep Cleaning" path="HomeCleaning" navigation={navigation} />
        </View>
      </ScrollView>
    </View>
  );
}


