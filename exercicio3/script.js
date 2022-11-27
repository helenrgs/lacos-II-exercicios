const ranking = (maioresPaises) => {
    i = 1;
    maioresPaises = ["Rússia", "Canadá", "China", "EUA", "Brasil"];
    for(let item of maioresPaises){
        console.log(`${i} - ${item}`)
        i = i + 1; 
    }
}

ranking()