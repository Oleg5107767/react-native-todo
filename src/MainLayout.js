import React, { useContext } from 'react'
import { StyleSheet, View } from 'react-native'
import { Navbar } from './components/Navbar'
import { THEME } from './theme'
import { MainScreen } from './screens/MainScreen'
import { TodoScreen } from './screens/TodoScreen'
import { ScreenContext } from './context/screen/screenContext'

export const MainLayout = () => {
    const { todoId } = useContext(ScreenContext)

    let content = todoId ? <TodoScreen /> : <MainScreen />

    return (
        <View >
            <Navbar title='Todo App!' />
            <View style={styles.container}>
                {content}
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        paddingHorizontal: THEME.PADDING_HORIZONTAL,
        paddingVertical: 20
    }
})


