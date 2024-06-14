import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { IconButton } from 'react-native-paper';
import { Message } from '../HomeScreen';
import { CommonActions, useNavigation } from '@react-navigation/native';
import { styles } from '../../../theme/styles';

interface Props {
    message: Message;
}

export const MessageCardComponent = ({ message }: Props) => {
    const navigation = useNavigation();

    const handleNavigateToDetail = () => {
        navigation.dispatch(CommonActions.navigate({ name: 'Detail', params: { message } }));
    };

    return (
        <TouchableOpacity style={styles.card} onPress={handleNavigateToDetail}>
            <View style={styles.cardContent}>
                <Text style={styles.cardLabel}>De: {message.email}</Text>
                <Text style={styles.cardMessage}>Mensaje: {message.message}</Text>
            </View>
            <IconButton
                icon="eye"
                size={25}
                style={styles.cardIcon}
                onPress={handleNavigateToDetail}
            />
        </TouchableOpacity>
    );
};
