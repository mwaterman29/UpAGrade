import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Text, View, Button, ScrollView } from 'react-native';
import { Link } from "expo-router";
import InjuryCard from './components/InjuryCard';

export default function ViewClimb() {
    return (
        <View className="flex-1 h-full bg-ug-white">
            <Text className='text-center text-4xl font-bold mt-16 mb-3'>View Climb</Text>
        </View>
    );
}