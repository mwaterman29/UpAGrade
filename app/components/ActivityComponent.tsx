import React, {useEffect, useState} from 'react';
import { View, Text, Modal, Pressable} from 'react-native';

import { Activity } from '../screens/AddActivity';

type Props = {
    activity: Activity
    removeFunction: Function
}

const ActivityComponent: React.FC<Props> = ({ activity, removeFunction }) => {

    const [modalVisible, setModalVisible] = useState(false);

    function deleteActivity()
    {
        removeFunction(activity);
        setModalVisible(false);
    }

    const renderActivityView = () => {
        if (activity.type == 1) {
            return (
                
                <Pressable onLongPress={() => setModalVisible(true)}>
                    <View className="flex-row items-center bg-ug-gray my-2 h-14 min-h-14 w-full">
                        <Text className="flex basis-1/6 bg-ug-light-green text-center items-center justify-center h-full">{activity.num}</Text>
                        <Text className="flex basis-1/6 text-center items-center justify-center h-full">{"X"}</Text>
                        <Text className="flex basis-1/6 bg-ug-light-green text-center items-center justify-center h-full">{activity.by}</Text>
                        <Text className="flex basis-1/2 bg-ug-light-blue text-center items-center justify-center h-full">{activity.desc}</Text>
                    </View>
                </Pressable>
            );
        } else if (activity.type == 2) {
            return (
                <Pressable onLongPress={() => setModalVisible(true)}>
                <View className="flex-row items-center bg-ug-gray my-2 h-14 min-h-14 w-full">
                    {activity.num && <Text className="flex basis-1/3 bg-ug-light-green text-center items-center justify-center h-full">{activity.num}</Text>}
                    <Text className="flex basis-2/3 bg-ug-light-blue text-center items-center justify-center h-full">{activity.desc}</Text>
                </View>
                </Pressable>
            );
        } else {
            return (
                <Pressable onLongPress={() => setModalVisible(true)}>
                    <View className="flex-row items-center bg-ug-gray my-2 h-14 min-h-14 w-full">
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
            <View className='bg-ug-light-blue rounded flex mt-[250] items-center self-center p-4 w-[130px]'>
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