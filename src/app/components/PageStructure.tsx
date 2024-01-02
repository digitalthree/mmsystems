import React, {JSX, ReactNode} from 'react';

export interface PageStructureProps{
    children: ReactNode
}

const PageStructure: React.FC<PageStructureProps> = ({children}) => {
    return(
        <div className="flex min-h-screen flex-col items-center justify-between p-24">
            {children}
        </div>
    )
}

export default PageStructure