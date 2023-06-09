import React, { useEffect, useState } from 'react';
import { Text, View, Button } from 'react-native';
import { Link, useSearchParams } from "expo-router";
import ScreenLayout from '../components/ScreenLayout';
import storage from '../storage';

//This screen provides adaptive recommendations based on the strength results and the highest grade in the climbs.

export default function Recommendations() {
    const [climbGrade, setClimbGrade] = useState(0) //Stores largest climbing grade
    const Params = useSearchParams() //to get params

    //Strength Vars
    const score = Number(Params.gradeScore) //assures its a number
    let scoreVGrade: number = 0 //stores the V grade after conversion

    //Converts the strength score to V Grade
    switch(true){
        case (score <= 4): //V1
            scoreVGrade = 1
            break;
        case (score <= 6): //V2
            scoreVGrade = 2
            break;
        case (score <= 8): //V3
            scoreVGrade = 3
            break;
        case (score <= 10): //V4
            scoreVGrade = 4
            break;
        case (score <= 12): //V5
            scoreVGrade = 5
            break;
        case (score <= 14): //V6
            scoreVGrade = 6
            break;
        case (score <= 18): //V7
            scoreVGrade = 7
            break;
        case (score <= 20): //V8
            scoreVGrade = 8
            break;
        case (score <= 23): //V9
            scoreVGrade = 9
            break;
        case (score <= 26): //V10
            scoreVGrade = 10
            break;
        case (score <= 28): //V11
            scoreVGrade = 11
            break;
        case (score <= 30): //V12
            scoreVGrade = 12
            break;
        case (score <= 32): //V13
            scoreVGrade = 13
            break;
        case (score <= 34): //V14
            scoreVGrade = 14
            break;
        case (score <= 36): //V15
            scoreVGrade = 15
            break;
        case (score <= 38): //V16
            scoreVGrade = 16
            break;
        case (score >= 39): //V17
            scoreVGrade = 17
            break;
        default: //if NaN i guess
            break;
    }

    //datatype for data being loaded from async storage
    interface climbNode {
        Grade: string, Description: string, Location: string, Date: string, climbid: string
    }

    useEffect(() => { //This is where it loads the climb data
        storage.getAllDataForKey('climbs')
        .then((climbsInfo: any) => {
            let largestGrade: number = -1 //largest initial value -1
            climbsInfo.forEach((climb: climbNode)=>{ //iterates over climbs and compares grades to find the largest
                if (largestGrade == -1){ //if there is no set largest grade
                    largestGrade = parseInt(climb.Grade)
                } else if (largestGrade < parseInt(climb.Grade)) { //if current largest is smaller than current climb grade
                    largestGrade = parseInt(climb.Grade)
                }
            })
            setClimbGrade(largestGrade); //sets state
        }
    );
    }, [])
    
    if (climbGrade == -1){ //if there are no climbs on the climb page
        return (
            <ScreenLayout>
                <Text className='text-center text-4xl font-bold mt-16 mb-3'>Recommendations</Text>
                <Text>Since you haven't input any climbs yet, we can't yet recommend activities to you.</Text>
            </ScreenLayout>
        );
    } else if (climbGrade < scoreVGrade){ //recommends techniques

        //Adaptive Recommendations based on strength
        let recs;
        if(scoreVGrade <= 4)
        {
            recs =
            <View className='flex h-full justify-evenly'>
                <Text className='flex p-2 text-lg bg-ug-light-blue border rounded-lg'>-Silent Feet Drills</Text>  
                <Text className='flex p-2 text-lg bg-ug-light-blue border rounded-lg'>-Straight-arm Climbing</Text>
                <Text className='flex p-2 text-lg bg-ug-light-blue border rounded-lg'>-Learn to flag and pivot</Text>
            </View>
        }
        else if(scoreVGrade <= 9)
        {
            recs =
            <View className='flex h-full justify-evenly'>
                <Text className='flex p-2 text-lg bg-ug-light-blue border rounded-lg'>-Focusing on Flashing climbs</Text>  
                <Text className='flex p-2 text-lg bg-ug-light-blue border rounded-lg'>-Hover-hand Drills</Text>
                <Text className='flex p-2 text-lg bg-ug-light-blue border rounded-lg'>-Sticky feet Drills</Text>
            </View>
        }
        else
        {
            recs =
            <View className='flex h-full justify-evenly'>
                <Text className='flex p-2 text-lg bg-ug-light-blue border rounded-lg'>-On-sight cleanups</Text>  
                <Text className='flex p-2 text-lg bg-ug-light-blue border rounded-lg'>-Long traverses</Text>
                <Text className='flex p-2 text-lg bg-ug-light-blue border rounded-lg'>-Isolate individual move weaknesses</Text>
            </View>
        }

        return (
            <ScreenLayout>
                <View className='h-full flex flex-col justify-between'>
                    <View className='flex basis-[40%] '>
                        <Text className='text-center text-ug-light-green underline text-4xl font-bold mt-4 mb-3'>Recommendations</Text>
                        <Text className='text-center text-2xl text-ug-white'>Since you have the strength to climb higher grades, you should work on improving technique. You could try...</Text>
                    </View>
                    <View className='flex basis-[40%]'>
                        {recs}
                    </View>
                    <View className='flex flex-row basis-[20%] justify-between items-center'>
                        <Link href={"./StrengthAssessmentInput"} className=''>
                            <View className='bg-ug-dark-green p-2 rounded-lg'>
                                <Text className=' text-ug-white text-md '>
                                    Back to Input
                                </Text>
                            </View>
                        </Link>
                        <Link href={"./AddActivity"} className=''>
                            <View className='bg-ug-dark-green p-2 rounded-lg'>
                                <Text className=' text-ug-white text-md'>
                                    Add Activities
                                </Text>
                            </View>
                        </Link>
                        <Link href={"./Climbs"} className=''>
                            <View className='bg-ug-dark-green p-2 rounded-lg'>
                                <Text className=' text-ug-white text-md '>
                                    Add Climbs
                                </Text>
                            </View>
                        </Link>
                    </View>
                </View>
            </ScreenLayout>
        );
    } else if (climbGrade >= scoreVGrade){ //recommends strength
        //Adaptive Recommendations based on strength
        let recs;
        if(scoreVGrade <= 4)
        {
            recs =
            <View className='flex h-full justify-evenly'>
                <Text className='flex p-2 text-lg bg-ug-light-blue border rounded-lg'>-Pull Ups</Text>  
                <Text className='flex p-2 text-lg bg-ug-light-blue border rounded-lg'>-Dead Hang Training</Text>
                <Text className='flex p-2 text-lg bg-ug-light-blue border rounded-lg'>-Shoulder Shrugs</Text>
                <Text className='flex p-2 text-lg bg-ug-light-blue border rounded-lg'>-L-sit with Knees Bent</Text>
            </View>
        }
        else if(scoreVGrade <= 9)
        {
            recs =
            <View className='flex h-full justify-evenly'>
                <Text className='flex p-2 text-lg bg-ug-light-blue border rounded-lg'>-Weighted Pull Ups</Text>  
                <Text className='flex p-2 text-lg bg-ug-light-blue border rounded-lg'>-One Arm Dead Hang</Text>
                <Text className='flex p-2 text-lg bg-ug-light-blue border rounded-lg'>-Muscle Ups</Text>
                <Text className='flex p-2 text-lg bg-ug-light-blue border rounded-lg'>-Campus Boarding: 1-4, 1-5, 1-3-5</Text>
                <Text className='flex p-2 text-lg bg-ug-light-blue border rounded-lg'>-L-sit</Text>
            </View>
        }
        else
        {
            recs =
            <View className='flex h-full justify-evenly'>
                <Text className='flex p-2 text-lg bg-ug-light-blue border rounded-lg'>-Weighted Pull Ups</Text>  
                <Text className='flex p-2 text-lg bg-ug-light-blue border rounded-lg'>-One Arm Dead Hang</Text> 
                <Text className='flex p-2 text-lg bg-ug-light-blue border rounded-lg'>-One Arm Pull Ups</Text>
                <Text className='flex p-2 text-lg bg-ug-light-blue border rounded-lg'>-Muscle Ups</Text>
                <Text className='flex p-2 text-lg bg-ug-light-blue border rounded-lg'>-Campus Boarding: 1-4-7, 1-5-8, 1-5-9</Text>
                <Text className='flex p-2 text-lg bg-ug-light-blue border rounded-lg'>-Front Lever</Text>
            </View>
        }

        return (
            <ScreenLayout>
            <View className='h-full flex flex-col justify-between'>
                <View className='flex basis-[40%] '>
                    <Text className='text-center text-ug-light-green underline text-4xl font-bold mt-8 mb-3'>Recommendations</Text>
                    <Text className='text-center text-ug-white text-2xl'>Since your strength {(climbGrade == scoreVGrade ? "matches" : "is less than")} your max grade, you should focus on getting stronger. You should try...</Text>
                </View>
                <View className='flex basis-[40%]'>
                    {recs}
                </View>
                <View className='flex flex-row basis-[20%] justify-between items-center'>
                    <Link href={"./StrengthAssessmentInput"} className=''>
                        <View className='bg-ug-dark-green p-2 rounded-lg'>
                            <Text className=' text-ug-white text-md '>
                                Back to Input
                            </Text>
                        </View>
                    </Link>
                    <Link href={"./AddActivity"} className=''>
                        <View className='bg-ug-dark-green p-2 rounded-lg'>
                            <Text className=' text-ug-white text-md'>
                                Add Activities
                            </Text>
                        </View>
                    </Link>
                    <Link href={"./Climbs"} className=''>
                        <View className='bg-ug-dark-green p-2 rounded-lg'>
                            <Text className=' text-ug-white text-md '>
                                Add Climbs
                            </Text>
                        </View>
                    </Link>
                </View>
            </View>
        </ScreenLayout>
        );
    } else { //maybe loads but i put it here just incase it exists
        return (
            <ScreenLayout>
                <Text className='text-center text-4xl font-bold mt-16 mb-3'>Recommendations</Text>
                <Text>Loading...</Text>
            </ScreenLayout>
        );
    }

}