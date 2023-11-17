import { useState } from "react";

interface Props {
  children: React.ReactNode;
}

const Sidebar:React.FC<Props> = ({children}) => {

    return(
        <div className="fixed bottom-0 justify-between w-[100%] sm:relative">
            <div id="" className="md:hover:w-64 top-0 left-0 z-40 h-10 sm:relative bottom-0 w-[100%] sm:w-15 sm:h-screen transition-transform -translate-x-full translate-x-0 border-r" aria-label="Sidebar">
                <div className="sm:h-full overflow-y-auto">
                    <div className="sm:relative space-y-2 flex justify-between bg-transparent bg-mqi-white w-[100%] sm:block">
                        {children}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Sidebar;