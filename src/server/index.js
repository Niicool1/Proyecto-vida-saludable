import { connectDB } from "./db.js";

import app from './app.js';


connectDB();

app.set('port', 3000);

app.listen(app.get('port'), () => {
    console.log('Server en puerto 3000')
});

