import React, {ReactNode} from 'react';
import { Text, View, Image } from 'react-native';
import { Link } from "expo-router";
import Svg, { Path } from 'react-native-svg'

// Navbar component
const Navbar = () => {
    // The UI for the component that displays the icons for the navbar as a bunch of SVG files
    return(
        <View className = 'flex flex-row h-full bg-ug-light-gray'>
            <Link className='flex-1 mx-3 py-3 bg-ug-light-blue text-center rounded-lg' href="/">
                <Svg
                height="48"
                viewBox="0 96 960 960"
                width="48"
                > 
                    <Path x='auto' y='auto'
                        d="M220 876h150V626h220v250h150V486L480 291 220 486v390Zm-60 60V456l320-240 320 240v480H530V686H430v250H160Zm320-353Z"
                        fill='black'
                        stroke='black'
                        />    
                </Svg>
            </Link>

            <Link className='flex-1 mx-3 py-3 bg-ug-light-blue text-center rounded-lg' href="/screens/TrackWorkouts">
                <Svg
                height="48"
                viewBox="0 96 960 960"
                width="48"
                > 
                    <Path x='auto' y='auto'
                        d="m826 471-42-42 45-45-157-157-45 45-43-43 30-31q23-23 57-22.5t57 23.5l129 129q23 23 23 56.5T857 441l-31 30ZM346 952q-23 23-56.5 23T233 952L90 809q-17-17.378-17-42.689T90 724l44-44 43 42-45 45 157 157 45-45 42 43-30 30Zm397-308 85-85-331-331-85 85 331 331ZM463 924l86-86-331-331-86 86 331 331Zm9-248 109-109-92-92-109 109 92 92Zm33 290q-16.934 17-41.967 17Q438 983 421 966L90 635q-17-16.934-17-41.967Q73 568 90 551l85-86q17.378-17 42.689-17T260 465l77 77 110-110-77-77q-17-16.934-17-41.967Q353 288 370 271l85-86q17.378-17 42.689-17T540 185l331 331q17 17.378 17 42.689T871 601l-86 85q-16.934 17-41.967 17Q718 703 701 686l-77-77-110 110 77 77q17 17.378 17 42.689T591 881l-86 85Z"
                        fill='black'
                        stroke='black'
                        />    
                </Svg>
            </Link>

            <Link className='flex-1 mx-3 py-3 bg-ug-light-blue text-center rounded-lg' href="/screens/Climbs">
                <Svg
                height="48"
                viewBox="0 96 960 960"
                width="48"
                > 
                    <Path x='auto' y='auto'
                        d="M120 936v-76l60-60v136h-60Zm165 0V700l60-60v296h-60Zm165 0V640l60 61v235h-60Zm165 0V701l60-60v295h-60Zm165 0V540l60-60v456h-60ZM120 700v-85l280-278 160 160 280-281v85L560 582 400 422 120 700Z"
                        fill='black'
                        stroke='black'
                        />    
                </Svg>
            </Link>
            
            <Link className='flex-1 mx-3 py-3 bg-ug-light-blue text-center rounded-lg' href="/screens/NotesScreen">
                <Svg
                height="48"
                viewBox="0 96 960 960"
                width="48"
                > 
                    <Path x='auto' y='auto'
                        d="M120 816v-60h480v60H120Zm0-210v-60h720v60H120Zm0-210v-60h720v60H120Z"
                        fill='black'
                        stroke='black'
                        />    
                </Svg>
            </Link>

        </View>
    )
}

export default Navbar