import ScreenLayout from "../components/ScreenLayout";
import React, {ReactNode, useState} from 'react';
import { Text, View } from 'react-native';
import { Link, useSearchParams } from "expo-router";

const StrengthAssessmentResults = () => {

    const { valueFS, valuePU, valueCS, valueMH} = useSearchParams();
    
    const gradeKVPs : { [key: number]: string }= {
        4 : "5.10d/6B",
        5 : "5.11b/6c",
        6 : "5.11b/6c",
        7 : "5.11c/6c+",
        8 : "5.11c/6c+",
        9 : "5.11d/7a",
        10 : "5.11d/7a",
        11 : "5.12a/7a+",
        12 : "5.12a/7a+",
        13 : "5.12b/7b",
        14 : "5.12b/7b",
        15 : "5.12c/7b+",
        16 : "5.12c/7b+",
        17 : "5.12d/7c",
        18 : "5.12d/7c",
        19 : "5.13a/7c+",
        20 : "5.13a/7c+",
        21 : "5.13b/8a",
        22 : "5.13b/8a",
        23 : "5.13c/8a+",
        24 : "5.13c/8a+",
        25 : "5.13d/8b",
        26 : "5.13d/8b",
        27 : "5.14a/8b+",
        28 : "5.14a/8b+",
        29 : "5.14b/8c",
        30 : "5.14b/8c",
        31 : "5.14c/8c+",
        32 : "5.14c/8c+",
        33 : "5.14d/9a",
        34 : "5.14d/9a",
        35 : "5.15a/9a+",
        36 : "5.15a/9a+",
        37 : "5.15b/9b",
        38 : "5.15b/9b",
        39 : "5.15c/9b+",
        40 : "5.15d/9c",
    }


    function getGradeFromScore(score: number)
    {
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
                <Link href={'./StrengthAssessmentInput'}>
                    <View className="bg-ug-dark-green m-2 p-4">
                        <Text className="text-ug-white text-xl text-center">
                            Back to Input
                        </Text>
                    </View>
                </Link>
                <Link href={'./index'}>
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