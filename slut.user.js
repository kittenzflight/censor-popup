// ==UserScript==
// @name         slut Image Spawner Infinite
// @namespace    Violentmonkey Scripts
// @version      2.0
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
        "https://cdn.jsdelivr.net/gh/kittenzflight/censor-popup@main/slut1/13oejqb4ej5g1.png",
        "https://cdn.jsdelivr.net/gh/kittenzflight/censor-popup@main/slut1/a-captured-princess-makes-a-good-gift-for-her-conqueror-v0-ohy70bd6tz6g1.png",
        "https://cdn.jsdelivr.net/gh/kittenzflight/censor-popup@main/slut1/shes-just-waiting-her-turn-zetsu-red-v0-38zkg9acre5g1.png",
        "https://cdn.jsdelivr.net/gh/kittenzflight/censor-popup@main/slut1/the-perfect-girl-v0-n0dg0s0rvl6g1.png",
        "https://cdn.jsdelivr.net/gh/kittenzflight/censor-popup@main/slut1/there-is-only-one-reason-she-ever-removes-the-gag-v0-f854f5ncue5g1.png",
        "https://cdn.jsdelivr.net/gh/kittenzflight/censor-popup@main/slut1/what-a-surprise-spider-gwen-is-into-bondage-too-jam-orbital-v0-honkn7uvdn6g1.png",
        "https://cdn.jsdelivr.net/gh/kittenzflight/censor-popup@main/slut1/when-she-says-shes-only-vibing-with-them-v0-uvfii8jn9l6g1.png",
        "https://cdn.jsdelivr.net/gh/kittenzflight/censor-popup@main/slut1/whos-a-good-girl-to-her-master-v0-wy9ahgwpbp6g1.png",
        "https://cdn.jsdelivr.net/gh/kittenzflight/censor-popup@main/slut1/youre-such-a-pretty-table-ornament-v0-bdo2seijeg5g1.png",
        "https://cdn.jsdelivr.net/gh/kittenzflight/censor-popup@main/slut%202/femboy-doing-community-service-v0-gknhru97m07g1.png",
        "https://cdn.jsdelivr.net/gh/kittenzflight/censor-popup@main/slut%202/flattery-will-get-you-everywhere-v0-w0gqxhr5e77g1.png",
        "https://cdn.jsdelivr.net/gh/kittenzflight/censor-popup@main/slut%202/keeping-her-busy-v0-dgvf0oyr546g1.png",
        "https://cdn.jsdelivr.net/gh/kittenzflight/censor-popup@main/slut%202/make-sure-to-have-a-good-time-together-v0-4e4wbq1g296g1.png",
        "https://cdn.jsdelivr.net/gh/kittenzflight/censor-popup@main/slut%202/mgqistb4ej5g1.png",
        "https://cdn.jsdelivr.net/gh/kittenzflight/censor-popup@main/slut%202/my-pets-humillated-v0-a7yxbnf1sd6g1.png",
        "https://cdn.jsdelivr.net/gh/kittenzflight/censor-popup@main/slut%202/overstimulation-on-her-sensitive-parts-while-restrained-v0-jxgnw3fjp17g1.png",
        "https://cdn.jsdelivr.net/gh/kittenzflight/censor-popup@main/slut%202/ready-to-be-stored-away-v0-ca84fxu3666g1.png",
        "https://cdn.jsdelivr.net/gh/kittenzflight/censor-popup@main/slut%202/she-gets-100-every-time-she-says-the-word-yes-scarlett-v0-ttxwa7481o5g1.png",
        "https://cdn.jsdelivr.net/gh/kittenzflight/censor-popup@main/slut%202/she-is-free-to-admire-herself-thats-all-her-freedom-v0-gkbzcd1gx26g1.png",
        "https://cdn.jsdelivr.net/gh/kittenzflight/censor-popup@main/slut%203/C3BCbels-being-defeated-a-fair-and-fun-punishment-v0-0lvyflmyo67g1.png",
        "https://cdn.jsdelivr.net/gh/kittenzflight/censor-popup@main/slut%203/beeing-tied-up-and-used-like-the-slut-i-am-v0-s90c9sr5ur5g1.png",
        "https://cdn.jsdelivr.net/gh/kittenzflight/censor-popup@main/slut%203/breeding-his-helpless-pet-v0-i3j0v6tcm66g1.png",
        "https://cdn.jsdelivr.net/gh/kittenzflight/censor-popup@main/slut%203/cheerleaders-give-the-cocky-college-freshman-the-welcome-he-v0-a8shfcpnu47g1.png",
        "https://cdn.jsdelivr.net/gh/kittenzflight/censor-popup@main/slut%203/conquest-kinkymation-v0-snl75fwc2q5g1.png",
        "https://cdn.jsdelivr.net/gh/kittenzflight/censor-popup@main/slut%203/elf-packing-service-v0-viavj7j2e85g1.png",
        "https://cdn.jsdelivr.net/gh/kittenzflight/censor-popup@main/slut%203/femboy-and-his-mistress-comics-v0-7xv4c4efot6g1.png",
        "https://cdn.jsdelivr.net/gh/kittenzflight/censor-popup@main/slut%203/my-panties-are-showing-pull-my-mini-shorts-back-up-v0-uumst5jpqc5g1.png",
        "https://cdn.jsdelivr.net/gh/kittenzflight/censor-popup@main/slut%203/some-together-time-v0-75nj9a249a5g1.png",
        "https://cdn.jsdelivr.net/gh/kittenzflight/censor-popup@main/slut%204/7uolpl0tu86g1.png",
        "https://cdn.jsdelivr.net/gh/kittenzflight/censor-popup@main/slut%204/a-friend-planning-a-bachelorette-party-whitepork-v0-0oc1qwijxg6g1.png",
        "https://cdn.jsdelivr.net/gh/kittenzflight/censor-popup@main/slut%204/beat-pick-for-kara-detroit-become-human-john-doe-v0-lrvj0blbc67g1.png",
        "https://cdn.jsdelivr.net/gh/kittenzflight/censor-popup@main/slut%204/her-maid-training-was-a-success-gdhs-v0-3ezvb82xbj6g1.png",
        "https://cdn.jsdelivr.net/gh/kittenzflight/censor-popup@main/slut%204/im-the-newest-intern-at-the-office-v0-mwa7dunmci6g1.png",
        "https://cdn.jsdelivr.net/gh/kittenzflight/censor-popup@main/slut%204/quite-flexible-v0-bdzfl6jd895g1.png",
        "https://cdn.jsdelivr.net/gh/kittenzflight/censor-popup@main/slut%204/she-lost-her-bet-and-had-no-money-to-pay-now-she-serves-as-v0-sns7rzmslg6g1.png",
        "https://cdn.jsdelivr.net/gh/kittenzflight/censor-popup@main/slut%204/slave-zelda-makinaru-on-pixiv-breath-of-the-wild-v0-pg72o5swpj6g1.png",
        "https://cdn.jsdelivr.net/gh/kittenzflight/censor-popup@main/slut%204/the-cigarette-after-v0-bee4h4wij76g1.png",
        "https://cdn.jsdelivr.net/gh/kittenzflight/censor-popup@main/slut%204/this-time-its-revenge-time-v0-y9bdsqtowd6g1.png",
        "https://cdn.jsdelivr.net/gh/kittenzflight/censor-popup@main/slut%205/rebooting-miku-bartolomeobari-vocaloid-v0-vyrbdqmezy6g1.png",
        "https://cdn.jsdelivr.net/gh/kittenzflight/censor-popup@main/slut%205/sae-and-makoto-cutesexyrobutts-v0-sfu6czf88w2g1.png",
        "https://cdn.jsdelivr.net/gh/kittenzflight/censor-popup@main/slut%205/sakura-ignite-naruto-v0-zy1epngqy77g1.png",
        "https://cdn.jsdelivr.net/gh/kittenzflight/censor-popup@main/slut%205/she-wasnt-behave-v0-4rwm92nzh66g1.png",
        "https://cdn.jsdelivr.net/gh/kittenzflight/censor-popup@main/slut%205/straight-to-the-point-issa-castagno-issa-castagno-v0-jodfzpxvat5g1.png",
        "https://cdn.jsdelivr.net/gh/kittenzflight/censor-popup@main/slut%205/straight-to-the-point-issa-castagno-issa-castagno-v0-oy5cy2yvat5g1.png",
        "https://cdn.jsdelivr.net/gh/kittenzflight/censor-popup@main/slut%205/straight-to-the-point-issa-castagno-issa-castagno-v0-vtx5r2yvat5g1.png",
        "https://cdn.jsdelivr.net/gh/kittenzflight/censor-popup@main/slut%205/sumire-yoshizawa-windmill-v0-wjqfq4zvkg2g1.png",
        "https://cdn.jsdelivr.net/gh/kittenzflight/censor-popup@main/slut%205/the-pleasure-wheel-sos-adult-idolmaster-v0-r4qascm7l57g1.png",
        "https://cdn.jsdelivr.net/gh/kittenzflight/censor-popup@main/slut%205/yoruichi-santa-cetta-bleach-v0-t83915aelv6g1.png",
        "https://cdn.jsdelivr.net/gh/kittenzflight/censor-popup@main/slut%206/darkness-ponponmaru-konosuba-v0-6fswtxj4907g1.png",
        "https://cdn.jsdelivr.net/gh/kittenzflight/censor-popup@main/slut%206/elven-slave-tatsketchlab-original-v0-3fpx2fq9877g1.png",
        "https://cdn.jsdelivr.net/gh/kittenzflight/censor-popup@main/slut%206/gwen-dripping-tarakanovich-spider-man-v0-0ny4xwx1zz6g1.png",
        "https://cdn.jsdelivr.net/gh/kittenzflight/censor-popup@main/slut%206/hatsune-mikus-doggstyle-shadow-fuzzlogik-vocaloid-v0-qpfcwt58z37g1.png",
        "https://cdn.jsdelivr.net/gh/kittenzflight/censor-popup@main/slut%206/kotone-shiomi-the-fool-arcana-aspieafterdark-v0-sir7cbgn8t5g1.png",
        "https://cdn.jsdelivr.net/gh/kittenzflight/censor-popup@main/slut%206/makotos-waiting-for-you-v0-5kqzckw76f6g1.png",
        "https://cdn.jsdelivr.net/gh/kittenzflight/censor-popup@main/slut%206/marin-boobs-is-visible-momdadno-sono-bisque-doll-v0-3lwcdbrcv36g1.png",
        "https://cdn.jsdelivr.net/gh/kittenzflight/censor-popup@main/slut%206/miku-got-caught-watching-porn-greatmosu-vocaloid-v0-4mcj6csl416g1.png",
        "https://cdn.jsdelivr.net/gh/kittenzflight/censor-popup@main/slut%206/miku-got-caught-watching-porn-greatmosu-vocaloid-v0-fyi29myl416g1.png",
        "https://cdn.jsdelivr.net/gh/kittenzflight/censor-popup@main/slut%206/power-doesnt-need-to-take-a-shower-geulimykun-chainsaw-man-v0-o71lz9ep507g1.png"
    ];
    
    console.log("Slut Image Spawner Active - 59 images loaded");
    
    function setup() {
        document.body.style.margin = "0";
        document.body.style.background = "#000";
        document.body.style.position = "relative";
        document.body.style.overflow = "auto";
        document.body.style.minHeight = "100vh";
        
        const activeImages = [];
        const MAX_IMAGES = 10;
        
        function spawnImage() {
            if (activeImages.length >= MAX_IMAGES) {
                return;
            }
            
            const img = document.createElement("img");
            const imgUrl = imageList[Math.floor(Math.random() * imageList.length)];
            img.src = imgUrl;
            
            img.onload = function() {
                console.log("✓ Loaded:", imgUrl.split('/').pop());
            };
            
            img.onerror = function() {
                console.error("✗ Failed:", imgUrl.split('/').pop());
                img.remove();
                const index = activeImages.indexOf(img);
                if (index > -1) {
                    activeImages.splice(index, 1);
                }
            };
            
            const size = Math.floor(60 + Math.random() * 200);
            img.style.width = size + "px";
            img.style.position = "absolute";
            
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
            
            img.style.left = Math.random() * Math.max(0, pageWidth - size) + "px";
            img.style.top = Math.random() * Math.max(0, pageHeight - size) + "px";
            
            img.style.opacity = "0";
            img.style.transition = "opacity 400ms linear";
            document.body.appendChild(img);
            
            activeImages.push(img);
            
            requestAnimationFrame(() => { img.style.opacity = "1"; });
            
            setTimeout(() => {
                img.style.opacity = "0";
                setTimeout(() => {
                    img.remove();
                    const index = activeImages.indexOf(img);
                    if (index > -1) {
                        activeImages.splice(index, 1);
                    }
                }, 400);
            }, 2000);
        }

        spawnImage();
        setInterval(spawnImage, 250);
    }
    
    if (document.body) {
        setup();
    } else {
        document.addEventListener('DOMContentLoaded', setup, { once: true });
        setTimeout(() => { if (document.body) setup(); }, 100);
    }
})();
