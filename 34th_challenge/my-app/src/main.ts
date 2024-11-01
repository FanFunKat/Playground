import { User } from './models/User';

const user = new User({ name: 'NAME', age: 4 });

user.save();