const INITIAL_STATE = {
    sections: [
        {
            title: 'fruits',
            imageUrl: require('../../assets/fruits.png'),
            id: 1,
            linkUrl: 'shop/fruits'
        },
        {
            title: 'vegetables',
            imageUrl: require('../../assets/vegetables.png'),
            id: 2,
            linkUrl: 'shop/vegetables'
        },
        {
            title: 'nuts',
            imageUrl: require('../../assets/nuts.png'),
            id: 3,
            linkUrl: 'shop/nuts'
        },
        {
            title: 'herbs',
            imageUrl: require('../../assets/herbs.png'),
            size: 'large',
            id: 4,
            linkUrl: 'shop/herbs'
        },
        {
            title: 'spices',
            imageUrl: require('../../assets/spices.png'),
            size: 'large',
            id: 5,
            linkUrl: 'shop/spices'
        }
    ]
};

const directoryReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        default:
            return state;
    }
};

export default directoryReducer;