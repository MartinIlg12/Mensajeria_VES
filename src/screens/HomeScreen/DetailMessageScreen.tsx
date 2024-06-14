import React, { useEffect, useState } from 'react';
import { View } from 'react-native';
import { Button, Divider, Text, TextInput } from 'react-native-paper';
import { useNavigation, useRoute } from '@react-navigation/native';
import { Message } from './HomeScreen';
import { ref, remove, update } from 'firebase/database';
import { auth, dbRealTime } from '../../configs/firebaseConfig';
import { styles } from '../../theme/styles';

export const DetailMessageScreen = () => {
    const route = useRoute();
    //@ts-ignore
    const { message } = route.params;

    const [editFormMessage, setEditFormMessage] = useState<Message>({
        id: '',
        email: '',
        message: '',
    });

    const navigation = useNavigation();

    useEffect(() => {
        setEditFormMessage(message);
    }, []);

    const handlerSetValues = (key: string, value: string) => {
        setEditFormMessage({ ...editFormMessage, [key]: value });
    };

    const handlerUpdateMessage = async () => {
        const dbRef = ref(dbRealTime, 'messages/' +  auth.currentUser?.uid +'/'+ editFormMessage.id);
        await update(dbRef, { message: editFormMessage.message });
        navigation.goBack();
    };

    const handlerDeleteMessage = async () => {
        const dbRef = ref(dbRealTime, 'messages/' +  auth.currentUser?.uid + '/' + editFormMessage.id);
        await remove(dbRef);
        navigation.goBack();
    };

    
    const isOwner = editFormMessage.email === auth.currentUser?.email;

    return (
        <View style={styles.rootDetail}>
            <View>
                <Text variant='headlineSmall'>Mensaje</Text>
                <Divider />
            </View>
            <View>
                <Text variant='bodyLarge'>Correo: {editFormMessage.email}</Text>
                <Divider />
            </View>
            <View style={{ gap: 20 }}>
                <Text style={styles.textDetail}>Mensaje</Text>
                <TextInput
                    value={editFormMessage.message}
                    multiline={true}
                    numberOfLines={5}
                    onChangeText={(value) => handlerSetValues('message', value)}
                    editable={isOwner} 
                />
            </View>
            {isOwner && (
                <>
                    <Button
                        mode='contained'
                        onPress={handlerUpdateMessage}>
                        Actualizar
                    </Button>
                    <Button
                        mode='contained'
                        onPress={handlerDeleteMessage}>
                        Eliminar
                    </Button>
                </>
            )}
        </View>
    )
}
