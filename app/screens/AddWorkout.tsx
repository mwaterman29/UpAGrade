import ScreenLayout from "../components/ScreenLayout";
import React, {ReactNode, useState, useEffect} from 'react';
import { Button, Text, View, TextInput, Keyboard} from 'react-native';
import { Link } from "expo-router";
import DateTimePickerModal from "react-native-modal-datetime-picker";

import { Activity } from "./AddActivity";

import uid from '.././uid';
import storage from '.././storage';

type Workout = {
    date: Date,
    activities: Array<Activity>
}

const AddWorkout = () => {

    //Date picker
    const [isDatePickerVisible, setDatePickerVisibility] = useState(false);

    const showDatePicker = () => {
        setDatePickerVisibility(true);
    };

    const hideDatePicker = () => {
        setDatePickerVisibility(false);
    };

    const handleConfirm = (date : Date) => {
        setCurrentDate(date);
        loadWorkout();
        hideDatePicker();
    };

    //Date, workout
    let [currentDate, setCurrentDate] = useState(new Date());
    const [currentWorkout, setCurrentWorkout] = useState({        
        date: Date,
        activities: Array<Activity>
    })

    function loadWorkout()
    {
        storage.load({
            key: 'workouts',
            id: currentDate.toDateString()
        }).then(ret => {
            setCurrentWorkout(ret)
        })
    }

    function saveWorkout()
    {
        storage.save({
            key: 'workouts',
            id: currentDate.toDateString(),
            data: currentWorkout,
            expires: null
        }).then();
    }

    //Search params
    /*
    Flow is as follows:
        Dashboard ->
        Navigates to the Add Workout page with no params.
        User selects date
        User clicks add activity ->
        Navigates to activity page with that date as the parameter
        User populates activity
        User clicks add to my workout ->
        Returns to this page with that date populated, and the contents of the activity to be added on.
    */

    return(
        <ScreenLayout>
            <View className ='flex flex-col h-full justify-evenly items-center'>
            <Text>Workout for {currentDate.toDateString()}</Text>
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