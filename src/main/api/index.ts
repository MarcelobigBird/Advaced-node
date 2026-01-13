import '../config/module-alias';
import { PersonController } from '@/application/controllers/personController';

const person = new PersonController();
console.log(person.speak('Marcelo'));
console.log(person.speak);
