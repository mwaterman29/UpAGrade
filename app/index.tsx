import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Text, View } from 'react-native';
import { Link } from "expo-router";

import ScreenLayout from './components/ScreenLayout';

export default function App() {
  return (
    <ScreenLayout >
      <Text className='mt-16'>test test 2</Text>
      <Link href="./screens/StrengthAssessmentInfo">
        <Text className='text-ug-green'>Strength Assessment</Text>
      </Link>
      <Link href="/climbs">
        <Text className='text-purple-500'>
          climbs
        </Text>
      </Link>
      <Link href="/injuries">
        <Text className='text-purple-500'>
          injuries
        </Text>
      </Link>
    </ScreenLayout>
  );
}