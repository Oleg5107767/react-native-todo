import React, { useState } from 'react';
import { StyleSheet, TextInput, View, Keyboard, Alert} from 'react-native';
import { AntDesign } from '@expo/vector-icons'; 
import { THEME } from '../theme';

export const AddTodo = ({ onSumbit }) => {
    const [value, setValue] = useState('')
    const pressHandler = () => {
        if(value.trim()){
            onSumbit(value)
            setValue('')
            Keyboard.dismiss()
        }else{
            Alert.alert('Название дела не может быть пустым')
        }
    }
    
    return (
        <View style={styles.wraper}>
            <TextInput 
                style={styles.input} 
                onChangeText={setValue}
                value={value}
                placeholder="Введите название дела..."
                autoCorrect={false}
                autoCapitalize='none'
            />
            <AntDesign.Button onPress={pressHandler} name="pluscircleo">
                Добавить
            </AntDesign.Button>
            {/*<Button title='Добавить' onPress={pressHandler} />*/}
        </View>
    );
};

const styles = StyleSheet.create({
    wraper: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        marginBottom: 15
    },
    input: {
        width: "60%",
        padding: 10,
        borderStyle: "solid",
        borderBottomWidth: 2,
        borderBottomColor: THEME.MAIN_COLOR
    },
})

