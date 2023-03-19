import Image from 'next/image'
import hero1 from '../../asset/hero1.avif'

export default function Hero() {
    return (

        <div class="relative h-auto w-full flex flex-col sm:flex-row items-center justify-center sm:justify-start text-center sm:text-left bg-cover bg-center bg-slate top-0 overflow-hidden">
  <div class="absolute top-0 right-0 bottom-0 left-0 bg-gray-900">
    <Image src={hero1} alt="Carousel Slider - Image 1" class="w-screen"></Image>
  </div>
  
  <main class="px-8 py-40 sm:px-24 z-10 sm:w-2/3">
        <div class="">
          <h2 class="text-4xl tracking-tight leading-10 font-extrabold sm:text-5xl text-white sm:leading-none md:text-6xl">
            Enter Your
            <span class="text-indigo-600">Headline</span>
          </h2>
          <p class="mt-3 text-white sm:mt-5 sm:max-w-xl md:mt-5 text-lg font-light">
            Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo.
          </p>
          <div class="mt-5 sm:mt-8 sm:flex justify-start">
            <div class="rounded-md shadow">
              <a href="#" class="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base leading-6 font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-500 focus:outline-none focus:border-indigo-700 focus:shadow-outline-indigo transition duration-150 ease-in-out md:py-4 md:text-lg md:px-10">
                Get started
              </a>
            </div>
            <div class="mt-3 sm:mt-0 sm:ml-3">
              <a href="#" class="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base leading-6 font-medium rounded-md text-indigo-700 bg-indigo-100 hover:text-indigo-600 hover:bg-indigo-50 focus:outline-none focus:shadow-outline-indigo focus:border-indigo-300 transition duration-150 ease-in-out md:py-4 md:text-lg md:px-10">
                Live demo
              </a>
            </div>
          </div>
        </div>
      </main>
  
</div>

 )
 }

