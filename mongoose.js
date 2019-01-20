import mongoose from 'mongoose';
import env from './env';

/**

 * MongoDB options

 */

const options = {

  user: env.user,

  pass: env.password,

  useNewUrlParser: true,

  useCreateIndex: true,

  useFindAndModify: false,

};



const db = async () => {

  if (env.DB_URL) {

    Promise.resolve(

      mongoose.connect(

        env[DB_URL],

        options,

      ),

    );



    return '> DB connected';

  } else {

    return '> No DB Connection found';

  }

};



db()

  .then(message => console.log(message))

  .catch(e => console.log(e.message));
