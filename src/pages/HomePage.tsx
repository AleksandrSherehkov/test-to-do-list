import heroBg from '../assets/heroBg.webp'

const HomePage = (): JSX.Element => {
  return (
    <div className=" text-gray-600 flex  items-center justify-center flex-col">
      <img
        className="lg:w-2/6 md:w-3/6 w-5/6 h-96 object-cover object-center rounded   animate-spin animate-spin-slow"
        alt="hero"
        src={heroBg}
        width="600px"
        height="600px"
      />
      <div className="text-center lg:w-2/3 w-full">
        <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
          Mastering time management begins with organizing tasks. Discover the power of ToDo lists that turn your time into value.
        </h1>
        <p className="mb-8 leading-relaxed">
          Every task marked as 'completed' is not just an item on a list—it's a step towards the successful implementation of your plans and ideas. Use ToDo lists to make every day productive and every minute valuable. Because when tasks are organized, time becomes your ally, not just ticking clocks.
        </p>
      </div>
    </div>
  )
}

export default HomePage