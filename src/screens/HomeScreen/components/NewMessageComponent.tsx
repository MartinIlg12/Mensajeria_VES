import React, { useState } from 'react'
import { Button, Divider, IconButton, Modal, Portal, Text, TextInput } from 'react-native-paper'
import { styles } from '../../../theme/styles';
import { View } from 'react-native';
import { auth, dbRealTime } from '../../../configs/firebaseConfig';
import { push, ref, set } from 'firebase/database';


interface Props {
    showModalMessage: boolean;
    setShowModalMessage: Function;
}


interface FormMessage {
    email: string;
    message: string;
}

export const NewMessageComponent = ({ showModalMessage, setShowModalMessage }: Props) => {

    const [formMessage, setFormMessage] = useState<FormMessage>({
        email: auth.currentUser?.email || '',
        message: ''
    });

    
    const handlerSetValues = (key: string, value: string) => {
        setFormMessage({ ...formMessage, [key]: value })
    }

    
    const handlerSaveMessage = async () => {
        if (!formMessage.message) {
            return;
        }
        
        
        
        const dbRef = ref(dbRealTime, 'messages/' + auth.currentUser?.uid);
        
        const saveMessage = push(dbRef);
        
        try {
            await set(saveMessage, formMessage);
            
            setFormMessage({
                email: auth.currentUser?.email || '',
                message: ''
            })
        } catch (ex) {
            console.log(ex);
        }
        setShowModalMessage(false);
    }

    return (
        <Portal>
            <Modal visible={showModalMessage} contentContainerStyle={styles.modal}>
                <View style={styles.header}>
                    <Text variant='headlineMedium'>Nuevo Mensaje</Text>
                    <View style={styles.iconEnd}>
                        <IconButton
                            icon='close-circle-outline'
                            size={30}
                            onPress={() => setShowModalMessage(false)} />
                    </View>
                </View>
                <Divider />
                <TextInput
                    label='Email'
                    mode='outlined'
                    value={formMessage.email}
                    disabled={true}
                />
                <TextInput
                    label='Mensaje sobre el Instituto ITSQMET'
                    mode='outlined'
                    multiline={true}
                    numberOfLines={7}
                    onChangeText={(value) => handlerSetValues('message', value)} />
                <Button mode='contained' onPress={handlerSaveMessage}>Enviar</Button>
            </Modal>
        </Portal>
    )
}
