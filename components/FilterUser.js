import React, { useState, useEffect } from 'react';
import {
    StyleSheet,
    Text,
    View,
    KeyboardAvoidingView,
    Modal,
    Dimensions,
    TouchableOpacity
} from 'react-native';
import { COLORS, FONTS, SIZES } from '../constants';
import { MaterialIcons } from '@expo/vector-icons';
import InputDatePicker from '../components/DatePicker';
import statusList from '../assets/data/status.json';

const WIDTH = Dimensions.get('window').width;

const monthNames = [
    "January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
];


/** redux */
import { connect, useSelector } from 'react-redux';
import { addTodo} from '../redux/action';

const FilterUser = ({ 
    setShowModal,
    // fromDate, 
    // toDate,
    // active,
    // superActive,
    // bored,
    // setFromDate,
    // setToDate,
    // setActive,
    // setSuperActive,
    // setBored,
    addTodo
}) => {
    const { filterOptions } = useSelector(state => state.usersReducer);
    console.log('in filter modal = ',filterOptions);

    const [showFromDate, setShowFromDate] = useState(false);
    const [showToDate, setShowToDate] = useState(false);

    const [fromDate, setFromDate] = useState(filterOptions.fromDate);
    const [toDate, setToDate] = useState(filterOptions.toDate);

    const [active, setActive] = useState(filterOptions.active);
    const [superActive, setSuperActive] = useState(filterOptions.superActive);
    const [bored, setBored] = useState(filterOptions.bored);

    const showDate = (fromDate) => {
        var d = new Date(fromDate),
            month = monthNames[d.getMonth()],
            day = '' + d.getDate(),
            year = d.getFullYear();
        if (day.length < 2)
            day = '0' + day;

        return [day, month, year].join(' ');
    }

    const handleFilters = () => {
        let passData = {
            fromDate: fromDate,
            toDate: toDate,
            active: active,
            superActive: superActive,
            bored: bored
        };
        addTodo(passData);
        setShowModal(false)
    }

    return (
        <Modal
            transparent={true}
            animationType="fade"
        >
            <KeyboardAvoidingView
                behavior={Platform.OS === "ios" ? "padding" : "height"}
            >
                <View style={styles.modalView}>
                    <View style={styles.header}>
                        <Text style={{ ...FONTS.headerLine6, color: COLORS.theme }}>Edit Filter</Text>
                        <TouchableOpacity style={{ justifyContent: 'flex-start', alignItems: 'flex-start' }} onPress={() => setShowModal(false)}>
                            <MaterialIcons
                                name="close" size={40}
                                color={COLORS.theme}
                            />
                        </TouchableOpacity>
                    </View>

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
                                <Text style={{ color: fromDate ? COLORS.black : COLORS.inputPlaceholderColor }}>{fromDate ? showDate(fromDate) : '1 July 2021'}</Text>
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
                                <Text style={{ color: toDate ? COLORS.black : COLORS.inputPlaceholderColor }}>{toDate ? showDate(toDate) : '1 July 2021'}</Text>
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
                                    <View key={index} style={{ flexDirection: 'row', paddingVertical: 5 }}
                                        onStartShouldSetResponder={() => {
                                            if (item.id == 1) {
                                                setActive(!active);
                                            }
                                            if (item.id == 2) {
                                                setSuperActive(!superActive);
                                            }
                                            if (item.id == 3) {
                                                setBored(!bored);
                                            }
                                        }}
                                    >
                                        {(item.id == 1 && active) || (item.id == 2 && superActive) || (item.id == 3 && bored) ? (
                                            <MaterialIcons name="check-box" size={20} color={COLORS.theme} />
                                        ) : (
                                            <MaterialIcons name="check-box-outline-blank" size={20} color={COLORS.theme} />
                                        )}
                                        <Text style={{ color: COLORS.gray, marginLeft: 5 }}>{item.value}</Text>
                                    </View>
                                ))
                            }
                        </View>

                        <TouchableOpacity style={styles.buttonWrapper} onPress={() => handleFilters()}>
                            <Text style={{ ...FONTS.button, color: COLORS.white }}>generate</Text>
                        </TouchableOpacity>

                    </View>
                </View>
            </KeyboardAvoidingView>
        </Modal>
    );
};

const styles = StyleSheet.create({
    modalView: {
        // flex:1,
        paddingVertical: 10,
        paddingHorizontal: SIZES.padding,
        backgroundColor: COLORS.white,
        width: WIDTH,
        height: "100%"
    },
    loader: {
        padding: 10,
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
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
    buttonWrapper: {
        backgroundColor: COLORS.theme,
        paddingHorizontal: 16,
        paddingVertical: 10,
        borderRadius: 4,
        marginTop: 30,
        alignSelf: 'center'
    },
});

const mapStateToProps = (state, ownProps) => {
    return {
        user_lists: state.usersReducer.user_lists,
    }
}

const mapDispatchToProps = { addTodo}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(FilterUser)
