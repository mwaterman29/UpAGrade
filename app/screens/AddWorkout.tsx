import ScreenLayout from "../components/ScreenLayout";
import React, {ReactNode, useState, useEffect} from 'react';
import { Button, Text, View, TextInput, Keyboard} from 'react-native';
import { Link } from "expo-router";
import DateTimePickerModal from "react-native-modal-datetime-picker";

const AddWorkout = () => {

    const [isDatePickerVisible, setDatePickerVisibility] = useState(false);

    const showDatePicker = () => {
        setDatePickerVisibility(true);
    };

    const hideDatePicker = () => {
        setDatePickerVisibility(false);
    };

    const handleConfirm = (date : Date) => {
        console.warn("A date has been picked: ", date);
        hideDatePicker();
    };

    return(
        <ScreenLayout>
            <View className ='flex flex-col h-full justify-evenly items-center'>
            <Text>test</Text>
            <Button title="Show Date Picker" onPress={showDatePicker} />
            <DateTimePickerModal
                isVisible={isDatePickerVisible}
                mode="date"
                onConfirm={handleConfirm}
                onCancel={hideDatePicker}
            />
            </View>
        </ScreenLayout>
    );
}

export default AddWorkout;