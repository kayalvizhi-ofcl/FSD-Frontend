for (let k = 1; k <= 10; k++) {

    if (k === 5) {
        continue; // skip 5
    }

    if (k === 8) {
        break; // stop at 8
    }

    console.log(k);
}