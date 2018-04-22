import './index.css';

const isMok = {
  name: 'steal',
  sex: 1,
};

const hero2 = {
  firstName: 'Ada',
  lastName: 'Lovelace',
  birthYear: 1815,
  superPower: 'computers',
};

function food(bar, baz) {
  return bar.name + baz.firstName;
}

food(isMok, hero2);
document.body.innerHTML = 'Run ok';

// import 'babel-polyfill';
// import _ from "lodash";
// import printMe from "./print";
// import { version, alom } from "./utils";
// import "./style.css";
//
// version.url = "nm";
// alom();
// alert(version.url);
// function component() {
//     var element = document.createElement("div");
//     var btn = document.createElement("button");
//
//     element.innerHTML = _.join(["Hello", "webpack"], " ");
//
//     btn.innerHTML = "Click me and check the console";
//     btn.onclick = printMe;
//     // element.onclick = Print.bind(null, 'Hello webpack!');
//
//     element.appendChild(btn);
//     // this.alert('Hmm, window should exposed!');
//     return element;
// }
//
// // document.body.appendChild(component());
// let element = component();
// document.body.appendChild(element);
// fetch('https://jsonplaceholder.typicode.com/users')
//    .then(response => response.json())
//    .then(json => {
//      console.log('We retrieved some data! AND we\'re confident it will work on a variety of browser distributions.')
//      console.log(json)
//    })
//    .catch(error => console.error('Something went wrong when fetching this data: ', error))
// // import './styles.scss';
// //
// // if ( document.querySelectorAll('a').length ) {
// //   require.ensure([], () => {
// //     const Button = require('babel!./Components/Button').default;
// //     const button = new Button('google.com');
// //
// //     button.render('a');
// //   });
// // }
// //
// // if (document.querySelectorAll('h1').length) {
// //   require.ensure([], () => {
// //     const Header = require('babel!./Components/Header').default;
// //
// //     new Header().render('h1');
// //   })
// // }
//
// import _ from 'lodash';
// // import printMe from './print.js';
// // import './style.css';
// import { cube } from './math.js';
// // import './style.css';
// // import Icon from './puppy.jpg';
// // import Data from './data.xml';
//
// function component() {
//   var element = document.createElement('pre');
//   // var btn = document.createElement('button');
//
//   element.innerHTML = [
//     'Helllo webpack',
//     '5 cubed is euqal to ' + cube(5)
//   ].join('\n\n');
//
//
//   console.log('log')
//   // btn.innerHTML = 'Click me and check console';
//   // btn.onclick = printMe;
//
//   // element.appendChild(btn);
//   // element.classList.add('hello');
//
//   // var myIcon = new Image();
//   // myIcon.src = Icon;
//   //
//   // element.appendChild(myIcon);
//   //
//   // console.log(Data)
//
//   return element;
// }
// // let element = component();
// document.body.appendChild(component());
//
// // console.log('module hot', module.hot);
//
// if (module.hot) {
//     module.hot.accept("./print.js", function() {
//         // console.log('A')
//         console.log("Accepting the updated printMe module!");
//         // printMe();
//
//         document.body.removeChild(element);
//         element = component(); // Re-render the "component" to update the click handler
//         document.body.appendChild(element);
//     });
// }
