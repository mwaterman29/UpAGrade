import { StatusBar } from 'expo-status-bar';
import React, {useState, useEffect} from 'react';
import { Text, View, Button, TextInput, Keyboard } from 'react-native';
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
      const dateRegex = /^(0[1-9]|1[0-2])-(0[1-9]|[12][0-9]|3[01])-[0-9]{2}$/;

    function setUpObject(){
        if (description.trim() && location.trim() && date.trim() && valueGrade != null) {
          if (dateRegex.test(date)) {
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
            alert('Enter a Valid Date')
          }
        } else {
            alert('Please Fill All Fields')
        }
    }

        //Keyboard listening
        const [isKeyboardVisible, setKeyboardVisible] = useState(false);
        useEffect(() => {
           const keyboardDidShowListener = Keyboard.addListener(
             'keyboardDidShow',
             () => {
               setKeyboardVisible(true); // or some other action
             }
           );
           const keyboardDidHideListener = Keyboard.addListener(
             'keyboardDidHide',
             () => {
               setKeyboardVisible(false); // or some other action
             }
           );
       
           return () => {
             keyboardDidHideListener.remove();
             keyboardDidShowListener.remove();
           };
         }, []);

    return (
        <ScreenLayout>
            <View className='flex h-full w-full'>
              <View className='flex basis-1/5 justify-center'>
                <Text className='text-center text-4xl font-bold text-ug-white underline '>Add Climb</Text>
              </View>
              <View className="basis-4/5 flex justify-between">
                  <DropDownPicker
                          placeholder='Pick A Grade'
                          open={openGrade}
                          value={valueGrade}
                          items={itemsGrade}
                          setOpen={setOpenGrade}
                          setValue={setValueGrade}
                          setItems={setItemsGrade}
                          listMode="MODAL"/>
                  <TextInput className='text-2xl text-center h-1/5 bg-ug-light-blue text-ug-black rounded-md border border-ug-black' onChangeText={ (change) => setDescription(change) } placeholder='Enter A Description'/>
                  <TextInput className='text-2xl text-center h-1/5 bg-ug-light-blue text-ug-black rounded-md border border-ug-black' onChangeText={ (change) => setLocation(change) } placeholder='Enter A Location'/>
                  <TextInput className='text-2xl text-center h-1/5 bg-ug-light-blue text-ug-black rounded-md border border-ug-black' onChangeText={ (change) => { if (change.length <= 8) { setDate(change) } } } placeholder='Date: MM-DD-YY'/>
                  {!isKeyboardVisible && <Button color='black' title='Add' onPress={setUpObject}/>}
              </View>
            </View>


        </ScreenLayout>
    );
}