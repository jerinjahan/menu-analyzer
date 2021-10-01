
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

/** import components */
import NetworkChecking from '../components/networkChecking';
import { COLORS, FONTS } from '../constants';
import FilterUser from '../components/FilterUser';
import Loader from '../components/Loader';

/** network check */
import NetInfo from '@react-native-community/netinfo';
import * as combinedJson  from '../assets/data/index.js';

const calcSize = (size) => size
const { height, width } = Dimensions.get('window');



const UserListScreen = ({ navigation, route }) => {
    const [isOffline, setOfflineStatus] = useState(false);
    const [loading, setLoading] = useState(true);
    const [showModal, setShowModal] = useState(false);
    const [data, setData] = useState([]);

    const [searchItem, setSearchItem] = useState('');
    const userList = [
        {
            "pictureUrl": "https://chaldal.tech/assignment-assets/gabriel-silverio-u3WmDyKGsrY-unsplash.jpg",
            "name": "Brittany Dodson"
        },
        {
            "pictureUrl": "https://chaldal.tech/assignment-assets/jack-finnigan-rriAI0nhcbc-unsplash.jpg",
            "name": "Cynthia Ahmed"
        }
    ];

    useEffect(() => {
        const removeNetInfoSubscription = NetInfo.addEventListener((state) => {
            console.log('state = ', state.isConnected);
            const offline = !(state.isConnected && state.isInternetReachable);
            setOfflineStatus(offline);
            if (!offline) {
                setLoading(false);
                // console.log('combinedJson  = ',combinedJson.object3);
                // Promise.all([
                //     getIndustryList(),
                //     getWorkerCategory(),
                //     getSkillSet(),
                //     getAvailabilityType(),
                //     getJobContractType(),
                //     getJobLevel(),
                //     getPayType(),
                //     getEducationLevel(),
                //     getMinimunJobExperience(),
                //     getIndustryListByCount()
                // ]).then(async (res) => {
                //     console.log('res = ',res);
                //     await setMapData('@gonojobs_indus_list', res[0]);
                // });
                
            }
        });
        return () => removeNetInfoSubscription();
    }, []);

    const fetchData = async () => {
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
                <Text style={{ ...FONTS.subtitle2, color: COLORS.gray }}>{item.name}</Text>
            </View>
            <View style={{
                position: 'absolute',
                top: 10,
                right: 10,
            }}>
                <Text style={{
                    ...FONTS.status,
                    color: COLORS.white, backgroundColor: COLORS.theme,
                    paddingHorizontal: 10,
                    paddingVertical: 3
                }}
                >
                    SuperActive
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
                                <FilterUser setShowModal={setShowModal} />
                            )}
                            <View
                                style={{
                                    borderWidth: 0,
                                    flexDirection: 'row',
                                    marginBottom: 25,
                                    alignItems: 'center',
                                    justifyContent: 'flex-end'
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
                                    data={userList}
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
        marginBottom: 20
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
    },
    userDetailsWrapper: {
        flex: 1,
        borderWidth: 0,
        backgroundColor: COLORS.white,
        marginRight: calcSize(10),
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