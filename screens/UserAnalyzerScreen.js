
import React, { useState, useEffect } from 'react';
import { StatusBar } from 'expo-status-bar';
import {
    TextInput,
    TouchableOpacity,
    StyleSheet,
    View,
    Text,
    KeyboardAvoidingView,
    SafeAreaView,
} from 'react-native';
import { COLORS, FONTS } from '../constants';
import { MaterialIcons } from '@expo/vector-icons';

/** import components */
import NetworkChecking from '../components/networkChecking';
import Loader from '../components/Loader';
import InputDatePicker from '../components/DatePicker';

/** network check */
import NetInfo from '@react-native-community/netinfo';

const calcSize = (size) => size
const monthNames = [
    "January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
];

const UserAnalyzerScreen = ({ navigation }) => {
    const [isOffline, setOfflineStatus] = useState(false);
    const [loading, setLoading] = useState(false);
    const [showFromDate, setShowFromDate] = useState(false);
    const [showToDate, setShowToDate] = useState(false);

    const [fromDate, setFromDate] = useState('');
    const [toDate, setToDate] = useState('');
    const statusList = ['Active', 'Super Active', 'Bored'];


    useEffect(() => {
        const removeNetInfoSubscription = NetInfo.addEventListener((state) => {
            console.log('state = ', state.isConnected);
            const offline = !(state.isConnected && state.isInternetReachable);
            setOfflineStatus(offline);
            if (!offline) {
                setLoading(false);
            }
        });
        return () => removeNetInfoSubscription();
    }, []);

    const showDate = (fromDate) => {
        var d = new Date(fromDate),
            month = monthNames[d.getMonth()],
            day = '' + d.getDate(),
            year = d.getFullYear();
        if (day.length < 2)
            day = '0' + day;

        return [day , month , year].join(' ');
    }
    return (
        <View style={styles.container}>
            {isOffline ? (<NetworkChecking />) : (
                <>
                    <StatusBar style="light" />

                    {loading ? (<Loader />) : (
                        <>
                            <Text style={{
                                ...FONTS.headerLine5,
                                color: COLORS.theme,
                                textAlign: 'center'
                            }}>
                                User Analyzer
                            </Text>
                            <Text style={{
                                ...FONTS.subtitle2,
                                color: COLORS.gray,
                                textAlign: 'center'
                            }}>
                                Select filters to generate report
                            </Text>


                            <View style={styles.searchContainer}>
                                <Text style={{ ...FONTS.headerLine6, color: COLORS.theme, borderBottomColor: COLORS.gray, borderBottomWidth: 1, paddingBottom: 5, marginBottom: 10 }}>Date</Text>
                                <View style={styles.inputWrapper}>
                                    <Text style={{ ...FONTS.subtitle1, color: COLORS.theme, flex: 1 }}>From</Text>

                                    {showFromDate && (
                                        <InputDatePicker
                                            date={fromDate}
                                            setDate={setFromDate}
                                            open={showFromDate}
                                            setOpen={setShowFromDate}
                                        />
                                    )}
                                    <TouchableOpacity
                                        activeOpacity={1}
                                        style={styles.inputStyle}
                                        onPress={() => setShowFromDate(true)}
                                    >
                                        <Text style={{color:fromDate?COLORS.black:COLORS.inputPlaceholderColor}}>{fromDate?showDate(fromDate):'1 July 2021'}</Text>
                                    </TouchableOpacity>
                                </View>

                                <View style={styles.inputWrapper}>
                                    <Text style={{ ...FONTS.subtitle1, color: COLORS.theme, flex: 1 }}>To</Text>
                                    {showToDate && (
                                        <InputDatePicker
                                            date={toDate}
                                            setDate={setToDate}
                                            open={showToDate}
                                            setOpen={setShowToDate}
                                        />
                                    )}
                                    <TouchableOpacity
                                        activeOpacity={1}
                                        style={styles.inputStyle}
                                        onPress={() => setShowToDate(true)}
                                    >
                                        <Text style={{color:toDate?COLORS.black:COLORS.inputPlaceholderColor}}>{toDate?showDate(toDate):'1 July 2021'}</Text>
                                    </TouchableOpacity>

                                </View>

                                <Text style={{
                                    ...FONTS.headerLine6,
                                    color: COLORS.theme,
                                    borderBottomColor: COLORS.gray,
                                    borderBottomWidth: 2,
                                    paddingBottom: 5,
                                    marginBottom: 10
                                }}
                                >
                                    Status
                                </Text>
                                <View style={styles.checkBoxWrapper}>
                                    {
                                        statusList.map((item, index) => (
                                            <View key={index} style={{ flexDirection: 'row' }}>
                                                <MaterialIcons name="check-box" size={20} color={COLORS.theme} />
                                                <Text style={{ color: COLORS.gray, marginLeft: 5 }}>{item}</Text>
                                            </View>
                                        ))
                                    }
                                </View>

                                <TouchableOpacity style={styles.buttonWrapper} onPress={() => navigation.navigate('UserList')}>
                                    <Text style={{ ...FONTS.button, color: COLORS.white }}>generate</Text>
                                </TouchableOpacity>

                            </View>
                        </>
                    )}
                </>
            )}
        </View>
    );
};

export default UserAnalyzerScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingVertical: 16,
        paddingHorizontal: calcSize(30),
        backgroundColor: COLORS.homeBg,
    },
    searchContainer: {
        borderWidth: 1,
        borderColor: COLORS.theme,
        flexDirection: 'column',
        paddingVertical: 20,
        paddingHorizontal: 16,
        marginTop: 50
    },
    inputWrapper: {
        borderWidth: 0,
        flexDirection: 'row',
        marginBottom: 10,
        alignItems: 'center'
    },
    inputStyle: {
        fontFamily: FONTS.body2.fontFamily,
        fontSize: FONTS.body2.fontSize,
        letterSpacing: FONTS.body2.letterSpacing,
        lineHeight: FONTS.body2.lineHeight,
        borderColor: COLORS.theme,
        backgroundColor: COLORS.inuputBackground,
        color: COLORS.dark,
        paddingLeft: 16,
        borderWidth: 1,
        height: 40,
        flex: 3,
        justifyContent: 'center',
        alignItems: 'flex-start',
    },

    checkBoxWrapper: {

    },

    buttonWrapper: {
        backgroundColor: COLORS.theme,
        paddingHorizontal: 16,
        paddingVertical: 10,
        borderRadius: 4,
        marginTop: 30,
        alignSelf: 'center'
    },
});