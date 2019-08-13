import Vue from "nativescript-vue";

import Home from "./components/Home";
import http from "http";

new Vue({

    template: `
        <Frame>
            <Home />
        </Frame>`,

    components: {
        Home
    }
}).$start();
