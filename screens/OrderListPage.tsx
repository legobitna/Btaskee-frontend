import React, { useEffect } from 'react'
import { View, StyleSheet, ScrollView } from 'react-native';
import { useSelector, useDispatch } from "react-redux";
import { actions } from "../redux/actions/action"
import OrderCard from "../components/OrderCard"
import AppBarNavigation from '../components/AppBarNavigation';

const styles = StyleSheet.create({
    scrollViewArea: {
        marginBottom: 142
    },
    container: {
        alignItems: 'center',
        flexGrow: 1,
        flexShrink: 1,
    },
})

const OrderListPage = ({ navigation }) => {
    const dispatch = useDispatch()
    const orderList = useSelector(state => state.orderList)

    useEffect(() => {
        dispatch({ type: "CHANGE_ROUTE", payload: "OrderList" })
        dispatch(actions.getOrderList())
    }, [])

    return (
        <View>
            <AppBarNavigation title="Order List" navigation={navigation} />
            <ScrollView style={styles.scrollViewArea}>
                <View style={styles.container}>
                    {orderList && orderList.map(order => <OrderCard order={order} />)}
                </View>
            </ScrollView>
        </View>
    )
}

export default OrderListPage
