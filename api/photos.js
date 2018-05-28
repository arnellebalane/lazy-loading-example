const photos = [ {
    url: require('../images/01.jpg'),
    placeholder: require('../images/01-placeholder.jpg')
}, {
    url: require('../images/02.jpg'),
    placeholder: require('../images/02-placeholder.jpg')
}, {
    url: require('../images/03.jpg'),
    placeholder: require('../images/03-placeholder.jpg')
}, {
    url: require('../images/04.jpg'),
    placeholder: require('../images/04-placeholder.jpg')
}, {
    url: require('../images/05.jpg'),
    placeholder: require('../images/05-placeholder.jpg')
}, {
    url: require('../images/06.jpg'),
    placeholder: require('../images/06-placeholder.jpg')
}, {
    url: require('../images/07.jpg'),
    placeholder: require('../images/07-placeholder.jpg')
}, {
    url: require('../images/08.jpg'),
    placeholder: require('../images/08-placeholder.jpg')
}, {
    url: require('../images/09.jpg'),
    placeholder: require('../images/09-placeholder.jpg')
}, {
    url: require('../images/10.jpg'),
    placeholder: require('../images/10-placeholder.jpg')
} ];

function all() {
    return Promise.resolve(photos);
}

export default {
    all
};
