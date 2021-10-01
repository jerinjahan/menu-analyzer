
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

const calcSize = (size) => size
const { height, width } = Dimensions.get('window');

const UserListScreen = ({ navigation, route }) => {
    // console.log('route = ', route.params);
    const { fromDate, toDate, active, superActive, bored } = route.params;
    const [isOffline, setOfflineStatus] = useState(false);
    const [loading, setLoading] = useState(true);
    const [showModal, setShowModal] = useState(false);
    const [userList, setUserList] = useState([]);
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
                    console.log('on focus');
                    setLoading(true);
                    prepareData();
                });
                return willFocusSubscription;
            }
        });
        return () => removeNetInfoSubscription();
    }, []);

    const prepareData = () => {
        let startDate = moment(fromDate).format("YYYY-MM-DD");
        let endDate = moment(toDate).format("YYYY-MM-DD");
        let daylist = getDaysArray(startDate, endDate);

        setAllDates(daylist);

        let allUserProfile = [];
        allUserProfile.push({
            name: combinedJson.default.Cynthia.profile.name,
            pictureUrl: combinedJson.default.Cynthia.profile.pictureUrl,
            // userId: combinedJson.default.Cynthia.profile,
            // dateToDayId: combinedJson.default.Cynthia['calendar']['dateToDayId'],
            // mealIdToDayId: combinedJson.default.Cynthia['calendar']['mealIdToDayId'],
            count: 0
        });
        allUserProfile.push({
            name: combinedJson.default.Brittany.profile.name,
            pictureUrl: combinedJson.default.Brittany.profile.pictureUrl,
            // userId: combinedJson.default.Brittany.profile,
            // dateToDayId: combinedJson.default.Brittany['calendar']['dateToDayId'],
            // mealIdToDayId: combinedJson.default.Brittany['calendar']['mealIdToDayId'],
            count: 0
        });
        allUserProfile.push({
            name: combinedJson.default.Gomez.profile.name,
            pictureUrl: combinedJson.default.Gomez.profile.pictureUrl,
            // userId: combinedJson.default.Gomez.profile,
            // dateToDayId: combinedJson.default.Gomez['calendar']['dateToDayId'],
            // mealIdToDayId: combinedJson.default.Gomez['calendar']['mealIdToDayId'],
            count: 0
        });
        allUserProfile.push({
            name: combinedJson.default.Harold.profile.name,
            pictureUrl: combinedJson.default.Harold.profile.pictureUrl,
            // userId: combinedJson.default.Harold.profile,
            // dateToDayId: combinedJson.default.Harold['calendar']['dateToDayId'],
            // mealIdToDayId: combinedJson.default.Harold['calendar']['mealIdToDayId'],
            count: 0
        });
        allUserProfile.push({
            name: combinedJson.default.Harold2.profile.name,
            pictureUrl: combinedJson.default.Harold2.profile.pictureUrl,
            // userId: combinedJson.default.Harold2.profile,
            // dateToDayId: combinedJson.default.Harold2['calendar']['dateToDayId'],
            // mealIdToDayId: combinedJson.default.Harold2['calendar']['mealIdToDayId'],
            count: 0
        });
        allUserProfile.push({
            name: combinedJson.default.Harold3.profile.name,
            pictureUrl: combinedJson.default.Harold3.profile.pictureUrl,
            // userId: combinedJson.default.Harold3.profile,
            // dateToDayId: combinedJson.default.Harold3['calendar']['dateToDayId'],
            // mealIdToDayId: combinedJson.default.Harold3['calendar']['mealIdToDayId'],
            count: 0
        });
        allUserProfile.push({
            name: combinedJson.default.Harold4.profile.name,
            pictureUrl: combinedJson.default.Harold4.profile.pictureUrl,
            // userId: combinedJson.default.Harold4.profile,
            // dateToDayId: combinedJson.default.Harold4['calendar']['dateToDayId'],
            // mealIdToDayId: combinedJson.default.Harold4['calendar']['mealIdToDayId'],
            count: 0
        });
        allUserProfile.push({
            name: combinedJson.default.Harold5.profile.name,
            pictureUrl: combinedJson.default.Harold5.profile.pictureUrl,
            // userId: combinedJson.default.Harold5.profile,
            // dateToDayId: combinedJson.default.Harold5['calendar']['dateToDayId'],
            // mealIdToDayId: combinedJson.default.Harold5['calendar']['mealIdToDayId'],
            count: 0
        });
        allUserProfile.push({
            name: combinedJson.default.Harold6.profile.name,
            pictureUrl: combinedJson.default.Harold6.profile.pictureUrl,
            // userId: combinedJson.default.Harold6.profile,
            // dateToDayId: combinedJson.default.Harold6['calendar']['dateToDayId'],
            // mealIdToDayId: combinedJson.default.Harold6['calendar']['mealIdToDayId'],
            count: 0
        });
        allUserProfile.push({
            name: combinedJson.default.Harold7.profile.name,
            pictureUrl: combinedJson.default.Harold7.profile.pictureUrl,
            // userId: combinedJson.default.Harold7.profile,
            // dateToDayId: combinedJson.default.Harold7['calendar']['dateToDayId'],
            // mealIdToDayId: combinedJson.default.Harold7['calendar']['mealIdToDayId'],
            count: 0
        });
        allUserProfile.push({
            name: combinedJson.default.Harold.profile.name,
            pictureUrl: combinedJson.default.Harold.profile.pictureUrl,
            // userId: combinedJson.default.Harold.profile,
            // dateToDayId: combinedJson.default.Harold['calendar']['dateToDayId'],
            // mealIdToDayId: combinedJson.default.Harold['calendar']['mealIdToDayId'],
            count: 0
        });
        allUserProfile.push({
            name: combinedJson.default.Harold8.profile.name,
            pictureUrl: combinedJson.default.Harold8.profile.pictureUrl,
            // userId: combinedJson.default.Harold8.profile,
            // dateToDayId: combinedJson.default.Harold8['calendar']['dateToDayId'],
            // mealIdToDayId: combinedJson.default.Harold8['calendar']['mealIdToDayId'],
            count: 0
        });
        allUserProfile.push({
            name: combinedJson.default.Harold9.profile.name,
            pictureUrl: combinedJson.default.Harold9.profile.pictureUrl,
            // userId: combinedJson.default.Harold9.profile,
            // dateToDayId: combinedJson.default.Harold9['calendar']['dateToDayId'],
            // mealIdToDayId: combinedJson.default.Harold9['calendar']['mealIdToDayId'],
            count: 0
        });
        allUserProfile.push({
            name: combinedJson.default.Harold10.profile.name,
            pictureUrl: combinedJson.default.Harold10.profile.pictureUrl,
            // userId: combinedJson.default.Harold10.profile,
            // dateToDayId: combinedJson.default.Harold10['calendar']['dateToDayId'],
            // mealIdToDayId: combinedJson.default.Harold10['calendar']['mealIdToDayId'],
            count: 0
        });
        allUserProfile.push({
            name: combinedJson.default.Harold11.profile.name,
            pictureUrl: combinedJson.default.Harold11.profile.pictureUrl,
            // userId: combinedJson.default.Harold11.profile,
            // dateToDayId: combinedJson.default.Harold11['calendar']['dateToDayId'],
            // mealIdToDayId: combinedJson.default.Harold11['calendar']['mealIdToDayId'],
            count: 0
        });
        allUserProfile.push({
            name: combinedJson.default.Harold12.profile.name,
            pictureUrl: combinedJson.default.Harold12.profile.pictureUrl,
            // userId: combinedJson.default.Harold12.profile,
            // dateToDayId: combinedJson.default.Harold12['calendar']['dateToDayId'],
            // mealIdToDayId: combinedJson.default.Harold12['calendar']['mealIdToDayId'],
            count: 0
        });
        allUserProfile.push({
            name: combinedJson.default.Harold13.profile.name,
            pictureUrl: combinedJson.default.Harold13.profile.pictureUrl,
            // userId: combinedJson.default.Harold13.profile,
            // dateToDayId: combinedJson.default.Harold13['calendar']['dateToDayId'],
            // mealIdToDayId: combinedJson.default.Harold13['calendar']['mealIdToDayId']
            count: 0
        });
        allUserProfile.push({
            name: combinedJson.default.Harold14.profile.name,
            pictureUrl: combinedJson.default.Harold14.profile.pictureUrl,
            // userId: combinedJson.default.Harold14.profile,
            // dateToDayId: combinedJson.default.Harold14['calendar']['dateToDayId'],
            // mealIdToDayId: combinedJson.default.Harold14['calendar']['mealIdToDayId'],
            count: 0
        });
        allUserProfile.push({
            name: combinedJson.default.Harold15.profile.name,
            pictureUrl: combinedJson.default.Harold15.profile.pictureUrl,
            // userId: combinedJson.default.Harold15.profile,
            // dateToDayId: combinedJson.default.Harold15['calendar']['dateToDayId'],
            // mealIdToDayId: combinedJson.default.Harold15['calendar']['mealIdToDayId']
            count: 0
        });
        allUserProfile.push({
            name: combinedJson.default.Harold16.profile.name,
            pictureUrl: combinedJson.default.Harold16.profile.pictureUrl,
            // userId: combinedJson.default.Harold16.profile,
            // dateToDayId: combinedJson.default.Harold16['calendar']['dateToDayId'],
            // mealIdToDayId: combinedJson.default.Harold16['calendar']['mealIdToDayId'],
            count: 0
        });
        setUserList(allUserProfile);
        filterMealCount(daylist, allUserProfile);
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
            if (superActive && m.count > 10 ) {
                return m;
            }else if (active && m.count >= 4){
                return m;
            }else if (bored && m.count < 4){
                return m;
            }
            else {
                return false ;
            }
        });
        setFilteredData(filterBasedOnStatus);
    }

    const searchData = (text) => {
        if (text) {
            // let filteredData = allFeaturedJobLists.filter((item) => item.locationDistrict.toLowerCase().includes(text.toLowerCase()));
            // setFeaturedJobLists(filteredData);
            console.log('in if serach com = ', text);
        } else {
            // setFeaturedJobLists(allFeaturedJobLists);
            // console.log('in else serach com = ', allFeaturedJobLists.length);
            // setSelectedLocation('');
        }
        // setSearchItem(text);
        // setSelectedLocation(text);
    };
    const renderItem = ({ item }) => (
        <View style={styles.userDetailsWrapper}>
            <View style={styles.imageContainer}>
                <Image resizeMode='contain' resizeMethod='resize' source={{ uri: item.pictureUrl }} style={styles.image} />
            </View>
            <View style={styles.textContainer}>
                <Text style={{ ...FONTS.subtitle2, color: COLORS.gray }}>{item.name} -- {item.count}</Text>
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
                                    starDate={fromDate} 
                                    endDate={toDate} 
                                    isActive={active} 
                                    isSuperActive={superActive} 
                                    isBored={bored} 
                                    navigation={navigation} 
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

export default UserListScreen;

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


    status: {

    }

});