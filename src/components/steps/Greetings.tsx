import Icon from '../../assets/icon-thank-you.svg'

export const Greetings = () => {
  return (
    <div className='flex flex-col items-center justify-center h-full gap-2'>
      <Icon/>
      <h1 className='text-3xl mt-5 font-semibold text-marine-blue'>Thank you!</h1>
      <p className='text-cool-gray text-center'>Thanks for confirming your subscription! We hope you have fun using our plataform. If you ever need support, please feel free to email us at support@loremgaming.com.</p>
    </div>
  )
}
