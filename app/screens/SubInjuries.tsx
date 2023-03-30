import { StatusBar } from 'expo-status-bar';
import React, { Key } from 'react';
import { Text, View, ScrollView, FlatList, Button} from 'react-native';
import { useLocalSearchParams, useRouter } from "expo-router";
import SubInjuryCard from '../components/SubInjuryCard';
import { PropertyName } from 'typescript';
import ScreenLayout from '../components/ScreenLayout';

export default function SubInjuries() {
    const Params = useLocalSearchParams()
    const router = useRouter()

    interface SubInjuriesData {
        [key: string]: { Title: string, Url: string, id: string }[];
    }

    const linksJSON: SubInjuriesData = 
    {
        'Arm': [
            {Title: 'FDP', Url: "https://www.youtube.com/watch?v=ub_ttbKcGvc", id: 'fdp'},
            {Title: 'Proximal Bicep Pain', Url: "https://youtu.be/CDZxdrG7Na8", id: 'pbp'},
            {Title: 'Distal Bicep Pain', Url: "https://youtu.be/C9xpB-qlpYw", id: 'dbp'}
        ],
        'Back': [
            {Title: 'Scapular Dyskenisis', Url: "https://youtu.be/s_RlOd6Xu3Y", id: 'sd'},
            {Title: 'Trap Engagement', Url: "https://youtu.be/-_2_1hOfL00", id: 'te'},
            {Title: 'How to Pull Up Correctly', Url: "https://youtu.be/8SsgGYOyJBY", id: 'hpuc'},
        ],
        'Shoulder': [
            {Title: 'Shoulder Impingement Syndrome', Url: "https://youtu.be/E4xnKZXynkY", id: 'sis'},
            {Title: 'Shoulder Warm Up For Injury Prevention', Url: "https://youtu.be/W-N2Vp_7obs", id: 'swuip'},
            {Title: 'Shoulder Workout Plan', Url: "https://youtu.be/CMU1beXJv1c", id: 'swp'},
        ],
        'Wrist': [            
            {Title: 'Beginner Wrist Training Plan', Url: "https://youtu.be/03-Le-fMba8", id: 'bwtp'},
            {Title: 'Advanced Wrist Training Plan', Url: "https://youtu.be/W-N2Vp_7obs", id: 'awtp'},
            {Title: 'TFCC Injury', Url: "https://www.youtube.com/watch?v=Q0H_HJcM1zQ ", id: 'tfcci'},
        ],
        'Leg': [
            {Title: 'Knee Pain', Url: "https://youtu.be/DGlYW2gRjl8", id: 'kp'},
            {Title: 'Ankle Pain', Url: "https://youtu.be/Ci1E4Enm3_o", id: 'ap'},
            {Title: 'Hamstring Info', Url: "https://youtu.be/wmeas5-mrFw", id: 'hi'},
        ],
        'Elbow': [
            {Title: 'Tennis Elbow', Url: "https://youtu.be/gf4dcg2i2HU", id: 'te'},
            {Title: 'Golfers Elbow', Url: "https://youtu.be/vaLFC1pG_OI", id: 'ge'},
        ],
        'Hand': [
            {Title: 'A2 Pulley', Url: "https://www.youtube.com/watch?v=_AxN5HyBLfM", id: 'a2p'},
            {Title: 'Lumbricals', Url: "https://www.youtube.com/watch?v=lKuidJ9QTMU", id: 'lumbr'},
            {Title: 'Trigger Finger Syndrome', Url: "https://www.youtube.com/watch?v=bRgTLZQBSQA", id: 'tfs'},
        ],
    }

    //condenses the index
    const index: string = Params.SubInjuries?.toString()!

    //sets the array data for the FlatList
    const Data = linksJSON[index]
   
    //Renders the FlatList of sub-injuries for the specific sub-injury
    return (
        <ScreenLayout>
            <Text className='text-center text-4xl font-bold mt-16 mb-3'>Sub-injuries</Text>
            <View className='flex-1 rounded h-full py-3 bg-ug-white'>
                <FlatList data={Data} renderItem={ ({ item }) => <SubInjuryCard Title={item.Title} Url={item.Url}/>} keyExtractor={item => item.id}/>
            </View>
        </ScreenLayout>
    );
}