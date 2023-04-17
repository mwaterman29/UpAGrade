import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Text, View, Button, ScrollView } from 'react-native';
import { Link } from "expo-router";
import InjuryCard from '../components/InjuryCard';
import ScreenLayout from '../components/ScreenLayout';

import storage from '.././storage';
import AsyncStorage from "@react-native-async-storage/async-storage";

export default function Injuries() {
    return (
        <ScreenLayout>
            <View className='flex flex-col justify-between items-centered rounded h-full w-full p-3'>
            <Text className='text-center text-4xl font-bold mt-16 mb-3 text-ug-white underline'>Information</Text>
            <Text>UpAGrade Version 1.0.0a</Text>
            <Text>This app has 6 Major Functionalities:</Text>
            <View>
                <Text>1. Planning Workouts - You can add workout activities of all different types.</Text>
                <Text>2. Tracking Workouts - You can review your daily workouts and check off your activities.</Text>
                <Text>3. Tracking Climbs - You can log your previous climbs.</Text>
                <Text>4. Injuries - You can find resources on different types of injuries, how they're caused, and how to recover from them.</Text>
                <Text>5. Strength Assessment - You can take a strength assessment test to learn about how strong you are, then get Recommendations on how to improve.</Text>
                <Text>6. Journaling - You can use this app to record notes or to reflect on your sessions and training.</Text>
            </View>
            <Text>Additionally, if you'd like to clear your information, you can do so here.</Text>
            <Button
                    onPress={() => {
                        storage.clearMap();
                    }}
                    title = "Clear Storage"
                />
            </View>

        </ScreenLayout>
    );
}