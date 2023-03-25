import React, {ReactNode} from 'react';
import { Text, View } from 'react-native';
import { Link } from "expo-router";

const Navbar = () => {
    return(
        <View className = 'flex flex-row h-full bg-ug-gray'>
            <Link className='flex-1 px-3' href="/">
                <Text className='bg-ug-green '>
                    Workout
                </Text>
            </Link>
            
            <Link className='flex-1 px-3' href="./screens/StrengthAssessmentInfo">
                <Text className='bg-ug-green'>
                    Strength Assessment
                </Text>
            </Link>
            
            <Link className='flex-1 px-3' href="/">
                <Text className='bg-ug-green '>
                    Home
                </Text>
            </Link>
            
            <Link className='flex-1 px-3' href="/climbs">
                <Text className='bg-ug-green'>
                    climbs
                </Text>
            </Link>

            <Link className='flex-1 px-3' href="/injuries">
                <Text className='bg-ug-green '>
                    injuries
                </Text>
            </Link>

        </View>
    )
}

export default Navbar