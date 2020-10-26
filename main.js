/**
 * 
 * Correggere il codice per:
 * Mostrare / nascondere il menu principale
 * 
 */

var hamPart = $('.header-right');
var hamburger = $('.header-right a');
var hamMenu = $('.hamburger-menu');
var ics = $('.hamburger-menu a');
 
 hamburger.click( function() {

    hamPart.fadeOut();
    hamMenu.fadeIn(1000);

 });
  
 ics.click( function() {

    hamMenu.fadeOut();
    hamPart.fadeIn(1000);

 });
