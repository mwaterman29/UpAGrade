import { StatusBar } from 'expo-status-bar';
import React, { SetStateAction, useEffect, useState } from 'react';
import { Text, View, Button, FlatList } from 'react-native';
import { Link } from "expo-router";
import ClimbSquare from './components/climbSquare';
import ScreenLayout from './components/ScreenLayout';
import storage from './storage';

export default function TrackClimbs() {
    /*
        I want to load all of the data from the data base into objects and store them into a list.
        Then I want to generate each item with an onpress listener that redirects you to the page to
        generate the climb you added. I want to give each component an id that allows it to be quickly
        accessed from the database when it's loaded
    */
    const [climbData, setClimbData] = useState([])
    const [removed, setRemoved] = useState(false)

    useEffect(() => {
        storage.getAllDataForKey('climbs')
        .then((climbsInfo: any) => {
            setClimbData(climbsInfo);
        }
    );}, [])

    interface climbNode {
        item: {Grade: string, Description: string, Location: string, Date: string, climbid: string}
    }
    
    const columns: number = 3;
    
    return (
        <ScreenLayout>
            <Text className='text-center text-4xl font-bold mt-16 mb-3'>Climbs</Text>
            <View className="flex-1 rounded items-center justify-center bg-ug-white pt-3">
                <FlatList data={climbData} renderItem={({ item }: climbNode) => <ClimbSquare date={item.Date} Grade={item.Grade} climbid={item.climbid} removedFunction={setRemoved}/>} keyExtractor={item => item.climbid} numColumns={columns}/>
                <Link className="rounded-full absolute bottom-10 right-10 text-ug-white text-[20px] bg-ug-black p-5 px-7" href="/addclimb">
                    <Text>
                        +
                    </Text>
                </Link>
                <StatusBar />
            </View>
        </ScreenLayout>
    );
}