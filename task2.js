let readConfig = (path, callback) => {

    if (typeof path === 'string') {
        
        setTimeout(() => {
            callback(null, { path: path });
        })

    } else {
        return callback(new Error("Ошибка, обьект не строка"));
    }

}