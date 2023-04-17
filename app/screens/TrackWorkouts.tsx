import ScreenLayout from "../components/ScreenLayout";
import React, {ReactNode, useState, useEffect} from 'react';
import { Button, Text, View, TextInput, Keyboard, TouchableOpacity} from 'react-native';
import { Link, useSearchParams, useRouter, usePathname } from "expo-router";
import DateTimePickerModal from "react-native-modal-datetime-picker";

import { Activity } from "./AddActivity";
import { Workout } from "./AddWorkout";

import storage from '.././storage';
import ActivityComponent from "../components/ActivityComponent";

const WorkoutScreen = () => {
  const [currentWorkout, setCurrentWorkout] = useState<Workout>({
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
    try {
      const ret = await storage.load({
        key: 'workouts',
        id: date.toDateString(),
      });
      setCurrentWorkout({
        date: date,
        activities: ret.activities
      });
    } catch (err) {
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

  const onDateChange = (newDate: Date) => {
    loadWorkout(newDate);
  };

  const toggleActivity = (index: number) => {
    const newActivities = [...currentWorkout.activities];
    newActivities[index].completed = !newActivities[index].completed;
    setCurrentWorkout({
      ...currentWorkout,
      activities: newActivities,
    });
  };

  //const [init, setInit] = useState(false);
  useEffect(() => {
    const today = new Date();
    loadWorkout(today);
  }, []);
  

  return (
    
    <ScreenLayout>
        <View className="flex flex-col h-full justify-evenly items-center">
            <Button title="Change Date" onPress={showDatePicker} />
            <Text className="text-ug-white underline text-2xl">Workout for {currentWorkout.date.toDateString()}</Text>
            <DateTimePickerModal
                isVisible={isDatePickerVisible}
                mode="date"
                onConfirm={handleConfirm}
                onCancel={hideDatePicker}
            />
            <View className="flex">
                {currentWorkout.activities.map((activity, index) => (
                    <View className="outline-2 outline-double" key={index}>
                        <TouchableOpacity onPress={() => toggleActivity(index)} >
                            <ActivityComponent activity={activity}/>
                            {activity.completed ? 
                            <Text className="w-full text-md text-ug-green">Completed</Text> : 
                            <Text className="w-full text-md text-ug-light-blue">Not Yet Completed</Text>}
                        </TouchableOpacity>
                    </View>
                
                ))}
            </View>

            {currentWorkout.activities.length == 0 && 
            <View className="flex w-full items-center justify-center">
              <Text className="text-ug-white text-xl text-centered bg-ug-gray p-2 mb-4 rounded-lg">You have no workout activities planned for today.</Text>
              <Link href={'./AddWorkout?givenDate=' + currentWorkout.date.toDateString()}>
                <View className="bg-ug-dark-green p-2 m-2">
                  <Text className="text-ug-white text-2xl">Go To Add Workout</Text>
                </View>
              </Link>
            </View>}
            {
              currentWorkout.activities.length > 0 && 
              <TouchableOpacity onPress={saveWorkout}>
              <View className="bg-ug-dark-green p-2">
                <Text className="text-ug-white text-2xl">Save Workout</Text>
              </View>
            </TouchableOpacity>
            }
            
            </View>
    </ScreenLayout>
  );
};

export default WorkoutScreen;
