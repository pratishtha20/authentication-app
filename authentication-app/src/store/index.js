import {configureStore} from "@reduxjs/toolkit"

import authenticate  from "./authenticate";

export default configureStore({
    reducer: {authenticate: authenticate.reducer}
})