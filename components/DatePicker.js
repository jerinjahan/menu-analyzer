import React, { useState } from 'react';
import { Button, LogBox } from 'react-native';
/** date picker  */
import DateTimePicker from '@react-native-community/datetimepicker';
const InputDatePicker = ({
    date, setDate, open, setOpen
}) => {

    LogBox.ignoreAllLogs();
    LogBox.ignoreLogs(['Warning: ...']);


    const onChange = (event, selectedDate) => {
        const currentDate = selectedDate || date;
        setDate(currentDate);
        setOpen(false);
    };

    return (
        <>
            <DateTimePicker
                value={date?date:new Date()}
                onChange={onChange}
            />
        </>
    )
};

export default InputDatePicker;
