<template>
<!-- navbar -->
<nav class="navbar navbar-expand-lg bg-body-tertiary">
    <div class="container-fluid">
      <a class="navbar-brand" href="#">list</a>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          <li class="nav-item dropdown">
            <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
              カレー
            </a>
            <ul class="dropdown-menu down-menu-background">
              <li><NuxtLink class="dropdown-item move-link" to="/pagesin/chander">chander</NuxtLink></li>
            </ul>
          </li>
          <li class="nav-item dropdown">
            <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
              ラーメン
            </a>
            <ul class="dropdown-menu down-menu-background">
              <li><NuxtLink class="dropdown-item move-link" to="/pagesin/mokkosu">肥後もっこす</NuxtLink></li>
            </ul>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>