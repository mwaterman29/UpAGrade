import ScreenLayout from "../components/ScreenLayout";
import React, {ReactNode, useState} from 'react';
import { Button, Text, View } from 'react-native';
import RadioGroup, {RadioButtonProps} from 'react-native-radio-buttons-group';
import { Link } from "expo-router";

const AddActivity = () => {

    const [radioButtons, setRadioButtons] = useState<RadioButtonProps[]>([
        {
            id: '1', // acts as primary key, should be unique and non-empty string
            label: '',
            value: 'option1',
            size:25
        },
        {
            id: '2',
            label: '',
            value: 'option2'
        }
    ]);

    function onPressRadioButton(radioButtonsArray: RadioButtonProps[]) {
        setRadioButtons(radioButtonsArray);
    }

    return(
        <ScreenLayout>
            <View className ='flex flex-col h-full justify-evenly items-center'>
                <Text className="text-4xl text-ug-green underline decoration-double">
                    Add Activity
                </Text>
                <Text className="w-full text-2xl text-ug-light-green text-center">
                    Pick Type
                </Text>
                
                <View className="flex flex-row w-full bg-ug-brown ">
                    <View className="flex flex-col basis-4/5">
                        <View className="flex-row items-center bg-ug-gray h-24 min-h-24 w-full">
                            <Text className="flex basis-1/6 bg-ug-light-green text-center items-center justify-center h-full">#</Text>
                            <Text className="flex basis-1/6 text-center items-center justify-center h-full">X</Text>
                            <Text className="flex basis-1/6 bg-ug-light-green text-center items-center justify-center h-full">#</Text>
                            <Text className="flex basis-1/2 bg-ug-brown text-center items-center justify-center h-full">Test Description</Text>
                        </View>
                    </View>
                    <View className="flex basis-1/5">
                        <RadioGroup 
                            radioButtons={radioButtons} 
                            onPress={onPressRadioButton} 
                        />
                    </View>
                </View>
                <Text className="w-full text-2xl text-ug-light-green text-center">
                    Describe Activity
                </Text>
            </View>
        </ScreenLayout>
    );
}

export default AddActivity