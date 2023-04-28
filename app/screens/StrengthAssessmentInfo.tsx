import ScreenLayout from "../components/ScreenLayout";
import React, {ReactNode} from 'react';
import { Button, Text, View } from 'react-native';
import { Link } from "expo-router";

const bg = require('../../assets/alex.jpg');

/*
This page outlines the requirements needed to take the Strength Assessment Test
This page then redirects to the input screen.
*/

const StrengthAssessmentInfo = () => {
    return(
        <ScreenLayout>
            <View className ='flex flex-col h-full justify-evenly items-center'>
                <Text className="text-4xl text-ug-green bg-ug-light-gray rounded-full p-2 underline decoration-double">
                    Strength Assessment
                </Text>
                <Text className="w-full text-xl text-ug-white text-center bg-ug-light-gray rounded-md p-2">
                    To take this test, you'll need to do four exercises:
                </Text>
                <Text className="w-full text-lg text-ug-white text-justify bg-ug-light-gray rounded-md">
                    1. What % of your bodyweight you can hang on a 20mm edge for 5 seconds. Start with normal body weight, and add weight in increments of 10%.
                </Text>   
                <Text className="w-full text-lg text-ug-white text-justify bg-ug-light-gray rounded-md">
                    2. What % of your bodyweight you can do one pull-up with. Start with a body weight pull up, and add weight in increments of 10%.
                </Text>   
                <Text className="w-full text-lg text-ug-white text-justify bg-ug-light-gray rounded-md">
                    3. Test your core strength. If you can front lever, do that. If not, L-sit, if not, L-sit with knees bent. Time yourself.
                </Text>   
                <Text className="w-full text-lg text-ug-white text-justify bg-ug-light-gray rounded-md">
                    4. Test your deadhang, how long can you dead hang on a bar, no shaking out, no pulling up. 
                </Text>
                <Link href='./StrengthAssessmentInput'>
                    <View className="bg-ug-dark-green m-2 p-4">
                        <Text className="text-ug-white text-xl text-center">
                            Ok, I've taken the test...
                        </Text>
                    </View>
                </Link>
            </View>
        </ScreenLayout>
    );
}

export default StrengthAssessmentInfo