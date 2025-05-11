---
layout: def
title: TOUR
author: "Khaliil"
date: 2024-07-11 10:00:00
last_modified_at: 2025-03-21 10:30:00
published: false
css:
  - /static/css/index.css
---


<style>

.passport {
  max-width: 1000px;
  margin: auto;
  background: #000;
  padding: 40px;
  box-shadow: 0 0 40px rgba(0,0,0,0.8);
  border: 2px solid #fff;
}

.passport-info {
  display: flex;
  gap: 30px;
  margin-bottom: 60px;
  flex-wrap: wrap;
}

.passport-photo img {
  width: 180px;
  height: 240px;
  object-fit: cover;
  border: 2px solid #fff;
}

.passport-details h1 {
  margin: 0 0 20px;
  font-size: 26px;
  color: #fff;
}

.passport-details p {
  margin: 8px 0;
  font-size: 16px;
}

.signature {
  margin-top: 30px;
  font-style: italic;
  color: #fff;
}

.visa-stamps {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
  gap: 24px;
}

.stamp {
  position: relative;
  overflow: hidden;
  border: 2px solid #ffffff1f;
  text-decoration: none;
  color: white;
}

.stamp img {
  width: 100%;
  height: 180px;
  object-fit: cover;
  filter: grayscale(1);
  transition: 0.3s;
}

.stamp-overlay {
  position: absolute;
  inset: 0;
  background: rgba(0, 0, 0, 0.7);
  padding: 20px;
  z-index: 2;
  text-align: center;
  transition: 0.3s;
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.stamp:hover img {
  filter: grayscale(0);
  transform: scale(1.05);
}

.stamp-overlay h2 {
  text-transform: uppercase;
  font-weight: 300;

}

.stamp:hover .stamp-overlay {
  background: rgba(0, 0, 0, 0.4);
}


@media screen and (min-width:45em) {
  .passport {
    margin-bottom: 100px;
  }
}
</style>
<div class="h6">2024</div>


<div class="passport">
  <div class="passport-info">
    <div class="passport-details">
      <h1>2024 Travel Passport</h1>
      <p><strong>Name:</strong> Khalil</p>
      <p><strong>Nationality:</strong> Explorer</p>
      <p><strong>Passport No.:</strong> KH2024EXPLORE</p>
      <p><strong>Date of Issue:</strong> 01 Jan 2024</p>
      <p><strong>Expiration:</strong> 31 Dec 2024</p>
      <p class="signature">Signature: Khalil</p>
    </div>
  </div>

  <div class="visa-stamps">
    <a href="/switzerland" class="stamp">
      <div class="stamp-overlay">
        <h2>Switzerland</h2>
      </div>
      <img src="https://raw.githubusercontent.com/Khalil2000web/Media/main/Swis-page/IMG_9271.jpeg" alt="Switzerland">
    </a>
    <a href="/france" class="stamp">
      <div class="stamp-overlay">
        <h2>France</h2>
      </div>
      <img src="https://raw.githubusercontent.com/Khalil2000web/Media/refs/heads/main/france2024/IMG_6325.heic" alt="France">
    </a>
    <a href="/germany" class="stamp">
      <div class="stamp-overlay">
        <h2>Germany</h2>
      </div>
      <img src="https://raw.githubusercontent.com/Khalil2000web/Media/main/germany-media/IMG_9199.jpeg" alt="Germany">
    </a>
    <!-- Add more trips here -->
  </div>
</div>
