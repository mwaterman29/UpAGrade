import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Text, View, Button, ScrollView } from 'react-native';
import { Link } from "expo-router";
import InjuryCard from '../components/InjuryCard';
import ScreenLayout from '../components/ScreenLayout';

export default function Injuries() {
    return (
        <ScreenLayout>
            <Text className='text-center text-4xl font-bold mt-16 mb-3'>Injuries</Text>
            <View className="flex-1 rounded h-full py-3 bg-ug-white">
                <ScrollView className="flex flex-col h-full py-5 bg-ug-white">
                    <InjuryCard Title={'Arm'}/>
                    <InjuryCard Title={'Back'}/>
                    <InjuryCard Title={'Shoulder'}/>
                    <InjuryCard Title={'Wrist'}/>
                    <InjuryCard Title={'Leg'}/>
                    <InjuryCard Title={'Elbow'}/>
                    <InjuryCard Title={'Hand'}/>
                </ScrollView>
            </View>
        </ScreenLayout>
    );
}