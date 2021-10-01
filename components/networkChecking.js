import React from 'react';
import { View, StyleSheet, Text, TextInput, Pressable, Modal, Button, ActivityIndicator } from 'react-native';
import { COLORS, FONTS } from '../constants';

const NetworkChecking = () => (
    <Modal
        animationType="none" 
        transparent={true}
        onRequestClose={() => {
            console.log('close modal');
        }}>
        <View style={networkModal.modalBackground}>
            <View style={networkModal.modalContainer}>
                <Text style={{...FONTS.headerLine5,color:COLORS.dark}}>Connection Error</Text>
                <Text style={{...FONTS.subtitle2,color:COLORS.dark60,textAlign:'center',marginTop:12,}}>
                    Oops! Looks like your device is not connected to the Internet.
                </Text>
                {/* <Button title="Try Again" onPress={()=> setOfflineStatus? setOfflineStatus(false) : console.log("close")}></Button> */}
            </View>
        </View>
    </Modal>
);


export default NetworkChecking;

const networkModal = StyleSheet.create({
    modalBackground: {
        flex: 1,
        alignItems: 'center',
        flexDirection: 'column',
        justifyContent: 'space-around',
        backgroundColor: '#00000040',
    },
    modalContainer: {
        backgroundColor: '#FFFFFF',
        width: '85%',
        borderRadius: 10,
        alignItems: 'center',
        paddingHorizontal: 16,
        paddingTop: 20,
        paddingBottom: 40,
    },
})