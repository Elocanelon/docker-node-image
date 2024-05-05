const connectingToDb = () => {
    const dbPromise = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve();
        }, 1000);
    });

    return dbPromise
};


export default connectingToDb;