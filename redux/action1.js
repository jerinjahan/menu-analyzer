
import * as combinedJson from '../assets/data/index.js';

export const GET_USERS = 'GET_USERS';
export const FILTERED_BY_NAME = 'FILTERED_BY_NAME';
export const SET_DATE_RANGE = 'SET_DATE_RANGE';

export const GET_FROM_DATE = 'GET_FROM_DATE';

export const getUsers = () => {
    try {
        return async dispatch => {
            let allUserProfile = [];
            allUserProfile.push({
                name: combinedJson.default.Cynthia.profile.name,
                pictureUrl: combinedJson.default.Cynthia.profile.pictureUrl,
                count: 0
            });
            allUserProfile.push({
                name: combinedJson.default.Brittany.profile.name,
                pictureUrl: combinedJson.default.Brittany.profile.pictureUrl,
                count: 0
            });
            allUserProfile.push({
                name: combinedJson.default.Gomez.profile.name,
                pictureUrl: combinedJson.default.Gomez.profile.pictureUrl,
                count: 0
            });
            allUserProfile.push({
                name: combinedJson.default.Harold.profile.name,
                pictureUrl: combinedJson.default.Harold.profile.pictureUrl,
                count: 0
            });
            allUserProfile.push({
                name: combinedJson.default.Harold2.profile.name,
                pictureUrl: combinedJson.default.Harold2.profile.pictureUrl,
                count: 0
            });
            allUserProfile.push({
                name: combinedJson.default.Harold3.profile.name,
                pictureUrl: combinedJson.default.Harold3.profile.pictureUrl,
                count: 0
            });
            allUserProfile.push({
                name: combinedJson.default.Harold4.profile.name,
                pictureUrl: combinedJson.default.Harold4.profile.pictureUrl,
                count: 0
            });
            allUserProfile.push({
                name: combinedJson.default.Harold5.profile.name,
                pictureUrl: combinedJson.default.Harold5.profile.pictureUrl,
                count: 0
            });
            allUserProfile.push({
                name: combinedJson.default.Harold6.profile.name,
                pictureUrl: combinedJson.default.Harold6.profile.pictureUrl,
                count: 0
            });
            allUserProfile.push({
                name: combinedJson.default.Harold7.profile.name,
                pictureUrl: combinedJson.default.Harold7.profile.pictureUrl,
                count: 0
            });
            allUserProfile.push({
                name: combinedJson.default.Harold.profile.name,
                pictureUrl: combinedJson.default.Harold.profile.pictureUrl,
                count: 0
            });
            allUserProfile.push({
                name: combinedJson.default.Harold8.profile.name,
                pictureUrl: combinedJson.default.Harold8.profile.pictureUrl,
                count: 0
            });
            allUserProfile.push({
                name: combinedJson.default.Harold9.profile.name,
                pictureUrl: combinedJson.default.Harold9.profile.pictureUrl,
                count: 0
            });
            allUserProfile.push({
                name: combinedJson.default.Harold10.profile.name,
                pictureUrl: combinedJson.default.Harold10.profile.pictureUrl,
                count: 0
            });
            allUserProfile.push({
                name: combinedJson.default.Harold11.profile.name,
                pictureUrl: combinedJson.default.Harold11.profile.pictureUrl,
                count: 0
            });
            allUserProfile.push({
                name: combinedJson.default.Harold12.profile.name,
                pictureUrl: combinedJson.default.Harold12.profile.pictureUrl,
                count: 0
            });
            allUserProfile.push({
                name: combinedJson.default.Harold13.profile.name,
                pictureUrl: combinedJson.default.Harold13.profile.pictureUrl,
                count: 0
            });
            allUserProfile.push({
                name: combinedJson.default.Harold14.profile.name,
                pictureUrl: combinedJson.default.Harold14.profile.pictureUrl,
                count: 0
            });
            allUserProfile.push({
                name: combinedJson.default.Harold15.profile.name,
                pictureUrl: combinedJson.default.Harold15.profile.pictureUrl,
                count: 0
            });
            allUserProfile.push({
                name: combinedJson.default.Harold16.profile.name,
                pictureUrl: combinedJson.default.Harold16.profile.pictureUrl,
                count: 0
            });
            dispatch({
                type: GET_MOVIES,
                payload: res.data,
            });
        };
    } catch (error) {
        // Add custom logic to handle errors
    }
};

export const filterByName = data => dispatch => {
    dispatch({
        type: ADD_FAVORITE_ITEM,
        payload: data,
    });
};


export const setDateRange = data => dispatch => {
    dispatch({
        type: SET_DATE_RANGE,
        payload: {
            fromDate: data.fromDate,
            toDate: data.toDate
        },
    });
};

export const getFromDate = data => dispatch => {
    dispatch({
        type: GET_FROM_DATE,
        payload: data,
    });
};