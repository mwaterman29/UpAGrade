import ScreenLayout from "../components/ScreenLayout";
import React, {ReactNode, useState, useEffect} from 'react';
import { Button, Text, View, TextInput, Keyboard} from 'react-native';
import RadioGroup, {RadioButtonProps} from 'react-native-radio-buttons-group';
import { Link, useSearchParams, useRouter } from "expo-router";

import uid from '../uid';
import storage from '../storage';

import {Activity} from './AddActivity';
import {Workout} from './AddWorkout'

const SubmitActivity = () => {

    const Router = useRouter();

    function loadWorkoutThenPopulate(date: Date, type: Number, num: String | undefined, by: String | undefined, desc: String) {
        let newActivity: Activity = {
          type: type,
          num: num,
          by: by,
          desc: desc,
          completed: false
        }
      
        // Load the workout from storage
        storage.load({
          key: 'workouts',
          id: date.toDateString()
        }).then((workout) => {
          // Append the new activity to the workout
          workout.activities.push(newActivity);
      
          // Save the updated workout back to storage
          storage.save({
            key: 'workouts',
            id: date.toDateString(),
            data: workout,
            expires: null
          }).then(() => {
            console.log("Updated and saved.");
            Router.replace('./AddWorkout?givenDate=' + date.toDateString())
          }).catch((err) => {
            console.log(err);
          });
        }).catch((err) => {
          switch (err.name) {
            case 'NotFoundError':
              // Create a new workout object if not found in storage
              let newWorkout: Workout = {
                date: date,
                activities: [newActivity]
              };
              // Save the new workout to storage
              storage.save({
                key: 'workouts',
                id: date.toDateString(),
                data: newWorkout,
                expires: null
              }).then(() => {
                console.log("New entry created saved.");
                Router.replace('./AddWorkout?givenDate=' + date.toDateString())
              }).catch((err) => {
                console.log(err);
              });
              break;
            default:
              console.log(err);
              break;
          }
        });
      }

      const { givenDate, type, num, by, desc} = useSearchParams();
      if(givenDate && type && desc)
      {
          let typeNA = parseInt(type.toString());
          let numNA;
          if(num)
              numNA = num.toString();
          else
              numNA = undefined;
          let byNA;
          if(by)
              byNA = by.toString();
          else
              byNA = undefined;
          let descNA = desc.toString();
  
          let date = new Date(givenDate.toString());
          loadWorkoutThenPopulate(date, typeNA, numNA, byNA, descNA);
      }
}

export default SubmitActivity