const divisor = (n) => {

    for (let i = 1; i <= n; i++) {
        if (n % i === 0)
            console.log(i + " "); //ARATAM TOTI DIVIZORII UNUI NUMAR
    }
}
divisor(50);