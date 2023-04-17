import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { ImageBackground, StyleSheet, Text, View, Image, Pressable, StyleProp, ViewStyle } from 'react-native';
import { Link, useRouter } from "expo-router";
import ScreenLayout from './components/ScreenLayout';

export default function App() {
  const Router = useRouter()

  const image = require('../assets/bg.jpg');

  return (
    <View className='bg-el-cap h-full flex flex-col'>
      <View className='flex basis-[90%]'>
      <ImageBackground source={image} className='h-full w-full'>
      <View className='bg-ug-white opacity-50 absolute bottom-0 left-0 w-full h-full'>
      </View>
      <Text className='text-center text-4xl font-bold mt-16 mb-3 opacity-100'>Home</Text>
      <View className="flex-1 rounded justify-center h-full py-3">
        <View className="flex flex-row justify-evenly flex-wrap">
          <Pressable onPress={() => Router.replace('/screens/TrackWorkouts')}>
            <View className="w-[130px] m-6 rounded-lg justify-center h-[130px] bg-ug-dark-green">
              <Text className='font-bold text-xl text-center text-ug-white'>Track Workouts</Text>
            </View>
          </Pressable>
          <Pressable onPress={() => Router.replace('/screens/AddWorkout')}>
            <View className="w-[130px] m-6 rounded-lg justify-center h-[130px] bg-ug-dark-green">
              <Text className='font-bold text-xl text-center text-ug-white'>Add Workout Activities</Text>
            </View>
          </Pressable>
          <Pressable onPress={() => Router.replace('/screens/StrengthAssessmentInfo')}>
            <View className="w-[130px] m-6 rounded-lg justify-center h-[130px] bg-ug-dark-green">
              <Text className='font-bold text-xl text-center text-ug-white'>Strength Assessment</Text>
            </View>
          </Pressable>  
          <Pressable onPress={() => Router.replace('/screens/Climbs')}>
            <View className="w-[130px] m-6 rounded-lg justify-center h-[130px] bg-ug-dark-green">
              <Text className='font-bold text-xl text-center text-ug-white'>Climbs</Text>
            </View>
          </Pressable>
          <Pressable onPress={() => Router.replace('/screens/Injuries')}>
            <View className="w-[130px] m-6 rounded-lg justify-center h-[130px] bg-ug-dark-green">
              <Text className='font-bold text-xl text-center text-ug-white'>Injuries</Text>
            </View>
          </Pressable>
          <Pressable onPress={() => Router.replace('/screens/NotesScreen')}>
            <View className="w-[130px] m-6 rounded-lg justify-center h-[130px] bg-ug-dark-green">
              <Text className='font-bold text-xl text-center text-ug-white'>Journal</Text>
            </View>
          </Pressable>
        </View>
      </View>

      </ImageBackground>
        
      </View>
      <View className='flex basis-[10%]'>
        <Pressable onPress={() => Router.replace('/screens/Information')}>
            <View className="flex h-full w-full bg-ug-dark-green items-center justify-center">
              <Text className='flex font-bold text-xl text-center text-ug-white'>Need help? Click here.</Text>
            </View>
          </Pressable>
      </View>
      
      
    </View >
  );

}

