import { useEffect, useState } from "react"
import { useAppSelector } from "../../store/hooks"

export const Summary = ({change}: {change: () => void}) => {

  const state = useAppSelector(state => state)
  const [total, setTotal] = useState<number>(0)

  useEffect(() => {
    setTotal((state.form.plan?.price || 0) + (state.form.addons?.reduce((acc, curr) => acc + curr.price, 0) || 0))
  }, [state.form.plan, state.form.addons])

  return (
    <div>
      <div className="bg-magnolia flex flex-col gap-5 p-5 rounded-lg">
        <div className="flex flex-row justify-between items-center">
          <div>
            <p className="font-medium text-marine-blue capitalize">{state.form.plan?.name}({state.form.plan?.term})</p>
            <button onClick={change} className="text-sm underline font-medium text-cool-gray hover:text-purplish-blue transition-all">Change</button>
          </div>
          <p className="font-medium text-marine-blue" >${state.form.plan?.price}/{state.form.plan?.term === 'monthly' ? 'mo' : 'yr'}</p>
        </div>
        <div className="h-px bg-light-gray rounded"></div>
        <ul className="flex flex-col gap-3">
          {
            state.form.addons?.map((addon) => (
              <li className="flex flex-row justify-between" key={addon.name}>
                <p className="text-sm text-cool-gray">{addon.name}</p> 
                <p className="text-sm font-medium text-cool-gray">+${addon.price}/{state.form.plan?.term === 'monthly' ? 'mo' : 'yr'}</p>
              </li>
            ))
          }
        </ul>
      </div>

      <div className="flex flex-row items-end justify-between p-5 rounded-lg">
        <p className="text-sm text-cool-gray">Total ({state.form.plan?.term === 'monthly' ? 'per month' : 'per year'})</p>
        <p className="text-lg font-medium text-purplish-blue">+${total}/{state.form.plan?.term === 'monthly' ? 'mo' : 'yr'}</p>
      </div>
    </div>
  )
}
