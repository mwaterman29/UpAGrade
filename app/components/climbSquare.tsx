import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Text, View, Button, Pressable } from 'react-native';
import { Link, useRouter } from "expo-router";
import storage from '../storage';

type Props = {
    date: string,
    Grade: string,
    climbid: string
}

function ClimbSquare({date, Grade, climbid}: Props) {
    const router = useRouter();

    function deleteClimb(){
        storage.remove({
            key: 'climbs',
            id: climbid
        });
        console.log('removed')
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