import search from '../actions/search';

export default (router, app) => {
    router.get('/', search);
};