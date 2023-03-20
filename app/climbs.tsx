import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Text, View, Button } from 'react-native';
import { Link } from "expo-router";

export default function TrackClimbs() {
    /*
        I want to load all of the data from the data base into objects and store them into a list.
        Then I want to generate each item with an onpress listener that redirects you to the page to
        generate the climb you added. I want to give each component an id that allows it to be quickly
        accessed from the database when it's loaded
    */


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