import ScreenLayout from "../components/ScreenLayout";
import React, {ReactNode, useEffect, useState} from 'react';
import { Pressable, Text, View } from 'react-native';
import { Link, useRouter, useSearchParams } from "expo-router";

/*
This page shows the results for the strength assessment.
It will tell you what grade you can climb based on how strong you are.
*/


const StrengthAssessmentResults = () => {

    const { valueFS, valuePU, valueCS, valueMH} = useSearchParams();
    const [gradeScore, setGradeScore] = useState(0)
    const router = useRouter();
    
    const gradeKVPs : { [key: number]: string }= {
        4 : "5.10d/6B/V0",
        5 : "5.11b/6c/V0",
        6 : "5.11b/6c/V1",
        7 : "5.11c/6c+/V1",
        8 : "5.11c/6c+/V1",
        9 : "5.11d/7a/V2",
        10 : "5.11d/7a/V2",
        11 : "5.12a/7a+/V2",
        12 : "5.12a/7a+/V3",
        13 : "5.12b/7b/V3",
        14 : "5.12b/7b/V4",
        15 : "5.12c/7b+/V4",
        16 : "5.12c/7b+/V5",
        17 : "5.12d/7c/V5",
        18 : "5.12d/7c/V5",
        19 : "5.13a/7c+/V6",
        20 : "5.13a/7c+/V6",
        21 : "5.13b/8a/V7",
        22 : "5.13b/8a/V7",
        23 : "5.13c/8a+/V8",
        24 : "5.13c/8a+/V8",
        25 : "5.13d/8b/V9",
        26 : "5.13d/8b/V9",
        27 : "5.14a/8b+/V9",
        28 : "5.14a/8b+/V10",
        29 : "5.14b/8c/V10",
        30 : "5.14b/8c/V11",
        31 : "5.14c/8c+/V11",
        32 : "5.14c/8c+/V12",
        33 : "5.14d/9a/V12",
        34 : "5.14d/9a/V13",
        35 : "5.15a/9a+/V13",
        36 : "5.15a/9a+/V14",
        37 : "5.15b/9b/V15",
        38 : "5.15b/9b/V15",
        39 : "5.15c/9b+/V16",
        40 : "5.15d/9c/V17",
    }


    function getGradeFromScore(score: number)
    {
        useEffect(() => {
            setGradeScore(score);
        }, [])
        //need to implement
        return gradeKVPs[score];
    }

    return(
        <ScreenLayout>
            <View className="flex flex-col h-full w-full items-center justify-evenly">
                <Text className="text-4xl text-ug-green underline decoration-double">
                    Strength Assessment
                </Text>
                <View>
                    <Text className="text-lg text-ug-white">
                        Your score is:
                    </Text>
                    <Text className="text-lg text-ug-white">
                        Finger Strength: {valueFS} points.
                    </Text>
                    <Text className="text-lg text-ug-white">
                        Pull Up Strength: {valuePU} points.
                    </Text>
                    <Text className="text-lg text-ug-white">
                        Core Strength: {valueCS} points.
                    </Text>
                    <Text className="text-lg text-ug-white">
                        Hang Endurance: {valueMH} points.
                    </Text>
                </View>
                <Text className="text-2xl text-ug-light-green underline decoration-double">
                    {(Number(valueFS) + Number(valuePU) + Number(valueCS) + Number(valueMH))} total points!
                </Text>
                <Text className="text-ug-white">
                    With this, you have the strength to climb...
                </Text>
                <Text className="text-4xl text-ug-light-green underline decoration-double">
                    {getGradeFromScore((Number(valueFS) + Number(valuePU) + Number(valueCS) + Number(valueMH)))}!
                </Text>
                <Pressable className="bg-ug-dark-green m-2 p-4" onPress={() => router.push({pathname: '/screens/Recommendations', params: {gradeScore}})}>
                        <Text className="text-ug-white text-xl text-center">
                            Recommendations
                        </Text>
                </Pressable>
                <Link href={'/screens/StrengthAssessmentInput'}>
                    <View className="bg-ug-dark-green m-2 p-4">
                        <Text className="text-ug-white text-xl text-center">
                            Back to Input
                        </Text>
                    </View>
                </Link>
                <Link href={'/'}>
                    <View className="bg-ug-dark-green m-2 p-4">
                        <Text className="text-ug-white text-xl text-center">
                            Back to Dashboard
                        </Text>
                    </View>
                </Link>
            </View>

        </ScreenLayout>
    );
}

export default StrengthAssessmentResults