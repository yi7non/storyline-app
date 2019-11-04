class Storage {
    
    constructor() {}

    persistData(state) {
        state.status = 'function';
        localStorage.setItem('state', JSON.stringify(state));
    }

    readStorage(state) {
        console.log('readStorage1', state);
        
        const storage = JSON.parse(localStorage.getItem('state'));
        
        // Restoring state from the localStorage
        if (storage) {
            const keys = Object.keys(storage);
            keys.forEach(key => state[key] = storage[key]);
        };
        
        
    }
}

export default Storage;