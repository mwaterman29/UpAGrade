import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { Text, View, Button, Pressable } from 'react-native';
import { Link, useRouter } from "expo-router";
import storage from '../storage';

type Props = {
    date: string,
    Grade: string,
    climbid: string,
    removedFunction: Function
}

function ClimbSquare({date, Grade, climbid, removedFunction}: Props) {
    const router = useRouter();


    function deleteClimb(){
        storage.remove({
            key: 'climbs',
            id: climbid
        });
        removedFunction()
    }

    return (
        <View className='w-auto mb-5 mx-2'>
            <Pressable className="w-[100px] rounded h-[100px] justify-center bg-ug-light-gray" onLongPress={deleteClimb} onPress={() => router.push({pathname: '/viewClimb', params: {climbid}})}>
                <Text className="text-center text-2xl font-bold">{date}</Text>
                <Text className="text-center text-2xl font-bold">V{Grade}</Text>
            </Pressable>
        </View>
    );
}


export default ClimbSquare