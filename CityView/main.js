M.AutoInit();

// Slider
const slider = document.querySelector(".slider");
M.Slider.init(slider, {
  indicators: false,
  height: 500,
  transition: 500,
  interval: 6000
});

// Autocomplete
const ac = document.querySelector(".autocomplete");
M.Autocomplete.init(ac, {
  data: {
    Paris: null,
    Dakar: null,
    London: null,
    "New-York": null,
    Tokyo: null,
    Casablanca: null,
    Dubai: null,
    Madrid: null,
    Milan: null,
    Beijin: null,
    Bangkok: null,
    Athenes: null
  }
});

/*
//Slidenav
const sideNav = document.querySelector(".sidenav");
M.Sidenav.init(sideNav, {});

//Material Boxed
const mb = document.querySelectorAll('.materialboxed');
M.MaterialBox.init(mb, {});

//SrollSpy
const ss = document.querySelectorAll('.scrollspy')
M.ScrollSpy =.inint(ss, {}); */
