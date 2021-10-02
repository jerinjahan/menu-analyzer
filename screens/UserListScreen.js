
import React, { useState, useEffect } from 'react';
import { StatusBar } from 'expo-status-bar';
import {
    TextInput,
    TouchableOpacity,
    FlatList,
    StyleSheet,
    View,
    Text,
    Dimensions,
    KeyboardAvoidingView,
    SafeAreaView,
    Image,
} from 'react-native';
import { Ionicons, SimpleLineIcons } from '@expo/vector-icons';
import moment from "moment";

/** import components */
import NetworkChecking from '../components/networkChecking';
import { COLORS, FONTS } from '../constants';
import FilterUser from '../components/FilterUser';
import Loader from '../components/Loader';

/** network check */
import NetInfo from '@react-native-community/netinfo';
import * as combinedJson from '../assets/data/index.js';

/** redux */
import { connect, useSelector, useDispatch } from 'react-redux';
import { updateFilter, getUsers, filterByName } from '../redux/action';

const calcSize = (size) => size
const { height, width } = Dimensions.get('window');

const UserListScreen = ({ navigation, route }) => {
    const { filterOptions,users_list } = useSelector(state => state.usersReducer);

    const [fromDate, setFromDate] = useState(route.params?.fromDate);
    const [toDate, setToDate] = useState(route.params?.toDate);

    const [isOffline, setOfflineStatus] = useState(false);
    const [loading, setLoading] = useState(true);
    const [showModal, setShowModal] = useState(false);

    const [filteredData, setFilteredData] = useState([]);
    const [searchItem, setSearchItem] = useState('');
    const [allDates, setAllDates] = useState([]);

    useEffect(() => {
        const removeNetInfoSubscription = NetInfo.addEventListener((state) => {
            const offline = !(state.isConnected && state.isInternetReachable);
            setOfflineStatus(offline);
            if (!offline) {
                prepareData();
                const willFocusSubscription = navigation.addListener('focus', () => {
                    setLoading(true);
                    prepareData();
                });
                return willFocusSubscription;
            }
        });
        return () => removeNetInfoSubscription();
    }, [showModal]);

    const prepareData = () => {
        let startDate = moment(filterOptions.fromDate).format("YYYY-MM-DD");
        let endDate = moment(filterOptions.toDate).format("YYYY-MM-DD");
        let daylist = getDaysArray(startDate, endDate);

        setAllDates(daylist);
        filterMealCount(daylist, users_list);
        setLoading(false);
    }

    const getDaysArray = (start, end) => {
        var dates = [start];

        var currDate = moment(start).startOf('day');
        var lastDate = moment(end).startOf('day');

        while (currDate.add(1, 'days').diff(lastDate) < 0) {
            let d = moment(currDate.toDate()).format("YYYY-MM-DD");
            dates.push(d);
        }
        dates.push(end);
        return dates;
    };

    const filterMealCount = (daylist, allUserProfile) => {
        for (let i = 0; i < daylist.length; i++) {
            const singleDay = daylist[i];
            if (combinedJson.default.Cynthia['calendar']['dateToDayId'][singleDay] != undefined) {
                let dayId = combinedJson.default.Cynthia['calendar']['dateToDayId'][singleDay];
                if (combinedJson.default.Cynthia['calendar']['daysWithDetails'][dayId]['details']['mealsWithDetails'] != undefined) {
                    let obj = combinedJson.default.Cynthia['calendar']['daysWithDetails'][dayId]['details']['mealsWithDetails'];
                    allUserProfile[0].count = allUserProfile[0].count + (Object.keys(obj).length);
                }
            }

            if (combinedJson.default.Brittany['calendar']['dateToDayId'][singleDay] != undefined) {
                let dayId = combinedJson.default.Brittany['calendar']['dateToDayId'][singleDay];
                if (combinedJson.default.Brittany['calendar']['daysWithDetails'][dayId]['details']['mealsWithDetails'] != undefined) {
                    let obj = combinedJson.default.Brittany['calendar']['daysWithDetails'][dayId]['details']['mealsWithDetails'];
                    allUserProfile[1].count = allUserProfile[1].count + (Object.keys(obj).length);
                }
            }

            if (combinedJson.default.Gomez['calendar']['dateToDayId'][singleDay] != undefined) {
                let dayId = combinedJson.default.Gomez['calendar']['dateToDayId'][singleDay];
                if (combinedJson.default.Gomez['calendar']['daysWithDetails'][dayId]['details']['mealsWithDetails'] != undefined) {
                    let obj = combinedJson.default.Gomez['calendar']['daysWithDetails'][dayId]['details']['mealsWithDetails'];
                    allUserProfile[2].count = allUserProfile[2].count + (Object.keys(obj).length);
                }
            }

            if (combinedJson.default.Harold['calendar']['dateToDayId'][singleDay] != undefined) {
                let dayId = combinedJson.default.Harold['calendar']['dateToDayId'][singleDay];
                if (combinedJson.default.Harold['calendar']['daysWithDetails'][dayId]['details']['mealsWithDetails'] != undefined) {
                    let obj = combinedJson.default.Harold['calendar']['daysWithDetails'][dayId]['details']['mealsWithDetails'];
                    allUserProfile[3].count = allUserProfile[3].count + (Object.keys(obj).length);
                }
            }

            if (combinedJson.default.Harold2['calendar']['dateToDayId'][singleDay] != undefined) {
                let dayId = combinedJson.default.Harold2['calendar']['dateToDayId'][singleDay];
                if (combinedJson.default.Harold2['calendar']['daysWithDetails'][dayId]['details']['mealsWithDetails'] != undefined) {
                    let obj = combinedJson.default.Harold2['calendar']['daysWithDetails'][dayId]['details']['mealsWithDetails'];
                    allUserProfile[4].count = allUserProfile[0].count + (Object.keys(obj).length);
                }
            }

            if (combinedJson.default.Harold3['calendar']['dateToDayId'][singleDay] != undefined) {
                let dayId = combinedJson.default.Harold3['calendar']['dateToDayId'][singleDay];
                if (combinedJson.default.Harold3['calendar']['daysWithDetails'][dayId]['details']['mealsWithDetails'] != undefined) {
                    let obj = combinedJson.default.Harold3['calendar']['daysWithDetails'][dayId]['details']['mealsWithDetails'];
                    allUserProfile[5].count = allUserProfile[5].count + (Object.keys(obj).length);
                }
            }

            if (combinedJson.default.Harold4['calendar']['dateToDayId'][singleDay] != undefined) {
                let dayId = combinedJson.default.Harold4['calendar']['dateToDayId'][singleDay];
                if (combinedJson.default.Harold4['calendar']['daysWithDetails'][dayId]['details']['mealsWithDetails'] != undefined) {
                    let obj = combinedJson.default.Harold4['calendar']['daysWithDetails'][dayId]['details']['mealsWithDetails'];
                    allUserProfile[6].count = allUserProfile[6].count + (Object.keys(obj).length);
                }
            }

            if (combinedJson.default.Harold5['calendar']['dateToDayId'][singleDay] != undefined) {
                let dayId = combinedJson.default.Harold5['calendar']['dateToDayId'][singleDay];
                if (combinedJson.default.Harold5['calendar']['daysWithDetails'][dayId]['details']['mealsWithDetails'] != undefined) {
                    let obj = combinedJson.default.Harold5['calendar']['daysWithDetails'][dayId]['details']['mealsWithDetails'];
                    allUserProfile[7].count = allUserProfile[7].count + (Object.keys(obj).length);
                }
            }

            if (combinedJson.default.Harold6['calendar']['dateToDayId'][singleDay] != undefined) {
                let dayId = combinedJson.default.Harold6['calendar']['dateToDayId'][singleDay];
                if (combinedJson.default.Harold6['calendar']['daysWithDetails'][dayId]['details']['mealsWithDetails'] != undefined) {
                    let obj = combinedJson.default.Harold6['calendar']['daysWithDetails'][dayId]['details']['mealsWithDetails'];
                    allUserProfile[8].count = allUserProfile[8].count + (Object.keys(obj).length);
                }
            }

            if (combinedJson.default.Harold7['calendar']['dateToDayId'][singleDay] != undefined) {
                let dayId = combinedJson.default.Harold7['calendar']['dateToDayId'][singleDay];
                if (combinedJson.default.Harold7['calendar']['daysWithDetails'][dayId]['details']['mealsWithDetails'] != undefined) {
                    let obj = combinedJson.default.Harold7['calendar']['daysWithDetails'][dayId]['details']['mealsWithDetails'];
                    allUserProfile[9].count = allUserProfile[9].count + (Object.keys(obj).length);
                }
            }

            if (combinedJson.default.Harold8['calendar']['dateToDayId'][singleDay] != undefined) {
                let dayId = combinedJson.default.Harold8['calendar']['dateToDayId'][singleDay];
                if (combinedJson.default.Harold8['calendar']['daysWithDetails'][dayId]['details']['mealsWithDetails'] != undefined) {
                    let obj = combinedJson.default.Harold8['calendar']['daysWithDetails'][dayId]['details']['mealsWithDetails'];
                    allUserProfile[10].count = allUserProfile[10].count + (Object.keys(obj).length);
                }
            }

            if (combinedJson.default.Harold9['calendar']['dateToDayId'][singleDay] != undefined) {
                let dayId = combinedJson.default.Harold9['calendar']['dateToDayId'][singleDay];
                if (combinedJson.default.Harold9['calendar']['daysWithDetails'][dayId]['details']['mealsWithDetails'] != undefined) {
                    let obj = combinedJson.default.Harold9['calendar']['daysWithDetails'][dayId]['details']['mealsWithDetails'];
                    allUserProfile[11].count = allUserProfile[11].count + (Object.keys(obj).length);
                }
            }

            if (combinedJson.default.Harold10['calendar']['dateToDayId'][singleDay] != undefined) {
                let dayId = combinedJson.default.Harold10['calendar']['dateToDayId'][singleDay];
                if (combinedJson.default.Harold10['calendar']['daysWithDetails'][dayId]['details']['mealsWithDetails'] != undefined) {
                    let obj = combinedJson.default.Harold10['calendar']['daysWithDetails'][dayId]['details']['mealsWithDetails'];
                    allUserProfile[12].count = allUserProfile[12].count + (Object.keys(obj).length);
                }
            }

            if (combinedJson.default.Harold11['calendar']['dateToDayId'][singleDay] != undefined) {
                let dayId = combinedJson.default.Harold11['calendar']['dateToDayId'][singleDay];
                if (combinedJson.default.Harold11['calendar']['daysWithDetails'][dayId]['details']['mealsWithDetails'] != undefined) {
                    let obj = combinedJson.default.Harold11['calendar']['daysWithDetails'][dayId]['details']['mealsWithDetails'];
                    allUserProfile[13].count = allUserProfile[13].count + (Object.keys(obj).length);
                }
            }

            if (combinedJson.default.Harold12['calendar']['dateToDayId'][singleDay] != undefined) {
                let dayId = combinedJson.default.Harold12['calendar']['dateToDayId'][singleDay];
                if (combinedJson.default.Harold12['calendar']['daysWithDetails'][dayId]['details']['mealsWithDetails'] != undefined) {
                    let obj = combinedJson.default.Harold12['calendar']['daysWithDetails'][dayId]['details']['mealsWithDetails'];
                    allUserProfile[14].count = allUserProfile[14].count + (Object.keys(obj).length);
                }
            }

            if (combinedJson.default.Harold13['calendar']['dateToDayId'][singleDay] != undefined) {
                let dayId = combinedJson.default.Harold13['calendar']['dateToDayId'][singleDay];
                if (combinedJson.default.Harold13['calendar']['daysWithDetails'][dayId]['details']['mealsWithDetails'] != undefined) {
                    let obj = combinedJson.default.Harold13['calendar']['daysWithDetails'][dayId]['details']['mealsWithDetails'];
                    allUserProfile[15].count = allUserProfile[15].count + (Object.keys(obj).length);
                }
            }
            if (combinedJson.default.Harold14['calendar']['dateToDayId'][singleDay] != undefined) {
                let dayId = combinedJson.default.Harold14['calendar']['dateToDayId'][singleDay];
                if (combinedJson.default.Harold14['calendar']['daysWithDetails'][dayId]['details']['mealsWithDetails'] != undefined) {
                    let obj = combinedJson.default.Harold14['calendar']['daysWithDetails'][dayId]['details']['mealsWithDetails'];
                    allUserProfile[16].count = allUserProfile[16].count + (Object.keys(obj).length);
                }
            }
            if (combinedJson.default.Harold15['calendar']['dateToDayId'][singleDay] != undefined) {
                let dayId = combinedJson.default.Harold15['calendar']['dateToDayId'][singleDay];
                if (combinedJson.default.Harold15['calendar']['daysWithDetails'][dayId]['details']['mealsWithDetails'] != undefined) {
                    let obj = combinedJson.default.Harold15['calendar']['daysWithDetails'][dayId]['details']['mealsWithDetails'];
                    allUserProfile[17].count = allUserProfile[17].count + (Object.keys(obj).length);
                }
            }
            if (combinedJson.default.Harold16['calendar']['dateToDayId'][singleDay] != undefined) {
                let dayId = combinedJson.default.Harold16['calendar']['dateToDayId'][singleDay];
                if (combinedJson.default.Harold16['calendar']['daysWithDetails'][dayId]['details']['mealsWithDetails'] != undefined) {
                    let obj = combinedJson.default.Harold16['calendar']['daysWithDetails'][dayId]['details']['mealsWithDetails'];
                    allUserProfile[18].count = allUserProfile[18].count + (Object.keys(obj).length);
                }
            }
            setFilteredData(allUserProfile);
        }
        let filterBasedOnStatus = allUserProfile.filter(m => {
            if (filterOptions.superActive && m.count > 10) {
                return m;
            } else if (filterOptions.active && m.count >= 4) {
                return m;
            } else if (filterOptions.bored && m.count < 4) {
                return m;
            }
            else {
                return false;
            }
        });
        setFilteredData(filterBasedOnStatus);
    }

    const searchData = (text) => {
        if (text) {
            let filteredData = users_list.filter((item) => item.name.toLowerCase().includes(text.toLowerCase()));
            setFilteredData(filteredData);
        } else {
            setFilteredData(users_list);
        }
        setSearchItem(text);
    };
    const renderItem = ({ item }) => (
        <View style={styles.userDetailsWrapper}>
            <View style={styles.imageContainer}>
                <Image resizeMode='contain' resizeMethod='resize' source={{ uri: item.pictureUrl }} style={styles.image} />
            </View>
            <View style={styles.textContainer}>
                <Text style={{ ...FONTS.subtitle2, color: COLORS.gray }}>{item.name}</Text>
            </View>
            <View style={{
                position: 'absolute',
                top: 10,
                right: 10,
            }}>
                <Text style={{
                    ...FONTS.status,
                    color: COLORS.white,
                    backgroundColor: item.count > 4 ? COLORS.theme : COLORS.danger,
                    paddingHorizontal: 10,
                    paddingVertical: 3
                }}
                >
                    {item.count > 10 ? 'SuperActive' : item.count > 4 ? 'Active' : 'Bored'}
                </Text>
            </View>
        </View>
    );

    return (
        <View style={styles.container}>
            {isOffline ? (<NetworkChecking />) : (
                <>
                    {loading ? (<Loader />) : (
                        <>
                            {showModal && (
                                <FilterUser
                                    setShowModal={setShowModal}
                                />
                            )}
                            <View
                                style={{
                                    borderWidth: 0,
                                    flexDirection: 'row',
                                    marginBottom: 25,
                                    alignItems: 'center',
                                    justifyContent: 'flex-end',
                                    // paddingHorizontal: calcSize(30),
                                }}
                            >
                                <Text style={{ ...FONTS.subtitle1, color: COLORS.theme, marginRight: 10 }}>Edit Filter</Text>
                                <TouchableOpacity onPress={() => setShowModal(true)}>
                                    <SimpleLineIcons
                                        name="equalizer" size={20}
                                        color={COLORS.theme}
                                        style={{ transform: [{ rotate: '90deg' }] }}
                                    />
                                </TouchableOpacity>

                            </View>

                            <View style={styles.searchBarWrapper}>
                                <View style={styles.inputWrapper}>
                                    <TextInput
                                        style={styles.inputStyle}
                                        underlineColorAndroid="#f000"
                                        placeholder="Search by name"
                                        placeholderTextColor={COLORS.inputPlaceholderColor}
                                        value={searchItem}
                                        onChangeText={(text) => searchData(text)}
                                    />
                                    <View style={styles.iconArea}>
                                        <TouchableOpacity onPress={() => { }}>
                                            <Ionicons name="search-outline" size={25} color={COLORS.theme} />
                                        </TouchableOpacity>
                                    </View>
                                </View>
                            </View>

                            <View style={styles.list}>
                                <FlatList
                                    data={filteredData}
                                    scrollEventThrottle={32}
                                    keyExtractor={(item) => item.name}
                                    numColumns={2}
                                    renderItem={renderItem}
                                />
                            </View>
                        </>
                    )}
                </>
            )}
        </View>
    );
};

