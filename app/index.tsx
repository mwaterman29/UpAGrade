import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Text, View } from 'react-native';
import { Link } from "expo-router";

import ScreenLayout from './components/ScreenLayout';
import WorkoutInput from './components/WorkoutInput';

export default function App() {
  return (
    <ScreenLayout>
      <Text>test test 2</Text>
      <Link href="./screens/StrengthAssessmentInfo">
        <Text className='text-ug-green'>Strength Assessment</Text>
      </Link>
      <Link href="./screens/AddActivity">
        <Text className='text-ug-green'>Add Activity</Text>
      </Link>
      <WorkoutInput />
    </ScreenLayout>
  );
}