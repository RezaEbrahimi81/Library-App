// dom
const booksData = [
  {
    id: 1,
    title: "خواجه تاجدار",
    author: "ژان گور",
    published_date: 2007,
    language: "persian",
    genre: "تاریخ",
    imgSrc: "1.jpg",
  },
  {
    id: 2,
    title: "ضیافت",
    author: "افلاطون",
    published_date: 385,
    language: "greek",
    genre: "فلسفه",
    imgSrc: "2.jpg",
  },
  {
    id: 3,
    title: "منطق الطیر",
    author: "عطار",
    published_date: 1177,
    language: "persian",
    genre: "شعر",
    imgSrc: "3.jpg",
  },
  {
    id: 4,
    title: "مثنوی معنوی",
    author: "مولوی",
    published_date: 1258,
    language: "persian",
    genre: "شعر",
    imgSrc: "4.jpg",
  },
  {
    id: 5,
    title: "دیوان حافظ",
    author: "حافظ",
    published_date: 1200,
    language: "persian",
    genre: "شعر",
    imgSrc: "5.jpg",
  },
  {
    id: 6,
    title: "رومیو و جولیت",
    author: "ویلیام شکسپیر",
    published_date: 1595,
    language: "english",
    genre: "عاشقانه",
    imgSrc: "6.jpg",
  },
  {
    id: 7,
    title: "ویس و رامین",
    author: "فخرالدین اسعد گرگانی",
    published_date: 1054,
    language: "persian",
    genre: "عاشقانه",
    imgSrc: "7.jpg",
  },
  {
    id: 8,
    title: "گلستان",
    author: "سعدی",
    published_date: 1258,
    language: "persian",
    genre: "شعر",
    imgSrc: "8.jpg",
  },
  {
    id: 9,
    title: "بوستان",
    author: "سعدی",
    published_date: 1257,
    language: "persian",
    genre: "شعر",
    imgSrc: "9.jpg",
  },
  {
    id: 10,
    title: "گلشن راز",
    author: "شیخ محمود شبستری",
    published_date: 1311,
    language: "persian",
    genre: "شعر",
    imgSrc: "10.jpg",
  },
  {
    id: 11,
    title: "لیلی و مجنون",
    author: "نظامی",
    published_date: 1188,
    language: "persian",
    genre: "عاشقانه",
    imgSrc: "11.jpg",
  },
  {
    id: 12,
    title: "شاهنامه",
    author: "فردوسی",
    published_date: 1010,
    language: "persian",
    genre: "شعر",
    imgSrc: "12.jpg",
  },
  {
    id: 13,
    title: "ایلیاد",
    author: "هومر",
    published_date: 762,
    language: "greek",
    genre: "شعر",
    imgSrc: "13.jpg",
  },
  {
    id: 14,
    title: "اودیسه",
    author: "هومر",
    published_date: 725,
    language: "greek",
    genre: "شعر",
    imgSrc: "14.jpg",
  },
  {
    id: 15,
    title: "هملت",
    author: "ویلیام شکسپیر",
    published_date: 1609,
    language: "greek",
    genre: "درام",
    imgSrc: "15.jpg",
  },
  {
    id: 16,
    title: "دن کیشوت",
    author: "میگل دسروانتس",
    published_date: 1605,
    language: "spanish",
    genre: "درام",
    imgSrc: "16.jpg",
  },
];
const mobileNavMenu = document.getElementById("mobileNavMenu");
const burgerIcon = document.getElementById("burgerIcon");
const row = document.getElementById("row");
const filterNav = document.getElementById("filterNav");
const showAllBtn = document.getElementById("showAllBtn");
const authorsFilter = document.getElementById("authorsFilter");
const langsFilter = document.getElementById("langsFilter");
const genresFilter = document.getElementById("genresFilter");
const paginationWall = document.getElementById("paginationWall");
const pages = document.getElementById("paging");
const nextPageBtn = document.getElementById("nextPageBtn");
const pervPageBtn = document.getElementById("pervPageBtn");
const selectedAuthors = [];
const selectedLangs = [];
const selectedGenres = [];
let currentPage = 1 ;
let perPage =  6;




//functions
function toggleMobileNavMenu() {
  const isHidden = mobileNavMenu.classList.toggle("hidden");
  if (isHidden) {
    burgerIcon.innerHTML = ' <i class="fa-solid fa-bars fa-lg"></i>';
  } else {
    burgerIcon.innerHTML = '<i class="fa-solid fa-xmark"></i>';
  }
}

function toggleFilterNav() {
  filterNav.classList.toggle("hidden");
}


