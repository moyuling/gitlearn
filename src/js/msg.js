import '../sass/base/_reset.scss';
import "../sass/pages/msg.scss";

import {print} from './utils';
import _ from 'lodash';
import $ from './lib/jquery';

let output = print('index');

console.log('Index:', output);
$(function () {
  $('#content').html('这是 content');
})
