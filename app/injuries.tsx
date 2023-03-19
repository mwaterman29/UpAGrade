import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Text, View, Button } from 'react-native';
import { Link } from "expo-router";
import InjuryCard from '../components/InjuryCard';

export default function Injuries() {
    return (
        <View className="flex-1 items-center justify-center ug-black">
            <InjuryCard Title={'Arm'} />
            <InjuryCard Title={'Back'}/>
        </View>
    );
}