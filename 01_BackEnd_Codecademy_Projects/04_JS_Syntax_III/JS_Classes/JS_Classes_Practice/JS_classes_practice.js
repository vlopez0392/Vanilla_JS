//Exercise 1
// You are a college student and you want to stream a movie over one of the campuses Wi-Fi networks. 
// Based on the number of users, some networks won’t have the data to stream a movie.

// The properties of the Network class are:
//     data: Total units of data supplied by the network
//     users: Total numbers of users currently on the network

// Each user on average deducts 5 units from the network’s total data. 
// To watch a movie you must connect to a network that has at least 10 remaining units of data.

// Add a method movieTime() to the Network class that returns true if there is enough data available to watch a movie, false if there isn’t.

class Network{
    constructor(data, users){
        this.data = data;
        this.users = users; 
    }

    movieTime(){
        if(this.data - this.users*5 >=10){
            return true;
        }
        return false;
    }
}

//Exercise 2
// A video game consists of two players floating using 100 helium balloons. The players shoot pellets at each other’s balloons and after 10 minutes the player with the most balloons left wins.

// Write a game function balloonAttack that takes two Player instances, calculates the balloons left for each player after 10 minutes (using the hitsPerMinute property) and returns the name of the winner. If the result is a tie, return the string 'Tie'.

class Player {
    constructor(name, hitsPerMinute) {
      this.name = name;
      this.hitsPerMinute = hitsPerMinute;
      this.balloonCount = 100;
    }
   
    status() {
      console.log(`Player: ${this.name} -- Balllons Left: ${this.balloonCount}`)
    }
  }

  const balloonAttack = (p1, p2) =>{
     const timeElapsed = 10; //In min
     const balloonsP1 = p1.balloonCount - p2.hitsPerMinute*timeElapsed;
     const balloonsP2 = p2.balloonCount - p1.hitsPerMinute*timeElapsed;

     if(balloonsP1 === balloonsP2){
         return 'Tie';
     }else if(balloonsP1 > balloonsP2){
         return p1.name;
     }else{
         return p2.name;
     }
  }

//Exercise 3
//A shift cipher takes a plain text message and shifts each letter forward in the alphabet by a given number. For example, a shift cipher with a shift of 1 would turn the string 'hello' to 'ifmmp'.
//Create a class ShiftCipher that takes the numerical value of the shift as a constructor parameter. The class should have two methods:
// encrypt: takes a plain text string and returns a capitalized string with each letter shifted forward in the alphabet based on the set shift value.
// decrypt: takes an encrypted message and returns a lower case string with each letter shifted back in the alphabet based on the set shift value.
// In both methods, any character outside the alphabet should remain the same.
// But if a character is shifted outside the alphabet in either direction it should be wrapped around to the other side. For example, encrypting a y with a shift of 4 results in C and decrypting an A with a shift of 1 result in z.

class ShiftCipher{
    constructor(shift){
        this.shift = shift;
    }

    encrypt(str){
        const a = 97, z = 122;
        str = str.toLowerCase();
        let strArray = str.split('') ,encrypted = [], msg ='';

        strArray.forEach(element => {
            const encode = element.charCodeAt(0);

            if(encode < a || encode > z){
                encrypted.push(encode);
            }else{
                if((encode + this.shift) > z){
                    encrypted.push(a + this.shift - (1+ (z-encode)));
                }else{
                    encrypted.push(encode + this.shift);
                }
            }
        });

        encrypted.forEach(element => {
            msg = msg.concat(String.fromCharCode(element).toUpperCase());
        });

        return msg; //Encrypted Message
    }   

    decrypt(str){ //Assume every character is either an uppercase letter or another symbol
        const A = 65, Z = 90;
        str = str.toUpperCase();
        let strArray = str.split('') ,decrypted = [], msg ='';
    
        strArray.forEach(element => {
            const decode = element.charCodeAt(0);

            if(decode < A || decode > Z){
                decrypted.push(decode);
            }else{
                if((decode - this.shift) < A){
                    decrypted.push(Z - this.shift + (1+ (decode-A)));
                }else{
                    decrypted.push(decode - this.shift);
                }
            }
        });

        decrypted.forEach(element => {
            msg = msg.concat(String.fromCharCode(element).toLowerCase());
        });

        return msg; //Encrypted Message
    }


    //Utility functions
    static flagUpperCase(str){
        const strArray = str.split(''),
        flagArray = []; //Flag uppercase values
        
        strArray.forEach(element => {
            if(element !== element.toLowerCase()){
                flagArray.push(1); //Uppercase found
            }else{
                flagArray.push(0);
            }
        });
        return flagArray;
    }
}

let tryCipher = new ShiftCipher(2);

