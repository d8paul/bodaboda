 jQuery(document).ready(function($) {

  $( "#dob" ).datepicker();
  $('#refereedob').datepicker();
  $('.generate_id').click(function(e){
	 e.preventDefault(); 
	 generateId();
   });




    //currentdate
    // generate id
   function generatecdate(){
     var date         = new Date();
	   var datew        = date.getDate()+'/'+date.getMonth()+'/'+date.getFullYear();
	 $('.currentDate').val(datew);
   }
   generatecdate();


   // generate id
   function generateId(){
     
   $('.generate_id').text('Generating.......');
	 var date         = new Date();
	 var datew        = date.getFullYear()+''+date.getMonth()+''+date.getDate()+''+date.getHours()+''+date.getMinutes()+''+date.getSeconds();
	 var datew2   = shuffle(datew); 
	 $('.theiento').val(datew2);
     $('.generate_id').text('Generate Id');
   }
   
   // shuffle id
   function shuffle(string){
     
      var arr = string.split('');
      arr.sort( function(){
         return 0.5 - Math.random();
      });
      newstr = arr.join('');
      return newstr;
   }	


   // send register
   $('.submitregister').click(function(e){

     var theerrortag = false;
	   e.preventDefault(); 
     $('.form-control').removeClass('form-error');
     $('.error_clearin').html('');




     //thedate
     var thedate = $('#cdate').val();
     if(thedate){}else{
       $('.form-control').addClass('form-error');
       $('.error_cdate').html('Provide current date'); 
       theerrortag = true; 
     }


     //username
     var theusername = $('#username').val();
     if(theusername){}else{
       $('.form-control').addClass('form-error');
       $('.error_username').html('Provide username'); 
       theerrortag = true; 
     }

     //theid
     var theuser_id = $('#user_id').val();

     if(theuser_id == null  || theuser_id.length < 5 || theuser_id.length > 35 ){
       $('.form-control').addClass('form-error');
       $('.error_user_id').html('User Id should be between 5 to 35 caracters');
       theerrortag = true; 
     }

     //birth date
     var date_birth = $('#dob').val();
     if(date_birth == ""){
       $('.form-control').addClass('form-error');
       $('.error_dob').html('date of birth is required');
       theerrortag = true;
     }


     //first name
     var fname = $('#firstname').val();
     var lettas = /^[a-zA-Z]+$/;
     if(fname == null || fname.match(lettas)  == null){
       $('.form-control').addClass('form-error');
       $('.error_firstname').html('first name is required as Alphabet'); 
       theerrortag = true;
     }



     //last name
     var lname = $('#lastname').val();
     var lettas2 = /^[a-zA-Z]+$/;

     if(lname == null || lname.match(lettas2) == null){
       $('.form-control').addClass('form-error');
       $('.error_lastname').html('last name is required as Alphabet'); 
       theerrortag = true;
     }


     //email validating
     var email = $('#email').val();
     let symbolsemail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
     if(email && email.match(symbolsemail) == null){
       $('.form-control').addClass('form-error');
       $('.error_email').html('provide a correct email address');
       theerrortag = true; 
     }

     //phone validating
     var phone = $('#phone').val();
     let numbersx = $.isNumeric(phone);
     if(phone){}else{
       $('.form-control').addClass('form-error');
       $('.error_phone').html('Provide a user Phone number');
       theerrortag = true;
     }

     if( numbersx == true && phone == null){
       $('.form-control').addClass('form-error');
       $('.error_phone').html('Provide Phone number with 10 characters and not numbers'); 
       theerrortag = true;
     }


     //the password
     var password_id = $('#password').val();
     if(password_id == null || password_id.length < 5 || password_id.length > 12 ){
       $('.form-control').addClass('form-error');
       $('.error_password').html('User password should be between 6 to 12 caracters');
       theerrortag = true;
     } 

     //role
     var rolein = $('#role').val();
     if(rolein){}else{
       $('.form-control').addClass('form-error');
       $('.error_role').html('Provide user role');
       theerrortag = true;
     }

     //supervisor
     var supervisor = $('#supervisor').val();
     if(supervisor ){}else{
       $('.form-control').addClass('form-error');
       $('.error_supervisor').html('Provide a user supervisor');
       theerrortag = true;
     }


     //working days
     var working_days = $('#working_days').val();
     let numbers2 = /^[0-9]+$/
     if( working_days == null || !working_days.match(numbers2)){
       $('.form-control').addClass('form-error');
       $('.error_working_days').html('Provide working days');
       theerrortag = true;
     }

     //address
     var address = $('#address').val();
     if(address){}else{
       $('.form-control').addClass('form-error');
       $('.error_address').html('Provide address');
       theerrortag = true;
     }


     if(theerrortag == true){
        return; 
     }

      $('.submitregister').text('Registering Account .....');
      var loginData = $('.sendformreg').serialize();
      $.ajax({
        type: 'post',
        url : '/user/signup',
        data : loginData,
        dataType:'json'
      }).done(function(data) {
          
          $('.submitregister').text('Submit');
          console.log(data);

      }).fail(function (jqXHR, textStatus) {
          $('.submitregister').text('Submit');
          console.log(jqXHR);
          //console.log(jqXHR);
      });

   });	




   // reset register
   $('.resetregister').click(function(e){
      e.preventDefault();
      $('.sendformreg')[0].reset();
   });  


   // reset customer register
   $('.resetcustomerregister').click(function(e){
      e.preventDefault();
      $('.sendformcustomer')[0].reset();
   });  





     // customer register
   $('.submitcustomerregister').click(function(e){

     var theerrortag = false;
     e.preventDefault(); 
     $('.form-control').removeClass('form-error');
     $('.error_clearin').html('');

     //thedate
     var thedate = $('#cdate').val();
     if(thedate){}else{
       $('.form-control').addClass('form-error');
       $('.error_cdate').html('Provide current date'); 
       theerrortag = true; 
     }


     //username
     var theusername = $('#username').val();
     if(theusername){}else{
       $('.form-control').addClass('form-error');
       $('.error_username').html('Provide username'); 
       theerrortag = true; 
     }

     //theid
     var theuser_id = $('#user_id').val();

     if(theuser_id == null  || theuser_id.length < 5 || theuser_id.length > 35 ){
       $('.form-control').addClass('form-error');
       $('.error_user_id').html('User Id should be between 5 to 35 caracters');
       theerrortag = true; 
     }

     //birth date
     var date_birth = $('#dob').val();
     if(date_birth == ""){
       $('.form-control').addClass('form-error');
       $('.error_dob').html('date of birth is required');
       theerrortag = true;
     }


     //referee birth date
     var refereedob = $('#refereedob').val();
     if(refereedob == ""){
       $('.form-control').addClass('form-error');
       $('.error_refereedob').html('referee date of birth is required');
       theerrortag = true;
     }


     //first name
     var fname = $('#firstname').val();
     var lettas = /^[a-zA-Z]+$/;
     if(fname == null || fname.match(lettas)  == null){
       $('.form-control').addClass('form-error');
       $('.error_firstname').html('first name is required as Alphabet'); 
       theerrortag = true;
     }



     //last name
     var lname = $('#lastname').val();
     var lettas2 = /^[a-zA-Z]+$/;

     if(lname == null || lname.match(lettas2) == null){
       $('.form-control').addClass('form-error');
       $('.error_lastname').html('last name is required as Alphabet'); 
       theerrortag = true;
     }


     //email validating
     var email = $('#email').val();
     let symbolsemail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
     if(email && email.match(symbolsemail) == null){
       $('.form-control').addClass('form-error');
       $('.error_email').html('provide a correct email address');
       theerrortag = true; 
     }

     //phone validating
     var phone = $('#phone').val();
     let numbersx = $.isNumeric(phone);
     if(phone){}else{
       $('.form-control').addClass('form-error');
       $('.error_phone').html('Provide a user Phone number');
       theerrortag = true;
     }


     if( numbersx == true && phone == null){
       $('.form-control').addClass('form-error');
       $('.error_phone').html('Provide Phone number with 10 characters and not numbers'); 
       theerrortag = true;
     }


     //referee phone
     var refereephone = $('#refereephone').val();
     let numbersx2 = $.isNumeric(refereephone);
     if(refereephone){}else{
       $('.form-control').addClass('form-error');
       $('.error_refereephone').html('Provide a user referee phone number');
       theerrortag = true;
     }

      
     if( numbersx2 == true && refereephon == null){
       $('.form-control').addClass('form-error');
       $('.error_refereephone').html('Provide referee phone number with 10 characters and not numbers'); 
       theerrortag = true;
     }

     //referee names
     var refereenames = $('#refereenames').val();
     if(refereenames){}else{
       $('.form-control').addClass('form-error');
       $('.error_refereenames').html('Provide referee names');
       theerrortag = true;
     }


     //referee work
     var refereework = $('#refereework').val();
     if(refereework){}else{
       $('.form-control').addClass('form-error');
       $('.error_refereework').html('Provide referee work');
       theerrortag = true;
     }


     //the password
     var password_id = $('#password').val();
     if(password_id == null || password_id.length < 5 || password_id.length > 12 ){
       $('.form-control').addClass('form-error');
       $('.error_password').html('User password should be between 6 to 12 caracters');
       theerrortag = true;
     } 

     //role
     var rolein = $('#role').val();
     if(rolein){}else{
       $('.form-control').addClass('form-error');
       $('.error_role').html('Provide user role');
       theerrortag = true;
     }

     //supervisor
     var supervisor = $('#supervisor').val();
     if(supervisor ){}else{
       $('.form-control').addClass('form-error');
       $('.error_supervisor').html('Provide a user supervisor');
       theerrortag = true;
     }

     //maritalstatus
     var maritalstatus = $('#maritalstatus').val();
     if(maritalstatus){}else{
       $('.form-control').addClass('form-error');
       $('.error_maritalstatus').html('Provide a user marital status');
       theerrortag = true;
     }

     //nationality
     var nationality = $('#nationality').val();
     if(nationality){}else{
       $('.form-control').addClass('form-error');
       $('.error_nationality').html('Provide a user nationality');
       theerrortag = true;
     }

     //nin
     var nin = $('#nin').val();
     if(nin){

       if(nin.length != 13){
         $('.form-control').addClass('form-error');
         $('.error_nin').html('Provide the 13 characters ID NIN');
         theerrortag = true;
       }

       var res = nin.slice(0, 3);
       var lettas22 = /^[a-zA-Z]+$/;
       if(res.match(lettas22) == null){
         $('.form-control').addClass('form-error');
         $('.error_nin').html('first 3 NIN characters should be alphabet');
         theerrortag = true;
       }
       
     }else{
       $('.form-control').addClass('form-error');
       $('.error_nin').html('Provide the 13 characters ID NIN');
       theerrortag = true;
     }

     //vehicle
     var vehicle = $('#vehicle').val();
     if(vehicle){}else{
       $('.form-control').addClass('form-error');
       $('.error_vehicle').html('Select a vehicle');
       theerrortag = true;
     }

     //amount
     var amount  = $('#amount').val();
     let numbers222 = /^[-+]?[0-9]+\.[0-9]+$/; 
     if( amount == null || !amount.match(numbers222)){
       $('.form-control').addClass('form-error');
       $('.error_amountx').html('Provide deposit amount');
       theerrortag = true;
     }

     //otherloanss
     var otherloans= $('#otherloans').val();
     let numbers2 = /^[0-9]+$/
     if( otherloans == null || !otherloans.match(numbers2)){
       $('.form-control').addClass('form-error');
       $('.error_otherloans').html('Provide working days');
       theerrortag = true;
     }

     //stage
     var stage = $('#stage').val();
     if(stage){}else{
       $('.form-control').addClass('form-error');
       $('.error_stage').html('give a stage');
       theerrortag = true;
     }

     //lc1
     var lc1 = $('#lc1').val();
     if(lc1){}else{
       $('.form-control').addClass('form-error');
       $('.error_lc1').html('give a lc1');
       theerrortag = true;
     }

     //lc2
     var lc2 = $('#lc2').val();
     if(lc2){}else{
       $('.form-control').addClass('form-error');
       $('.error_lc2').html('give a lc2');
       theerrortag = true;
     }

     //docs
     var docs = $('#docs').val();
     if(docs){}else{
       $('.form-control').addClass('form-error');
       $('.error_docs').html('give a docs');
       theerrortag = true;
     }








     //address
     var address = $('#address').val();
     if(address){}else{
       $('.form-control').addClass('form-error');
       $('.error_address').html('Provide address');
       theerrortag = true;
     }


     if(theerrortag == true){
        return; 
     }

     alert(1234);

     //birth date
     // var date_picker_birth = $('#datepicker').val();
     // if(idate_picker_birth == null ){
     //   $('.form-control').addClass('form-error');
     //   alert('date of birth is required'); 
     // }


     // //birth date
     // var date_picker_birth = $('#datepicker').val();
     // if(idate_picker_birth == null ){
     //   $('.form-control').addClass('form-error');
     //   alert('date of birth is required'); 
     // }
     //alert();

   });

  

	
});


