import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Text, View, ScrollView, FlatList, Button} from 'react-native';
import { useLocalSearchParams, useRouter } from "expo-router";

export default function SubInjuries() {
    const Params = useLocalSearchParams()
    const router = useRouter()


    const linksJSON: Object = 
    {
        'Arm': [
            {Title: 'TestTitle', Url: "https://www.youtube.com/", id: 'first'}
        ],
        'Back': [
            {Title: 'TestTitle2', Url: "https://www.youtube.com/", id: 'second'}
        ],
        'Shoulder': [
            {Title: 'TestTitle2', Url: "https://www.youtube.com/", id: 'third'}
        ],
        'Wrist': [
            {Title: 'TestTitle2', Url: "https://www.youtube.com/", id: 'fourth'}
        ],
        'Leg': [
            {Title: 'TestTitle2', Url: "https://www.youtube.com/", id: 'fifth'}
        ],
        'Elbow': [
            {Title: 'TestTitle2', Url: "https://www.youtube.com/", id: 'sixth'}
        ],
        'Hand': [
            {Title: 'TestTitle2', Url: "https://www.youtube.com/", id: 'fifth'}
        ],
    }

    //condenses the index
    const index: String = Params.SubInjuries?.toString()!

    //sets the array data for the FlatList
    const Data: any = linksJSON[index as keyof Object]
   
    //Renders the FlatList of sub-injuries for the specific sub-injury
    return (
        <View className='mt-20'>
            <FlatList data={Data} renderItem={ ({ item }) => <Button title={item.Title} onPress={() => router.replace(item.Url)}/>} keyExtractor={item => item.id}/>
        </View>
    );
}