import '../sass/base/_reset.scss';
import "../sass/pages/index.scss";

import {print} from './utils';
import _ from 'lodash';
import $ from './lib/jquery';


let output = print('index');
let ar = [1, 2, 3];

console.log('Includes:', ar.includes(1));
console.log('Index:', output);
$(function () {
  $('#content').html('这是 content');
})
