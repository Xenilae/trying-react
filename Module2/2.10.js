const arr = [8, 7, 2, 2, 3, 4, 2, 5, 5, 6, 7, 8, 5, 9, 0, 1];

const uniqueSort = () => {
    const popDublicates = [...new Set(arr)]; //Set SALVEAZA CARACTERELE UNICALE DINTR-UN OBJECT
    console.log(popDublicates)
}

uniqueSort();