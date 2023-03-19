
// let tabs = document.querySelectorAll(".tab")
// let indicator = document.querySelector(".indicator")
// let panels = document.querySelectorAll(".tab-panel")

// indicator.style.width = tabs[0].getBoundingClientRect().width + 'px'
// indicator.style.left = tabs[0].getBoundingClientRect().left - tabs[0].parentElement.getBoundingClientRect().left + 'px'

// tabs.forEach(tab =>{
//   tab.addEventListener("click", ()=>{
//     let tabTarget = tab.getAttribute("aria-controls")

//     indicator.style.width = tab.getBoundingClientRect().width + 'px'
//     indicator.style.left = tab.getBoundingClientRect().left - tab.parentElement.getBoundingClientRect().left + 'px'


//     panels.forEach(panel =>{
//       let panelId = panel.getAttribute("id")
//       if(tabTarget === panelId){
//         panel.classList.remove("invisible", "opacity-0")
//         panel.classList.add("visible", "opacity-100")
//       } else {
//         panel.classList.add("invisible", "opacity-0")
//       }
//     })
//   })
// })


export default function ButtonGroup() {
    return (
      <>
      <div class="mx-auto px-8 sm:px-0">
      <div class="w-3/4 sm:mx-auto">
        <div 
          role="tablist"
          aria-label="tabs"
          class="grid grid-flow-col text-center text-gray-500 bg-gray-100 rounded-lg p-1">
          <div class="absolute indicator h-11 my-auto top-0 bottom-0 left-0 rounded-full bg-white shadow-md"></div>
          <button
            role="tab"
            aria-selected="true"
            aria-controls="panel-1"
            id="tab-1"
            tabindex="0"
            class="relative block h-12 px-6 tab rounded-full"
          >
            <span class="text-gray-800">INTERACTIVE පාඩම්</span>
          </button>
          <button
            role="tab"
            aria-selected="false"
            aria-controls="panel-2"
            id="tab-2"
            tabindex="-1"
            class="relative block h-10 px-6 tab rounded-full"
          >
            <span class="text-gray-800">අනාවරණ පරීක්ෂණ</span>
          </button>
          <button
            role="tab"
            aria-selected="false"
            aria-controls="panel-3"
            id="tab-3"
            tabindex="-1"
            class="relative block h-10 px-6 tab rounded-full"
          >
            <span class="text-gray-800">සති පාසල</span>
          </button>
          <button
            role="tab"
            aria-selected="false"
            aria-controls="panel-3"
            id="tab-4"
            tabindex="-1"
            class="relative block h-10 px-6 tab rounded-full"
          >
            <span class="text-gray-800">සාමාන්‍ය පාඩම්</span>
          </button>
          <button
            role="tab"
            aria-selected="false"
            aria-controls="panel-3"
            id="tab-5"
            tabindex="-1"
            class="relative block h-10 px-6 tab rounded-full"
          >
            <span class="text-gray-800">ප්‍රශ්න පත්‍ර</span>
          </button>
        </div>
        <div class="mt-6 relative rounded-3xl bg-purple-50">
          <div
            role="tabpanel"
            id="panel-1"
            class="tab-panel p-6 transition duration-300"
          >
            <h2 class="text-xl font-semibold text-gray-800">First tab panel</h2>
            <p class="mt-4 text-gray-600">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quas dolores voluptate temporibus, atque ab eos, delectus at ad hic voluptatem veritatis iure, nulla voluptates quod nobis doloremque eaque! Perferendis, soluta.</p>
          </div>
          <div
            role="tabpanel"
            id="panel-2"
            class="absolute top-0 invisible opacity-0 tab-panel p-6 transition duration-300"
          >
            <h2 class="text-xl font-semibold text-gray-800">Second tab panel</h2>
            <p class="mt-4 text-gray-600">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quas dolores voluptate temporibus, atque ab eos, delectus at ad hic voluptatem veritatis iure, nulla voluptates quod nobis doloremque eaque! Perferendis, soluta.</p>
          </div>
          <div
            role="tabpanel"
            id="panel-3"
            class="absolute top-0 invisible opacity-0 tab-panel p-6 transition duration-300"
          >
            <h2 class="text-xl font-semibold text-gray-800">Third tab panel</h2>
            <p class="mt-4 text-gray-600">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quas dolores voluptate temporibus, atque ab eos, delectus at ad hic voluptatem veritatis iure, nulla voluptates quod nobis doloremque eaque! Perferendis, soluta.</p>
          </div>
        </div>
      </div>
    </div>
      </>
  )
  }