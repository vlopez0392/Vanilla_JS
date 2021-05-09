//02 - Metacharacters 
let re; 

//Literal characters 
re = /hello/;
re = /hello/i;

//Metacharacter symbols -> Metahacharacters are symbols that we can use.

//Carrot symbol - Must start with with symbol
re =/^h/i; //shift+6

//Money symbol - Must end with with symbol
re = /ld$/i

//Begins with and ends with 
re = /^hello$/i

//Dot character - Matches any one character (Behaves like a wildcard for ONE character)
re = /^h.llo$/i

//Wildcard character * (Matches any character 0 or more times)
re = /h*llo/i

//Optional character (gray or grey are both valid spellings of the color) 
re = /gre?a?y/i 

//Escaping characters - Escaped characters with "\". Characters then behave like literals 
re = /gre?a?y/i 


//
//String to match
const str = 'gray';

//Log result
const result = re.exec(str);
console.log(result);

const reTest = (re, str) =>{ //Custom function to check if a RE contains whatever we input 
    if(re.test(str)){
        console.log(`${str} matches ${re.source}}`);
    }else{
        console.log(`${str} does NOT match ${re.source}}`);
    }
}
reTest(re, str);