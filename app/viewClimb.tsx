import { StatusBar } from 'expo-status-bar';
import React, { useEffect, useState } from 'react';
import { Text, View, Button, ScrollView } from 'react-native';
import { Link, useSearchParams } from "expo-router";
import storage from './storage'

export default function ViewClimb() {
    const Params = useSearchParams()
    const [climbInfo, setClimbInfo] = useState({})

    const climbID: string = Params.climbid?.toString()!

    useEffect(() => {
        storage.load({
            key: 'climbs',
            id: climbID
        }).then(ret => {
            console.log(ret);
            setClimbInfo(ret)
        })
    }, [])
    
   

    return (
        <View className="flex-1 h-full bg-ug-white">
            <Text className='text-center text-4xl font-bold mt-16 mb-3'>View Climb</Text>
            <ScrollView>
                <Text className="text-center text-2xl font-bold">{climbInfo.Date}</Text>
                <Text className="text-center text-2xl font-bold">{climbInfo.Description}</Text> 
                <Text className="text-center text-2xl font-bold">{climbInfo.Location}</Text> 
            </ScrollView>
        </View>
    );
}