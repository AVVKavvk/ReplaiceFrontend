const {create} = require("zustand")

export const useThemeStore = create((set) => ({
  theme: localStorage.getItem("Replaice-them") || "dark",

  setTheme: (theme)=>{
    localStorage.setItem("Replaice-them",theme)
    console.log(theme);
    
    set({theme:theme})
  }
}))