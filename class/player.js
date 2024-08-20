class Player {

    constructor(name, startingRoom) {
        this.name = name;
        this.currentRoom = startingRoom;
        this.items = [];
    }

    move(direction) {

        const nextRoom = this.currentRoom.getRoomInDirection(direction);

        // If the next room is valid, set the player to be in that room
        if (nextRoom) {
            this.currentRoom = nextRoom;

            nextRoom.printRoom(this);
        } else {
            console.log("You cannot move in that direction");
        }
    }

    printInventory() {
        if (this.items.length === 0) {
            console.log(`${this.name} is not carrying anything.`);
        } else {
            console.log(`${this.name} is carrying:`);
            for (let i = 0 ; i < this.items.length ; i++) {
                console.log(`  ${this.items[i].name}`);
            }
        }
    }

    takeItem(itemName) {

        // Fill this in
        //Remove item from the room
        let item = this.currentRoom.getItemByName(itemName);

        //Add item to the user
        this.items.push(item);



    }

    dropItem(itemName) {

        // Fill this in
        //Remove from player inventory
        let item = this.getItemByName(itemName)

        //Add to room inventory
        this.currentRoom.items.push(item);

    }

    eatItem(itemName) {
        // Fill this in

    }

    getItemByName(name) {

        // Fill this in
                // Fill this in
                let indexItem = this.items.findIndex(item=>item.name === name)
                //Find and store item
               let deletedItem = this.items.splice(indexItem,1);
                return deletedItem[0];


    }
}

module.exports = {
  Player,
};
