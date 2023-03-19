import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Text, View, Button, ScrollView } from 'react-native';
import { Link } from "expo-router";
import InjuryCard from './components/InjuryCard';

export default function Injuries() {



    return (
        <View className="flex-1 h-full bg-ug-white">
            <ScrollView className="flex flex-col h-full py-5 mt-16 bg-ug-white">
                <InjuryCard Title={'Arm'}/>
                <InjuryCard Title={'Back'}/>
                <InjuryCard Title={'Shoulder'}/>
                <InjuryCard Title={'Wrist'}/>
                <InjuryCard Title={'Leg'}/>
                <InjuryCard Title={'Elbow'}/>
                <InjuryCard Title={'Hand'}/>
            </ScrollView>
        </View>
    );
}