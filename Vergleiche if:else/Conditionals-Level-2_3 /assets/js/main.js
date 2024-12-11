function calc(bestimmteZahl){
    const festeZahl = 27;

    const diff = 27 - bestimmteZahl;
    
    if(bestimmteZahl >= festeZahl){
        console.log(diff * 2);
    }
}

calc(123)