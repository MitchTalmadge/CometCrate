import preInit from './pre-init';

preInit()
    .then(() => {
        require("../src/server");
    });
