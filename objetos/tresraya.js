class TresEnRaya {
    constructor() {
        this.tablero = [
            [null, null, null],
            [null, null, null],
            [null, null, null],
        ];
        this.jugadorActual = "X"; 
        this.movimientos = 0;
    }

   
    movimiento(fila, columna) {
       
        if (this.tablero[fila][columna] === null) {
            
            this.tablero[fila][columna] = this.jugadorActual; 
            this.movimientos++; 
            this.dibujar(); 

            
            if (this.comprobarGanador()) {
                this.dibujar(); 
                console.log("¡El jugador ${this.jugadorActual} ha ganado!"); 
                return true; 
            }

            
            if (this.movimientos === 9) {
                this.dibujar(); 
                console.log("¡El juego ha terminado en empate!"); 
                return true;
            }

          
            this.jugadorActual = this.jugadorActual === "X" ? "O" : "X";
        } else {
            console.log("Esta casilla ya está ocupada. Elige otra."); 
        }

        return false; 
    }

    
    comprobarGanador() {
        for (let i = 0; i < 3; i++) {
           
            if (
                (this.tablero[i][0] === this.jugadorActual && this.tablero[i][1] === this.jugadorActual && this.tablero[i][2] === this.jugadorActual) ||
                (this.tablero[0][i] === this.jugadorActual && this.tablero[1][i] === this.jugadorActual && this.tablero[2][i] === this.jugadorActual)
            ) {
                return true; 
            }
        }

        
        if (
            (this.tablero[0][0] === this.jugadorActual && this.tablero[1][1] === this.jugadorActual && this.tablero[2][2] === this.jugadorActual) ||
            (this.tablero[0][2] === this.jugadorActual && this.tablero[1][1] === this.jugadorActual && this.tablero[2][0] === this.jugadorActual)
        ) {
            return true; 
        }

        return false; 
    }

    
    dibujar() {
        console.log("Tablero:");
        for (let i = 0; i < this.tablero.length; i++) {
            console.log(this.tablero[i].map(celda => (celda === null ? " " : celda)).join(" | "));
            if (i < this.tablero.length - 1) {
                console.log("---------"); 
            }
        }
        
    }
}



// Ejemplo
const juego = new TresEnRaya();
juego.dibujar();


juego.movimiento(0, 2); 
juego.movimiento(1, 1); 
juego.movimiento(0, 0); 
juego.movimiento(2, 1); 
juego.movimiento(0, 1); 



    
    


