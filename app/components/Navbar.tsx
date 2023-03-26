import React, {ReactNode} from 'react';
import { Text, View } from 'react-native';
import { Link } from "expo-router";

const Navbar = () => {
    return(
        <View className = 'flex flex-row h-full bg-ug-gray'>
            <Link className='flex-1 mx-3 bg-ug-green text-center rounded-lg' href="/">
                <Text className=''>
                    Home
                </Text>
            </Link>

            <Link className='flex-1 mx-3 bg-ug-green text-center rounded-lg' href="/screens/TrackWorkouts">
                <Text className=''>
                    Workouts
                </Text>
            </Link>

            <Link className='flex-1 mx-3 bg-ug-green text-center rounded-lg' href="/screens/AddWorkout">
                <Text className=''>
                    Add Activity
                </Text>
            </Link>
            
            <Link className='flex-1 mx-3 bg-ug-green text-center rounded-lg' href="/screens/StrengthAssessmentInfo">
                <Text className=''>
                    Strength Assessment
                </Text>
            </Link>
            
            <Link className='flex-1 mx-3 bg-ug-green text-center rounded-lg' href="/climbs">
                <Text className=''>
                    climbs
                </Text>
            </Link>

            <Link className='flex-1 mx-3 bg-ug-green text-center rounded-lg' href="/injuries">
                <Text className=''>
                    injuries
                </Text>
            </Link>

        </View>
    )
}

export default Navbar