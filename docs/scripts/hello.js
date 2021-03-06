/*
 *  HelloESM. Copyright (c) 2018-2020 Appliberated. MIT License.
 *  https://www.appliberated.com/helloesm/
 */

/**
 * Confirms that the browser supports ECMAScript Modules.
 * @returns {void}
 */
export default function helloEsm() {
    document.body.classList.add("body--yes-esm");
    document.getElementById("emoji").innerText = "😎";
    document.getElementById("sublead").innerText = "Congratulations! Your browser";
    document.getElementById("lead").innerText = "can handle ECMAScript Modules";
    document.title = "HelloESM: Yes ECMAScript Modules";

    // Update the theme-color meta tag to update the browser toolbar color
    document.querySelector("meta[name=theme-color]").setAttribute("content", "#4CAF50");
}
