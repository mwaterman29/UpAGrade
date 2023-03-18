import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Text, View, Button } from 'react-native';
import { Link } from "expo-router";

export default function TrackClimbs() {

    return (
        <View className="flex-1 items-center justify-center bg-purple-100">
            <Text>This will be the add screen</Text>
            <StatusBar />
        </View>
    );
}