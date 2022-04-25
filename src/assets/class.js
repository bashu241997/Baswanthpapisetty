const Navigation = "flex items-center text-sm py-4 px-6 h-12 overflow-hidden text-white text-ellipsis whitespace-nowrap rounded hover:text-black hover:bg-green-50 transition duration-300 ease-in-out"
const anchor =(e,data)=>{
    e.preventDefault()
    let element = document.getElementById(data);
    element && element.scrollIntoView({ behavior: "smooth", block: "start" });
  }
 
export {Navigation,anchor}