import { StatusBar } from 'expo-status-bar';
import React, { SetStateAction, useEffect, useState } from 'react';
import { Text, View, Button, FlatList } from 'react-native';
import { Link } from "expo-router";
import ClimbSquare from '../components/climbSquare';
import ScreenLayout from '../components/ScreenLayout';
import storage from '../storage';

//component for climb tracking page
export default function TrackClimbs() {
    
    const [climbData, setClimbData] = useState([]) // state to hold all of the climbs from the database in an array
    const [removed, setRemoved] = useState(false) // a boolean to switch when an item is removed so that it triggers a rerender

    // Loads data on first page load and whenever a item is removed
    useEffect(() => {
        storage.getAllDataForKey('climbs')
        .then((climbsInfo: any) => {
            climbsInfo.reverse()
            setClimbData(climbsInfo);
        }
    );}, [removed])

    // function to be called when a node is removed
    function removeNode(){
        const opposite = !removed 
        setRemoved(opposite)
    }

    //typescript type for a climb squares
    interface climbNode {
        item: {Grade: string, Description: string, Location: string, Date: string, climbid: string}
    }
    
    const columns: number = 3; // a value holding the number of columns
    
    //UI for the climbs page that takes the data and generates it into a grid
    return (
        <ScreenLayout>
            <Text className='text-center text-4xl font-bold mt-16 mb-3 text-ug-white underline'>Climbs</Text>
            <View className="flex-1 rounded items-center justify-center bg-ug-white pt-3">
                <FlatList data={climbData} renderItem={({ item }: climbNode) => <ClimbSquare date={item.Date} Grade={item.Grade} climbid={item.climbid} removedFunction={removeNode}/>} keyExtractor={item => item.climbid} numColumns={columns}/>
                <Link className="rounded-full absolute bottom-10 right-10 text-ug-white text-[20px] bg-ug-black p-5 px-7" href="/screens/AddClimb">
                    <Text>
                        +
                    </Text>
                </Link>
                <StatusBar />
            </View>
        </ScreenLayout>
    );
}