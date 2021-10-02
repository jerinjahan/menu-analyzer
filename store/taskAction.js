import { ADD_TASK, DELETE_TASK, DID_TASK, GET_BOOKS } from "./taskTypes";
import * as combinedJson from '../assets/data/index.js';

export const addTask = (task) => ({
    type: ADD_TASK,
    payload: task
})
export const deleteTask = (id) => ({
    type: DELETE_TASK,
    payload: id
})
export const didTask = (id) => ({
    type: DID_TASK,
    payload: id
})

export const getBookss = () => {
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
                type: GET_BOOKS,
                payload: allUserProfile
            });
        };
    } catch (error) {
        // Add custom logic to handle errors
    }
};

export const getBooks = () => {
    try {
        return async dispatch => {
            let allUserProfile = [{
                name: combinedJson.default.Cynthia.profile.name,
                pictureUrl: combinedJson.default.Cynthia.profile.pictureUrl,
                count: 0
            }];

            dispatch({
                type: GET_BOOKS,
                payload: allUserProfile
            });
        };
    } catch (error) {
        // Add custom logic to handle errors
        console.log(error);
    }
};