import IllustrationDesktop from '../assets/bg-sidebar-desktop.svg'
import IllustrationMobile from '../assets/bg-sidebar-mobile.svg'


interface IProps {
	info: {
		title: string,
		control: string,
		desc: string
	}[],
	active: number
}


const Control = ({ info, active }: IProps) => {

  return (
    <>
      <div className='inline-block md:hidden'>
        <IllustrationMobile/>
      </div>
      <ul className='absolute md:px-8 py-5 flex justify-center md:flex-col w-full md:w-fit flex-row md:gap-6 gap-4'>
        {
          info.map((item, index) => {
            return (
              <li key={index} className='flex flex-row gap-5'>
                <div className={`rounded-full border-light-blue border-2 font-bold ${ active === index ?  'bg-light-blue text-black' :'text-white'} md:w-12 md:h-12 h-8 w-8 flex items-center justify-center`}>
                  {index + 1}
                </div>
                <div className='hidden md:block'>
                  <span className='md:block hidden text-cool-gray text-sm'>STEP {index + 1}</span>
                  <p className='md:block hidden text-white font-medium'>{item.control}</p>
                </div>
              </li>
            )
          })
        }
      </ul>
      <div className='md:inline-block hidden'>
        <IllustrationDesktop/>
      </div>
    </>
  )
}

export default Control