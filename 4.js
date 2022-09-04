let num = prompt("Дай ціле число")
num = Number(num)

if(isNaN(num)) {
    console.log('помилка');
} else{
    console.log(num - 7);
    console.log(num + 9);
}


