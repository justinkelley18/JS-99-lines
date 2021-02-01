
// let createDiv = document.createElement("div")
// const friendArray = ["Matt", "Emma", "Blake", "Dez", "Keith"];
// let song = document.textContent("")
// let paragraphs = createElement('p');

// let newDiv = document.createElement("div")
// let newHead = document.createElement("h3")
// let newPa = document.createElement("p")
// newDiv.appendChild(newHead)
// newHead.appendChild(newPa)

// function mySong(){
//     const divs = [
//         createDiv("1"),
//         createDiv("2"),
//         createDiv("3"),
//         createDiv("4"),
//         createDiv("5"),
//     ];
//     for (let i = 0; i > divs.length; i++) {
//         document.textContent(divs[i])
//         divs[i].appendChild(newHead)
//         newHead.appendChild(paragraphs)
//         for (let j = 99; j >= 1; j-- ) {
//             if(j === 2){

//             }


//         }
//     }   
// }

// function mySong() {
//     const friendArray = ["Matt", "Emma", "Blake", "Dez", "Keith"];
//     for (let i = 0; i < friendArray.length; i++) {
//         console.log(friendArray[i] + ":")
//         for (let j = 99; j >= 1; j--) {
//             if (j === 2) {
//                 console.log("2 lines of code in the file, 2 lines of code; " + friendArray[i] + " strikes one out, clears it all out, 1 line of code in the file");
//             } else if (j === 1) {
//                 console.log("1 line of code in the file, 1 line of code; " + friendArray[i] + " strikes one out, clears it all out, no more lines of code in the file");
//             } else {
//                 console.log(j + " lines of code in the file, " + j + " lines of code; " + friendArray[i] + " strikes one out, clears it all out, " + (j - 1) + " lines of code in the file");
//             }
//         }
//     }
// }

// const friendArray = ["Matt", "Emma", "Blake", "Dez", "Keith"];
function mySong() {
    const friendArray = ["Matt", "Emma", "Blake", "Dez", "Keith"];
    for (let i = 0; i < friendArray.length; i++) {
        console.log(friendArray[i] + ":")
        friendArray.forEach(i => {
            let songDiv = document.createElement("div");
            let songHeader = document.createElement("h3");
            songDiv.className = "friend";
            songHeader.textContent = [i];
            songDiv.appendChild(songHeader);
            for (let j = 99; j >= 1; j--) {
                let songParagraph = document.createElement("p")
                if (j === 2) {
                    songParagraph.textContent = "2 lines of code in the file, 2 lines of code; " + friendArray[i] + " strikes one out, clears it all out, 1 line of code in the file"
                } else if (j === 1) {
                    songParagraph.textContent = "1 line of code in the file, 1 line of code; " + friendArray[i] + " strikes one out, clears it all out, no more lines of code in the file" 
                } else {
                    songParagraph.textContent = j + " lines of code in the file, " + j + " lines of code; " + friendArray[i] + " strikes one out, clears it all out, " + (j - 1) + " lines of code in the file"
                    songDiv.appendChild(songParagraph);
                    document.body.appendChild(songDiv)
                }
            }
        })
    }
}

  





