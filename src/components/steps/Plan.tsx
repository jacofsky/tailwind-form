import ArcadeIcon from '../../assets/icon-arcade.svg'
import AdvancedIcon from '../../assets/icon-advanced.svg'
import ProIcon from '../../assets/icon-pro.svg'
import { useEffect, useState } from 'react';
import { useAppDispatch } from '../../store/hooks';
import { formSlice } from '../../store/formSlice';



export const Plan = () => {
  
  const [ term, setTerm ] = useState<'monthly' | 'yearly'>('monthly')
  const [ plan, setPlan ] = useState<'arcade' | 'advanced' | 'pro' | null>(null)
  const dispatch = useAppDispatch()

  const onChangeTerm = () => {
    if (term === 'monthly') {
      setTerm('yearly')
    } else {
      setTerm('monthly')
    }
  }

  useEffect(() => {
    dispatch(formSlice.actions.setPlan({
      name: plan,
      term: term,
      price: plan === 'arcade' ? (term === 'monthly' ? 9 : 90) : (plan === 'advanced' ? (term === 'monthly' ? 12 : 120) : (term === 'monthly' ? 15 : 150))
    }))
  }, [term, plan, dispatch])

  return (
    <div className='flex flex-col gap-10'>
      <div className='flex md:flex-row flex-col gap-4'>
        <button onClick={() => setPlan('arcade')} className={`${plan === 'arcade' ? 'bg-magnolia border-purplish-blue' : 'border-cool-gray'} hover:border-purplish-blue border md:w-1/3 w-full flex md:flex-col flex-row rounded-lg p-4 transition-all`}>
          <ArcadeIcon/>
          <div className='flex flex-col md:ml-0 ml-4 items-start'>
            <p className='md:mt-12 text-marine-blue font-medium'>Arcade</p>
            <span className='text-cool-gray text-sm'> { term === 'yearly' ? '$90/yr' : '$9/mo'}</span>
            { term === 'yearly' && <span className='text-marine-blue font-light mt-2 text-sm'>2 months free</span> }
          </div>
        </button>

        <button onClick={() => setPlan('advanced')} className={`${plan === 'advanced' ? 'bg-magnolia border-purplish-blue' : 'border-cool-gray'} hover:border-purplish-blue border md:w-1/3 w-full flex md:flex-col flex-row rounded-lg p-4 transition-all`}>
          <AdvancedIcon/>
          <div className='flex flex-col md:ml-0 ml-4 items-start'>
            <p className='md:mt-12 text-marine-blue font-medium'>Advanced</p>
            <span className='text-cool-gray text-sm'> { term === 'yearly' ? '$120/yr' : '$12/mo'}</span>
            { term === 'yearly' && <span className='text-marine-blue font-light mt-2 text-sm'>2 months free</span> }
          </div>

        </button>

        <button onClick={() => setPlan('pro')} className={`${plan === 'pro' ? 'bg-magnolia border-purplish-blue' : 'border-cool-gray'} hover:border-purplish-blue border md:w-1/3 w-full flex md:flex-col flex-row rounded-lg p-4 transition-all`}>
          <ProIcon/>
          <div className='flex flex-col md:ml-0 ml-4 items-start'>
            <p className='md:mt-12 text-marine-blue font-medium'>Pro</p>
            <span className='text-cool-gray text-sm'> { term === 'yearly' ? '$150/yr' : '$15/mo'}</span>
            { term === 'yearly' && <span className='text-marine-blue font-light mt-2 text-sm'>2 months free</span> }
          </div>
        </button>

      </div>
      <div className='bg-magnolia flex flex-row justify-center gap-4 py-4 rounded-lg'>
        <p className={`${term === 'monthly' ? 'text-marine-blue' : 'text-cool-gray'} font-medium transition-all duration-500`}>Monthly</p>
        <button className='w-12 px-1 bg-marine-blue rounded-full' onClick={onChangeTerm}>
          <div className={`bg-white w-4 h-4 rounded-full ${term === 'yearly' ? 'ml-6' : ''} transition-all duration-500`}></div>
        </button>
        <p className={`${term === 'yearly' ? 'text-marine-blue' : 'text-cool-gray'} font-medium transition-all duration-500`}>Yearly</p>
      </div>
    </div>
  )
}
