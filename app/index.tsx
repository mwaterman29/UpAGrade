import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Text, View } from 'react-native';
import { Link } from "expo-router";

export default function App() {
  return (
    <View className="flex-1 items-center justify-center bg-red-100">
      <Text>Open up App.js to start working on your app!</Text>
      <Link href="/page2">
        <Text className='text-purple-500'>
          test page 2
        </Text>
      </Link>
      <StatusBar style="auto" />
    </View>
  );
}