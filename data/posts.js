import { USERS } from './users'

export const POSTS = [
    {
        imageUrl: require('../assets/like_icon.png'),
        user: USERS[0].user,
        likes: 0,
        caption: 'Flooding',
        profile_picture: USERS[0].image,
        comments: [
            {
                user: 'Sophie',
                comment: 'Woah!',
            }
        ],
    },
    {
        imageUrl: require('../assets/SafeLink.png'),
        user: USERS[1].user,
        likes: 12,
        caption: 'Storm',
        profile_picture: USERS[1].image,
        comments: [
            {
                user: 'Jane',
                comment: 'Scary',
            },
            {
                user: 'Sophie',
                comment: 'Oh no! I hope you guys are staying safe',
            },
        ],
    },
    {
        imageUrl: require('../assets/SafeLink.png'),
        user: USERS[2].user,
        likes: 340,
        caption: 'Earthquake!!! Hope everyone is staying safe <3',
        profile_picture: USERS[2].image,
        comments: [
            
        ],
    },
]