import React, { useState } from 'react'
import { StyleSheet, View, TextInput, Button, Modal, Alert } from 'react-native'
import { THEME } from '../theme'
import { AppButton } from './ui/AppButton'

export const EditModal = ({ visible, onCancel, value, onSave }) => {

    const [title, setTitlte] = useState(value)

    const saveHandler = () => {
        if (title.trim().length < 3) {
            Alert.alert(
                'Ошибка!',
                `Минимальная длина названия 3 символа. Сейчас ${title.trim().length
                }символов.`
            )
        } else {
            onSave(title)
        }
    }

    const cancelHandler = () => {
        setTitlte(value)
        onCancel()
    }
    return (
        <Modal visible={visible} animationType="slide" transparent={false}>
            <View style={styles.wrap}>
                <TextInput
                    value={title}
                    onChangeText={setTitlte}
                    style={styles.input}
                    placeholder='Введите название'
                    autoCapitalize='none'
                    autoCorrect={false}
                    maxLength={64}
                />
                <View style={styles.buttons}>
                    <AppButton onPress={cancelHandler} color={THEME.DANGER_COLOR}>
                        Отменить
                    </AppButton>
                    <AppButton onPress={saveHandler} >
                        Сохранить
                    </AppButton>
                </View>
            </View>
        </Modal>
    )
}

const styles = StyleSheet.create({
    wrap: {
        justifyContent: 'center',
        alignItems: 'center',
        flex: 1,
    },
    input: {
        padding: 10,
        borderBottomColor: THEME.MAIN_COLOR,
        borderBottomWidth: 2,
        width: "80%"
    },
    buttons: {
        width: "100%",
        marginTop: 10,
        flexDirection: "row",
        justifyContent: "space-around"
    }
})

