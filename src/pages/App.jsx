import './../output.css'
import logo from './../assets/logo.png'

function App() {

  return (
    <>
      <div className='h-screen w-full bg-rosa relative'>

        <div className='h-[24px] w-full bg-white'></div>
        <div className='h-[24px] w-full bg-white absolute bottom-0'></div>

        <div className='flex justify-center relative'>

          <div className='rounded-full bg-white h-[200px] w-[200px] blur-[80px] absolute  top-4 left-8 z-0'></div>

          <div className='w-[420px] mt-10 z-10 flex flex-col items-center'>

            <div className='flex justify-center items-center gap-7'>
              <p className='w-36 text-roxo'>Transforme seu treino com estilo e performance.</p>
              <img src={logo} alt="Logo da Barbie Moda Fitness" className='w-40' />
            </div>
            
            <p className='text-center font-semibold text-roxo my-10'>ENTRE EM CONTATO CONOSCO:</p>
            
            <button className='w-[350px] bg-white'>
              <a className='w-[350px]' href="">Loja Ponte dos Carvalhos</a>
            </button>
          </div>
        </div>

      </div>
    </>
  )
}

export default App
