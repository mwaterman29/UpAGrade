import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Text, View, Image, Pressable } from 'react-native';
import { Link, useRouter } from "expo-router";
import ScreenLayout from '../components/ScreenLayout';

export default function App() {
  const Router = useRouter()

  return (
    <View className='bg-ug-light-gray h-full'>
      <Text className='text-center text-4xl font-bold mt-16 mb-3'>Home</Text>
      <View className="flex-1 rounded justify-center h-full py-3 bg-ug-light-gray">
        <View className="flex flex-row justify-evenly flex-wrap bg-ug-light-gray">
          <Pressable onPress={() => Router.replace('./screens/TrackWorkouts')}>
            <View className="w-[130px] m-6 rounded-lg justify-center h-[130px] bg-ug-dark-green">
              <Text className='font-bold text-xl text-center text-ug-white'>Workouts</Text>
            </View>
          </Pressable>
          <Pressable onPress={() => Router.replace('./screens/AddWorkout')}>
            <View className="w-[130px] m-6 rounded-lg justify-center h-[130px] bg-ug-dark-green">
              <Text className='font-bold text-xl text-center text-ug-white'>Add Workout Activities</Text>
            </View>
          </Pressable>
          <Pressable onPress={() => Router.replace('./screens/StrengthAssessmentInfo')}>
            <View className="w-[130px] m-6 rounded-lg justify-center h-[130px] bg-ug-dark-green">
              <Text className='font-bold text-xl text-center text-ug-white'>Strength Assessment</Text>
            </View>
          </Pressable>  
          <Pressable onPress={() => Router.replace('/climbs')}>
            <View className="w-[130px] m-6 rounded-lg justify-center h-[130px] bg-ug-dark-green">
              <Text className='font-bold text-xl text-center text-ug-white'>Climbs</Text>
            </View>
          </Pressable>
          <Pressable onPress={() => Router.replace('/injuries')}>
            <View className="w-[130px] m-6 rounded-lg justify-center h-[130px] bg-ug-dark-green">
              <Text className='font-bold text-xl text-center text-ug-white'>Injuries</Text>
            </View>
          </Pressable>
          <Pressable onPress={() => Router.replace('./screens/NotesScreen')}>
            <View className="w-[130px] m-6 rounded-lg justify-center h-[130px] bg-ug-dark-green">
              <Text className='font-bold text-xl text-center text-ug-white'>Notes</Text>
            </View>
          </Pressable>
        </View>
      </View>
    </View >
  );
}