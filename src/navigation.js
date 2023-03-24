let maxPage;
let page = 1;
let infinitScroll;
searchFormBtn.addEventListener('click', () => {
  location.hash = "#search=" + searchFormInput.value
})
trendingBtn.addEventListener('click', () => {
  location.hash = "#trends"
})
arrowBtn.addEventListener('click', () => {
  history.back()
  
})
window.addEventListener('DOMContentLoaded', navigator, false)
window.addEventListener('hashchange', navigator, false)
window.addEventListener('scroll', infinitScroll, false)

function navigator() {
  console.log({ location })

  if (infinitScroll) {
    window.removeEventListener('scroll', infinitScroll, {passive: false})
    infinitScroll = undefined
  }

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
  document.body.scrollTo = 0;
  document.documentElement.scrollTop = 0

  if (infinitScroll) {
    window.addEventListener('scroll', infinitScroll, {passive: false})
  }
}

function trendsPage() {
  headerSection.classList.remove('header-container--long')
  headerSection.style.background = ''
  arrowBtn.classList.remove('inactive')
  arrowBtn.classList.remove('header-arrow--white')
  headerTitle.classList.add('inactive')
  headerCategoryTitle.classList.remove('inactive')
  searchForm.classList.add('inactive')

  trendingPreviewSection.classList.add('inactive')
  categoriesPreviewSection.classList.add('inactive')
  likedMoviesSection.classList.add('inactive')
  genericSection.classList.remove('inactive')
  movieDetailSection.classList.add('inactive')

  headerCategoryTitle.innerHTML = 'Tendencias'
  getTrendingMovies()
  infinitScroll = getPaginatedTrendingMovies;
}
function searchPage() {
  headerSection.classList.remove('header-container--long');
  headerSection.style.background = '';
  arrowBtn.classList.remove('inactive');
  arrowBtn.classList.remove('header-arrow--white');
  headerTitle.classList.add('inactive');
  headerCategoryTitle.classList.add('inactive');
  searchForm.classList.remove('inactive');

  trendingPreviewSection.classList.add('inactive');
  categoriesPreviewSection.classList.add('inactive');
  likedMoviesSection.classList.add('inactive')
  genericSection.classList.remove('inactive');
  movieDetailSection.classList.add('inactive');
  const [_, query] = location.hash.split('=');
  getMoviesBySearch(query);
  infinitScroll = getPaginatedMoviesBySearch(query);
}
function movieDetailsPage() {
  headerSection.classList.add('header-container--long')
  // headerSection.style.background = ''
  arrowBtn.classList.remove('inactive')
  arrowBtn.classList.add('header-arrow--white')
  headerTitle.classList.add('inactive')
  headerCategoryTitle.classList.add('inactive')
  searchForm.classList.add('inactive')

  trendingPreviewSection.classList.add('inactive')
  categoriesPreviewSection.classList.add('inactive')
  likedMoviesSection.classList.add('inactive')
  genericSection.classList.add('inactive')
  movieDetailSection.classList.remove('inactive')

  const [_, movieId] = location.hash.split('=')
  getMovieById(movieId)
}
function categoriesPage() {
  //copy
  headerSection.classList.remove('header-container--long')
  // headerSection.style.background = ''
  arrowBtn.classList.remove('inactive')
  arrowBtn.classList.remove('header-arrow--white')
  headerTitle.classList.add('inactive')
  headerCategoryTitle.classList.remove('inactive')
  searchForm.classList.add('inactive')

  trendingPreviewSection.classList.add('inactive')
  categoriesPreviewSection.classList.add('inactive')
  likedMoviesSection.classList.add('inactive')
  genericSection.classList.remove('inactive')
  movieDetailSection.classList.add('inactive')

  const [_, categoryData] = location.hash.split('=')
  const [ categoryId, categoryName ] = categoryData.split('-')
  headerCategoryTitle.innerHTML = decodeURIComponent(categoryName)
  getMoviesByCategory(categoryId)
  infinitScroll = getPaginatedMoviesByCategory(categoryId);
}
function homePage() {
  headerSection.classList.remove('header-container--long')
  headerSection.style.background = ''
  arrowBtn.classList.add('inactive')
  arrowBtn.classList.remove('header-arrow--white')
  headerTitle.classList.remove('inactive')
  headerCategoryTitle.classList.add('inactive')
  searchForm.classList.remove('inactive')

  trendingPreviewSection.classList.remove('inactive')
  likedMoviesSection.classList.remove('inactive')
  categoriesPreviewSection.classList.remove('inactive')
  genericSection.classList.add('inactive')
  movieDetailSection.classList.add('inactive')

  getTrendMoviesPreview()
  getCategoriesPreview()
  getLikedMovies()
}
