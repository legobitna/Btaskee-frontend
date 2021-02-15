import React, { useState } from 'react'
import { Dialog, Portal } from 'react-native-paper';
import { View, StyleSheet, TouchableOpacity, Image, Switch, ScrollView, Button } from 'react-native'
import { TextInput } from 'react-native-paper';
import { RadioButton, Text } from 'react-native-paper';

const styles = StyleSheet.create({
    checkBoxArea: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 20
    },
    buttonItem: {
        marginRight: 20
    },
    inputArea: {
        marginBottom: 20
    }
})
const HouseNumberModal = ({ visible, values, hideDialog, handleChange }) => {
    const [value, setValue] = useState('')
    const handleSubmit = () => {
        values.houseType = value;
        hideDialog()
    }
    return (
        <Portal>
            <Dialog visible={visible} onDismiss={hideDialog}>
                <Dialog.Content>

                    <RadioButton.Group onValueChange={newValue => setValue(newValue)} value={value}>
                        <View style={styles.checkBoxArea}>
                            <RadioButton value="house" />
                            <Text>House</Text>
                        </View>
                        <View style={styles.checkBoxArea}>
                            <RadioButton value="apt" />
                            <Text>Apartment</Text>
                        </View>
                        <View style={styles.checkBoxArea}>
                            <RadioButton value="villa" />
                            <Text>Villa</Text>
                        </View>
                    </RadioButton.Group>

                    <View style={styles.inputArea}>
                        <Text style={styles.textInput}>House Number</Text>
                        <TextInput mode='outlined' onChangeText={handleChange('houseNumber')} />
                    </View>
                    <Dialog.Actions>
                        <View style={styles.buttonItem}>
                            <Button onPress={() => hideDialog()} title="Cancel" color="#ff8227" />
                        </View>
                        <Button onPress={() => handleSubmit()} title="Ok" color="#ff8227" />
                    </Dialog.Actions>
                </Dialog.Content>

            </Dialog>
        </Portal>
    )
}

export default HouseNumberModal
