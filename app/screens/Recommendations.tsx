import { StatusBar } from 'expo-status-bar';
import React, { SetStateAction, useEffect, useState } from 'react';
import { Text, View, Button, FlatList } from 'react-native';
import { Link, useSearchParams } from "expo-router";
import ClimbSquare from '../components/climbSquare';
import ScreenLayout from '../components/ScreenLayout';
import storage from '../storage';
import { Int32 } from 'react-native/Libraries/Types/CodegenTypes';

export default function Recommendations() {
    const [climbGrade, setClimbGrade] = useState(0)
    const Params = useSearchParams()

    const score = Number(Params.gradeScore)
    let scoreVGrade: number = 0

    switch(true){
        case (score <= 4):
            scoreVGrade = 3
            break;
        case (score <= 5):
            scoreVGrade = 4
            break;
        case (score <= 8):
            scoreVGrade = 5
            break;
        case (score <= 12):
            scoreVGrade = 6
            break;
        case (score <= 14):
            scoreVGrade = 7
            break;
        case (score <= 16):
            scoreVGrade = 8
            break;
        case (score <= 18):
            scoreVGrade = 9
            break;
        case (score <= 20):
            scoreVGrade = 10
            break;
        case (score <= 22):
            scoreVGrade = 11
            break;
        case (score <= 24):
            scoreVGrade = 12
            break;
        case (score <= 26):
            scoreVGrade = 13
            break;
        case (score <= 28):
            scoreVGrade = 14
            break;
        case (score <= 30):
            scoreVGrade = 15
            break;
        case (score <= 32):
            scoreVGrade = 16
            break;
        case (score >= 33):
            scoreVGrade = 17
            break;
        default:            
            break;
    }

    interface climbNode {
        Grade: string, Description: string, Location: string, Date: string, climbid: string
    }

    useEffect(() => {
        storage.getAllDataForKey('climbs')
        .then((climbsInfo: any) => {
            
            let largestGrade: number = -1
            climbsInfo.forEach((climb: climbNode)=>{
                if (largestGrade == -1){
                    largestGrade = parseInt(climb.Grade)
                } else if (largestGrade < parseInt(climb.Grade)) {
                    largestGrade = parseInt(climb.Grade)
                }
            })
            setClimbGrade(largestGrade);
        }
    );
    }, [])
    
    if (climbGrade == -1){
        return (
            <ScreenLayout>
                <Text className='text-center text-4xl font-bold mt-16 mb-3'>Recommendations</Text>
                <Text>No climbs Input</Text>
            </ScreenLayout>
        );
    } else if (climbGrade < scoreVGrade){

        return (
            <ScreenLayout>
                <Text className='text-center text-4xl font-bold mt-16 mb-3'>Recommendations</Text>
                <Text>Recommend techinque drill</Text>
            </ScreenLayout>
        );
    } else if (climbGrade >= scoreVGrade){
        return (
            <ScreenLayout>
                <Text className='text-center text-4xl font-bold mt-16 mb-3'>Recommendations</Text>
                <Text>Recommend ways to get stronger</Text>
            </ScreenLayout>
        );
    } else {
        return (
            <ScreenLayout>
                <Text className='text-center text-4xl font-bold mt-16 mb-3'>Recommendations</Text>
                <Text>Loading</Text>
            </ScreenLayout>
        );
    }


    return (
        <ScreenLayout>
            <Text className='text-center text-4xl font-bold mt-16 mb-3'>Recommendations</Text>
            <Text>{climbGrade}</Text>
        </ScreenLayout>
    );
}