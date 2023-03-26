import React from 'react';
import { View, Text } from 'react-native';

import { Activity } from '../screens/AddActivity';

type Props = {
    activity: Activity
}

const ActivityComponent: React.FC<Props> = ({ activity }) => {

    const renderActivityView = () => {
        if (activity.type == 1) {
            return (
                <View className="flex-row items-center bg-ug-gray my-2 h-14 min-h-14 w-full">
                    <Text className="flex basis-1/6 bg-ug-light-green text-center items-center justify-center h-full">{activity.num}</Text>
                    <Text className="flex basis-1/6 text-center items-center justify-center h-full">{"X"}</Text>
                    <Text className="flex basis-1/6 bg-ug-light-green text-center items-center justify-center h-full">{activity.by}</Text>
                    <Text className="flex basis-1/2 bg-ug-light-blue text-center items-center justify-center h-full">{activity.desc}</Text>
                </View>
            );
        } else if (activity.type == 2) {
            return (
                <View className="flex-row items-center bg-ug-gray my-2 h-14 min-h-14 w-full">
                    {activity.num && <Text className="flex basis-1/3 bg-ug-light-green text-center items-center justify-center h-full">{activity.num}</Text>}
                    <Text className="flex basis-2/3 bg-ug-light-blue text-center items-center justify-center h-full">{activity.desc}</Text>
                </View>
            );
        } else {
            return (
                <View className="flex-row items-center bg-ug-gray my-2 h-14 min-h-14 w-full">
                    <Text className="flex w-full bg-ug-light-blue text-center items-center justify-center h-full">{activity.desc}</Text>
                </View>
            );
        }
    };

    return renderActivityView();
};

export default ActivityComponent;