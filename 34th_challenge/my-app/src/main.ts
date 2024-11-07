import { User } from './models/User';

const user = new User({ name: 'NAME', age: 4 });

user.on('change', () => {
  console.log(user.get('name'));
});

user.trigger('change');