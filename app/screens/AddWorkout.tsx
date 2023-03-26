import ScreenLayout from "../components/ScreenLayout";
import React, {ReactNode, useState, useEffect} from 'react';
import { Button, Text, View, TextInput, Keyboard} from 'react-native';
import { Link, useSearchParams, useRouter, usePathname } from "expo-router";
import DateTimePickerModal from "react-native-modal-datetime-picker";

import { Activity } from "./AddActivity";

import uid from '.././uid';
import storage from '.././storage';
import AsyncStorage from "@react-native-async-storage/async-storage";
import ActivityComponent from "../components/ActivityComponent";

type Workout = {
    date: Date,
    activities: Array<Activity>
}

export type {Workout}

const AddWorkout = () => {

    const { givenDate } = useSearchParams();

    let [currentWorkout, setCurrentWorkout] = useState<Workout>({
      date: new Date(),
      activities: [],
    });
  
    const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
  
    const showDatePicker = () => {
      setDatePickerVisibility(true);
    };
  
    const hideDatePicker = () => {
      setDatePickerVisibility(false);
    };
  
    const handleConfirm = (date: Date) => {
      loadWorkout(date);
      hideDatePicker();
    };

    const loadWorkout = async (date: Date) => {
        //console.log("loading from " + date.toDateString());
        try {
          const ret = await storage.load({
            key: 'workouts',
            id: date.toDateString(),
          });
          //console.log("ret is " + ret + "l: " + ret.activities + " d" + ret.date + " and scw " + setCurrentWorkout);
          setCurrentWorkout({
            date: date,
            activities: ret.activities
          });
        } catch (err) {
          //console.log('Error loading workout:', err);
          setCurrentWorkout({
            date: date,
            activities: [],
          });
        }
      };
  
    useEffect(() => {
      if (givenDate) {
        const date = new Date(givenDate.toString());
        loadWorkout(date);
      }
    }, [givenDate]);

    return(
        <ScreenLayout>
            <View className ='flex flex-col h-full justify-evenly items-center'>
                <Button
                    onPress={() => {
                        AsyncStorage.clear();
                    }}
                    title = "clear str"
                />

                <Text>Workout for {currentWorkout.date.toDateString()}</Text>
                <Button title="Show Date Picker" onPress={showDatePicker} />
                <DateTimePickerModal
                    isVisible={isDatePickerVisible}
                    mode="date"
                    onConfirm={handleConfirm}
                    onCancel={hideDatePicker}
                />
                <View>
                  {currentWorkout.activities.map((activity) => {
                      //console.log("Hit activity " + activity.desc);
                      return(
                        <ActivityComponent key={"k_"+activity.desc} activity = {activity} />
                      )
                  })}
                </View>

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
