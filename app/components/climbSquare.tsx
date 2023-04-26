import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { Text, View, Button, Pressable, Modal } from 'react-native';
import { Link, useRouter } from "expo-router";
import storage from '../storage';

// holds the datatypes for all of the props for typescript 
type Props = {
    date: string,
    Grade: string,
    climbid: string,
    removedFunction: Function
}

//holds the individual data for a climb in a climb square component
function ClimbSquare({date, Grade, climbid, removedFunction}: Props) {
    const router = useRouter(); //router for navigation
    const [modalVisible, setModalVisible] = useState(false); //state for remove modal visibilty

    // removes a climb from the storage
    function deleteClimb(){
        setModalVisible(!modalVisible)
        storage.remove({
            key: 'climbs',
            id: climbid
        });
        removedFunction()
    }

    //Holds the UI for a square that will be listed on the tracking climbs page
    return (
        <>
        <Modal
        animationType="none"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          setModalVisible(!modalVisible);
        }}>
            <View className='bg-ug-light-blue rounded flex mt-[250] items-center self-center p-4 w-[130px]'>
                <Pressable onPress={deleteClimb}>
                    <Text className='text-3xl font-bold text-ug-red mb-3'>Remove</Text>
                </Pressable>
                <Pressable onPress={() => setModalVisible(!modalVisible)}>
                    <Text className='text-3xl'>Cancel</Text>
                </Pressable>
            </View>
        </Modal>
        <View className='w-auto mb-5 mx-2'>
            <Pressable className="w-[100px] rounded h-[100px] justify-center bg-ug-light-gray" onLongPress={() => setModalVisible(true)} onPress={() => router.push({pathname: '/screens/ViewClimb', params: {climbid}})}>
                <Text className="text-center text-2xl font-bold">{date}</Text>
                <Text className="text-center text-2xl font-bold">V{Grade}</Text>
            </Pressable>
        </View>
        </>
    );
}


export default ClimbSquare