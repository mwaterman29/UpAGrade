import { StatusBar } from 'expo-status-bar';
import React, { useEffect, useState } from 'react';
import { Text, View, Button, ScrollView } from 'react-native';
import { Link, useSearchParams } from "expo-router";
import storage from './storage'

type climbNode = {
    [key: string]: string
}

export default function ViewClimb() {
    const Params = useSearchParams()
    const [climbInfo, setClimbInfo] = useState({})

    const climbID: string = Params.climbid?.toString()!

    useEffect(() => {
        storage.load({
            key: 'climbs',
            id: climbID
        }).then(ret => {
            setClimbInfo(ret)
        })
    }, [])
    
   const climbInformation: climbNode = climbInfo

    return (
        <View className="flex-1 h-full bg-ug-white">
            <Text className='text-center text-4xl font-bold mt-16 mb-3'>View Climb</Text>
            <ScrollView>
                <Text className="text-center text-2xl font-bold">Date: {climbInformation.Date}</Text>
                <Text className="text-center text-2xl font-bold">Grade: V{climbInformation.Grade}</Text> 
                <Text className="text-center text-2xl font-bold">Description: {climbInformation.Description}</Text> 
                <Text className="text-center text-2xl font-bold">Location: {climbInformation.Location}</Text> 
            </ScrollView>
        </View>
    );
}