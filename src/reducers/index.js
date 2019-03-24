const data = (state, action) => {
  switch(action.type) {
    case 'SEARCH_VIDEO':

      let results = [];
      const { categories } = state.data;
      const { query } = action.payload;

      if (query) {
        categories.map((item) => {
          return item.playlist.filter((video)=>{
            return video.author.toLowerCase().includes(query.toLowerCase()) && results.push(video) 
          })
        })
      } 

      return {
        ...state,
        search: results,
      }

    default:
      return state
  }
}

export default data;