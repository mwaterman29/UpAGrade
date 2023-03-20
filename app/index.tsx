import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Text, View } from 'react-native';
import { Link } from "expo-router";

import ScreenLayout from './components/ScreenLayout';

export default function App() {
  return (
    <ScreenLayout>
      <Text>test test 2</Text>
      <Link href="./screens/StrengthAssessmentInfo">
        <Text className='text-ug-green'>Strength Assessment</Text>
      </Link>
    </ScreenLayout>
  );
}