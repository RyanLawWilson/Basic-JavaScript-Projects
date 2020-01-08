function myDictionary() {
    var jigglyPuff = {
        height: "1 foot 8 inches",
        weight: 12.1,
        gender: "M",
        hp: 50,
        attack: 20,
        defense: 10,
        spAttack: 20,
        spDefense: 10,
        speed: 10,
        sound: "Jiggly!",
    };

    delete jigglyPuff.sound
    document.getElementById("dictionary").innerHTML = jigglyPuff.sound;
}