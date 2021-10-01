import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, TouchableOpacity } from 'react-native';
import {
    UserAnalyzerScreen,
    UserListScreen,
} from './screens';

import { NavigationContainer, useNavigation } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { FONTS, COLORS } from './constants';
import { AntDesign } from '@expo/vector-icons';

export default function App() {
    const Stack = createStackNavigator();
    const AppStackNavigator = () => {
        const navigation = useNavigation();
        const headerStyle = {
            shadowRadius: 3,
            backgroundColor: COLORS.theme,
        }
        const headerTitleStyle = {
            fontFamily: FONTS.headerLine6.fontFamily,
            fontSize: FONTS.headerLine6.fontSize,
            letterSpacing: FONTS.headerLine6.letterSpacing,
            lineHeight: FONTS.headerLine6.lineHeight,
            color: COLORS.dark,
            marginLeft: -16,
            borderWidth: 0
        }
        headerLeft = () => (
            <TouchableOpacity onPress={() => { navigation.goBack() }} style={{paddingHorizontal:10}}>
                <AntDesign
                    name="arrowleft"
                    size={32} 
                    color={COLORS.white}
                />
            </TouchableOpacity>
        )
        return (
            <Stack.Navigator initialRouteName='Home'>
                <Stack.Screen
                    name="Home"
                    component={UserAnalyzerScreen}
                    options={{
                        title: '',
                        headerStyle: headerStyle,
                        headerTitleStyle: headerTitleStyle,
                    }}
                />
                <Stack.Screen
                    name="UserList"
                    component={UserListScreen}
                    options={{
                        title: '',
                        headerStyle: headerStyle,
                        headerTitleStyle: headerTitleStyle,
                        headerLeft: headerLeft
                    }}
                />
            </Stack.Navigator>
        );
    };

    return (
        <>
            <StatusBar backgroundColor={'transparent'} translucent />
            <NavigationContainer>
                <AppStackNavigator />
            </NavigationContainer>
        </>

    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});
