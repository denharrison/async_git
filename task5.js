const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms)); // это у нас задержка

const getUser = (id) => delay(20).then(() => ({ id, name: "Alice" })); // функция в которой вызываем функцию с задержкой и через then отдаем обьект 

const getPosts = (uid) => // функция которая создает промис с задержкой в котором 2 обьекта в массиве

  delay(20).then(() => [
    { id: 1, userId: uid },
    { id: 2, userId: uid },
  ]);


const getFirstPostComments = (pid) => // функция которая создает промис с задержкой в котором обьект в массиве (это у нас инфа с комментарием)
  delay(20).then(() => [{ id: 11, postId: pid }]);

// Написать код, чтобы получить комментарий первого поста

let obtainFirstPostComment = async () => { 

    let firstComment = await getFirstPostComments()
    console.log(firstComment)

} 

obtainFirstPostComment()