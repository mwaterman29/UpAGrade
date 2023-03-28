import { StatusBar } from 'expo-status-bar';
import React, { SetStateAction, useEffect, useState } from 'react';
import { Text, View, Button, FlatList } from 'react-native';
import { Link } from "expo-router";
import ClimbSquare from '../components/climbSquare';
import ScreenLayout from '../components/ScreenLayout';
import storage from '../storage';

export default function TrackClimbs() {
    /*
        I want to sort all of the data first by last added then I want to organize by grade 
        of the climb
    */
    const [climbData, setClimbData] = useState([])
    const [removed, setRemoved] = useState(false)

    useEffect(() => {
        storage.getAllDataForKey('climbs')
        .then((climbsInfo: any) => {
            climbsInfo.reverse()
            setClimbData(climbsInfo);
        }
    );}, [removed])

    function removeNode(){
        const opposite = !removed 
        setRemoved(opposite)
    }

    interface climbNode {
        item: {Grade: string, Description: string, Location: string, Date: string, climbid: string}
    }
    
    const columns: number = 3;
    
    return (
        <ScreenLayout>
            <Text className='text-center text-4xl font-bold mt-16 mb-3'>Climbs</Text>
            <View className="flex-1 rounded items-center justify-center bg-ug-white pt-3">
                <FlatList data={climbData} renderItem={({ item }: climbNode) => <ClimbSquare date={item.Date} Grade={item.Grade} climbid={item.climbid} removedFunction={removeNode}/>} keyExtractor={item => item.climbid} numColumns={columns}/>
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