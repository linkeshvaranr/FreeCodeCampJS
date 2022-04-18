# FreeCodeCampJS
## freecodecamp JS project

### 1. Convert the given number into a roman numeral.


  Roman | Numbers
 --------------------
      
      M|1000
     CM|900
      D|500
     CD|400
      C|100
     XC|90
      L|50
     XL|40 
      X|10 
     IX|9
      V| 5
     IV|4
      I| 1
      
      
### 2. Check the given string is palindrome or not

+ Using regex remove white spaces and char
+ Using array methods split , reverse and join reverse the string
+ compare two strings and return the boolean value

### 3. Caesar Cipher

One of the simplest and most widely known ciphers is a Caesar cipher, also known as a shift cipher. In a shift cipher the meanings of the letters are shifted by some set amount.

##### Here in ROT13 the char are replaced with char that are 13 more
##### I just used two arrays that are matched opposite to each other and check using equality operator
##### finally pushed the matched char to an array

### 4.Check the validity of the phone number
  + ^ ----> matches from start, for eg ^s will match s from 'sun' and won't match s from 'nuns'
  + $ ----> matches from end, for eg s$ will match s from 'nuns' and won't match s from 'sun'
  + \ ----> It is used to escape, for eg simply s will match s whereas \s will match spaces and \d will match digits instead of d
  + ()----> grouping
  + {}----> it specifies number of character, for eg \d{3} will match '432' and won't match '2754'
  + | ----> it matches both the side, for eg s|g will match s and g from 'shy girl'
    
