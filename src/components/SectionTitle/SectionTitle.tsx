import React from 'react'

interface ISectionTitle{
    title: string
}
const SectionTitle: React.FC<ISectionTitle> = ({title}) =>{
    return(
        <div className='flex justify-center flex-col items-center mt-8 mb-8'>
        <h2 className="uppercase font-bold p-3 text-[36px]">{title}</h2>
        <div className='border-b border-blue-500 w-8 border-2'></div>
      </div>
    )
}

export default SectionTitle