const initialState = {
	feed:[],
	offset:0,
	feedLoading: false
};

const FeedReducer = (state = initialState, action) => {

	/*if(action.type == 'changeName') {
		return {...state, name:action.payload.name};
	}*/

	if(action.type == 'incrementFeed') {
		return {...state, feed:action.payload.feed.concat(action.payload.feed)};
	}

	if(action.type == 'changeFeedLoadingStatus') {
		return {...state, feedLoading:action.payload.status};
	}	


	return state;
}

export default FeedReducer;