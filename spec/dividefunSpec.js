describe("Calculate Function" ,function(){
        let firstnum = 10;
        let secondnum = 5;
        let resultDivided = 2;
        describe("Divide Function" ,function(){
           // arranged
          let Divided;
          // act 
          Divided=new Calculate();
            it("should divided it Normal", function() {    
              // assertion
              expect(Divided.divideFun(firstnum,secondnum)).toBe(resultDivided);
            });// end of Unit Cass Test Divided
            it("should divided by 0 ", function() {
              // assertion
              expect(Divided.divideFun(firstnum,0)).toBe("Not Allowed");
              expect(Divided.divideFun(0,secondnum)).toBe("Not Allowed");
              expect(Divided.divideFun(0,0)).toBe("Not Allowed");
            });// end of Unit Cass Test Divided

        });    
   

    describe("Summtion Function" ,function(){
      // arranged
      let Sum;
      // act 
      Sum=new Calculate();
      it("should Sum  it ", function() {
        // assertion
        expect(Sum.sumFun(firstnum,secondnum)).toBe(15);
      });// end of Unit Cass Test Summtion

    });

    describe("Substraction Function" ,function(){
             // arranged
             let Sub;
             // act 
              Sub=new Calculate();
      it("should Sub  it ", function() {
        // assertion
        expect(Sub.subFun(firstnum,secondnum)).toBe(5);
      });// end of Unit Cass Test Substraction
    });

      describe("multiplication Function" ,function(){
        it("should multiple  it ", function() {
          // arranged
          let mult;
          // act 
           mult=new Calculate();
          // assertion
          expect(mult.multFun(firstnum,secondnum)).toBe(50);
          expect(mult.multFun(firstnum,-1)).toBe("Not Allowed");
          expect(mult.multFun(-1,secondnum)).toBe("Not Allowed");
        });// end of Unit Cass Test Substraction
        it("should multiple  by 0  ", function() {
          // arranged
          let mult;
          // act 
           mult=new Calculate();
          // assertion
          expect(mult.multFun(0,secondnum)).toBe("Not Allowed");
          expect(mult.multFun(firstnum,0)).toBe("Not Allowed");
  
      
        });// end of Unit Cass Test Substraction

  

      });

      

});// end of suite of Calculate function





describe("Login Function" ,function(){

  describe("check Characters Function" ,function(){
    let username = "amrwaheed";
    let password = "amrwaheed";
    it("should be write character only and min length 9 characters", function() {  
      expect(Login(username,password)).toBe(true);
    });
    it("if write wrong", function() {  
      expect(Login("ahmed",12345)).toBe(false);
      expect(Login("ahmedmohamed","123456789")).toBe(false);
    });
    

  });
  



});



describe("Power Function" ,function(){

  describe("result Function" ,function(){
   
    it("powerfunction of a , b", function() {  
      expect(powerfunction("Zero","Zero")).toBe("Positive");
      expect(powerfunction("Zero","Positive")).toBe("Positive");
      expect(powerfunction("Zero","negative")).toBe("Negative");
      expect(powerfunction("negative","positive")).toBe("negative");
      expect(powerfunction("negative","zero")).toBe("negative");
    });
    
  });
  



});


describe("SquarRoot Function" ,function(){

  describe("result sqrt Function" ,function(){
    let number = 4;
    let resultsqrt = Math.sqrt(number);
    it("should sqrt Number", function() {  
      expect(squrtfunction(number)).toEqual(resultsqrt);
    });

    it("should number => sqrt(0)", function() {  
      expect(squrtfunction(0)).toEqual(squrtfunction(0));
    });
    it("should number => sqrt(negative number)", function() {  
      expect(squrtfunction(-10)).toEqual("illegal negative input");
    });
    
  });
  



});