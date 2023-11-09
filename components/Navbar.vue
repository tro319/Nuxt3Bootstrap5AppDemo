<template>
<!-- navbar -->
<nav class="navbar navbar-expand-lg bg-body-tertiary">
    <div class="container-fluid">
      <a class="navbar-brand" href="#">Sports list</a>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          <li class="nav-item dropdown">
            <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
              baseball
            </a>
            <ul class="dropdown-menu down-menu-background">
              <li><NuxtLink class="dropdown-item move-link" to="/koukouyakyuu">高校野球</NuxtLink></li>
              <li><NuxtLink class="dropdown-item move-link" to="#">社会人野球</NuxtLink></li>
            </ul>
          </li>
          <li class="nav-item dropdown">
            <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
              volleyball
            </a>
            <ul class="dropdown-menu down-menu-background">
              <li><NuxtLink class="dropdown-item move-link" to="#">Vリーグ</NuxtLink></li>
            </ul>
          </li>
          <li class="nav-item dropdown">
            <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
              soccer
            </a>
            <ul class="dropdown-menu down-menu-background">
              <li><NuxtLink class="dropdown-item move-link" to="#">高校サッカー</NuxtLink></li>
            </ul>
          </li>
          <li class="nav-item dropdown">
            <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
              track&field
            </a>
            <ul class="dropdown-menu down-menu-background">
              <li><NuxtLink class="dropdown-item move-link" to="#">京陸競技会</NuxtLink></li>
            </ul>
          </li>
        </ul>
        <form class="d-flex" role="search">
          <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search">
          <button class="btn btn-outline-success" type="submit">Search</button>
        </form>
      </div>
    </div>
  </nav>
</template>