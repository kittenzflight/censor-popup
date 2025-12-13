// ==UserScript==
// @name       Oreo Image Spawner Infinite
// @namespace    Violentmonkey Scripts
// @version      1.6
// @description  Spawns your images infinitely every 0.25 seconds
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
"https://cdn.jsdelivr.net/gh/kittenzflight/censor-popup@main/oreo/$RICA11U.png",
"https://cdn.jsdelivr.net/gh/kittenzflight/censor-popup@main/oreo/$RJPN27S.png",
"https://cdn.jsdelivr.net/gh/kittenzflight/censor-popup@main/oreo/$RLSZZL7.png",
"https://cdn.jsdelivr.net/gh/kittenzflight/censor-popup@main/oreo/Een_titel_toevoegen_28.png",
"https://cdn.jsdelivr.net/gh/kittenzflight/censor-popup@main/oreo/Oreo's_Censor.png",
"https://cdn.jsdelivr.net/gh/kittenzflight/censor-popup@main/oreo/Oreo_137.png",
"https://cdn.jsdelivr.net/gh/kittenzflight/censor-popup@main/oreo/imagas.png",
"https://cdn.jsdelivr.net/gh/kittenzflight/censor-popup@main/oreo/image.png",
"https://cdn.jsdelivr.net/gh/kittenzflight/censor-popup@main/oreo/imagec.png",
"https://cdn.jsdelivr.net/gh/kittenzflight/censor-popup@main/oreo/images.png",
"https://cdn.jsdelivr.net/gh/kittenzflight/censor-popup@main/oreo/imagez.png",
"https://cdn.jsdelivr.net/gh/kittenzflight/censor-popup@main/oreo/ore0.png",
"https://cdn.jsdelivr.net/gh/kittenzflight/censor-popup@main/oreo/spec1.png",
"https://cdn.jsdelivr.net/gh/kittenzflight/censor-popup@main/oreo%202/Oreo_108.jpeg",
"https://cdn.jsdelivr.net/gh/kittenzflight/censor-popup@main/oreo%202/ass%20(2).jpeg",
"https://cdn.jsdelivr.net/gh/kittenzflight/censor-popup@main/oreo%202/latex%20oreo%20(11).jpeg",
"https://cdn.jsdelivr.net/gh/kittenzflight/censor-popup@main/oreo%202/latex%20oreo%20(17).jpeg",
"https://cdn.jsdelivr.net/gh/kittenzflight/censor-popup@main/oreo%202/latex%20oreo%20(19).jpeg",
"https://cdn.jsdelivr.net/gh/kittenzflight/censor-popup@main/oreo%202/latex%20oreo%20(7).jpeg",
"https://cdn.jsdelivr.net/gh/kittenzflight/censor-popup@main/oreo%203/ass%20(1).jpeg",
"https://cdn.jsdelivr.net/gh/kittenzflight/censor-popup@main/oreo%203/ass3.jpeg",
"https://cdn.jsdelivr.net/gh/kittenzflight/censor-popup@main/oreo%203/goop.jpeg",
"https://cdn.jsdelivr.net/gh/kittenzflight/censor-popup@main/oreo%203/goop2.jpeg",
"https://cdn.jsdelivr.net/gh/kittenzflight/censor-popup@main/New%20folder/close%20up%20(1).jpeg",
"https://cdn.jsdelivr.net/gh/kittenzflight/censor-popup@main/New%20folder/close%20up%20(2).png",
"https://cdn.jsdelivr.net/gh/kittenzflight/censor-popup@main/New%20folder/close%20up%20(3).jpeg",
"https://cdn.jsdelivr.net/gh/kittenzflight/censor-popup@main/New%20folder/close%20up%20(4).jpeg",
"https://cdn.jsdelivr.net/gh/kittenzflight/censor-popup@main/New%20folder/close%20up%20(5).jpeg",
"https://cdn.jsdelivr.net/gh/kittenzflight/censor-popup@main/New%20folder/close%20up%20(6).jpeg",
"https://cdn.jsdelivr.net/gh/kittenzflight/censor-popup@main/New%20folder/close%20up%20(7).jpeg",
"https://cdn.jsdelivr.net/gh/kittenzflight/censor-popup@main/New%20folder/close%20up%20(8).jpeg",
"https://cdn.jsdelivr.net/gh/kittenzflight/censor-popup@main/New%20folder/laying%20(1).png",
"https://cdn.jsdelivr.net/gh/kittenzflight/censor-popup@main/New%20folder/laying%20(2).png",
    ];
    
    // Log to verify script is running
    console.log("Image Spawner Script Active - Images will spawn every 250ms");
    
    function setup() {
        // style the page
        document.body.style.margin = "0";
        document.body.style.background = "#000";
        document.body.style.position = "relative";
        // Allow scrolling and set minimum height
        document.body.style.overflow = "auto";
        document.body.style.minHeight = "100vh";
        
        // Track active images (max 10)
        const activeImages = [];
        const MAX_IMAGES = 10;
        
        function spawnImage() {
            console.log("Attempting to spawn image. Active images:", activeImages.length, "/", MAX_IMAGES);
            
            // Don't spawn if we're at max capacity
            if (activeImages.length >= MAX_IMAGES) {
                console.log("Max capacity reached, skipping spawn");
                return;
            }
            const img = document.createElement("img");
            const imgUrl = imageList[Math.floor(Math.random() * imageList.length)];
            img.src = imgUrl;
            
            // Log when image loads successfully
            img.onload = function() {
                console.log("✓ Image loaded successfully:", imgUrl);
            };
            
            // Hide image if it fails to load
            img.onerror = function() {
                console.error("✗ Failed to load image:", imgUrl);
                img.remove();
                // Remove from active images array if it failed to load
                const index = activeImages.indexOf(img);
                if (index > -1) {
                    activeImages.splice(index, 1);
                }
            };
            
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
            
            // optional: smooth fade-in to fully opaque
            img.style.opacity = "0";
            img.style.transition = "opacity 400ms linear";
            document.body.appendChild(img);
            
            // Add to active images array
            activeImages.push(img);
            
            // trigger fade-in to 100% opacity (fully visible)
            requestAnimationFrame(() => { img.style.opacity = "1"; });
            
            // Remove image after 2 seconds (changed from 5000 to match faster spawn rate)
            setTimeout(() => {
                img.style.opacity = "0";
                setTimeout(() => {
                    img.remove();
                    // Remove from active images array
                    const index = activeImages.indexOf(img);
                    if (index > -1) {
                        activeImages.splice(index, 1);
                    }
                }, 400); // Remove after fade-out completes
            }, 2000);
        }

        // Spawn first image immediately
        spawnImage();
        
        // Spawn every 250ms forever
        setInterval(spawnImage, 250);
    }
    
    // Ensure document.body exists before running (fixes errors on about:blank)
    if (document.body) {
        setup();
    } else {
        document.addEventListener('DOMContentLoaded', setup, { once: true });
        // Fallback: if DOMContentLoaded already fired but body still null, try again shortly
        setTimeout(() => { if (document.body) setup(); }, 100);
    }
})();
        document.addEventListener('DOMContentLoaded', setup, { once: true });
        // Fallback: if DOMContentLoaded already fired but body still null, try again shortly
        setTimeout(() => { if (document.body) setup(); }, 100);
    }
})();
