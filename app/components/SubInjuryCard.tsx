import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Text, View, Button, Pressable } from 'react-native';
import { Link, useRouter } from "expo-router";

// typescript typing for props
type Props = {
    Title: string,
    Url: string,
}

// subinjury card component
function SubInjuryCard({Title, Url}: Props) {
    const router = useRouter(); // router hook for navigation

    // Holds the UI for a subinjury card on the subinjury page
    return (
        <View className='w-auto mb-5 mx-2'>
            <Pressable className="w-full rounded-full h-[50px] justify-center bg-ug-light-gray" onPress={() => router.replace(Url)}>
                <Text className="text-center text-2xl font-bold">{Title}</Text>
            </Pressable>
        </View>
    );
}


export default SubInjuryCard