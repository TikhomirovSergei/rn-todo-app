import React, { useContext } from "react"
import { StyleSheet, View, FlatList, Image } from "react-native"

import { AddTodo } from "../components/AddTodo"
import { Todo } from "../components/Todo"
import { ScreenContext } from "../context/screen/screenContext"
import { TodoContext } from "../context/todo/todoContext"

export const MainScreen = () => {
    const { todos, addTodo, removeTodo } = useContext(TodoContext)
    const { changeScreen } = useContext(ScreenContext)

    let content = (
        <FlatList
            keyExtractor={item => item.id}
            data={todos}
            renderItem={({ item }) => <Todo todo={item} onRemove={removeTodo} onOpen={changeScreen} />} />
    )

    if (todos.length === 0) {
        content = (
            <View style={styles.imgWrap}>
                <Image
                    style={styles.image}
                    source={require("../../assets/no-items.png")} />
            </View>
        )
    }

    return (
        <View>
            <AddTodo onSubmit={addTodo} />
            {content}
        </View>
    )
}

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
})