window.addEventListener('DOMContentLoaded', navigator, false)
window.addEventListener('hashchange', navigator, false)

function navigator() {
  console.log({ location })

  if (location.hash.startsWith('#trends')) {
    trendsPage()
  } else if (location.hash.startsWith('#search=')) {
    searchPage()
  } else if (location.hash.startsWith('#movie=')) {
    movieDetailsPage()
  } else if (location.hash.startsWith('#category=')) {
    categoriesPage()
  } else {
    homePage()
  }
}

function trendsPage () {
    console.log('This is trends')
}
function searchPage () {
    console.log('This is search')
}
function movieDetailsPage () {
    console.log('This is movie')
}
function categoriesPage () {
    console.log('Categories')
}
function homePage () {
    console.log('This is home')
    getTrendMoviesPreview()
    getCategoriesPreview()
}