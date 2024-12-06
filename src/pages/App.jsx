import './../output.css'
import logo from './../assets/logo.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons'
import { faLocationDot } from '@fortawesome/free-solid-svg-icons'

import grid01 from './../assets/grid01.png'
import grid02 from './../assets/grid02.png'
import grid03 from './../assets/grid03.png'
import grid04 from './../assets/grid04.png'

function App() {

  return (
    <>
      <div className='h-screen w-full bg-rosa relative'>
        <div className='h-[24px] w-full bg-white'></div>
        <div className='h-[24px] w-full bg-white absolute bottom-0'></div>
        <div className='flex justify-center'>
          <div className='w-[420px] mt-10 flex flex-col items-center relative'>
            <div className='rounded-full bg-white h-[100px] w-[200px] blur-[80px] absolute  top-[10px] left-2 z-0'></div>
            <div className='flex justify-center items-center gap-7 z-10'>
              <p className='w-36 text-roxo'>Transforme seu treino com estilo e performance.</p>
              <img src={logo} alt="Logo da Barbie Moda Fitness" className='w-40' />
            </div>           
            <p className='text-center text-xl font-semibold text-roxo my-10 z-20'>ENTRE EM CONTATO CONOSCO:</p>              
            <a className='link-buttons' href="#">
              <FontAwesomeIcon icon={faWhatsapp} className='text-2xl'/>
              Loja Ponte dos Carvalhos
              <FontAwesomeIcon icon={faWhatsapp} className='text-2xl'/>
            </a>
            <a className='link-buttons' href="#">
              <FontAwesomeIcon icon={faWhatsapp} className='text-2xl'/>
              Loja Ponte dos Carvalhos
              <FontAwesomeIcon icon={faWhatsapp} className='text-2xl'/>
            </a>            
            <div className='w-full h-[300px] border-solid border border-rosa-claro pl-8 pr-2 py-4 flex items-center justify-center gap-3 text-roxo'>       
              <div className='text-right'>
                <p className='font-semibold text-xl underline mb-2'>TEMOS:</p>
                <p className='text-[14px]'>
                  Moda Masculina <br />
                  Moda Feminina <br />
                  Plus Size <br />
                  Suplementos <br />
                  Acessórios <br />
                  Ciclista <br />
                  Ginástica
                </p>               
              </div>          
              {/* Vertical Line */}
              <div className='w-[1px] h-full bg-rosa-claro'></div>            
              <div className='w-[220px] h-full flex items-center justify-center'>
                <div className='grid grid-cols-2 gap-[4px]'>                  
                  <img src={grid01} alt="Imagem de Mulher com um Sapato" />
                  <img src={grid02} alt="Imagem de Casal Atleta" />
                  <img src={grid03} alt="Imagem de Homem Atleta" />
                  <img src={grid04} alt="Imagem de Mulher Atleta" />
                </div>
              </div>
            </div>
            <p className='text-center text-xl font-semibold text-roxo my-5 z-20'>NOS ENCONTRE NO MAPA:</p>
            <div className='w-full flex justify-center gap-1'>
              <a className='link-buttons02 w-1/2' href="#">
                <FontAwesomeIcon icon={faLocationDot} className='text-lg'/>
                Ponte dos Carvalhos
              </a>           
              <a className='link-buttons02 w-3/5' href="#">
                <FontAwesomeIcon icon={faLocationDot} className='text-lg'/>
                Cabo de Santo Agostinho
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default App

// npx tailwindcss -i ./src/index.css -o ./src/output.css --watch