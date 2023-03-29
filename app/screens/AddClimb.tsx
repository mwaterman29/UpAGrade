import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import { Text, View, Button, TextInput } from 'react-native';
import { Link, useRouter } from "expo-router";
import DropDownPicker from 'react-native-dropdown-picker';
import ScreenLayout from '../components/ScreenLayout';
import uid from '../uid';
import storage from '../storage';

export default function TrackClimbs() {
    const [openGrade, setOpenGrade] = useState(false);
    const [valueGrade, setValueGrade] = useState(null);
    const [itemsGrade, setItemsGrade] = useState([
        {label: 'V0', value: '0'},
        {label: 'V1', value: '1'},
        {label: 'V2', value: '2'},
        {label: 'V3', value: '3'},
        {label: 'V4', value: '4'},
        {label: 'V5', value: '5'},
        {label: 'V6', value: '6'},
        {label: 'V7', value: '7'},
        {label: 'V8', value: '8'},
        {label: 'V9', value: '9'},
        {label: 'V10', value: '10'},
        {label: 'V11', value: '11'},
        {label: 'V12', value: '12'},
        {label: 'V13', value: '13'},
        {label: 'V14', value: '14'},
        {label: 'V15', value: '15'},
        {label: 'V16', value: '16'},
        {label: 'V17', value: '17'}
      ]);
      const [description, setDescription] = useState('')
      const [location, setLocation] = useState('')
      const [date, setDate] = useState('')
      const [id, setId] = useState('')
      const Router = useRouter()

    function setUpObject(){
        if (description.trim() && location.trim() && date.trim() && valueGrade != null) {
            const climbID = uid()
            const climbInfo = {Grade: valueGrade, Description: description, Location: location, Date: date, climbid: climbID}
            //console.log(climbInfo.Grade, climbInfo.Description, climbInfo.Location)
            storage.save({
                key: 'climbs',
                id: climbID,
                data: climbInfo,
                expires: null
            }).then();
            
            Router.replace('/screens/Climbs')
        } else {
            alert('Please Fill All Fields')
        }
    }


    return (
        <ScreenLayout>
            <Text className='text-center text-4xl font-bold mt-16 mb-3'>Add Climb</Text>
            <View className="flex-1 h-full bg-ug-white">
                <DropDownPicker
                        placeholder='Pick A Grade'
                        open={openGrade}
                        value={valueGrade}
                        items={itemsGrade}
                        setOpen={setOpenGrade}
                        setValue={setValueGrade}
                        setItems={setItemsGrade}
                        listMode="MODAL"
                        theme='DARK' />
                <TextInput className='h-[100px] text-xl' onChangeText={(change)=>setDescription(change)} placeholder='Enter A Description'/>
                <TextInput className='text-2xl' onChangeText={(change)=>setLocation(change)} placeholder='Enter A Location'/>
                <TextInput className='text-2xl' onChangeText={(change)=>setDate(change)} placeholder='Enter A Date'/>
                <Button color='black' title='Add' onPress={setUpObject}/>
            </View>
        </ScreenLayout>
    );
}