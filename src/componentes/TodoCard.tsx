import React from 'react';

import {
    TouchableOpacity,
    TouchableOpacityProps,
    Text,
    StyleSheet
} from 'react-native';

interface TodoCardProps extends TouchableOpacityProps {
    todo: string;
}

export function TodoCard({ todo, ...rest } : TodoCardProps) {
    return (
        <TouchableOpacity style={styles.buttonTodo} {...rest}>
            <Text style={styles.textTodo}>
                {todo}
            </Text>
        </TouchableOpacity>
    )
};

const styles = StyleSheet.create({
    buttonTodo: {
        backgroundColor: '#FFDADA',
        padding: 15,
        borderRadius: 20,
        alignItems: 'center',
        marginVertical: 5,
      },
      textTodo: {
        color: '#fff',
        fontSize: 22,
        fontWeight: 'bold',
      }
});