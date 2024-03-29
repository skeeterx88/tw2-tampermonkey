// ==UserScript==
// @name         TribalWars2 AutoStart Farmbot
// @namespace    http://tampermonkey.net/
// @version      0.3
// @author       JPylypiw (https://github.com/JPylypiw)
// @description  This script automatically starts the FarmBot of TWOverflow for TribalWars2
// @homepage     https://github.com/jpylypiw/tw2tools
// @icon64       https://br.tribalwars2.com/favicon.ico
// @updateURL    https://github.com/jpylypiw/tw2tools/raw/master/scripts/TribalWars2%20AutoStart%20Farmbot.user.js
// @supportURL   https://github.com/jpylypiw/tw2tools/issues
// @match        https://br.tribalwars2.com/game.php*
// @grant        none
// @noframes
// ==/UserScript==

function waitForInjector() {
    if (typeof injector == "undefined" || typeof findElement(document.getElementsByClassName("label"), "Farmer") == "undefined") {
        setTimeout(function () { waitForInjector(); }, 3000);
    } else {
        startBot();
    }
}

function startBot() {
    setTimeout(function () {
        findElement(document.getElementsByClassName("label"), "Farmer").click();
        findElement(document.getElementsByClassName("btn-border btn-green"), "Start").click();
        document.getElementsByClassName("list-btn")[1].getElementsByTagName("a")[0].click();
    }, 200);
}

function findElement(elements, searchText) {
    for (var i = 0; i < elements.length; i++) {
        if (elements[i].innerText == searchText) {
            return elements[i];
        }
    }
}

waitForInjector();