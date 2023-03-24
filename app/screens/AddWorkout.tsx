import ScreenLayout from "../components/ScreenLayout";
import React, {ReactNode, useState, useEffect} from 'react';
import { Button, Text, View, TextInput, Keyboard} from 'react-native';
import { Link, useSearchParams, useRouter, usePathname } from "expo-router";
import DateTimePickerModal from "react-native-modal-datetime-picker";

import { Activity } from "./AddActivity";

import uid from '.././uid';
import storage from '.././storage';

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
        setCurrentDate(date);
        loadWorkout();
        hideDatePicker();
    };

    //Date, workout
    let [currentDate, setCurrentDate] = useState(new Date("1970-01-01"));
    const [currentWorkout, setCurrentWorkout] = useState<Workout>({        
        date: new Date("1970-01-01"),
        activities: new Array()
    })

    function loadWorkout()
    {
        storage.load({
            key: 'workouts',
            id: currentDate.toDateString()
        }).then(ret => { 
            //Handled
            setCurrentWorkout(ret)
        }).catch(err => {
            switch (err.name) {
                case 'NotFoundError':
                  setCurrentWorkout({
                    date: currentDate,
                    activities: new Array<Activity>()
                  })
                  saveWorkout();
                  break;
                default:
                    console.log(err);
                    break;
              }
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

    function loadWorkoutThenPopulate(type: Number, num: String | undefined, by: String | undefined, desc: String)
    {
        console.log("loading")
        storage.load({
            key: 'workouts',
            id: currentDate.toDateString()
        }).then(ret => { 
            //Handled
            console.log("setting")
            setCurrentWorkout(ret)
        }).then(() => {
            console.log("proceeding")
            
            let newActivity: Activity = {
                type: type,
                num: num,
                by: by,
                desc: desc,
                completed: false
            }
            useEffect(() => {
                console.log("Pushing activity, rerouting "+ currentWorkout.activities.length);
    
                //Push onto current list
                currentWorkout.activities.push(newActivity);
                
                console.log("Pushed");
    
                //Save
                saveWorkout();
    
                console.log("Saved " + currentWorkout.activities.length);
    
                Router.replace('./AddWorkout?added=true')
    
                console.log("Routed");
            });
        }).catch(err => {
            switch (err.name) {
                case 'NotFoundError':
                  setCurrentWorkout({
                    date: currentDate,
                    activities: new Array<Activity>()
                  })
                  saveWorkout();
                  break;
                default:
                    console.log(err);
                    break;
              }
        })
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

    const Router = useRouter();
    const { givenDate, type, num, by, desc} = useSearchParams();
    if(givenDate && type && desc)
    {
        console.log("Hit " + usePathname() + " with " + useSearchParams() + " GD " + givenDate + " type " + type + " desc " + desc)

        let givenDateObj = new Date(givenDate.toString());
        if(currentDate.toDateString() != givenDate)
        {
            console.log("Updating current date!");
            setCurrentDate(givenDateObj);
        }
        if(currentWorkout.date.toDateString() != givenDate)
        {
            console.log("Loading workout!")

            let typeNA = parseInt(type.toString());
            let numNA;
            if(num)
                numNA = num.toString();
            else
                numNA = undefined;
            let byNA;
            if(by)
                byNA = by.toString();
            else
                byNA = undefined;
            let descNA = desc.toString();

            loadWorkoutThenPopulate(typeNA, numNA, byNA, descNA);

            
        }
        else
            console.log(currentWorkout.date.toDateString() + " matches " + givenDate);

    }
    else
    {
        let todayString = new Date().toDateString();
        if(currentDate.toDateString() != todayString)
        {
            console.log("Updating current date!");
            setCurrentDate(new Date());
            console.log("Loading workout!")
            loadWorkout();
        }
    }


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

                {currentWorkout.activities.map((activity) => {
                    console.log("Hit activity " + activity.desc);
                    return(
                        <Text> 
                            hi i'm a workout {activity.desc};
                        </Text>
                    )
                })}

                <Link href={"./AddActivity?givenDate=" + currentDate.toDateString()}>
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