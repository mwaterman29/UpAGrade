import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Text, View, Button, FlatList } from 'react-native';
import { Link } from "expo-router";
import ClimbSquare from './components/climbSquare';

export default function TrackClimbs() {
    /*
        I want to load all of the data from the data base into objects and store them into a list.
        Then I want to generate each item with an onpress listener that redirects you to the page to
        generate the climb you added. I want to give each component an id that allows it to be quickly
        accessed from the database when it's loaded
    */


    const DATA = [
        {
            date: '01-12-23', grade: 'V1', id:'sdfasd'
        },
        {
            date: '04-20-23', grade: 'V3',id: 'sdaf'
        },
        {
            date: '06-5-23', grade: 'V2',id: 'sasgdf'
        },
        {
            date: '12-25-23', grade: 'V8' ,id: 'sassdgdf'
        }
    ]

    const columns: number = 3;

    return (
        <View className="flex-1 items-center justify-center bg-purple-100">
            <Text className='text-center text-4xl font-bold mt-16 mb-3'>Climbs</Text>
            <FlatList data={DATA} renderItem={({ item }) => <ClimbSquare date={item.date} grade={item.grade}/>} keyExtractor={item => item.id} numColumns={columns}/>
            <Link className="rounded-full absolute bottom-10 right-10 text-ug-white text-[20px] bg-ug-black p-5 px-7" href="/addclimb">
                <Text>
                    +
                </Text>
            </Link>
            <StatusBar />
        </View>
    );
}