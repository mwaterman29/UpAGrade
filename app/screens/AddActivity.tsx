import ScreenLayout from "../components/ScreenLayout";
import React, {ReactNode, useState, useEffect} from 'react';
import { Button, Text, View, TextInput, Keyboard} from 'react-native';
import RadioGroup, {RadioButtonProps} from 'react-native-radio-buttons-group';
import { Link, useSearchParams, useRouter } from "expo-router";

import uid from '.././uid';
import storage from '.././storage';


type Activity = {
    type: Number,
    num?: String,
    by?: String,
    desc: String,
    completed: Boolean
}

export type {Activity};

const AddActivity = () => {

    //Radio buttons and options
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

    //Keyboard listening
    const [isKeyboardVisible, setKeyboardVisible] = useState(false);
    useEffect(() => {
       const keyboardDidShowListener = Keyboard.addListener(
         'keyboardDidShow',
         () => {
           setKeyboardVisible(true); // or some other action
         }
       );
       const keyboardDidHideListener = Keyboard.addListener(
         'keyboardDidHide',
         () => {
           setKeyboardVisible(false); // or some other action
         }
       );
   
       return () => {
         keyboardDidHideListener.remove();
         keyboardDidShowListener.remove();
       };
     }, []);

    //Search params
    const {givenDate} = useSearchParams();

    function getWorkoutLink()
    {
        //Populate all the non-null search params to link back to the workout
        let link = "./AddWorkout";
        link += "?givenDate=" + givenDate;
        let selButton = radioButtons.find(rb => rb.selected);
        if(!selButton)
            return link;
        link += "&type=" + parseInt(selButton.id);
        link += "&num=" + num;
        link += "&by=" + by;
        link += "&desc=" + desc;

        return link;
    }

    return(
        <ScreenLayout>
            <View className ='flex flex-col h-full justify-evenly items-center'>
                <Text className="text-4xl text-ug-green underline decoration-double">
                    Add Activity
                </Text>
                
                {!isKeyboardVisible &&(
                <View className="w-full">
                    <Text className="w-full text-2xl text-ug-light-green text-center">
                    Pick Type
                    </Text>

                <View className="flex flex-row w-full">
                <View className="flex flex-col basis-4/5">
                    <View className="flex-row items-center bg-ug-gray my-2 h-14 min-h-14 w-full">
                        <Text className="flex basis-1/6 bg-ug-light-green text-center items-center justify-center h-full">#</Text>
                        <Text className="flex basis-1/6 text-center items-center justify-center h-full">X</Text>
                        <Text className="flex basis-1/6 bg-ug-light-green text-center items-center justify-center h-full">#</Text>
                        <Text className="flex basis-1/2 bg-ug-light-blue text-center items-center justify-center h-full">Test Description</Text>
                    </View>
                    <View className="flex-row items-center bg-ug-gray my-2 h-14 min-h-14 w-full">
                        <Text className="flex basis-1/4 bg-ug-light-green text-center items-center justify-center h-full">#</Text>
                        <Text className="flex basis-3/4 bg-ug-light-blue text-center items-center justify-center h-full">Test Description</Text>
                    </View>
                    <View className="flex-row items-center bg-ug-gray my-2 h-14 min-h-14 w-full">
                        <Text className="flex w-full bg-ug-light-blue text-center items-center justify-center h-full">Test Description</Text>
                    </View>
                </View>
                <View className="py-4 flex h-full basis-1/5">
                    <RadioGroup 
                        radioButtons={radioButtons} 
                        onPress={onPressRadioButton} 
                        containerStyle={{ justifyContent: 'space-between', height: 160}}
                    />
                </View>
                </View>
                </View>)}
                
                
                <Text className="w-full text-2xl text-ug-light-green text-center">
                    Describe Activity
                </Text>
                <View className="flex w-full">
                    {radioButtons.find(rb => rb.value === '#X#D')?.selected && (
                    <View className="flex grow w-full bg-ug-gray">
                        <TextInput 
                            className="flex w-full h-14 bg-ug-light-green text-center"
                            onChangeText={onChangeNum}
                            value={num}
                            placeholder="# of Reps"
                        />
                        <TextInput 
                            className="flex w-full h-14 bg-ug-light-green text-center"
                            onChangeText={onChangeBy}
                            value={by}
                            placeholder="By ..."
                        />
                        <TextInput 
                            className="flex w-full h-14 bg-ug-light-blue text-center"
                            onChangeText={onChangeDesc}
                            value={desc}
                            placeholder="Description"
                        />
                    </View>
                    )}
                    {radioButtons.find(rb => rb.value === '#D')?.selected && (
                        <View className="flex grow w-full bg-ug-gray">
                        <TextInput 
                            className="flex w-full h-14 bg-ug-light-green text-center"
                            onChangeText={onChangeNum}
                            value={num}
                            placeholder="# of Reps"
                        />
                        <TextInput 
                            className="flex w-full h-14 bg-ug-light-blue text-center"
                            onChangeText={onChangeDesc}
                            value={desc}
                            placeholder="Description"
                        />
                        </View>
                    )}
                    {radioButtons.find(rb => rb.value === 'D')?.selected && (
                        <View className="flex w-full bg-ug-gray">
                            <TextInput 
                                className="flex w-full h-14 bg-ug-light-blue text-center"
                                onChangeText={onChangeDesc}
                                value={desc}
                                placeholder="Description"
                            />
                        </View>
                    )}
                </View>
                {!isKeyboardVisible &&(
                <Link href={getWorkoutLink()}>
                        <View className="bg-ug-dark-green m-2 p-4">
                            <Text className="text-ug-white text-xl text-center">
                                Add to my Workout
                            </Text>
                        </View>
                </Link>)}
            </View>
        </ScreenLayout>
    );
}

export default AddActivity