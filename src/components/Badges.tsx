import home from '../assets/home-logo.svg'
import security from '../assets/security-logo.svg'
import gift from '../assets/gift-logo.svg'

function Badges() {
  return (
      <div className="mt-40 flex flex-wrap items-center justify-center">
        <div className="w-1/3 gap-6 flex flex-wrap items-center justify-center">
          <img src={home} alt="Lojas" className="text-7xl text-secondary" />
          <div className="w-1/2 flex-col flex-wrap">
            <p className="font-semibold text-xl">MAIS DE 20 LOJAS</p>
            <p className="mt-4 text-base">Contrary to popular belief, Lorem Ipsum is not simply random text.</p>
          </div>
        </div>
        <div className="w-1/3 gap-6 flex flex-wrap items-center justify-center">
          <img src={security} alt="Segurança" className="text-7xl text-secondary" />
          <div className="w-1/2 flex-col flex-wrap ">
            <p className="font-semibold text-xl">SEGURANÇA</p>
            <p className="mt-4 text-base">Contrary to popular belief, Lorem Ipsum is not simply random text.</p>
          </div>
        </div>
        <div className="w-1/3 gap-6 flex flex-wrap items-center justify-center">
          <img src={gift} alt="Preços" className="text-7xl text-secondary" />
          <div className="w-1/2 flex-col flex-wrap">
            <p className="font-semibold text-xl">OS MELHORES PREÇOS</p>
            <p className="mt-4 text-base">Contrary to popular belief, Lorem Ipsum is not simply random text.</p>
          </div>
        </div>
      </div>
  )
}

export default Badges