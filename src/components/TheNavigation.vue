<template>
  <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
    <a
      class="navbar-brand"
      href="#">Vue boilerplate docs</a>

    <button
      class="navbar-toggler"
      type="button"
      data-toggle="collapse"
      data-target="#navbarSupportedContent"
      aria-controls="navbarSupportedContent"
      aria-expanded="false"
      aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>

    <div
      class="collapse navbar-collapse"
      id="navbarSupportedContent">
      <ul class="navbar-nav mr-auto">
        <li class="nav-item">
          <router-link to="/" class="nav-link" >
            Getting started
          </router-link>
        </li>
        <li class="nav-item">
          <router-link to="/bootstrap" class="nav-link" >
            Bootstrap
          </router-link>
        </li>
        <li class="nav-item">
          <router-link to="/icons" class="nav-link" >
            Icons
          </router-link>
        </li>
        <li class="nav-item">
          <router-link to="/testing" class="nav-link" >
            Testing
          </router-link>
        </li>
      </ul>
    </div>
  </nav>
</template>
