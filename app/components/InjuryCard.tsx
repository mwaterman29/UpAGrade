import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Text, View, Button, Pressable } from 'react-native';
import { Link, useRouter } from "expo-router";

// typescript typing for props
type Props = {
    Title: String,
}

// Injury card component
function InjuryCard({Title}: Props) {
    const router = useRouter(); // router hook for navigation

    // holds the UI for a Injury card
    return (
        <View className='w-auto mb-5 mx-2'>
            <Pressable className="w-full rounded-full h-[100px] justify-center bg-ug-light-gray" onPress={() => router.push({pathname: '/screens/SubInjuries', params: {SubInjuries: Title}})}>
                <Text className="text-center text-2xl font-bold">{Title}</Text>
            </Pressable>
        </View>
    );
}


export default InjuryCard