import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Text, View, Button, TextInput } from 'react-native';
import { Link } from "expo-router";

export default function TrackClimbs() {

    return (
        <View className="flex-1 items-center justify-center bg-purple-100">
            <Text className='text-center text-4xl font-bold mt-16 mb-3'>Add Climb</Text>
            
            
            <TextInput />
            <TextInput />

        </View>
    );
}