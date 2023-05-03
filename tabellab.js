let table = document.querySelector(".table");
let colCount = 5;
let array = [["Пункт назначения — Плутон", "Destination Pluto, Beyond the Flyby","1 × 60’ HD", "США", "2016"],
    ["Загадки океана","Ocean Secrets","1 × 60’ 4K/HD","Великобритания","2020"],
    ["Длинноносые дельфины","Spinner Dolphins","1 × 60’ HD","Бразилия","2016"],
    ["Главные научные открытия","Top Science Stories","1 × 60’ HD","США","2017"]
];
let count = 0; 
for (let i = 0; i<=200; i++){
    let child = document.createElement("tr");
    for (let j = 0; j < colCount; j++){
        let el = document.createElement("td");
        el.textContent = array[count][j];
        console.log(count,j);
        child.appendChild(el);
        count++;
        if (count==4){count=0};
    }
    table.appendChild(child);
}