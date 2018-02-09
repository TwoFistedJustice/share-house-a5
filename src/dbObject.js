
/********************************************
 * this is to be the basic form of the data object in Firebase
 *
 * It will need to store:
 *      Master (static) Lists which will change infrequently
    *          Task list
    *          Roommate profiles
    *          Guest profiles
    *          House profile
    *          party planning lists
    *               shopping
    *              task prep
 *
 *
 * Long Term it will need to utilize different services for different functions
 * Some of those will no doubt have some data storage features
 *              LIKELY CANDIDATES
 *          Messenger
 *          Cost splitting
 *          guest profiles (facebook)
 *
 * ************************************************/

//this is just for design/development purposes - not for use
const dbObject = {
    tasks: {
        textData:{
            name:'',
            description: ''
        }
    },
    roommates: {
        textData:{},
        socialMediaLinks: []
    },
    guests: {
        textData:{},
        socialMediaLinks: []
    },
    houseProfile: {
        images:[],
        textData: {}
    },
    party:{
        toDoEveryTime:[],
        toDoConditional: [],

    }


}