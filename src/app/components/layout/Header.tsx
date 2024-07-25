"use client"

export default function Header(){
    return (
        <>
            <header>
                <nav className="bg-white w-full border-b-neutral-100 border-solid border-[1px] px-4 lg:px-6 py-2.5 dark:bg-gray-800 p-[20px]">
                    <div className="flex justify-between items-center mx-auto w-[80%]">
                        <a href="https://flowbite.com" className="flex items-center space-x-2">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-footprints text-yellow-300"><path d="M4 16v-2.38C4 11.5 2.97 10.5 3 8c.03-2.72 1.49-6 4.5-6C9.37 2 10 3.8 10 5.5c0 3.11-2 5.66-2 8.68V16a2 2 0 1 1-4 0Z"/><path d="M20 20v-2.38c0-2.12 1.03-3.12 1-5.62-.03-2.72-1.49-6-4.5-6C14.63 6 14 7.8 14 9.5c0 3.11 2 5.66 2 8.68V20a2 2 0 1 0 4 0Z"/><path d="M16 17h4"/><path d="M4 13h4"/></svg>
                            <span className="self-center text-md font-semibold whitespace-nowrap text-yellow-300 dark:text-white">Flávia <span className="font-light text-black">Calçados</span></span>
                        </a>
                        <div className="flex items-center lg:order-2">
                            <a href="#" className="text-gray-800 dark:text-white hover:bg-gray-50 focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 dark:hover:bg-gray-300 focus:outline-none dark:focus:ring-gray-800">Criar Conta | Cadastrar-se</a>
                            <a href="#" className=" flex space-x-2 text-white bg-yellow-300 hover:bg-yellow-800 focus:ring-4 focus:ring-yellow-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 dark:bg-yellow-300 dark:hover:bg-yellow-300 focus:outline-none dark:focus:ring-yellow-800"><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-shopping-cart"><circle cx="8" cy="21" r="1"/><circle cx="19" cy="21" r="1"/><path d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12"/></svg> <span>Carrinho</span></a>
                        </div>        
                    </div>
                </nav>
            </header>
        </>
    )
}