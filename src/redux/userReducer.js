const UserReducer = (state = false, action) => {
    switch (action.type) {
      case 'SET_STATUS':
        return action.payload
        break;
    
      default:
        return state;
    }
}

export default UserReducer;