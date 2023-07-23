import { useState } from "react"
import { Plan, YourInfo, AddOns, Summary, Greetings } from "./steps"
import { useAppSelector } from '../store/hooks';

interface IProps {
	info: {
		title: string,
		control: string,
		desc: string
	}[],
  isNext: boolean,
  next: (n?:number) => void,
  isPrev: boolean,
  prev: (n?:number) => void,
  active: number,
  isConfirm?: boolean,
}

const Steper = ({ info, isNext, next, isPrev, prev, active, isConfirm }: IProps) => {

  const [confirm, setConfirm] = useState(false)
  const state = useAppSelector(state => state)

  const backPlan = () => {
    prev(2)
  }
  
  return (
    <div className="md:px-16 md:bg-white bg-magnolia h-full md:h-auto md:w-control md:py-8 flex flex-col justify-between">
      {
        confirm 
          ? <div className="bg-white rounded-lg mx-5 md:mx-0 md:p-0 p-6 md:static relative md:bottom-0 bottom-20"><Greetings/></div>
          : (
            <>
              <div className="bg-white rounded-lg mx-5 md:mx-0 md:p-0 p-6 md:static relative md:bottom-0 bottom-20">
                <h1 className="text-3xl text-marine-blue font-bold">{info[active].title}</h1>
                <p className="text-md mb-8 text-cool-gray">{info[active].desc}</p>
                {active === 0 && <YourInfo />}
                {active === 1 && <Plan/>}
                {active === 2 && <AddOns/>}
                {active === 3 && <Summary change={backPlan}/>}
              </div>

              <div className="flex justify-between md:bg-transparent bg-white p-4 md:p-0">
                {isPrev && <button className="hover:text-marine-blue font-medium py-3 px-6 rounded-md text-cool-gray transition-all" onClick={() => prev(1)}>Prev Step</button>}
                {isNext && <button disabled={(!state.form.info && active === 0) || (!state.form.plan?.name && active === 1)} className="hover:opacity-90 disabled:bg-slate-600 ml-auto font-medium py-3 px-6 rounded-md bg-marine-blue text-magnolia transition-all" onClick={() => next(1)}>Next Step</button>}
                {isConfirm && <button className="hover:opacity-90 ml-auto font-medium py-3 px-6 rounded-md bg-purplish-blue text-magnolia transition-all" onClick={() => setConfirm(true)}>Confirm</button>}
              </div>
            </>
          )
      }
    </div>
  )
}

export default Steper