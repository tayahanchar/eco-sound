'use strict';

let isPlay = false;

const navigation  = document.querySelector('.navigation__list');
const navigationItems = document.querySelectorAll('.navigation');
const logoSvg = document.querySelector('.logo');
const buttonLogoSvg = document.querySelector('.header__logo');
const container = document.querySelector('.container');
const audio = document.querySelector('audio');
const audioButton = document.querySelector('.audio__btn');
const play = document.querySelector('.play');
const pause = document.querySelector('.pause');

navigation.addEventListener('click', changeButtonColor);
navigation.addEventListener('click', changeImg);
navigation.addEventListener('click', changeAudio);
buttonLogoSvg.addEventListener('click', changeButtonColorSvg);
buttonLogoSvg.addEventListener('click', changeImgSvg);
buttonLogoSvg.addEventListener('click', changeAudioSvg);
audioButton.addEventListener('click', changeIsPlay);
audioButton.addEventListener('click', changeAudioImg);

function changeButtonColor(event) {
  if(event.target.classList.contains('navigation')) {
    navigationItems.forEach(item => item.classList.remove('active'));
    logoSvg.classList.remove('active');
    event.target.classList.add('active');
  }
}

function changeButtonColorSvg() {
  logoSvg.classList.add('active');
  navigationItems.forEach(item => item.classList.remove('active'));
}

function changeImg(event) {
  if(event.target.classList.contains('navigation')) {
    navigationItems.forEach((item) => container.style.backgroundImage = `url(assets/img/${event.target.dataset.theme}/1.jpeg)`);
  }
}

function changeAudio(event) {
  if(event.target.classList.contains('navigation')) {
    navigationItems.forEach((item) => audio.src = `assets/audio/${event.target.dataset.theme}.mp3`);
  }

  if(isPlay) {
    audio.play();
    isPlay = true;
  } else {
    audio.pause();
    isPlay = false;
  }
}

function changeImgSvg() {
  container.style.backgroundImage = `url(assets/img/${buttonLogoSvg.dataset.theme}/1.jpeg)`;
}

function changeAudioSvg() {
  audio.src = `assets/audio/${buttonLogoSvg.dataset.theme}.mp3`;
  if(isPlay) {
    audio.play();
    isPlay = true;
  } else {
    audio.pause();
    isPlay = false;
  }
}


function changeIsPlay() {
  if(!isPlay) {
    audio.play();
    isPlay = true;
  } else {
    audio.pause();
    isPlay = false;
  }
}

function changeAudioImg() {
  if(!isPlay) {
    play.classList.remove('display');
    pause.classList.add('display');
  } else {
    play.classList.add('display');
    pause.classList.remove('display');
  }
}

const theme = ['forest', 'lark', 'nightingale', 'thrush', 'redbreast', 'whiteThroat'];

function preloadImages(array) {
  array.forEach(item => {
    const img = new Image();
    img.src = `./assets/img/${item}/1.jpeg`;
  });
}
preloadImages(theme);