import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Text, View, Button, Pressable } from 'react-native';
import { Link, useRouter } from "expo-router";



type Props = {
    Title: String,
}

function InjuryCard({Title}: Props) {
    const router = useRouter();

    return (
        <View className='ug-black'>
            <Pressable className="" onPress={() => router.replace('/climbs')}>
                <Text >{Title}</Text>
            </Pressable>
        </View>
    );
}


export default InjuryCard