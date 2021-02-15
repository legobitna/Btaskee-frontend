import React from 'react'
import { View } from 'react-native'
import DateTimePicker from '@react-native-community/datetimepicker';

const DateTimePickerModal = ({ dateTimeShow, mode, dateTime, onDateTimeChange }) => {
    return (
        <View>
            {dateTimeShow && (
                <DateTimePicker
                    testID="dateTimePicker"
                    value={dateTime}
                    mode={mode}
                    is24Hour={true}
                    display="default"
                    onChange={onDateTimeChange}
                />
            )}
        </View>
    )
}

export default DateTimePickerModal
