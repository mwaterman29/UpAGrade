import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Text, View, Button } from 'react-native';
import { Link } from "expo-router";

export default function TrackClimbs() {

    return (
        <View className="flex-1 items-center justify-center bg-purple-100">
            <Link className="rounded-full absolute bottom-10 right-10 text-ug-white text-[20px] bg-ug-black p-5 px-7" href="/addclimb">
                <Text>
                    +
                </Text>
            </Link>
            <StatusBar />
        </View>
    );
}