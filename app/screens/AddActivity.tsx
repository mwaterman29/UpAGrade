import ScreenLayout from "../components/ScreenLayout";
import React, {ReactNode, useState} from 'react';
import { Button, Text, View, TextInput} from 'react-native';
import RadioGroup, {RadioButtonProps} from 'react-native-radio-buttons-group';
import { Link } from "expo-router";


const AddActivity = () => {

    const [radioButtons, setRadioButtons] = useState<RadioButtonProps[]>([
        {
            id: '1', // acts as primary key, should be unique and non-empty string
            label: '',
            value: '#X#D',
            size:35,
            selected:true
        },
        {
            id: '2',
            label: '',
            value: '#D',
            size:35
        },
        {
            id: '3',
            label: '',
            value: 'D',
            size:35
        }
    ]);

    function onPressRadioButton(radioButtonsArray: RadioButtonProps[]) {
        setRadioButtons(radioButtonsArray);  
    }

    const [num, onChangeNum] = React.useState('');
    const [by, onChangeBy] = React.useState('');
    const [desc, onChangeDesc] = React.useState('');

    return(
        <ScreenLayout>
            <View className ='flex flex-col h-full justify-evenly items-center'>
                <Text className="text-4xl text-ug-green underline decoration-double">
                    Add Activity
                </Text>
                <Text className="w-full text-2xl text-ug-light-green text-center">
                    Pick Type
                </Text>
                
                <View className="flex flex-row w-full">
                    <View className="flex flex-col basis-4/5">
                        <View className="flex-row items-center bg-ug-gray my-2 h-24 min-h-24 w-full">
                            <Text className="flex basis-1/6 bg-ug-light-green text-center items-center justify-center h-full">#</Text>
                            <Text className="flex basis-1/6 text-center items-center justify-center h-full">X</Text>
                            <Text className="flex basis-1/6 bg-ug-light-green text-center items-center justify-center h-full">#</Text>
                            <Text className="flex basis-1/2 bg-ug-light-blue text-center items-center justify-center h-full">Test Description</Text>
                        </View>
                        <View className="flex-row items-center bg-ug-gray my-2 h-24 min-h-24 w-full">
                            <Text className="flex basis-1/6 bg-ug-light-green text-center items-center justify-center h-full">#</Text>
                            <Text className="flex basis-1/6 text-center items-center justify-center h-full">X</Text>
                            <Text className="flex basis-1/6 bg-ug-light-green text-center items-center justify-center h-full">#</Text>
                            <Text className="flex basis-1/2 bg-ug-light-blue text-center items-center justify-center h-full">Test Description</Text>
                        </View>
                        <View className="flex-row items-center bg-ug-gray my-2 h-24 min-h-24 w-full">
                            <Text className="flex basis-1/6 bg-ug-light-green text-center items-center justify-center h-full">#</Text>
                            <Text className="flex basis-1/6 text-center items-center justify-center h-full">X</Text>
                            <Text className="flex basis-1/6 bg-ug-light-green text-center items-center justify-center h-full">#</Text>
                            <Text className="flex basis-1/2 bg-ug-light-blue text-center items-center justify-center h-full">Test Description</Text>
                        </View>
                    </View>
                    <View className="py-6 flex h-full basis-1/5">
                        <RadioGroup 
                            radioButtons={radioButtons} 
                            onPress={onPressRadioButton} 
                            containerStyle={{ justifyContent: 'space-between', height: 240}}
                        />
                    </View>
                </View>
                <Text className="w-full text-2xl text-ug-light-green text-center">
                    Describe Activity
                </Text>
                <View className="flex w-full">
                    {radioButtons.find(rb => rb.value === '#X#D')?.selected && (
                    <View className="flex grow w-full bg-ug-gray">
                        <TextInput 
                            className="flex w-full bg-ug-light-green text-center"
                            onChangeText={onChangeDesc}
                            value={desc}
                            placeholder="# of Reps"
                        />
                        <TextInput 
                            className="flex w-full bg-ug-light-green text-center"
                            onChangeText={onChangeDesc}
                            value={desc}
                            placeholder="By ..."
                        />
                        <TextInput 
                            className="flex w-full bg-ug-light-blue text-center"
                            onChangeText={onChangeDesc}
                            value={desc}
                            placeholder="Description"
                        />
                    </View>
                    )}
                    {radioButtons.find(rb => rb.value === '#D')?.selected && (
                        <View>
                            <Text>Test option 2</Text>
                        </View>
                    )}
                    {radioButtons.find(rb => rb.value === 'D')?.selected && (
                        <View className="flex w-full bg-ug-gray">
                            <TextInput 
                                className="flex w-full bg-ug-light-blue text-center"
                                onChangeText={onChangeDesc}
                                value={desc}
                                placeholder="Description"
                            />
                        </View>
                    )}
                </View>
            </View>
        </ScreenLayout>
    );
}

export default AddActivity