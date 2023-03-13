import { User } from './models/User';
import { dbinit } from './utils/dbinit';

const sync = async () => {
  dbinit();

  await User.sync({ alter: true });
}

sync();
