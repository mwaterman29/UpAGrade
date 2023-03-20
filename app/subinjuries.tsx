import { StatusBar } from 'expo-status-bar';
import React, { Key } from 'react';
import { Text, View, ScrollView, FlatList, Button} from 'react-native';
import { useLocalSearchParams, useRouter } from "expo-router";
<<<<<<< Updated upstream
=======
import SubInjuryCard from './components/SubInjuryCard';
import { PropertyName } from 'typescript';
>>>>>>> Stashed changes

export default function SubInjuries() {
    const Params = useLocalSearchParams()
    const router = useRouter()

    interface SubInjuriesData {
        [key: string]: { Title: string, Url: string, id: string }[];
    }

    const linksJSON: SubInjuriesData = 
    {
        'Arm': [
            {Title: 'TestTitle', Url: "https://www.youtube.com/", id: 'first'},
            {Title: 'TestTitle2', Url: "https://www.youtube.com/", id: 'second2'}
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
    const index: string = Params.SubInjuries?.toString()!

    //sets the array data for the FlatList
    const Data = linksJSON[index]
   
    //Renders the FlatList of sub-injuries for the specific sub-injury
    return (
        <View className='mt-20'>
            <FlatList data={Data} renderItem={ ({ item }) => <Button title={item.Title} onPress={() => router.replace(item.Url)}/>} keyExtractor={item => item.id}/>
        </View>
    );
}