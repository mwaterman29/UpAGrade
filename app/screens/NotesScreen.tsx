import ScreenLayout from "../components/ScreenLayout";
import React, {ReactNode, useState, useEffect} from 'react';
import { Button, Text, View, TextInput, Keyboard} from 'react-native';
import { Link, useSearchParams, useRouter, usePathname } from "expo-router";
import DateTimePickerModal from "react-native-modal-datetime-picker";

import { Activity } from "./AddActivity";

import uid from '.././uid';
import storage from '.././storage';
import AsyncStorage from "@react-native-async-storage/async-storage";
import ActivityComponent from "../components/ActivityComponent";

const NotesScreen = () => {
  const [date, setDate] = useState(new Date());
  const [notes, setNotes] = useState('');

  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);

  const showDatePicker = () => {
    setDatePickerVisibility(true);
  };

  const hideDatePicker = () => {
    setDatePickerVisibility(false);
  };

  const handleConfirm = (date: Date) => {
    setDate(date);
    loadNotes(date);
    hideDatePicker();
  };

  const loadNotes = async (date: Date) => {
    try {
      const notes = await storage.load({
        key: 'notes',
        id: date.toDateString(),
      });
      setNotes(notes);
    } catch (err) {
      setNotes("");
      saveNotes();
      //console.log('Error loading notes:', err);
    }
  };

  const saveNotes = async () => {
    try {
      await storage.save({
        key: 'notes',
        id: date.toDateString(),
        data: notes,
      });
      console.log('Notes saved successfully!');
    } catch (err) {
      console.log('Error saving notes:', err);
    }
  };

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
      <View className ='flex flex-col h-full justify-evenly items-center'>
      {!isKeyboardVisible &&
        <View className="flex basis-[15%] justify-center">
          <Text className="text-2xl underline text-ug-white">Notes for {date.toDateString()}</Text>
          
          <View className="flex">          
            <Button title="Show Date Picker" onPress={showDatePicker} />
            <DateTimePickerModal
              isVisible={isDatePickerVisible}
              mode="date"
              onConfirm={handleConfirm}
              onCancel={hideDatePicker}
            />
          </View>
        </View> 
      }

        <View className="flex w-full basis-[70%]">
          <TextInput
            className="flex h-full w-full bg-ug-light-blue rounded-lg"
            multiline={true}
            numberOfLines={10}
            onChangeText={setNotes}
            value={notes}
            onBlur={saveNotes}
            placeholder="Notes for today"
            textAlign="center"
          />
        </View>

        {!isKeyboardVisible && 
          <View className="w-full flex flex-row basis-[15%] p-4 justify-evenly items-center">
            <View className="px-4">
              <Button title="Clear Notes" onPress={() => setNotes("")} />
            </View>
            <View className="px-4">
              <Button title="Save Notes" onPress={saveNotes} />
            </View>

        </View>
        }

      </View>
    </ScreenLayout>
   
  );
};

export default NotesScreen;
