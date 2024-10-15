
// const Navbar = () => {
//     return (

//         <header className="w-full flex flex-col justify-between items-center relative z-20">
//             <nav className="flex w-full screen-max-width items-center py-3 sm:px-10 px-5 bg-transparent">
//                 <Link to="/"><img src={appleImg} alt="Apple" width={12} height={12} /></Link>
//                 <div className="flex justify-center max-sm:hidden">
//                     {navLists.map((nav) => (

//                         <Link to={`/${nav}`} key={nav}>
//                             <div
//                                 key={nav}
//                                 className="px-6 text-sm cursor-pointer text-gray-200 hover:text-white transition-all"

//                             >
//                                 {nav}
//                             </div>
//                         </Link>
//                     ))}
//                 </div>
//                 <div className="flex items-center gap-9">
//                     <img
//                         src={searchImg}
//                         alt="search"
//                         width={14}
//                         height={14}
//                         className="cursor-pointer"
//                     />
//                     <img
//                         src={bagImg}
//                         alt="bag"
//                         width={14}
//                         height={14}
//                         className="cursor-pointer"
//                     />
//                 </div>
//             </nav>
//         </header>

//     )
// }

// export default Navbar
import { ChevronDown } from 'lucide-react';
import React, { useState } from 'react';

const NavItem = ({ label, items }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="relative group">
      <button
        className="flex items-center space-x-1 text-white hover:text-gray-300"
        onMouseEnter={() => setIsOpen(true)}
        onMouseLeave={() => setIsOpen(false)}
      >
        <span>{label}</span>
        {items && <ChevronDown size={14} />}
      </button>
      {items && isOpen && (
        <div className="absolute left-0 mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5">
          <div className="py-1" role="menu" aria-orientation="vertical" aria-labelledby="options-menu">
            {items.map((item, index) => (
              <a
                key={index}
                href="#"
                className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                role="menuitem"
              >
                {item}
              </a>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

const Navbar = () => {
  const navItems = [
    { label: 'Store', items: ['Mac', 'iPad', 'iPhone', 'Watch', 'AirPods'] },
    { label: 'Mac', items: ['MacBook Air', 'MacBook Pro', 'iMac', 'Mac mini', 'Mac Studio'] },
    { label: 'iPad', items: ['iPad Pro', 'iPad Air', 'iPad', 'iPad mini'] },
    { label: 'iPhone', items: ['iPhone 14 Pro', 'iPhone 14', 'iPhone SE'] },
    { label: 'Watch', items: ['Apple Watch Ultra', 'Apple Watch Series 8', 'Apple Watch SE'] },
    { label: 'AirPods', items: ['AirPods Pro', 'AirPods', 'AirPods Max'] },
    { label: 'TV & Home', items: ['Apple TV 4K', 'HomePod', 'HomePod mini'] },
    { label: 'Entertainment', items: ['Apple One', 'Apple TV+', 'Apple Music'] },
    { label: 'Accessories', items: ['AirTag', 'Cases & Protection', 'Power & Cables'] },
    { label: 'Support', items: ['iPhone', 'Mac', 'iPad', 'Watch'] },
  ];

  return (
    <nav className="bg-black p-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-white">
          <svg className="h-6 w-6" viewBox="0 0 16 16" fill="currentColor">
            <path d="M11.182.008C11.148-.03 9.923.023 8.857 1.18c-1.066 1.156-.902 2.482-.878 2.516.024.034 1.52.087 2.475-1.258.955-1.345.762-2.391.728-2.43zm3.314 11.733c-.048-.096-2.325-1.234-2.113-3.422.212-2.189 1.675-2.789 1.698-2.854.023-.065-.597-.79-1.254-1.157a3.692 3.692 0 0 0-1.563-.434c-.108-.003-.483-.095-1.254.116-.508.139-1.653.589-1.968.607-.316.018-1.256-.522-2.267-.665-.647-.125-1.333.131-1.824.328-.49.196-1.422.754-2.074 2.237-.652 1.482-.311 3.83-.067 4.56.244.729.625 1.924 1.273 2.796.576.984 1.34 1.667 1.659 1.899.319.232 1.219.386 1.843.067.502-.308 1.408-.485 1.766-.472.357.013 1.061.154 1.782.539.571.197 1.111.115 1.652-.105.541-.221 1.324-1.059 2.238-2.758.347-.79.505-1.217.473-1.282z" />
          </svg>
        </div>
        <div className="hidden md:flex space-x-4">
          {navItems.map((item, index) => (
            <NavItem key={index} label={item.label} items={item.items} />
          ))}
        </div>
        <div className="text-white">
          <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
          </svg>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
