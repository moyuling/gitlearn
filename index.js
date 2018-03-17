import './index.css';

const isMok = {
  name: 'steal',
  sex: 1,
};

const hero = {
  firstName: 'Ada',
  lastName: 'Lovelace',
  birthYear: 1815,
  superPower: 'computers',
};

function food(bar, baz) {
  return bar.name + baz.firstName;
}

food(isMok, hero);
