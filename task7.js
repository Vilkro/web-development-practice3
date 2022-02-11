function personFromList(list){
    list = ["Aidana", "Bekbolat", "Mariya", "Aleksandr", "Diana"];
    var i = list.length;
    var r = parseInt(Math.random() * i);
    return list[r];
}

personFromList();