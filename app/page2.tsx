import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Text, View } from 'react-native';

export default function Page2() {
  return (
    <View className="flex-1 items-center justify-center bg-purple-100">
      <Text>hello i am a test page :D</Text>
      <Text>This is my own test</Text>
      <StatusBar />
    </View>
  );
}