import { StatusBar } from 'expo-status-bar';
import React, {useState, useEffect, ReactNode} from 'react';
import { Text, View, KeyboardAvoidingView, Keyboard, ImageBackground} from 'react-native';
import { Link } from "expo-router";

//Component imports
import Navbar from './Navbar';

type Props = {
    children?: ReactNode
    img?: any
}
  
const ScreenLayout = ({children, img}: Props) => {

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


      if(img)
      {
        return(
          <KeyboardAvoidingView>
            <ImageBackground source={img} className='h-full w-full'>
              <View className='bg-ug-white opacity-50 absolute bottom-0 left-0 w-full h-full'>
              </View>
              <View className="flex flex-col w-full h-full">
                  <View className='flex basis-[90%] p-4'>
                      {children}
                  </View>       
                  {
                  !isKeyboardVisible &&
                  <View className='flex basis-[10%] bg-ug-light-gray p-2'>
                  <Navbar/>
                  </View>  
                  }
              </View>
            </ImageBackground>
          </KeyboardAvoidingView>
        )
      }
      else
      {
        return(
          <KeyboardAvoidingView>
              <View className="flex flex-col w-full h-full bg-ug-light-gray">
                  <View className='flex basis-[90%] bg-ug-light-gray p-4'>
                      {children}
                  </View>       
                  {
                  !isKeyboardVisible &&
                  <View className='flex basis-[10%] bg-ug-light-gray p-2'>
                  <Navbar/>
                  </View>  
                  }
              </View>
          </KeyboardAvoidingView>
      )
      }

}

export default ScreenLayout