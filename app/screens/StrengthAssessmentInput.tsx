import ScreenLayout from "../components/ScreenLayout";
import React, {ReactNode, useState} from 'react';
import { Text, View } from 'react-native';
import { Link } from "expo-router";

import DropDownPicker from "react-native-dropdown-picker";

const StrengthAssessmentInput = () => {

    const [openFS, setOpenFS] = useState(false);
    const [valueFS, setValueFS] = useState(null);
    const [itemsFS, setItemsFS] = useState([
      {label: '100% (Body Weight)', value: '1'},
      {label: '110%', value: '2'},
      {label: '120%', value: '3'},
      {label: '130%', value: '4'},
      {label: '140%', value: '5'},
      {label: '150%', value: '6'},
      {label: '160%', value: '7'},
      {label: '180%', value: '8'},
      {label: '200%', value: '9'},
      {label: '220%', value: '10'}
    ]);

    const [openPU, setOpenPU] = useState(false);
    const [valuePU, setValuePU] = useState(null);
    const [itemsPU, setItemsPU] = useState([
      {label: '100% (Body Weight)', value: '1'},
      {label: '110%', value: '2'},
      {label: '120%', value: '3'},
      {label: '130%', value: '4'},
      {label: '140%', value: '5'},
      {label: '150%', value: '6'},
      {label: '160%', value: '7'},
      {label: '180%', value: '8'},
      {label: '200%', value: '9'},
      {label: '220%', value: '10'}
    ]);

    const [openCS, setOpenCS] = useState(false);
    const [valueCS, setValueCS] = useState(null);
    const [itemsCS, setItemsCS] = useState([
        {label: '10 Second L-sit (Knees Bent)', value: '1'},
        {label: '20 Second L-sit (Knees Bent)', value: '2'},
        {label: '30 Second L-sit (Knees Bent)', value: '3'},
        {label: '10 Second L-sit', value: '4'},
        {label: '15 Second L-sit', value: '5'},
        {label: '20 Second L-sit', value: '6'},
        {label: '5 Second Front Lever', value: '7'},
        {label: '10 Second Front Lever', value: '8'},
        {label: '20 Second Front Lever', value: '9'},
        {label: '30 Second Front Lever', value: '10'}
      ]);

    const [openMH, setOpenMH] = useState(false);
    const [valueMH, setValueMH] = useState(null);
    const [itemsMH, setItemsMH] = useState([
        {label: '0:30', value: '1'},
        {label: '1:00', value: '2'},
        {label: '1:30', value: '3'},
        {label: '2:00', value: '4'},
        {label: '2:30', value: '5'},
        {label: '3:00', value: '6'},
        {label: '3:30', value: '7'},
        {label: '4:00', value: '8'},
        {label: '5:00', value: '9'},
        {label: '6:00', value: '10'}
      ]);

    return(
        <ScreenLayout>
            <View className ='flex flex-col h-full justify-evenly items-center'>
                <Text className="text-4xl text-ug-green underline decoration-double">
                    Strength Assessment
                </Text>
                <Text className="text-xl text-ug-white">
                    Finger Strength
                </Text>
                <DropDownPicker
                    open={openFS}
                    value={valueFS}
                    items={itemsFS}
                    setOpen={setOpenFS}
                    setValue={setValueFS}
                    setItems={setItemsFS}
                    listMode="MODAL"
                />
                <Text className="text-xl text-ug-white">
                    Max Pull-up
                </Text>
                <DropDownPicker
                    open={openPU}
                    value={valuePU}
                    items={itemsPU}
                    setOpen={setOpenPU}
                    setValue={setValuePU}
                    setItems={setItemsPU}
                    listMode="MODAL"
                />
                <Text className="text-xl text-ug-white">
                    Core Strength
                </Text>
                <DropDownPicker
                    open={openCS}
                    value={valueCS}
                    items={itemsCS}
                    setOpen={setOpenCS}
                    setValue={setValueCS}
                    setItems={setItemsCS}
                    listMode="MODAL"
                />
                <Text className="text-xl text-ug-white">
                    Endurance (Max Hang)
                </Text>
                <DropDownPicker
                    open={openMH}
                    value={valueMH}
                    items={itemsMH}
                    setOpen={setOpenMH}
                    setValue={setValueMH}
                    setItems={setItemsMH}
                    listMode="MODAL"
                />
                <Link href='./StrengthAssessmentResults'>
                        <View className="bg-ug-dark-green m-2 p-4">
                            <Text className="text-ug-white text-xl text-center">
                                Calculate my results!
                            </Text>
                        </View>
                </Link>
            </View>
        </ScreenLayout>
    );
}

export default StrengthAssessmentInput