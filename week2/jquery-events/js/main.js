
console.log('Event JS loaded.', this);

const sayHello = function(){
};

const myGlobalVar = 'hello';


// window.onload = function() {};

window.addEventListener('DOMContentLoaded', function(){

});

// $(document).ready( function (){
$( function(){


  console.log('DOM loaded!', this);

  $('img').on( 'click', function(){
    // This code is indented to show that it's
    // inside the callback function - it only
    // runs when the event is triggered on this
    // element
    console.log('List item clicked!');
    $(this).css( 'border', '10px solid red' );

  });

  const liTags = document.querySelectorAll('li');
  for( const li of liTags ){
    li.addEventListener('click', function( event ){
      console.log('li clicked', this);
      console.log('event:', event );
      // console.log(Math.random());
    })
  } // for..of


  $('input[type="text"]').on('keyup', function( event ){

    console.log('key was pressed!', event.originalEvent );

    // try out 'keydown', 'keyup'

    // How would i get the current contents of the input which is receiving this keyboard event?

    const inputContents = $(this).val();

    console.log('value', inputContents);

    $('#message').html( inputContents );

  });


  $('input[type="text"]').on('focus', function(){
    console.log('focused');
    $(this).css('background-color', 'red');
  });

  $('input[type="text"]').on('blur', function(){
    console.log('blurred');
    $(this).css('background-color', 'white');
  });

  // Select dropdown event
  $('select').on('change', function(){
    console.log('select change');
    console.log('Selected item:', $(this).val() );

    $('#message').html( `You selected ${ $(this).val() }` )

  });


  $('#toggle').on('click', function() {
    console.log('toggle button clicked');
    $('.triple-kitty1').toggle();
  });

  $('#fade').on( 'click', function(){
    console.log('fade button clicked');
    // $('.triple-kitty2').fadeToggle();
    $(this).next().fadeToggle();
  });

  $('#show').on( 'click', function(){
    console.log('show button clicked');
    // $('.triple-kitty3').show();
    // console.log( $(this).next() );
    // debugger;
    $(this).find('img').slideToggle();
  });


  $('form').on('submit', function(){
    console.log('form submitted!');
    return false; // stop form from submitting
  });


  // Mouse events
  $('#kitty').on( 'mousemove', function( event ){
    // console.log('img area mouse move');
    // console.log( event.originalEvent.offsetX );
  });

  $('#kitty').on('dblclick', function(){
    console.log('double click');
  });


  // $('*').on('click', function( event ){
  //
  //   console.log('click:', this);
  //
  //   // return false; // does this stop the propagation?
  //
  //   // console.log( $(this).prop('nodeName') );
  //
  //   // if(this.nodeName === 'BODY'){
  //     // event.stopPropagation();
  //   // }
  //
  // });


  $(window).on('resize', function( event ){
    console.log('resize!', window.innerWidth );
  });

  // $(window).on('scroll', function( event ){
  //   console.log('scrolling', $(window).scrollTop() );
  //   console.log( window.scrollY );
  // });


  // Easy animation with jQuery!
  $('#kitty').on('click', function(){

    const originalWidth = $(this).css('width');

    $(this)
      // .animate({ backgroundColor: '#FF0000'  });
      .animate({ width: '500px', opacity: 0.0 }, 3000)
      .animate({ width: originalWidth }, 0  );

  });


}); // end of $(document).ready()