function renderBooks(data) {
  const template = data.slice((currentPage - 1) * perPage , perPage * currentPage)
    .map((book) => {
      return `
    <div
    class="w-2/12 min-w-40 flex flex-col basis-2/12 shrink-0  my-[0.5%] mx-auto  max-w-52 relative min-h-28 align-center text-center  group"
    >
    <img src="./image/${book.imgSrc}" class="min-h-28 h-[80%] leading-normal" />
    <div class="bg-[#323232cc] w-full h-[80%] absolute flex flex-col items-center justify-between top-0 left-0 opacity-0 group-hover:opacity-100" >
    <div class=" flex flex-col justify-evenly items-center h-[80%] mt-[15%]">
    <span>
    <i class="fa-solid fa-bookmark fa-xl text-primary"></i>
    </span>
    <span>
    <i class="fa-solid fa-gift fa-xl text-primary"></i>
    </span>
    <span>
    <i class="fa-solid fa-square-share-nodes fa-xl text-primary"></i>
    </span>
    </div>
    </div>
    <div class=" ">
    <h3 class="mt-2 font-primary font-medium text-lg ">${book.title}</h3>
    <div class=" font-primary text-secondary ">${book.author}</div>
    </div>
    
    </div>
    `;
    })
    .join(" ");
  row.innerHTML = template;
  
  renderPagination(data);
}

function renderAuthors() {
  const authorsData = [];

  for (const book of booksData) {
    if (!authorsData.includes(book.author)) {
      authorsData.push(book.author);
    }
  }
  const authorsTemplate = authorsData
    .map((author) => {
      return `
    <div class="">
    <label class="relative w-full flex gap-2 items-center pr-2 font-light text-right" for="${author}">
    <input 
    onclick="authorSelection(event)"
    class="peer w-4 h-4 cursor-pointer appearance-none border rounded bg-white border-secondary checked:bg-primary"
    id="${author}"
    type="checkbox"
    value="${author}"
    />
    <span>${author}</span>
    <span class="absolute text-white opacity-0 peer-checked:opacity-100 top-[58%] left-[90%] transform -translate-x-1/2 -translate-y-[65%]">
    <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" viewBox="0 0 20 20" fill="currentColor" stroke="currentColor" stroke-width="1">
    <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path>
    </svg>
    </span>
    </label
    >
    </div>
    
    
    `;
    })
    .join("");

  authorsFilter.innerHTML = authorsTemplate;
}

function renderLangs() {
  const langsData = [];

  for (const book of booksData) {
    if (!langsData.includes(book.language)) {
      langsData.push(book.language);
    }
  }
  const langsTemplate = langsData
    .map((lang) => {
      return `
    <div class="">
    <label class="relative w-full flex gap-2 items-center pr-2 font-light text-right" for="${lang}">
    <input 
        onclick="langSelection(event)"
        class="peer w-4 h-4 cursor-pointer appearance-none border rounded bg-white border-secondary checked:bg-primary"
        id="${lang}"
        type="checkbox"
        value="${lang}"
        />
        <span>${lang}</span>
        <span class="absolute text-white opacity-0 peer-checked:opacity-100 top-[58%] left-[90%] transform -translate-x-1/2 -translate-y-[65%]">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" viewBox="0 0 20 20" fill="currentColor" stroke="currentColor" stroke-width="1">
        <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path>
        </svg>
        </span>
        </label
        >
        </div>
                    
                    
         `;
    })
    .join("");
  langsFilter.innerHTML += langsTemplate;
}

function renderGenres() {
  const genresData = [];

  for (const book of booksData) {
    if (!genresData.includes(book.genre)) {
      genresData.push(book.genre);
    }
  }
  const genresTemplate = genresData
    .map((genre) => {
      return `
                    <div class="">
                    <label class="relative w-full flex gap-2 items-center pr-2 font-light text-right" for="${genre}">
                    <input 
                    onclick="genreSelection(event)"
                    class="peer w-4 h-4 cursor-pointer appearance-none border rounded bg-white border-secondary checked:bg-primary"
                    id="${genre}"
                    type="checkbox"
                    value="${genre}"
                    />
                    <span>${genre}</span>
                    <span class="absolute text-white opacity-0 peer-checked:opacity-100 top-[58%] left-[90%] transform -translate-x-1/2 -translate-y-[65%]">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" viewBox="0 0 20 20" fill="currentColor" stroke="currentColor" stroke-width="1">
                    <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path>
                    </svg>
                    </span>
                    </label
                    >
                    </div>
                    
                    
                    `;
    })
    .join("");

  genresFilter.innerHTML = genresTemplate;
}

