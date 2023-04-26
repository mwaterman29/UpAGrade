import { StatusBar } from 'expo-status-bar';
import React, { useEffect, useState } from 'react';
import { Text, View, Button, ScrollView } from 'react-native';
import { Link, useSearchParams } from "expo-router";
import storage from '../storage'
import ScreenLayout from '../components/ScreenLayout';

//typescript typing for climb node
type climbNode = {
    [key: string]: string
}

//component for viewing a climb from the climb tracking page
export default function ViewClimb() {
    const Params = useSearchParams() //Parameters sent through navigation
    const [climbInfo, setClimbInfo] = useState({}) // holds the data loaded from storage holding the climbs properties

    const climbID: string = Params.climbid?.toString()! //conversion for typescript

    // Loads the data from storage that corresponds to the climbID of the selected climb
    useEffect(() => {
        storage.load({
            key: 'climbs',
            id: climbID
        }).then(ret => {
            setClimbInfo(ret)
        })
    }, [])
    
   const climbInformation: climbNode = climbInfo //typescript conversion do give the data node a datatype 

   //screen that takes the data loaded from the storage and displays it to the screen in a structured format
    return (
        <ScreenLayout>
            <Text className='text-center text-4xl font-bold mt-16 mb-3 text-ug-white underline'>Climb Info</Text>
            <View className="flex-1 rounded h-full bg-ug-white">
                <ScrollView>
                <Text className="text-center py-4 text-2xl font-bold">Location: {climbInformation.Location}</Text> 
                    <Text className="text-center py-4 text-2xl font-bold">Date: {climbInformation.Date}</Text>
                    <Text className="text-center py-4 text-2xl font-bold">Grade: V{climbInformation.Grade}</Text> 
                    <Text className="text-center py-4 text-2xl font-bold">Description: {climbInformation.Description}</Text> 
                </ScrollView>
            </View>
        </ScreenLayout>
    );
}