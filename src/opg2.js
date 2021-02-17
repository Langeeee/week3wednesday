function add(n1, n2){
   return n1 +n2;
};
var sub = function(n1,n2){
  return n1 - n2;
};
var mul = function(n1,n2){
  return n1 / n2;
};

var cb = function(n1,n2, callback){
  return "Result from the two numbers: "+n1+"+"+n2+"="+callback(n1,n2);
};

//console.log( add(1,2) );     // What will this print? - den vil pringe 3 da 1+2 er = 3
//console.log( add );      // What will it print and what does add represent? -  den vil printe funktionen
//console.log( add(1,2,3) ) ; // What will it print - den vil printe 3 da den kun skal bruge 2 parameter og derfor kun tager de 2 første
//console.log( add(1) );	  // What will it print - den vil printe NAN da den mangler et input før den kan adde med metoden	
//console.log( cb(3,3,add) ); // What will it print -  den vil skrive "Result from the two numbers: 3+3=6" da vi kalder cb funktionen
//console.log( cb(4,3,sub) ); // What will it print - den vil printe "Result from the two numbers: 4+3=1" da den denne gang kalder sub funktionen og derfor minusser de 2 tal
//console.log(cb(3,3,add())); // What will it print (and what was the problem) - den vil få en fejl og ikke køre da der er 2 paranteser for meget, altså fejl i syntax
//console.log(cb(3,"hh",add));// What will it print den vil printe "Result from the two numbers: 3+hh=3hh". dette er specielt for javascript da kunne da den kan ligge strings sammen med int fx
console.log(cb(3,3,mul));


    try{
        typeof cb === "number", "number", "function";
        throw new Error('du skal indtaste 2 tal og add for plus, sub for minus eller mul for at dividere');
    }catch (e) {
        console.error(e.name + ': ' + e.message);
        
    }