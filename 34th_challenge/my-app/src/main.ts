import { User } from './models/User';

const user = new User({ id: 1, name: 'new NAME', age: 11 });

user.on('save', () => {
  console.log(user);
});

user.save();