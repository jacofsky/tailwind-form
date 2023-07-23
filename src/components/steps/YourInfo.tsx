import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { useAppDispatch } from "../../store/hooks";
import { formSlice } from '../../store/formSlice';

interface IFormInput { 
  name: string;
  email: string;
  phone: number;
}

  
export const YourInfo = () => {
  
  const { register, formState, getValues } = useForm<IFormInput>();
  const dispatch = useAppDispatch()

  useEffect(() => {
    if(formState.isValid) {
      dispatch(formSlice.actions.setInfo({
        name: getValues().name,
        email: getValues().email,
        phone: getValues().phone.toString()
      }))
    } else {
      dispatch(formSlice.actions.setInfo(null))
    }
  }, [getValues, formState.isValid, dispatch])

  return (
    <form className="flex flex-col gap-4">
      <div className="flex flex-col">
        <div className="flex justify-between mb-1">
          <label className="text-sm text-marine-blue">Name</label>
          { formState.errors.name && <span className="text-sm font-medium text-strawberry-red">This field is required</span>}
        </div>
        <input className={`${formState.errors.name && 'text-strawberry-red border-strawberry-red'} focus-visible:border-purplish-blue text-marine-blue font-medium border md:py-3 md:px-3 py-1 px-2 rounded-md border-light-gray transition-all`} {...register("name", {required: true})} />
      </div>
      
      <div className="flex flex-col">
        <div className="flex justify-between mb-1">
          <label className="text-sm text-marine-blue">Email</label>
          { formState.errors.email && <span className="text-sm font-medium text-strawberry-red">This field is required</span>}
        </div>
        <input className={`${formState.errors.email && 'text-strawberry-red border-strawberry-red'} focus-visible:border-purplish-blue text-marine-blue font-medium border md:py-3 md:px-3 py-1 px-2 rounded-md border-light-gray transition-all`} {...register("email", {required: true})} />
      </div>

      <div className="flex flex-col">
        <div className="flex justify-between mb-1">
          <label className="text-sm text-marine-blue">Phone</label>
          { formState.errors.phone && <span className="text-sm font-medium text-strawberry-red">This field is required</span>}
        </div>
        <input className={`${formState.errors.phone && 'text-strawberry-red border-strawberry-red'} focus-visible:border-purplish-blue text-marine-blue font-medium border md:py-3 md:px-3 py-1 px-2 rounded-md border-light-gray transition-all`} {...register("phone", {required: true})} />
      </div>
    </form>
  )
}
