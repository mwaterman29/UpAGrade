import ScreenLayout from "../components/ScreenLayout";
import React, {ReactNode, useState, useEffect} from 'react';
import { Button, Text, View, TextInput, Keyboard} from 'react-native';
import { Link, useSearchParams, useRouter, usePathname } from "expo-router";
import DateTimePickerModal from "react-native-modal-datetime-picker";

import { Activity } from "./AddActivity";

import uid from '.././uid';
import storage from '.././storage';
import AsyncStorage from "@react-native-async-storage/async-storage";

type Workout = {
    date: Date,
    activities: Array<Activity>
}

export type {Workout}

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
        loadWorkout(date);
        hideDatePicker();
    };

    const [currentWorkout, setCurrentWorkout] = useState<Workout>({        
        date: new Date("1970-01-01"),
        activities: new Array()
    })

    function loadWorkout(date: Date)
    {
        console.log("loading from " + date.toDateString())
        storage.load({
            key: 'workouts',
            id: date.toDateString()
        }).then(ret => { 
            setCurrentWorkout(ret)
        }).catch(err => {
            switch (err.name) {
                case 'NotFoundError':
                  setCurrentWorkout({
                    date: date,
                    activities: new Array<Activity>()
                  })
                  saveWorkout(date);
                  break;
                default:
                    setCurrentWorkout({
                    date: date,
                    activities: new Array<Activity>()
                    })
                    saveWorkout(date);
                    break;
              }
        })
    }

    function saveWorkout(date: Date)
    {
        storage.save({
            key: 'workouts',
            id: date.toDateString(),
            data: currentWorkout,
            expires: null
        }).then();
    }

    return(
        <ScreenLayout>
            <View className ='flex flex-col h-full justify-evenly items-center'>
                <Text>Workout for {currentWorkout.date.toDateString()}</Text>
                <Button title="Show Date Picker" onPress={showDatePicker} />
                <DateTimePickerModal
                    isVisible={isDatePickerVisible}
                    mode="date"
                    onConfirm={handleConfirm}
                    onCancel={hideDatePicker}
                />

                {currentWorkout.activities.map((activity) => {
                    console.log("Hit activity " + activity.desc);
                    return(
                        <Text> 
                            hi i'm a workout {activity.desc};
                        </Text>
                    )
                })}

                <Link href={"./AddActivity?givenDate=" + currentWorkout.date.toDateString()}>
                    <View className="bg-ug-dark-green m-2 p-4">
                        <Text className="text-ug-white text-xl text-center">
                            Add New Activity
                        </Text>
                    </View>
                </Link>
            </View>
        </ScreenLayout>
    );
}

export default AddWorkout;