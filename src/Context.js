import React, {useContext, createContext, useReducer} from 'react'
import backgroundSong from "./components/Sounds/backmusic.mp3"
import boy from "./components/images/boy.svg"

const GlobalState = createContext();

export function useGlobalState(){
    return useContext(GlobalState)
}

export const ACTIONS = {
    TOGGLE_NAV: 'toggle-nav',
    TOGGLE_MUSIC: 'toggle-backgroundMusic',
    TOGGLE_SETTINGS: 'toggle-settings',
    SET_USERNAME: 'set-userName',
    SET_PROGRESS: 'set-progress',
    SET_AVATAR: 'set-avatar',
    UPDATE_GOLD: 'update-goldCount',
    UPDATE_SILVER: 'update-silverCount',
    UPDATE_BRONZE: 'update-bronzeCount',
    STAR_RATING: 'star-rating'
}

function reducer(state, action){
    switch(action.type){
        case ACTIONS.TOGGLE_NAV:
            return {...state, isNavOpen: !state.isNavOpen}
        case ACTIONS.TOGGLE_MUSIC:
            state.backgroundMusic.loop = true;
            if (state.isMusicPlaying) {
                state.backgroundMusic.pause();
            } else {
                state.backgroundMusic.play();
            }
            return { ...state, isMusicPlaying: !state.isMusicPlaying };
        case ACTIONS.TOGGLE_SETTINGS:
            return {...state, showSettings: !state.showSettings}
        case ACTIONS.SET_USERNAME:
            if (action.payload.length >1){
                return ({...state, profile:{...state.profile, userName: action.payload}})
            }
            return {...state, profile:{...state.profile, userName:"User1960"}}
        case ACTIONS.SET_PROGRESS:
            if(action.payload.id !== 'alphabet' && action.payload.id !== 'grammar')
                if(state.starRating[action.payload.id] < 2.5){
                    return ({...state, profile:{...state.profile, progress: state.profile.progress + 20}})
                }
                else{
                    return state
                }
            else{
                if(state.starRating[action.payload.id] < 2.5){
                    return ({...state, profile:{...state.profile, progress: state.profile.progress + 10}})
                }
                else{
                    return state
                }
            }
        case ACTIONS.SET_AVATAR:
            return {...state, profile:{...state.profile, avatar: action.payload}}
        case ACTIONS.UPDATE_GOLD:
            return {...state, medal:{...state.medal, goldCount: state.medal.goldCount +1}}
        case ACTIONS.UPDATE_SILVER:
            return {...state, medal:{...state.medal, silverCount: state.medal.silverCount +1}}
        case ACTIONS.UPDATE_BRONZE:
            return {...state, medal:{...state.medal, bronzeCount: state.medal.bronzeCount +1}}
        case ACTIONS.STAR_RATING:
            if(action.payload.starRating > state.starRating[action.payload.id]){
                return ({...state, starRating:{...state.starRating, [action.payload.id]: action.payload.starRating}})
            }
            return state
            
        default:
            return state
    }
}
const Context = ({children}) => {
    const initialState ={
        isNavOpen: true,
        backgroundMusic: new Audio(backgroundSong),
        showSettings: true,
        isMusicPlaying: false,
        profile: {
            userName: 'User1960',
            progress: 0,
            avatar: boy,
        },
        medal:{
            goldCount: 0,
            silverCount: 0,
            bronzeCount: 0,
        },
        starRating:{
            alphabet: 0.0,
            vowel: 0.0,
            consonant: 0.0,
            number: 0.0,
            body: 0.0,
            grammar: 0.0,
        }
    }
    const [state, dispatch] = useReducer(reducer, initialState)
  return (
    <GlobalState.Provider value={{state, dispatch}}>
        {children}
    </GlobalState.Provider>
  )
}

export default Context