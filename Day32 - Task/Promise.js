function fetchData() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("Data fetched successfully!");
        }, 2000);
    });
}

async function getData() {
    try {
        let result = await fetchData();
        console.log(result);
    } catch (error) {
        console.log(error);
    }
}

getData();