function renderPagination(data) {
  const pagesCount = Math.ceil( data.length / perPage );
  const template = [...new Array(pagesCount)].map((item , index) => {
    const pageNum = index + 1 ;
    const isActive = pageNum === currentPage;
    return `
    <a  onclick="setCurrentPage(${pageNum})"  class="bg-${isActive ? 'white' : '[#F3F3F4]'} pointer-events-${isActive ? 'none' : 'auto' } cursor-pointer text-${isActive ? 'black' : 'primary'} py-3 px-4 rounded">
    ${pageNum}
    </a> 
    `
  }).join("");
  pages.innerHTML = template;

  updateButtonVisibility(pagesCount);

  
  

}

function authorSelection(event) {
  if (event.target.checked) {
    selectedAuthors.push(event.target.value);
  } else {
    const foundAuthors = selectedAuthors.findIndex(
      (item) => item === event.target.value
    );
    selectedAuthors.splice(foundAuthors, 1);
  }

  booksFilter();
}

function langSelection(event) {
  if (event.target.checked) {
    selectedLangs.push(event.target.value);
  } else {
    const foundLangs = selectedLangs.findIndex(
      (item) => item === event.target.value
    );
    selectedLangs.splice(foundLangs, 1);
  }

  booksFilter();
}

function genreSelection(event) {
  if (event.target.checked) {
    selectedGenres.push(event.target.value);
    console.log(selectedGenres);
  } else {
    const foundGenres = selectedGenres.findIndex(
      (item) => item === event.target.value
    );
    selectedGenres.splice(foundGenres, 1);
  }

  booksFilter();
}

function booksFilter(shouldRestPage) {
  let result = booksData;
  
  if(!shouldRestPage) {
    currentPage = 1;
  }

  if (selectedAuthors.length != 0) {
    result = result.filter((item) => selectedAuthors.includes(item.author));
  }

  if (selectedLangs.length != 0) {
    result = result.filter((item) => selectedLangs.includes(item.language));
  }

  if (selectedGenres.length != 0) {
    result = result.filter((item) => selectedGenres.includes(item.genre));
  }

  renderBooks(result);
}

function toggleAuthorsList() {
  const authorsChevron = document.getElementById("authorsChevron");
  const authorsHidden = authorsFilter.classList.toggle("hidden");
  if (authorsHidden) {
    authorsChevron.classList.toggle("fa-rotate-90");
  } else {
    authorsChevron.classList.remove("fa-rotate-90");
  }
}

function toggleLangsList() {
  const langsChevron = document.getElementById("langsChevron");
  const langsHidden = langsFilter.classList.toggle("hidden");
  if (langsHidden) {
    langsChevron.classList.toggle("fa-rotate-90");
  } else {
    langsChevron.classList.remove("fa-rotate-90");
  }
}

function toggleGenresList() {
  const genresChevron = document.getElementById("genresChevron");
  const genresHidden = genresFilter.classList.toggle("hidden");
  if (genresHidden) {
    genresChevron.classList.toggle("fa-rotate-90");
  } else {
    genresChevron.classList.remove("fa-rotate-90");
  }
}

function toggleDisplay() {
  const flexDisplay =
    "flex flex-grow justify-around gap-7  shrink-0 mx-auto pt-1 pb-3  px-8  transition-all ease-in-out duration-300";
  const gridDisplay =
    " grid grid-cols-1 md:grid-cols-3  mx-auto gap-7 justify-around pt-1 pb-3  transition-all ease-in-out duration-300 ";

  if (row.classList.contains("flex")) {
    showAllBtn.innerText = "مشاهده جزئی";
    row.className = gridDisplay;
    paginationWall.classList.remove("hidden");
    paginationWall.classList.toggle("flex");
  } else {
    showAllBtn.innerText = "مشاهده همه";
    row.className = flexDisplay;
    paginationWall.classList.remove("flex");
    paginationWall.classList.toggle("hidden");
  }
}

function updateButtonVisibility(pagesCount) {
  pervPageBtn.style.display = currentPage <= 1 ? 'none' : 'block';
  nextPageBtn.style.display = currentPage >= pagesCount ? 'none' : 'block';
}

function nextPage() {
  currentPage = currentPage + 1;
  booksFilter(true);
}

function pervPage() {
  currentPage = currentPage - 1;
  booksFilter(true);
}

function setCurrentPage(page) {
  currentPage = page;
  booksFilter(true);
  

  
 
}

setCurrentPage();
booksFilter();
// toggleDisplay();
// toggleFilterNav();
toggleGenresList();
toggleLangsList();
// toggleAuthorsList();
renderGenres();
renderLangs();
renderAuthors();
renderBooks(booksData);
