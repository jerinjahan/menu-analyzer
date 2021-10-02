
import { ADD_TODO, DELETE_TODO, GET_USERS, FILTERED_BY_NAME, UPDATE_FILTER } from "../actionTypes";
import * as combinedJson from '../../assets/data/index.js';

const getInitalData = () => {
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
    return allUserProfile;
}

const initialState = {
    todo_list: [
        { "task": "HTML I", "done": true, "id": "1" },
        { "task": "CSS", "done": true, "id": "2" },
        { "task": "Responsive design", "done": true, "id": "3" },
    ],
    users_list: getInitalData(),
    filterUsers: [],
    filterOptions: {
        fromDate: '',
        toDate: '',
        active: false,
        superActive: false,
        bored: false
    }
};

export default function (state = initialState, action) {
    switch (action.type) {
        case ADD_TODO: {
            const { id, task } = action.payload
            return {
                ...state,
                filterOptions: {
                    fromDate: action.payload.fromDate,
                    toDate: action.payload.toDate,
                    active: action.payload.active,
                    superActive: action.payload.superActive,
                    bored: action.payload.bored
                }
            };
        }
        case DELETE_TODO: {
            const { id } = action.payload
            return {
                ...state,
                todo_list: state.todo_list.filter((todo) => todo.id != id)
            };
        }
        case GET_USERS:
            return { ...state, users_list: action.payload };
        case FILTERED_BY_NAME:
            return {
                ...state,
                filterUsers: state.users_list.filter(
                    m => m.name.toLowerCase().includes(action.payload.name.toLowerCase()),
                ),
            };
        case UPDATE_FILTER: {
            // const {
            //     fromDate,
            //     toDate,
            //     active,
            //     superActive,
            //     bored } = action.payload
            return {
                ...state,
                filterOptions: {
                    // fromDate: fromDate,
                    // toDate: toDate,
                    // active: active,
                    // superActive: superActive,
                    // bored: bored
                    fromDate: '',
                    toDate: '',
                    active: true,
                    superActive: true,
                    bored: false
                }
            };
        }
        default:
            return state;
    }
}
