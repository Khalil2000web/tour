---
layout: def
title: Khalil
---

{% if page.url == "/" %}

<style> header a[href="/"], header a[href="/"] { display: none; } </style>
{% endif %}

<style>.grid-container {padding:0;display: grid;background:#000;min-height:100%;grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));gap: 20px;max-width:95%;margin: 0 auto;padding-top:190px;padding-bottom: 80px;}.grid-item {text-align: center;border-radius: 50%;width:280px;height:280px;position: relative;overflow: hidden;margin:0 auto;border:2px solid transparent;justify-content:center;margin-bottom: 50px;}.br_no_img {border:2px solid #9ea2a3;}.grid-item img {width: 100%;height: 100%;object-fit: cover;display: block;border-radius: 50%;pointer-events:none;transition:opacity 0.3s ease;}.grid-item p {position: absolute;top: 50%;left: 50%;transform: translate(-50%, -50%);font-size: 1.2rem;color:var(--text-color);margin: 0;z-index: 1;text-transform:uppercase;width:90%;word-wrap:break-word;font-family:var(--font-main);}.grid-container a {color:var(--text-color);text-decoration:none;}.cw{ transition:border 0.3s ease;}.cw:hover, .cw.touched{border:2px solid white;}.grid-item:hover p, .grid-item.touched p {display: block;color:var(--text-color);font-size: 1.4rem;}.grid-item p {transition:color 0.3s ease;pointer-events: none;}.grid-item:hover img, .grid-item.touched img {opacity:0.4;}@media screen and (min-width:60em) {.grid-container {max-width: 70%;}.grid-item {width:250px;height:250px;align-self: center;}}</style>
<style>.menutop {position: fixed;top:25px;left:50%;transform: translateX(-50%);width:100%;max-width:90%;display: flex;margin:0;padding:0;align-items: center;justify-content: space-around;z-index: var(--z-index-max);}.menutop a {color: var(--text-color);text-decoration: none;user-select: none;-webkit-user-select: none;font-size:22px;cursor: pointer;} </style>
<style>.menufooter {position: fixed;bottom: 0;left: 50%;transform: translateX(-50%);width:100%;max-width:90%;display: flex;align-items: end;justify-content: space-between;margin:0;padding:0;z-index: var(--z-index-max);}.menufooter a {color: var(--text-color);text-decoration: none;font-size:15px;padding:0 10px;margin: 0;padding-bottom:20px;user-select:none;-webkit-user-select:none;cursor: pointer;}.menufooter p {padding:0 10px;margin:0;padding-bottom:20px;font-size:15px;} @media screen and (min-width:45em) {.menufooter a {font-size: 14px;}.menutop {max-width: 60%;}.menutop a {font-size: 20px;}} </style>
<style>.hf5gf {position: fixed;top:100px;left:50%;transform: translateX(-50%);width:100%;max-width:90%;display: flex;padding:0;margin:0;align-items: center;justify-content: space-around;z-index: var(--z-index-max);}.hf5gf a {color: var(--text-color);text-decoration: none;cursor: pointer;font-size: 20px;}@media screen and (min-width:45em) {.grid-container {max-width: 80%;}} </style>

<div class="grid-container">
<a href="2024/credits"><div class="grid-item cw br_no_img"><p style="display:block;">credits</p></div></a>
<a href="2024/france"><div class="grid-item cw"><img src="https://raw.githubusercontent.com/Khalil2000web/Media/refs/heads/main/france2024/IMG_6325.heic" alt="France"><p>france</p></div></a>
<a href="2024/germany"><div class="grid-item cw"><img src="https://raw.githubusercontent.com/Khalil2000web/Media/main/germany-media/IMG_9199.jpeg" alt="Germany"><p>germany</p></div></a>
<a href="2024/switzerland"><div class="grid-item cw"><img src="https://raw.githubusercontent.com/Khalil2000web/Media/main/Swis-page/IMG_9271.jpeg" alt="Switzerland"><p>switzerland</p></div></a>
</div>
<script>document.querySelectorAll('.grid-item').forEach(item=>item.addEventListener('touchstart',function(){document.querySelectorAll('.grid-item').forEach(el=>el.classList.remove('touched'));this.classList.add('touched');setTimeout(()=>{this.classList.remove('touched');},1000);}));</script>
