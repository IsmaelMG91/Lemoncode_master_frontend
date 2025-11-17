/**
 * 5. Slot Machine
El objetivo de este ejercicio es crear una máquina tragaperras utilizando clases donde cada vez que juguemos insertemos una moneda. 
Cada máquina tragaperras (instancia) tendrá un contador de monedas que automáticamente se irá incrementando conforme vayamos jugando.

Cuando se llame al método play el número de monedas se debe incrementar de forma automática y debe generar tres booleanos aleatorios que representarán el estado de las 3 ruletas. 
El usuario habrá ganado en caso de que los tres booleanos sean true, y por tanto deberá mostrarse por consola el mensaje:

"Congratulations!!!. You won <número de monedas> coins!!";
y reiniciar las monedas almacenadas, ya que las hemos conseguido y han salido de la máquina. En caso contrario deberá mostrar otro mensaje:

"Good luck next time!!".
 */

class SlotMachine {

    coins = 0;
    slots = [];
    winner = false;

    play() {
        for (let i = 0; i <= 3; i++) {
            let slotResult = Math.random() < 0.5 ? false : true;
            this.slots.push(slotResult);
        }
        this.slots.some(slot => slot === false ) ? this.winner = false : this.winner = true;

        if(this.winner === true) {
            console.log(`Congratulations!!!. You win ${++this.coins} coins!!`);
            this.coins = 0;
        } else {
            this.coins++;
            console.log(`Good luck next time`);
        }

        this.slots = [];
        this.winner = false;
        console.log(this.coins)
    };
}

const machine1 = new SlotMachine();
machine1.play();
machine1.play();
machine1.play();
machine1.play();
machine1.play();