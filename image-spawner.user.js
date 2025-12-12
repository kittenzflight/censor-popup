// ==UserScript==
// @name         edge Image Spawner Infinite
// @namespace    Violentmonkey Scripts
// @version      1.4
// @description  Spawns your images infinitely every 0.5 seconds on youtube
// @match        *://*/*
// @exclude      *://mail.google.com/*
// @exclude      *://mail.yahoo.com/*
// @exclude      *://outlook.live.com/*
// @exclude      *://outlook.office.com/*
// @exclude      *://*.mail.aol.com/*
// @exclude      *://mail.protonmail.com/*
// @exclude      *://*.bank.*
// @exclude      *://*.banking.*
// @exclude      *://online.citibank.com/*
// @exclude      *://www.chase.com/*
// @exclude      *://www.bankofamerica.com/*
// @exclude      *://www.wellsfargo.com/*
// @exclude      *://www.usbank.com/*
// @exclude      *://www.capitalone.com/*
// @exclude      *://onlinebanking.usbank.com/*
// @exclude      *://secure.ally.com/*
// @exclude      *://*.paypal.com/*
// @exclude      *://*.venmo.com/*
// @grant        none
// ==/UserScript==
(function () {
    'use strict';
    const imageList = [
        "https://i.imgur.com/iTuYfuS.png",
        "https://i.imgur.com/HFRe6g1.png",
        "https://i.imgur.com/DM6eJRE.png",
        "https://i.imgur.com/2Pp2snw.png",
        "https://i.imgur.com/uAjHgDU.png",
        "https://i.imgur.com/uAjHgDU.png",
        "https://i.imgur.com/KnBmtk3.png",
        "https://i.imgur.com/Av8u8Kt.png",
        "https://i.imgur.com/GV6RC4u.png",
        "https://i.imgur.com/j8vECbl.png",
        "https://i.imgur.com/j8vECbl.png",
        "https://i.imgur.com/mM7gmTv.png",
        "https://i.imgur.com/tDrqe7M.png",
        "https://i.imgur.com/AOruG64.png",
        "https://i.imgur.com/CqI8sZK.png",
        "https://i.imgur.com/uAjHgDU.png",
        "https://i.imgur.com/OEcPLeg.png",
        "https://i.imgur.com/IxDtWRi.png",
        "https://i.imgur.com/UWHWjMp.png",
        "https://i.imgur.com/NdAkMUN.png",
        "https://i.imgur.com/VECggDa.png",
        "https://i.imgur.com/APmAPvn.png",
        "https://i.imgur.com/zBBqeQz.png",
        "https://i.imgur.com/zBBqeQz.png",
        "https://i.imgur.com/5O0YbtS.png"
    ];
    
    // Log to verify script is running
    console.log("Image Spawner Script Active - Images will spawn every 500ms");
    function setup() {
        // style the page
        document.body.style.margin = "0";
        document.body.style.background = "#000";
        document.body.style.position = "relative";
        // Allow scrolling and set minimum height
        document.body.style.overflow = "auto";
        document.body.style.minHeight = "100vh";
        
        function spawnImage() {
            const img = document.createElement("img");
            img.src = imageList[Math.floor(Math.random() * imageList.length)];
            const size = Math.floor(60 + Math.random() * 200);
            img.style.width = size + "px";
            img.style.position = "absolute";
            
            // Get the full page dimensions including scrollable area
            const pageWidth = Math.max(
                document.body.scrollWidth,
                document.documentElement.scrollWidth,
                document.body.offsetWidth,
                document.documentElement.offsetWidth,
                document.body.clientWidth,
                document.documentElement.clientWidth
            );
            const pageHeight = Math.max(
                document.body.scrollHeight,
                document.documentElement.scrollHeight,
                document.body.offsetHeight,
                document.documentElement.offsetHeight,
                document.body.clientHeight,
                document.documentElement.clientHeight
            );
            
            // Position randomly across the entire page
            img.style.left = Math.random() * Math.max(0, pageWidth - size) + "px";
            img.style.top = Math.random() * Math.max(0, pageHeight - size) + "px";
            
            // optional: smooth fade-in to semi-transparent
            img.style.opacity = "0";
            img.style.transition = "opacity 400ms linear";
            document.body.appendChild(img);
            // trigger fade-in to 50% opacity (semi-transparent)
            requestAnimationFrame(() => { img.style.opacity = "0.5"; });
        }
        // spawn every 500ms forever
        setInterval(spawnImage, 500);
    }
    // Ensure document.body exists before running (fixes errors on about:blank)
    if (document.body) {
        setup();
    } else {
        document.addEventListener('DOMContentLoaded', setup, { once: true });
        // Fallback: if DOMContentLoaded already fired but body still null, try again shortly
        setTimeout(() => { if (!document.body) return; setup(); }, 100);
    }
})();
