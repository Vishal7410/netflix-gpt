export const Logo = "https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png"

export const bgcImage = "https://assets.nflxext.com/ffe/siteui/vlv3/93da5c27-be66-427c-8b72-5cb39d275279/94eb5ad7-10d8-4cca-bf45-ac52e0a052c0/IN-en-20240226-popsignuptwoweeks-perspective_alpha_website_large.jpg"

export const userAvtar = "https://wallpapers.com/images/hd/netflix-profile-pictures-1000-x-1000-qo9h82134t9nv0j0.jpg"

export const API_OPTION = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      
      Authorization: "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzZjM1NGI2NTc5YzUxODUwYzIzMzczZjQwYmEyMTZlNCIsInN1YiI6IjY1ZjcyZGMwZDhmNDRlMDE2MzRmYjZiNCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.F82euH840U9IGg3RtlJUPt8RQb2gXUHi-7981EcQtXQ" ,
      // Authorization: "Bearer " +process.env.REACT_APP_TMDB_KEY insted of above
    },
  };

  export const IMG_CDN_URL = "https://image.tmdb.org/t/p/w780"

  export const SUPPORTED_LANGUAGE = [
  {identifier:"en", name: "English"},
  {identifier:"hindi", name: "Hindi"},
  {identifier:"spanish", name: "Spanish"}
];

// you get these API from the platform.openai.com // you get these API Keys. & you have to create your Api keyse 
// keep it secreate

export const OPENAI_KEY = "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" // use these insted of these
//export const OPENAI_KEY = process.env.REACT_APP_OPENAI_KEY 
