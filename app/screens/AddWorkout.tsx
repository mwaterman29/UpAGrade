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

      const saveWorkout = async () => {
        try {
          await storage.save({
            key: 'workouts',
            id: currentWorkout.date.toDateString(),
            data: {
              date: currentWorkout.date,
              activities: currentWorkout.activities
            },
          });
          console.log('Workout saved successfully!');
        } catch (err) {
          console.log('Error saving workout:', err);
        }
      };

    useEffect(() => {
      const today = new Date();
      loadWorkout(today);
    }, []);
      
  
    useEffect(() => {
      if (givenDate) {
        const date = new Date(givenDate.toString());
        loadWorkout(date);
      }
    }, [givenDate]);

    const [removed, setRemoved] = useState(false);

    function removeActivity(activity : Activity)
    {
      const index = currentWorkout.activities.indexOf(activity, 0);
      if (index > -1) {
        currentWorkout.activities.splice(index, 1);
      }
      saveWorkout();
      setRemoved(!removed);
/*
      useEffect(() => {
        
      }, [currentWorkout]);*/
    }

    return(
        <ScreenLayout>
            <View className ='flex flex-col h-full justify-evenly items-center'>
                <View>
                  <Text className="text-2xl text-ug-white underline text-center">Add to your workout for {currentWorkout.date.toDateString()}</Text>
                  <Button title="Change Date" onPress={showDatePicker} />
                  <DateTimePickerModal
                      isVisible={isDatePickerVisible}
                      mode="date"
                      onConfirm={handleConfirm}
                      onCancel={hideDatePicker}
                  />
                </View>
                
                <View>
                  {currentWorkout.activities.map((activity) => {
                      //console.log("Hit activity " + activity.desc);
                      return(
                        <View className="my-2" key={"k_"+activity.desc}>
                          <ActivityComponent  activity = {activity} removeFunction = {removeActivity} />
                        </View>
                      )
                  })}
                </View>

                {currentWorkout.activities.length == 0 &&
                <Text className="text-ug-white text-xl text-centered bg-ug-gray p-2 rounded-lg">You have no activities planned for this day. When you add some, they'll show up here.
                </Text>}

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
