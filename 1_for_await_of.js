const emulate = (id, ms) =>
    new Promise((resolve) => {
        setTimeout(() => resolve(id), ms);
    });

const promises = [emulate(3, 1500), emulate(1, 250), emulate(2, 500)];

// Перед началом итераций ждет, когда ВСЕ промисы зарезолвятся.
async function old() {
    for (const promise of await Promise.all(promises)) {
        console.log('Old:', promise);
    }
}

// Перед началом итераций ждет, когда СЛЕДУЮЩИЙ промис зарезолвится.
async function modern() {
    // ES2020 syntax: for await
    for await (const promise of promises) {
        console.log('Modern:', promise);
    }
}

modern(); // 3 1 2
// old() // 3 1 2

// node 14.3.0
