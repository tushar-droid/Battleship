class ship{
    length;
    hitCount = 0;
    name;
    sunk = false;
    constructor(length, name){
        this.length = length;
        this.name = name;
    }
    hit = () =>this.hitCount++;
    isSunk = () => {
        if(this.hitCount >= this.length){
            this.sunk = true
        }
        return this.sunk;
        
    }
}

module.exports = ship;
