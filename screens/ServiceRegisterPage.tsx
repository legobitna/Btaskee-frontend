
import React, { useState, useEffect } from 'react'
import { View, Text, StyleSheet, TouchableOpacity, Image, Switch, ScrollView } from 'react-native'
import { TextInput } from 'react-native-paper';
import moment from "moment";
import DropDownPicker from 'react-native-dropdown-picker';
import { Button } from 'react-native-paper';
import { Formik } from 'formik';
import HouseNumberModal from '../components/HouseNumberModal';
import DateTimePickerModal from '../components/DateTimePickerModal'
import { useSelector, useDispatch } from "react-redux";
import { actions } from "../redux/actions/action"
import AppBarNavigation from '../components/AppBarNavigation';


const styles = StyleSheet.create({
    root: {
        backgroundColor: 'white',
    },
    scrollViewArea: {
        marginBottom: 142
    },
    container: {
        flex: 1,
        margin: 20,
    },
    textInput: {
        borderColor: 'grey'
    },
    inputArea: {
        marginBottom: 20,
    },
    row: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        flexWrap: "wrap",
    },
    column: {
        marginBottom: 20,
        width: '49%',
    },
    serviceImage: {
        marginTop: 20,
        width: 80,
        height: 80,
        borderRadius: 12,
    },
    serviceColumn: {
        textAlign: 'center'
    }
    ,
    switchArea: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 20
    },
    selectedService: {
        backgroundColor: 'orange',
        opacity: 0.5,
        borderRadius: 12,
    },
    registerButton: {
        color: 'white',
    },
    workingHour: {
        marginBottom: 10
    },
    dropdown: {
        borderColor: 'lightgrey',
        borderTopLeftRadius: 0, borderTopRightRadius: 0,
        borderBottomLeftRadius: 0, borderBottomRightRadius: 0,
        height: 1000
    }
})
const ServiceRegisterPage = ({ navigation }) => {
    const [dateTime, setDateTime] = useState(new Date(Date.now()));
    const [dateTimeShow, setDateTimeShow] = useState(false)
    const [isRepeat, setIsRepeat] = useState(false)
    const [isAnimal, setIsAnimal] = useState(false)
    const [isChooseMaid, setIsChooseMaid] = useState(false)
    const [visible, setVisible] = useState(false)
    const [additionalService, setAdditionalService] = useState({ 'cooking': false, 'iron': false, 'tool': false })
    const [mode, setMode] = useState('')
    const [serviceList, setServiceList] = useState([])
    const dispatch = useDispatch()
    const serviceTypes = useSelector(state => state.serviceTypes)


    const showDateTimepicker = (type) => {
        setDateTimeShow(true)
        setMode(type)
    };
    const selectAdditionalService = (item) => {
        let list = additionalService
        list = { ...list }
        list[item] = !list[item]
        setAdditionalService(list)
    }
    const hideDialog = () => setVisible(false);
    const onDateTimeChange = (event, selectedData) => {
        let currentTime = selectedData || dateTime
        setDateTimeShow(false)
        setDateTime(currentTime)
    }
    const registerData = (values) => {
        values.date = dateTime
        dispatch(actions.registerOrder(values))
        dispatch({ type: "CHANGE_ROUTE", payload: 'Order List' })
        navigation.navigate('Order List')
    }

    useEffect(() => {
        dispatch({ type: "CHANGE_ROUTE", payload: "HomeCleaning" })
        dispatch(actions.getServiceList())
    }, [])
    useEffect(() => {
        let items = serviceTypes.map(item => {
            return { label: `${item.duration}hour ${item.size}m ${item.numberOfRoom}rooms`, value: item._id }
        })
        setServiceList(items)
    }, [serviceTypes])

    return (
        <View>
            <AppBarNavigation title="Home Cleaning" navigation={navigation} />
            <ScrollView style={styles.scrollViewArea}>
                <Formik
                    initialValues={{ address: '', houseNumber: '', houseType: '', date: '', serviceType: '', cooking: false, iron: false, tool: false, repeat: false, maid: false, pet: false, user: '6027b89fd90fc6646cdc1b44' }}
                    onSubmit={values => registerData(values)}
                >
                    {({ handleChange, handleBlur, handleSubmit, values }) => (
                        <View style={styles.container}>
                            <View style={styles.inputArea}>
                                <Text style={styles.textInput}>Address</Text>
                                <TextInput
                                    mode='outlined'
                                    onChangeText={handleChange('address')}
                                    onBlur={handleBlur('address')}
                                    value={values.address}
                                />
                            </View>

                            <View style={styles.inputArea}>
                                <Text style={styles.textInput}>House Number</Text>
                                <TouchableOpacity onPress={() => setVisible(true)}>
                                    <TextInput mode='outlined' disabled={true} value={values.houseNumber} />
                                </TouchableOpacity>
                            </View>

                            <View style={styles.row}>
                                <View style={styles.column}>
                                    <Text style={styles.textInput}>Date</Text>
                                    <TouchableOpacity onPress={() => showDateTimepicker('date')}>
                                        <TextInput mode='outlined' disabled={true} value={moment(dateTime).format('DD/MM/YYYY')} />
                                    </TouchableOpacity>
                                </View>

                                <View style={styles.column}>
                                    <Text style={styles.textInput}>Time</Text>
                                    <TouchableOpacity onPress={() => showDateTimepicker('time')}>
                                        <TextInput mode='outlined' disabled={true} value={moment(dateTime).format("hh:mm")} />
                                    </TouchableOpacity>
                                </View>
                            </View>

                            <View style={styles.inputArea}>
                                <Text style={[styles.textInput, styles.workingHour]}>Working hour</Text>
                                <DropDownPicker
                                    items={serviceList}
                                    defaultIndex={1}
                                    containerStyle={{ height: 60 }}
                                    onChangeItem={item => values.serviceType = item.value}
                                    style={styles.dropdown}
                                    placeholder="Size of your house"
                                    dropDownStyle={{
                                        height: serviceList.length * 42
                                    }}
                                    dropDownMaxHeight={serviceList.length * 42}
                                />
                            </View>

                            <View style={styles.inputArea}>
                                <Text style={styles.textInput}>Additional Service</Text>
                                <View style={styles.row}>
                                    <View>
                                        <TouchableOpacity onPress={() => {
                                            selectAdditionalService('cooking')
                                            values.cooking = !values.cooking
                                        }}>
                                            <Image source={{ uri: 'https://www.btaskee.com/wp-content/uploads/2018/12/cong-bang-gioi-thieu-about-bTaskee.jpg' }} style={values.cooking ? [styles.serviceImage, styles.selectedService] : styles.serviceImage} />
                                        </TouchableOpacity>
                                        <Text style={styles.serviceColumn}>Cooking</Text>
                                        <Text style={styles.serviceColumn}>+1h</Text>
                                    </View>
                                    <View>
                                        <TouchableOpacity onPress={() => {
                                            selectAdditionalService('iron');
                                            values.iron = !values.iron
                                        }}>
                                            <Image source={{ uri: 'https://www.btaskee.com/wp-content/uploads/2018/12/Tam-huyet-gioi-thieu-bTaskee-about.jpg' }} style={values.iron ? [styles.serviceImage, styles.selectedService] : styles.serviceImage} />
                                        </TouchableOpacity>
                                        <Text style={styles.serviceColumn}>Iron</Text>
                                        <Text style={styles.serviceColumn}>+1h</Text>
                                    </View>
                                    <View>
                                        <TouchableOpacity onPress={() => {
                                            selectAdditionalService('tool');
                                            values.tool = !values.tool
                                        }}>
                                            <Image source={{ uri: 'https://www.btaskee.com/wp-content/uploads/2018/12/dao-duc-trach-nhiem-btaskee-gioi-thieu-about.jpg' }} style={values.tool ? [styles.serviceImage, styles.selectedService] : styles.serviceImage} />
                                        </TouchableOpacity>
                                        <Text style={styles.serviceColumn}>Cleaning Tool</Text>
                                        <Text style={styles.serviceColumn}>+30,000VND</Text>
                                    </View>

                                </View>
                            </View>

                            <View style={styles.inputArea}>
                                <View style={styles.switchArea}>
                                    <Text style={styles.textInput}>Repeat Weekly</Text>
                                    <Switch
                                        trackColor={{ false: "#767577", true: "#81b0ff" }}
                                        thumbColor={isRepeat ? "#f5dd4b" : "#f4f3f4"}
                                        ios_backgroundColor="#3e3e3e"
                                        onValueChange={() => {
                                            values.repeat = !isRepeat
                                            setIsRepeat(!isRepeat)
                                        }}
                                        value={isRepeat}
                                    />
                                </View>
                                <View style={styles.switchArea}>
                                    <Text style={styles.textInput}>Do you want to select maid?</Text>
                                    <Switch
                                        trackColor={{ false: "#767577", true: "#81b0ff" }}
                                        thumbColor={isChooseMaid ? "#f5dd4b" : "#f4f3f4"}
                                        ios_backgroundColor="#3e3e3e"
                                        onValueChange={() => {
                                            values.maid = !isChooseMaid
                                            setIsChooseMaid(!isChooseMaid)
                                        }}
                                        value={isChooseMaid}
                                    />
                                </View>
                                <View style={styles.switchArea}>
                                    <Text style={styles.textInput}>Do you have pet?</Text>
                                    <Switch
                                        trackColor={{ false: "#767577", true: "#81b0ff" }}
                                        thumbColor={isAnimal ? "#f5dd4b" : "#f4f3f4"}
                                        ios_backgroundColor="#3e3e3e"
                                        onValueChange={() => {
                                            values.pet = !isAnimal
                                            setIsAnimal(!isAnimal)
                                        }}
                                        value={isAnimal}
                                    />
                                </View>
                            </View>
                            <Button onPress={handleSubmit} mode="contained" color="#63e04a" labelStyle={styles.registerButton}>REGISTER</Button>

                            <HouseNumberModal visible={visible} values={values} hideDialog={hideDialog} handleChange={handleChange} />
                            <DateTimePickerModal mode={mode} dateTimeShow={dateTimeShow} dateTime={dateTime} onDateTimeChange={onDateTimeChange} />
                        </View>
                    )}
                </Formik>
            </ScrollView >
        </View>
    )
}

export default ServiceRegisterPage
