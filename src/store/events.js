import axios from 'axios'

/**
 * INITIAL STATE
 */

const initialState = []

/**
 * ACTION TYPES
 */

const GET_ALL_EVENTS = 'GET_ALL_EVENTS';
// const ADD_LINK = 'ADD_LINK'
// const REMOVE_LINK = 'REMOVE_LINK'
// const REMOVE_ALL_FROM_COLLECTION = 'REMOVE_ALL_FROM_COLLECTION'

/**
 * ACTION CREATORS
 */

const getAllLinks = allEvents => ({
    type: GET_ALL_EVENTS,
    allEvents
})

// const addLink = link => ({
//   type: ADD_LINK,
//   link
// })

// const removeAllFromCollection = collectionID => ({
//   type: REMOVE_ALL_FROM_COLLECTION,
//   collectionID
// })

/**
 * THUNK CREATORS
 */

export const getAllLinksThunk = collectionId => async dispatch => {
    try {
        const res = await axios.get(`/api/collections/${collectionId}`)
        dispatch(getAllLinks(res.data))
    } catch (error) {
        throw error;
    }
}

// export const removeLinkThunk = linkId => async dispatch => {
//   try {
//     await axios.destroy(`/api/links/${linkId}`)
//     dispatch(removeLink(linkId))
//   } catch (error) {
//     throw error
//   }
// }

/**
 * REDUCER
 */

export default function (state = initialState, action) {
    switch (action.type) {
        case GET_ALL_EVENTS:
            return [...state, ...action.allEvents];
        default:
            return state;
    }
}
