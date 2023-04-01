import React, {ReactNode} from 'react';
import { Text, View, Image } from 'react-native';
import { Link } from "expo-router";
import { SvgUri } from 'react-native-svg';


const Navbar = () => {
    return(
        <View className = 'flex flex-row h-full bg-ug-gray'>
            <Link className='flex-1 mx-3 bg-ug-green text-center rounded-lg' href="/">
                <SvgUri
                width="100%"
                height="100%"
                uri="../../assets/home.svg"
                />
            </Link>

            <Link className='flex-1 mx-3 bg-ug-green text-center rounded-lg' href="/screens/TrackWorkouts">
                <SvgUri
                width="100%"
                height="100%"
                uri="../../assets/workout.svg"
                />
            </Link>

            <Link className='flex-1 mx-3 bg-ug-green text-center rounded-lg' href="/screens/Climbs">
                <SvgUri
                width="100%"
                height="100%"
                uri="../../assets/climbs.svg"
                />
            </Link>
            
            <Link className='flex-1 mx-3 bg-ug-green text-center rounded-lg' href="/screens/Notes">
                <SvgUri
                width="100%"
                height="100%"
                uri="../../assets/notes.svg"
                />
            </Link>

        </View>
    )
}

export default Navbar