/*
Context: You’re part of a research team that has found a new mysterious organism at the bottom of the ocean near hydrothermal vents. Your team names the organism, Pila aequor (P. aequor), and finds that it is only comprised of 15 DNA bases. The small DNA samples and frequency at which it mutates due to the hydrothermal vents make P. aequor an interesting specimen to study. However, P. aequor cannot survive above sea level and locating P. aequor in the deep sea is difficult and expensive. Your job is to create objects that simulate the DNA of P. aequor for your research team to study. 
*/

//Helper Functions
// Returns a random DNA base
const returnRandBase = () => {
  const dnaBases = ['A', 'T', 'C', 'G']
  return dnaBases[Math.floor(Math.random() * 4)] 
}

// Returns a random single stand of DNA containing 15 bases
const mockUpStrand = () => {
  const newStrand = []
  for (let i = 0; i < 15; i++) {
    newStrand.push(returnRandBase())
  }
  return newStrand
}

//Base mutator
const baseMutator = base =>{
  const dnaBases = ['A','T','C','G'];
  switch(base){
    case 'A':
      dnaBases.splice(dnaBases.indexOf(base), 1);
      break;
    case 'T':
      dnaBases.splice(dnaBases.indexOf(base), 1);
      break;
    case 'C':
      dnaBases.splice(dnaBases.indexOf(base), 1);
      break;
    case 'G':
      dnaBases.splice(dnaBases.indexOf(base), 1);
      break;
    default:
      break;
  }
  return dnaBases[Math.floor(Math.random() * 3)] 
}


/*
Since you need to create multiple objects, create a factory function pAequorFactory() that has two parameters:

    The first parameter is number (no two organisms should have the same number).
    The second parameter is an array of 15 DNA bases.

pAequorFactor() should return an object that contains the properties specimenNum and dna that correspond to the parameters provided. 
*/
//pAequorFactory()
const pAequorFactory = (num, dnaBase) => {
  if(dnaBase.length !== 15){
    console.log('This DNA Base does not belong to P.Aequor')
    return null;
  }else{
    return {
      specimenNum: num,
      dna: dnaBase, 
      
      /*
      Your team wants you to simulate P. aequor‘s high rate of mutation (change in its DNA).

      To simulate a mutation, in pAequorFactory()‘s returned object, add the method .mutate().
      
      .mutate() is responsible for randomly selecting a base in the object’s dna property and changing the current base to a different base. Then .mutate() will return the object’s dna. 
      */
      mutate(){
          const randIndex = Math.floor(Math.random()*14)
          const randBase = this.dna[randIndex];

          //Mutate the base
          this.dna[randIndex] = baseMutator(randBase);
          return this.dna;
        }, 
      
      /*
      Your research team wants to be able to compare the DNA sequences of different P. aequor. You’ll have to add a new method (.compareDNA()) to the returned object of the factory function.

      .compareDNA() has one parameter, another pAequor object.

      The behavior of .compareDNA() is to compare the current pAequor‘s .dna with the passed in pAequor‘s .dna and compute how many bases are identical and in the same locations. .compareDNA() does not return anything, but prints a message that states the percentage of DNA the two objects have in common — use the .specimenNum to identify which pAequor objects are being compared.
      */

      compareDNA(otherSpecimen){
        match = 0;
        for(let i=0; i < 15; i++){
          if(this.dna[i] === otherSpecimen.dna[i]){
            match+=1;
          }
        }
        console.log(`Compared specimens have a ${Math.round((match/15)*100, 3)}% DNA match.`);
      }, 

      /*
      P. aequor have a likelier chance of survival if their DNA is made up of at least 60% 'C' or 'G' bases.

      In the returned object of pAequorFactory(), add another method .willLikelySurvive().

      .willLikelySurvive() returns true if the object’s .dna array contains at least 60% 'C' or 'G' bases. Otherwise, .willLikelySurvive() returns false.
      */

      willLikelySurvive(display = false){
        let CGbaseCount = 0;
        this.dna.forEach(base => {
          if(base === 'C' || base ==='G'){
            CGbaseCount +=1;
          }
        })
        const CGBasePercent = (CGbaseCount/15) *100;
        
        if(CGBasePercent >= 60){
          if(display){
            console.log(`Specimens % of CG bases: ${CGBasePercent}% Will Likely Survive? Yes`)
          }
          return true;
        }
        if(display){
          console.log(`Specimens % of CG bases: ${CGBasePercent}% Will Likely Survive? No`)
        }
        return false;
      }
    }
  }
}

//Simulate
/*With the factory function set up, your team requests that you create 30 instances of pAequor that can survive in their natural environment. Store these instances in an array for your team to study later. 
*/

function survivingSpecimens(){
  let survivalCount = 0, survivingSpecimens = [], it = 0;;
  
  while(survivalCount < 30 ){
    let specimen = pAequorFactory(it,mockUpStrand());

    if(specimen.willLikelySurvive()){
      survivalCount += 1; 
      survivingSpecimens.push(specimen); 
    }

    if(it === 1000){
      console.log(`Simulation ended, 30 instances of potential P.Aequor survivors NOT found!`);
      break;
    }
    it+=1;
  }

  return survivingSpecimens;
} 


//Test log
let someDnaBase1 = mockUpStrand();
specimen1 = pAequorFactory(1, someDnaBase1);

let someDnaBase2 = mockUpStrand();
specimen2 = pAequorFactory(2, someDnaBase2);

console.log(specimen1.dna);
console.log(specimen2.dna);
specimen1.compareDNA(specimen2);

specimen1.willLikelySurvive(true);
specimen2.willLikelySurvive(true);

const succesfulStrands = survivingSpecimens();
console.log(succesfulStrands.length);
console.log(succesfulStrands);