const mapStateToProps = (state, ownProps) => {
    return {
        todo_list: state.usersReducer.todo_list,
    }
}

const mapDispatchToProps = { filterByName}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(UserListScreen)

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingVertical: 16,
        paddingHorizontal: calcSize(30),
        backgroundColor: COLORS.homeBg,
    },
    searchBarWrapper: {
        borderWidth: 0,
        flexDirection: 'row',
        marginBottom: 20,
        // paddingHorizontal: calcSize(30),
    },
    inputWrapper: {
        flex: 2,
        flexDirection: 'column',
        justifyContent: 'center'
    },
    inputStyle: {
        fontFamily: FONTS.body2.fontFamily,
        fontSize: FONTS.body2.fontSize,
        letterSpacing: FONTS.body2.letterSpacing,
        lineHeight: FONTS.body2.lineHeight,
        borderColor: COLORS.theme,
        backgroundColor: COLORS.inuputBackground,
        color: COLORS.dark,
        paddingLeft: 50,
        borderWidth: 1,
        height: 45
    },
    iconArea: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        position: 'absolute',
        borderWidth: 0,
        marginLeft: 16,
    },


    list: {
        flex: 1,
        // paddingHorizontal: calcSize(30),
    },
    userDetailsWrapper: {
        flex: 1,
        borderWidth: 0,
        backgroundColor: COLORS.white,
        marginRight: calcSize(10),
        marginBottom: calcSize(16),
        minWidth: (width - 80) / 2,
        justifyContent: 'flex-start',
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 10,
        },
        shadowOpacity: 0.12,
        shadowRadius: 60,
    },
    imageContainer: {
        flex: 1,
        alignItems: 'flex-start'
    },
    image: {
        width: calcSize(139),
        height: calcSize(138)
    },
    textContainer: {
        flex: 1,
        paddingHorizontal: 10,
        marginTop: 5,
        marginBottom: 20
    },

});