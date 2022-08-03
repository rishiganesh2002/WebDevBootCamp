import {franc, francAll} from 'franc';
import langs from 'langs';

const langCode = franc('My name is John');
const language = langs.where('3', langCode);

console.log(language);

