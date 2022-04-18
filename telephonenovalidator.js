function telValFunc(str){

    // ^ ----> matches from start, for eg ^s will match s from 'sun' and won't match s from 'nuns'
    // $ ----> matches from end, for eg s$ will match s from 'nuns' and won't match s from 'sun'
    // \ ----> It is used to escape, for eg simply s will match s whereas \s will match spaces and \d will match digits  instead  of  d
    // ()----> grouping
    // {}----> it specifies number of character, for eg \d{3} will match '432' and won't match '2754'
    // | ----> it matches both the side, for eg s|g will match s and g from 'shy girl'
    



    
    let regexp = /^(1\s?)?(\(\d{3}\)|\d{3}\-|\d{3})\s?(\d{3}\-|\d{3})\s?\d{4}$/gm;
    let valFunc = regexp.test(str)
    return valFunc
    



  
}
telValFunc("555 555 5555")
