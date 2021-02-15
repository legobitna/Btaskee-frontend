import React from 'react'
import { Card, Title, Divider, Paragraph } from 'react-native-paper';
import { StyleSheet, View, Text, Image } from 'react-native';
import moment from "moment";
const styles = StyleSheet.create({
    root: {
        marginTop: 20,
        height: 450,
        width: 350
    },
    media: {
        height: 50,
        width: 50,
        marginRight: 10,
    },
    titleArea: {
        justifyContent: 'space-between',
        flexDirection: 'row',
        marginBottom: 10,
    },
    title: {
        fontSize: 15
    },
    subTitle: {
        fontSize: 12
    },
    highligt: {
        color: 'orange',
        marginLeft: 10
    },
    titleSpace: {
        marginRight: 80
    },
    contentArea: {
        margin: 10
    },
    row: {
        fontSize: 12,
        marginTop: 20,
        flexDirection: 'row',
        alignItems: 'center',
    },
    lastRow: {
        marginBottom: 20
    },
    col: {
        width: '40%',
        color: 'grey',
        fontSize: 11,
    },
    footer: {

        margin: 10,
    },
    footerItem: {
        fontSize: 12,
        color: 'grey',
        textAlign: 'center'
    }
})

const OrderCard = (props) => {

    const { address, houseNumber, date, houseType, cooking, iron, tool, updatedAt } = props.order

    return (
        <Card style={styles.root}>
            <Card.Content>
                <View style={styles.titleArea}>
                    <Image source={{ uri: "https://www.btaskee.com/wp-content/uploads/2018/11/dam-bao-quyen-loi-lao-dong.jpg" }} style={styles.media} />
                    <View style={styles.titleSpace}>
                        <Text style={styles.title}>Order</Text>
                        <Text style={styles.subTitle}>{moment(updatedAt).fromNow()}</Text>
                    </View>
                    <Text style={[styles.subTitle, styles.highligt]}>New post</Text>
                </View>
                <Divider />
                <View style={styles.contentArea}>
                    <View style={styles.row}>
                        <Text style={styles.col}>
                            Start date
                        </Text>
                        <Text>
                            {moment(date).add(1, 'days').calendar()}
                        </Text>
                    </View>
                    <View style={styles.row}>
                        <Text style={styles.col}>
                            Address
                        </Text>
                        <Text>
                            {address}
                        </Text>
                    </View>
                    <View style={styles.row}>
                        <Text style={styles.col}>
                            House Number
                        </Text>
                        <Text>
                            {houseNumber}
                        </Text>
                    </View>
                    <View style={styles.row}>
                        <Text style={styles.col}>
                            House type
                        </Text>
                        <Text>
                            {houseType}
                        </Text>
                    </View>
                    <View style={styles.row}>
                        <Text style={styles.col}>
                            Price
                        </Text>
                        <Text>
                            342,000vnd
                        </Text>
                    </View>
                    <View style={[styles.row, styles.lastRow]}>
                        <Text style={styles.col}>
                            Additional Service
                        </Text>
                        <Text>
                            {cooking ? 'cooking' : ''} {iron ? 'iron' : ''} {tool ? 'tool' : ''}
                        </Text>
                    </View>
                </View>
                <Divider />
                <View style={styles.footer}>
                    <Text style={styles.footerItem}>
                        System will choose the maid automatically
                    </Text>
                    <Text style={styles.footerItem}>
                        Waiting.. order hasn't picked up yet
                    </Text>
                </View>

            </Card.Content>
        </Card>

    )
}

export default OrderCard
