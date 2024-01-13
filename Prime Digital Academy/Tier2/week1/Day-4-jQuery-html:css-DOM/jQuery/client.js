console.log( 'js' );

// $ = Calling jQuery
$( document ).ready( readyNow );
// TRANSLATION: Hey jQuery, when the 'document' is 'ready', execute 'readyNow'.

function readyNow() {
  console.log( 'JQ' );
  // # = id
  $( '#sayHelloButton').on('click', sayHello );
  $( 'h2' ).mouseenter( h2MouseEnter);
  $( 'h2' ).mouseleave( h2MouseLeave);
  $( '.clicker' ).on( 'click', changeTextColor );
  // TRANSLATION: Hey jQuery($), get me to element with id(#), sayHelloButton
  //              and on clicking element, execute function sayHello.
} // end readyNow
function changeTextColor() {
  $( this ).css( 'color', 'blue' );
}// end changeTextColor

function h2MouseEnter() {
  console.log( 'in h2MouseEnter' );
  $( this ).css( 'background-color', 'red' );
} // end h2MouseEnter

function h2MouseLeave() {
  $( this ).css( 'background-color', 'white' );
} // end h2MouseLeave

function sayHello() {
  // target the input element by ID
  // gey the value of the text input
  let outputText = 'Hello, ' + $( '#nameInput').val();
  console.log( outputText );
  // display out text on DOM
  // target the output element
  let outPutEl = $( '#helloOut' );
  // empty it
  outPutEl.empty();
  // append the output text in it
  outPutEl.append( outputText );
  // empty input
  $( '#nameInput' ).val( '' );
}// end sayHello