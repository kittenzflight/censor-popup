// ==UserScript==
// @name         edge Image Spawner Infinite
// @namespace    Violentmonkey Scripts
// @version      1.5
// @description  Spawns your images infinitely every 5 seconds
// @match        *://*/*
// @exclude      *://www.youtube.com/*
// @exclude      *://youtube.com/*
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
        "https://cdn.jsdelivr.net/gh/kittenzflight/censor-popup@main/images/20251026_203417.png",
        "https://cdn.jsdelivr.net/gh/kittenzflight/censor-popup@main/images/20251121_084819.png",
        "https://cdn.jsdelivr.net/gh/kittenzflight/censor-popup@main/images/2Pibzzf.png",
        "https://cdn.jsdelivr.net/gh/kittenzflight/censor-popup@main/images/2Pp2snw.png",
        "https://cdn.jsdelivr.net/gh/kittenzflight/censor-popup@main/images/5O0YbtS.png",
        "https://cdn.jsdelivr.net/gh/kittenzflight/censor-popup@main/images/AOnuG64.png",
        "https://cdn.jsdelivr.net/gh/kittenzflight/censor-popup@main/images/APmAPvn.png",
        "https://cdn.jsdelivr.net/gh/kittenzflight/censor-popup@main/images/Av8u8Kt.png",
        "https://cdn.jsdelivr.net/gh/kittenzflight/censor-popup@main/images/CqI8sZK.png",
        "https://cdn.jsdelivr.net/gh/kittenzflight/censor-popup@main/images/DM6eJRE.png",
        "https://cdn.jsdelivr.net/gh/kittenzflight/censor-popup@main/images/GV6RC4u.png",
        "https://cdn.jsdelivr.net/gh/kittenzflight/censor-popup@main/images/HFRe6g1.png",
        "https://cdn.jsdelivr.net/gh/kittenzflight/censor-popup@main/images/IMG_1839.png",
        "https://cdn.jsdelivr.net/gh/kittenzflight/censor-popup@main/images/fITuYfuS.png",
        "https://cdn.jsdelivr.net/gh/kittenzflight/censor-popup@main/images/IxDtWRi.png",
        "https://cdn.jsdelivr.net/gh/kittenzflight/censor-popup@main/images/j8vECbl.png",
        "https://cdn.jsdelivr.net/gh/kittenzflight/censor-popup@main/images/KnBmtk3.png",
        "https://cdn.jsdelivr.net/gh/kittenzflight/censor-popup@main/images/kYIPspi.png",
        "https://cdn.jsdelivr.net/gh/kittenzflight/censor-popup@main/images/mM7gmTv.png",
        "https://cdn.jsdelivr.net/gh/kittenzflight/censor-popup@main/images/NdAkMUN.png",
        "https://cdn.jsdelivr.net/gh/kittenzflight/censor-popup@main/images/OEcPLeg.png",
        "https://cdn.jsdelivr.net/gh/kittenzflight/censor-popup@main/images/pawcensor7.png",
        "https://cdn.jsdelivr.net/gh/kittenzflight/censor-popup@main/images/pawcensor8.png",
        "https://cdn.jsdelivr.net/gh/kittenzflight/censor-popup@main/images/RDT_20251009_1341085938169982248552407.png",
        "https://cdn.jsdelivr.net/gh/kittenzflight/censor-popup@main/images/RDT_20251015_1053111557748578946912637.png",
        "https://cdn.jsdelivr.net/gh/kittenzflight/censor-popup@main/images/RDT_20251015_1053137526698811540066672.png",
        "https://cdn.jsdelivr.net/gh/kittenzflight/censor-popup@main/images/RDT_20251015_1053168264305018465134280.png",
        "https://cdn.jsdelivr.net/gh/kittenzflight/censor-popup@main/images/RDT_20251103_0416506748246703000898010.png",
        "https://cdn.jsdelivr.net/gh/kittenzflight/censor-popup@main/images/RDT_20251103_1405257255778176778764800.png",
        "https://cdn.jsdelivr.net/gh/kittenzflight/censor-popup@main/images/RDT_20251103_1405522216817939736524364.png",
        "https://cdn.jsdelivr.net/gh/kittenzflight/censor-popup@main/images/RDT_20251104_1609052612580080103016341.png",
        "https://cdn.jsdelivr.net/gh/kittenzflight/censor-popup@main/images/RDT_20251109_0634198622118131010542570.png",
        "https://cdn.jsdelivr.net/gh/kittenzflight/censor-popup@main/images/RDT_20251109_0635299355693879616020049.png",
        "https://cdn.jsdelivr.net/gh/kittenzflight/censor-popup@main/images/RDT_20251109_0635318971608469596356400.png",
        "https://cdn.jsdelivr.net/gh/kittenzflight/censor-popup@main/images/RDT_20251109_0644001287714239312844615.png",
        "https://cdn.jsdelivr.net/gh/kittenzflight/censor-popup@main/images/RDT_20251109_0645262179347786922080725.png",
        "https://cdn.jsdelivr.net/gh/kittenzflight/censor-popup@main/images/RDT_20251207_1908275111813556487336341.png",
        "https://cdn.jsdelivr.net/gh/kittenzflight/censor-popup@main/images/RemDCR.png",
        "https://cdn.jsdelivr.net/gh/kittenzflight/censor-popup@main/paws/2a24ada4c4d7b7c0cc01517c76ba1028.jpg",
        "https://cdn.jsdelivr.net/gh/kittenzflight/censor-popup@main/paws/8a563a67b8ae4d626fdcef7cf9a94d24.jpg",
        "https://cdn.jsdelivr.net/gh/kittenzflight/censor-popup@main/paws/c405d97e7a86cac8b2f81e5dec4edd88.png",
        "https://cdn.jsdelivr.net/gh/kittenzflight/censor-popup@main/paws/large.png",
        "https://cdn.jsdelivr.net/gh/kittenzflight/censor-popup@main/paws/OIP.png",
        "https://cdn.jsdelivr.net/gh/kittenzflight/censor-popup@main/paws/paw%20paw.png",
        "https://cdn.jsdelivr.net/gh/kittenzflight/censor-popup@main/paws/paws_up__yuki_s_feet_tf_sketch__by_wolfevetfs_dby52jb-fullview.png",
        "https://cdn.jsdelivr.net/gh/kittenzflight/censor-popup@main/paws/RDT_20251207_1908275111813556487336341.png",
        "https://cdn.jsdelivr.net/gh/kittenzflight/censor-popup@main/paws/sample_08d57a49caf35bc9afceea4518ad746a.png",
        "https://cdn.jsdelivr.net/gh/kittenzflight/censor-popup@main/paws/sample_1f1ec28fd28de7f7ba8accd326477601f5eb1dd2.png",
        "https://cdn.jsdelivr.net/gh/kittenzflight/censor-popup@main/paws/sample_4606b280cf94303566fe9f5908bef14d.png",
        "https://cdn.jsdelivr.net/gh/kittenzflight/censor-popup@main/paws/sample_a22795e934134e398ef9c067e73fb3cfbcc1e623.png",
        "https://cdn.jsdelivr.net/gh/kittenzflight/censor-popup@main/paws/vr.png"
    ];
    
    // Log to verify script is running
    console.log("Image Spawner Script Active - Images will spawn every 200ms");
    
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
            // Don't spawn if we're at max capacity
            if (activeImages.length >= MAX_IMAGES) {
                return;
            }
            const img = document.createElement("img");
            const imgUrl = imageList[Math.floor(Math.random() * imageList.length)];
            img.src = imgUrl;
            
            // Hide image if it fails to load
            img.onerror = function() {
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
            
            // Remove image after 5 seconds
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
            }, 5000);
        }

        // Spawn first image immediately
        spawnImage();
        
        // spawn every 200ms
        setInterval(spawnImage, 200);
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
