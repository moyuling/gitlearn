import '../sass/base/_reset.scss';
import "../sass/pages/news.scss";

import {print} from './utils';
import _ from 'lodash';
import $ from './lib/jquery';

let output = print('news');

console.log('newsPage:', output);
