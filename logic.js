let rows = 5, columns = 5, turns = 0, currentTile, otherTile;

window.onload = initialiseGame();

function initialiseGame() {
    /**Initialising 5 X 5 size board */
    for (let r = 0; r < rows; r++) {
        for (let c = 0; c < columns; c++) {
            /**Creating Images*/
           let tile = document.createElement("img");
           tile.src = "./images/blank2.jpg"
        /**Adding drag and drop functionalities. */
        /**Click and start dragging an image */
        tile.addEventListener("dragstart", dragStart);
        /**Dragging an image over. */
        tile.addEventListener("dragover", dragOver);
        /**Dragging an image and start entering into another image */
        tile.addEventListener("dragenter", dragEnter);
        /**Dragging an image and leaving with image without having an 
         * actual swap */
        tile.addEventListener("dragleave", dragLeave);
        /**Dragging and start dripping an image onto another image */
        tile.addEventListener("drop", dragDrop);
        /**Dropping the image onto another image and finally leaving 
         * the area after completing the swap. */
        tile.addEventListener("dragend", dragEnd);
           document.getElementById("board").append(tile);
        }
    }
    let pieces = [];
    for (let i = 1; i <= rows * columns; i++) {
        /**Assigning values to the array. Pushing "1" to "25" to the array
         * which represents the images numbers and before inserting them
         * to the array we are converting these numbers to the string vlaue.*/
        pieces.push(i.toString());   
    }

    /**Reversing the array */
    pieces.reverse();
    /**Swapping and shuffling the image even further */
    for (let i = 0; i < pieces.length; i++) {
        let j = Math.floor(Math.random() * pieces.length);
        let temp = pieces[i];
        pieces[i] = pieces[j];
        pieces[j] = temp;
    }

    for (let i = 0; i < pieces.length; i++) {
        let tile = document.createElement("img");
        tile.src = "./images/" + pieces[i] + ".jpg";
        /**Adding drag and drop functionalities. */
        /**Click and start dragging an image */
        tile.addEventListener("dragstart", dragStart);
        /**Dragging an image over. */
        tile.addEventListener("dragover", dragOver);
        /**Dragging an image and start entering into another image */
        tile.addEventListener("dragenter", dragEnter);
        /**Dragging an image and leaving with image without having an 
         * actual swap */
        tile.addEventListener("dragleave", dragLeave);
        /**Dragging and start dripping an image onto another image */
        tile.addEventListener("drop", dragDrop);
        /**Dropping the image onto another image and finally leaving 
         * the area after completing the swap. */
        tile.addEventListener("dragend", dragEnd);
        
        document.getElementById("pieces").append(tile);
        
    }
}

/**Dragging the tile */
function dragStart() {
    /**this refers to the image that you are dragging right now. */
    currentTile = this;
}

function dragOver(e) {
    e.preventDefault();
}

function dragEnter(e) {
    e.preventDefault();
}

function dragLeave() {
    
}

function dragDrop() {
    /**this refers to the existing image which we have 
     * swapped with the currentTile image */
    otherTile = this;
}

function dragEnd() {
    if (currentTile.src.includes("blank2")) {
        return;
    }
    let currentImage = currentTile.src;
    let otherImage = otherTile.src;
    currentTile.src = otherImage;
    otherTile.src = currentImage;

    turns += 1;
    document.getElementById("turns").innerText = turns;
}