const Express = require("express");
const App = Express();
const PORT = 5000;
const CORS = require("cors");

App.listen(PORT, () => {
    console.log(`server is running on PORT ${PORT}`);
    
});