"use strict";

(function(root,fn) {
  if(typeof define === 'function' && define.amd) {
    define(quoteMe);
  }else if(typeof exports === 'object') {
    module.exports = quoteMe;
  }else{
    root.quoteMe = fn(root);
  }
})(this,function (root) {
  var quotes = ["There are two types of people in this world.  Those that enter a room and say 'Here I am!' and those that enter a room and say 'There you are!'.@Unknown", "Because it's there.@George Mallory on climbing mountains", "Footsteps always follow us, whenever it is snowing.  They always show us where we've been, but never where we're going.@Winnie the Pooh's A-Z", "For I know the plans that I have for you.@The Lord, Jer 29:11", "The only way to climb properly is to realize that just getting up a route is nothing, the way it is done is everything.@Royal Robbins", "Small minds discuss people.  Average minds discuss events.  Great minds discuss ideas.@Unkown", "The significant problems we face cannot be solved at the same level of thinking we were at when we created them.@Albert Einstein", "We must not cease from exploration and the end of all our exploring will be to arrive where we began and to know the place for the first time.@T S Eliot", "One man asked another on the death of a mutual friend, 'How much did he leave?' His friend responded, 'He left it all.'@Proverb", "It is more noble to give yourself completely to one individual than to labor diligently for the salvation of the masses.@Dag Hammarskjold, Sec. Gen. of the UN", "Maps are a way of organizing wonder.@Edward Tufte", "I have decided to make my life my argument.@Albert Schweitzer", "Now it's a sqirt mecca for mystery artist, but back then it was just magic.@Jim Snyder on Kayaking", "Knowledge keeps about as well as fish.@Alfred North Whitehead", "It all began, I said, when I decided that some experts don't really know enough to make a pronouncement of doom on a human being.  And I said I hoped they would be careful about what they said to others; they might be believed and that coud be the beginning of the end.@Norman Cousins, Anatomy of an Illness", "Do not go gentle into that good night.  Rage, rage against the dying of the light.@Dylan Thomas", "For you will look smart and feel ignorant and the patient will not know which day it is for you and you will pretend to be smart out of ignorance.@John Stone, Gaudeamus Igitur"];
  var playedOnce = false, body = document.body;
  var quoteGenerator;
  var hr = document.body.firstElementChild;
  try{
    quoteGenerator = document.getElementById('quoteGenerator');
    quoteGenerator.textContent = '';
  }catch(e){
    quoteGenerator = $$('div');
    quoteGenerator.id="quoteGenerator";
    document.body.insertBefore(quoteGenerator, hr);
    console.log(e);
  }
  var btn = $$('button');
  var dfrag = document.createDocumentFragment();
  var quoteWrap = $$('div');
  var wordWrap = $$('div');
  var headOne = $$('h1');
  var headTwo = $$('h2');
  btn.textContent = "Quote Me";
  wordWrap.id = 'wordWrap';
  quoteWrap.id = 'quoteWrap';
  dfrag.appendChild(quoteWrap);
  quoteWrap.appendChild(wordWrap);
  wordWrap.appendChild(headOne);
  wordWrap.appendChild(headTwo);
  quoteGenerator.appendChild(quoteWrap);
  quoteGenerator.appendChild(btn);
// Functions
  function $$$(el,cl,noun) {
    if(noun === 'remove'){
      el.classList.remove(cl);
    }else if(noun === 'add'){
      el.classList.add(cl);
    }else if(noun === 'toggle') {
      el.classList.toggle(cl);
    }else if(noun === undefined) {
      return el.classList.contains(cl);
    }
  }
  function $$(tag) {
    return document.createElement(tag);
  }
  btn.addEventListener("click", function evtListFunc (e) {
      if($$$(wordWrap,'faded')){
        $$$(wordWrap,'faded','remove');
      }
    var timer = setTimeout(function() {
      genQuote(e);
  },100)},false);

  btn.addEventListener("mousedown", function (e) {
    feignClick();
  }, false);
  btn.addEventListener("mouseup", function (e) {
    feignClick();
  }, false);

  function feignClick() {
    $$$(btn,'pressed','toggle');
   }

  function init() {
    genQuote();
  }

  function genQuote (e) {
    genQuote._cache = genQuote._cache || [];
      var _theCache = genQuote._cache;
      var nm = Math.floor(Math.random()*17);
      if(_theCache.indexOf(nm)>-1) {
        genQuote._cache = genQuote._cache.length>=quotes.length-2?undefined:genQuote._cache;
        genQuote();
      }else{
        disQuote(nm)
        _theCache.push(nm);
      }
  }

  function disQuote(val) {
    let theQuote = quotes[val],mainQuote,author;
    theQuote = theQuote.split('@');
    mainQuote = theQuote[0];
    author = theQuote[1];
    headOne.innerHTML = mainQuote;
    headTwo.innerHTML = author;
    animateQuote(mainQuote,author);
  }
  function animateQuote(quote,author) {
    var a = $$$(wordWrap,'faded');
    $$$(wordWrap,'faded',a?'remove':'add');
  }
  return init;
})
document.addEventListener('DOMContentLoaded',quoteMe,false);
