import { useEffect, useState } from 'react';
import CheckIcon from '../../assets/icon-checkmark.svg';
import { formSlice } from '../../store/formSlice';
import { IAddon } from '../../types';
import { useAppDispatch, useAppSelector } from '../../store/hooks';

export const AddOns = () => {

  const [ addOns, setAddOns ] = useState<IAddon[]>([])
  const dispatch = useAppDispatch()
  const state = useAppSelector(state => state)


  const onSetAddon = (addon: IAddon) => {
    if (addOns.some(a => a.name === addon.name)) {
      setAddOns(addOns.filter((item) => item.name !== addon.name))
    } else {
      setAddOns([...addOns, addon])
    }
  }

  useEffect(() => {
    dispatch(formSlice.actions.setAddons(addOns))
  }, [addOns, dispatch])

  return (
    <div className='flex flex-col gap-5'>
      <button onClick={() => onSetAddon({name: 'Online service', price: state.form.plan?.term === 'monthly' ? 1 : 10 })} className={`${addOns.some(a => a.name === 'Online service') ? 'border-purplish-blue bg-magnolia' : 'bg-white border-cool-gray' } hover:border-purplish-blue flex flex-row items-center justify-between  py-4 px-5 rounded-lg border transition-all`}>
        <div className='flex flex-row items-center md:gap-5 gap-2'>
          <div className={`${addOns.some(a => a.name === 'Online service') ? 'bg-purplish-blue border-purplish-blue' : 'bg-white border-cool-gray'} md:w-6 md:h-6 w-5 h-5 rounded-md border flex justify-center items-center transition-all`}>
            <CheckIcon />
          </div>
          <div className='flex flex-col items-start'>
            <p className='font-medium text-marine-blue'>Online service</p>
            <span className='md:text-sm text-xs text-cool-gray'>Access to multiplayer games</span>
          </div>
        </div>
        <p className='text-purplish-blue'>+{state.form.plan?.term === 'monthly' ? 1 : 10}$/{state.form.plan?.term === 'monthly' ? 'mo' : 'yr'}</p>
      </button>

      <button onClick={() => onSetAddon({name: 'Larger storage', price: state.form.plan?.term === 'monthly' ? 2 : 20})} className={`${addOns.some(a => a.name === 'Larger storage') ? 'border-purplish-blue bg-magnolia' : 'bg-white border-cool-gray' } hover:border-purplish-blue flex flex-row items-center justify-between  py-4 px-5 rounded-lg border transition-all`}>
        <div className='flex flex-row items-center md:gap-5 gap-2'>
          <div className={`${addOns.some(a => a.name === 'Larger storage') ? 'bg-purplish-blue border-purplish-blue' : 'bg-white border-cool-gray'} md:w-6 md:h-6 w-5 h-5 rounded-md border flex justify-center items-center transition-all`}>
            <CheckIcon />
          </div>
          <div className='flex flex-col items-start'>
            <p className='font-medium text-marine-blue'>Larger storage</p>
            <span className='md:text-sm text-xs text-cool-gray'>Extra 1TB of cloud save</span>
          </div>
        </div>
        <p className='text-purplish-blue'>+{state.form.plan?.term === 'monthly' ? 2 : 20}$/{state.form.plan?.term === 'monthly' ? 'mo' : 'yr'}</p>
      </button>

      <button onClick={() => onSetAddon({name: 'Customizable Profile', price: state.form.plan?.term === 'monthly' ? 2 : 20})} className={`${addOns.some(a => a.name === 'Customizable Profile') ? 'border-purplish-blue bg-magnolia' : 'bg-white border-cool-gray' } hover:border-purplish-blue flex flex-row items-center justify-between  py-4 px-5 rounded-lg border transition-all`}>
        <div className='flex flex-row items-center md:gap-5 gap-2'>
          <div className={`${addOns.some(a => a.name === 'Customizable Profile') ? 'bg-purplish-blue border-purplish-blue' : 'bg-white border-cool-gray'} md:w-6 md:h-6 w-5 h-5 rounded-md border flex justify-center items-center transition-all`}>
            <CheckIcon />
          </div>
          <div className='flex flex-col items-start'>
            <p className='font-medium text-marine-blue'>Customizable Profile</p>
            <span className='md:text-sm text-xs text-cool-gray'>Custom theme on your profile</span>
          </div>
        </div>
        <p className='text-purplish-blue'>+{state.form.plan?.term === 'monthly' ? 2 : 20}$/{state.form.plan?.term === 'monthly' ? 'mo' : 'yr'}</p>
      </button>
    </div>
  )
}
