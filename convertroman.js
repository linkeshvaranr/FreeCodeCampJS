function convertToRoman(num) {
    let rom = {
      M: 1000,
     CM: 900,
      D:500,
     CD:400,
      C:100,
     XC:90,
      L:50,
      XL:40 ,
      X:10 ,
      IX:9,
      V: 5,
      IV:4,
      I: 1
  
    }
    var con = ''
    for (let a  in rom){
      while(num >= rom[a]){
        con += a;
        // console.log(con)
  
        num -= rom[a]
      }
    }
   return con;
  }
  
  convertToRoman(29);