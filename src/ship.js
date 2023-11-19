class Ship{
    length;
    hitCount = 0;
    name;
    taken_coords = [];
    sunk = false;
    constructor(length =0, name='carrier', coords = '0,0', direction = 'H'){
        console.log(coords)
        this.length = length;
        this.name = name;
        const coords_arr = coords.split(',');
        const X_val = parseInt(coords_arr[0]);
        const Y_val = parseInt(coords_arr[1]); 
        for(var i = 0;i<length; i++){
            if(direction ==='H'){
                if(X_val+i >= 0 && X_val+i<10) this.taken_coords.push(`${X_val+i},${Y_val}`);
                else {
                    this.taken_coords = [];
                    break;
                }
            }
            else if(direction ==='V'){
                if(Y_val+i >= 0 && Y_val+i<10) this.taken_coords.push(`${X_val},${Y_val+i}`);
                else {
                    this.taken_coords = [];
                    break;
                }
            }
        }
        
    };

    hit = () =>this.hitCount++;
    isSunk = () => {
        if(this.hitCount >= this.length){
            this.sunk = true
        }
        return this.sunk;
        
    }
}

module.exports = Ship;
