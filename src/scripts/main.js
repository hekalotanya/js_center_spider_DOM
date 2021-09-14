'use strict';

// write code here
const wall = document.querySelector('.wall');

const wallWidth = wall.offsetWidth;
const wallHeight = wall.offsetHeight;

const spider = document.querySelector('.spider');

const spiderWidth = spider.offsetWidth;
const spiderHeight = spider.offsetHeight;

const newTop = wallHeight / 2 - spiderHeight / 2 + 'px';
const newLeft = wallWidth / 2 - spiderWidth / 2 + 'px';

spider.style.top = newTop;
spider.style.left = newLeft;
