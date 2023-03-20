import ScreenLayout from "../components/ScreenLayout";
import React, {ReactNode, useState} from 'react';
import { Text, View } from 'react-native';
import { Link, useSearchParams } from "expo-router";

const StrengthAssessmentResults = () => {

    const {score} = useSearchParams();

    return(
        <ScreenLayout>
            <Text>
                Your score is {score}!
            </Text>
        </ScreenLayout>
    );
}

export default StrengthAssessmentResults