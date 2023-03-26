import { StatusBar } from 'expo-status-bar';
import React, {ReactNode} from 'react';
import { Text, View, KeyboardAvoidingView} from 'react-native';
import { Link } from "expo-router";

//Component imports
import Navbar from './Navbar';

type Props = {
    children?: ReactNode
}
  
const ScreenLayout = ({children}: Props) => {
    return(
        <KeyboardAvoidingView>
                <View className="flex flex-col w-full h-full">
                    <View className='flex basis-[90%] bg-ug-light-gray p-4'>
                        {children}
                    </View>       
                    <View className='flex basis-[10%] bg-ug-gray p-2'>
                        <Navbar/>
                    </View>  
                </View>
        </KeyboardAvoidingView>
    )
}

export default ScreenLayout