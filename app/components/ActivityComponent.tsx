import React, {useEffect, useState} from 'react';
import { View, Text, Modal, Pressable} from 'react-native';

import { Activity } from '../screens/AddActivity';

type Props = {
    activity: Activity
    removeFunction?: Function
}

/*

This component renders the content of an activity. 
There are 3 types of activities:
    -Type 1 - 3 fields, number by ... [description], ex - 10 by +25lb weighted pullups
    -Type 2 - 2 fields, number of description, ex - 20 pullups
    -Type 3 - 1 field, description, ex - Warmup Run 
*/
const ActivityComponent: React.FC<Props> = ({ activity, removeFunction }) => {

    const [modalVisible, setModalVisible] = useState(false);

    function deleteActivity()
    {
        if(removeFunction)
            removeFunction(activity);
        setModalVisible(false);
    }

    const renderActivityView = () => {
        if (activity.type == 1) {
            return (
                
                <Pressable onLongPress={() => { if(removeFunction) setModalVisible(true)}}>
                    <View className="flex-row items-center bg-ug-gray h-14 min-h-14 w-full">
                        <Text className="flex basis-1/6 bg-ug-light-green text-center items-center justify-center h-full">{activity.num}</Text>
                        <Text className="flex basis-1/6 text-center items-center justify-center h-full">{"X"}</Text>
                        <Text className="flex basis-1/6 bg-ug-light-green text-center items-center justify-center h-full">{activity.by}</Text>
                        <Text className="flex basis-1/2 bg-ug-light-blue text-center items-center justify-center h-full">{activity.desc}</Text>
                    </View>
                </Pressable>
            );
        } else if (activity.type == 2) {
            return (
                <Pressable onLongPress={() => { if(removeFunction) setModalVisible(true)}}>
                <View className="flex-row items-center bg-ug-gray h-14 min-h-14 w-full">
                    {activity.num && <Text className="flex basis-1/3 bg-ug-light-green text-center items-center justify-center h-full">{activity.num}</Text>}
                    <Text className="flex basis-2/3 bg-ug-light-blue text-center items-center justify-center h-full">{activity.desc}</Text>
                </View>
                </Pressable>
            );
        } else {
            return (
                <Pressable onLongPress={() => { if(removeFunction) setModalVisible(true)}}>
                    <View className="flex-row items-center bg-ug-gray h-14 min-h-14 w-full">
                        <Text className="flex w-full bg-ug-light-blue text-center items-center justify-center h-full">{activity.desc}</Text>
                    </View>
                </Pressable>
            );
        }
    };

    return(
    <View>
        <Modal
        animationType="none"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          setModalVisible(!modalVisible);
        }}>
            <View className='bg-ug-gray rounded flex mt-[250] items-center self-center border-2 border-ug-black w-[130px]'>
                <Pressable onPress={deleteActivity}>
                    <Text className='text-3xl font-bold text-ug-red mb-3'>Remove</Text>
                </Pressable>
                <Pressable onPress={() => setModalVisible(!modalVisible)}>
                    <Text className='text-3xl'>Cancel</Text>
                </Pressable>
            </View>
        </Modal>
        {renderActivityView()}
    </View>);
};

export default ActivityComponent;