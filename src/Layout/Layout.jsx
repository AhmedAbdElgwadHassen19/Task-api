import Slider from "../components/Slider.jsx"
export default function Layout({ children }) {
  return (
    <div className="flex"> 
        <Slider />
        <main className="flex-1 md:ml-64 p-6 bg-gray-100 min-h-screen">
            {children} 
        </main> 
    </div> 
  )
}
