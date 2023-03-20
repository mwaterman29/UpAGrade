import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Text, View, Button, Pressable } from 'react-native';
import { Link, useRouter } from "expo-router";

type Props = {
    date: string,
    grade: string,
}

function ClimbSquare({date, grade}: Props) {
    const router = useRouter();

    return (
        <View className='w-auto mb-5 mx-2'>
            <Pressable className="w-[100px] rounded h-[100px] justify-center bg-ug-light-gray" onPress={() => router.push({pathname: '/viewClimb', params: {}})}>
                <Text className="text-center text-2xl font-bold">{date}</Text>
                <Text className="text-center text-2xl font-bold">{grade}</Text>
            </Pressable>
        </View>
    );
}


export default ClimbSquare