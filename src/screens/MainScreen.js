import React from 'react';
import { View, StyleSheet, FlatList, Image, Text } from 'react-native'
import { AddTodo } from '../components/AddTodo';
import { Todo } from '../components/Todo';

export const MainScreen = ({ todos, addTodo, removeTodo, openTodo }) => {

    let content = todos.length ?
        <FlatList
            keyExtractor={item => item.id.toString()}
            data={todos}
            renderItem={({ item }) => (
                <Todo todo={item} onRemove={removeTodo} onOpen={openTodo} />
            )}
        />
        :
        <View style={styles.imgWrap}>
            <Image style={styles.image} source={require('../../assets/no-items.png')} />
        </View>

    return (
        <View>
            <AddTodo onSumbit={addTodo} />
            {content}
        </View>
    );
};

const styles = StyleSheet.create({
    imgWrap: {
        alignItems: "center",
        justifyContent: "center",
        padding: 10,
        height: 300
    },
    image: {
        width: "100%",
        height: "100%",
        resizeMode: "contain"
    }
});

