import { navLinks } from '../constants'

const Modal = () => {
  return (
    <>
        <span>X</span>
        <ul className='shadow-3xl flex flex-col p-10 space-y-5'>
            {navLinks.map(item => (
            <li key={item.label} className=''>
                <a 
                    href={item.href}
                    className="font-montserrat leading-normal text-lg text-slate-gray"
                >
                {item.label}
                </a>
            </li>  
            ))}
        </ul>
    </>
  )
}

export default Modal