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
        loadWorkout(date);
        hideDatePicker();
    };

    const [currentWorkout, setCurrentWorkout] = useState<Workout>({        
        date: new Date("1970-01-01"),
        activities: new Array()
    })

    function loadWorkout(date: Date)
    {
        storage.load({
            key: 'workouts',
            id: date.toDateString()
        }).then(ret => { 
            //Handled
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
                    console.log(err);
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
    

    function loadWorkoutThenPopulate(date: Date, type: Number, num: String | undefined, by: String | undefined, desc: String) {
        let newActivity: Activity = {
          type: type,
          num: num,
          by: by,
          desc: desc,
          completed: false
        }
      
        // Load the workout from storage
        storage.load({
          key: 'workouts',
          id: date.toDateString()
        }).then((workout) => {
          // Append the new activity to the workout
          workout.activities.push(newActivity);
      
          // Save the updated workout back to storage
          storage.save({
            key: 'workouts',
            id: date.toDateString(),
            data: workout,
            expires: null
          }).then(() => {
            // Update the current workout in the state with the updated workout
            setCurrentWorkout(workout);
          }).catch((err) => {
            console.log(err);
          });
        }).catch((err) => {
          switch (err.name) {
            case 'NotFoundError':
              // Create a new workout object if not found in storage
              let newWorkout: Workout = {
                date: date,
                activities: [newActivity]
              };
              // Save the new workout to storage
              storage.save({
                key: 'workouts',
                id: date.toDateString(),
                data: newWorkout,
                expires: null
              }).then(() => {
                // Update the current workout in the state with the new workout
                setCurrentWorkout(newWorkout);
              }).catch((err) => {
                console.log(err);
              });
              break;
            default:
              console.log(err);
              break;
          }
        });
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
        Returns to this page with that date populated, and the contents of the activity to be added on.        */

    const [activityAdded, setActivityAdded] = useState(false);

    const Router = useRouter();
    const { givenDate, type, num, by, desc, added} = useSearchParams();
    if(givenDate && type && desc && !activityAdded)
    {
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

        let date = new Date(givenDate.toString());
        loadWorkoutThenPopulate(date, typeNA, numNA, byNA, descNA);
        setActivityAdded(true);
        //setCurrentDate(new Date(givenDate.toString()));
    }
    else if(activityAdded)
    {
        //loadWorkout();
        Router.replace("./AddWorkout?givenDate="+givenDate);
    }
    else
    {
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