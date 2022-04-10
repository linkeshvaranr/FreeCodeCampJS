function isPalindrome(str){
    let newstr = str.replace(/\W|_/g,'').toUpperCase();
    let revstr = newstr.split('').reverse().join('');
    
    if(newstr == revstr){
        return true
    }else{
        return false
    }

}

console.log(isPalindrome("eye"))