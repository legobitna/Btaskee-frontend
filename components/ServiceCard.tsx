import React from 'react';
import { StyleSheet } from 'react-native';
import { TouchableOpacity, Text } from 'react-native';
import { Card, Title } from 'react-native-paper';
import { useDispatch } from "react-redux";

const styles = StyleSheet.create({
  root: {
    minWidth: 303,
    height: 150,
    marginBottom: 30,
    marginTop: 30
  },
  title: {
    marginRight: 10,
  },
  media: {
    height: 80,
    width: 80,
    marginRight: 10,
  },
  contentBox: {
    display: 'flex',
    alignItems: 'center'
  }
});

export default function ServiceCard({ image, title, path, navigation }) {

  const dispatch = useDispatch()

  return (
    <TouchableOpacity onPress={() => {
      dispatch({ type: "CHANGE_ROUTE", payload: path })
      navigation.navigate(path)
    }}>
      <Card style={styles.root} >
        <Card.Content style={styles.contentBox} >
          <Card.Cover source={{ uri: image }} style={styles.media} />
          <Title style={styles.title}>
            {title}
          </Title>

        </Card.Content>
      </Card>
    </TouchableOpacity>
  );
}
