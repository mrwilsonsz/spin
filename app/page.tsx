import Image from 'next/image'

import img from '../public/assets/mobile.png'
import pictures from '../app/styles/picture.module.sass'
import item from '../public/assets/item.png'


import body from '../app/styles/body.module.sass'
import modal from '../app/styles/modal.module.sass'

import { Login }  from '@/components/login'
import text from '../app/styles/text.module.sass'


export default function Home() {
  return (
    <main className={body.body}>
          <div className={pictures.background}>
            <div className={pictures.pictures}>
             <Image src={item} alt="Images" />
            </div>
          </div>
          <Image src={img} alt='Imagem Login' className={pictures.image} />
          <div className={modal.modal}>
          <div className={text.mainTitle}>
            <div className={text.title}>
              <Image src={'/assets/logo.png'} width='48' height='48' alt='Imagem Logo' />
              <h1 className={text.title}>Archint</h1>
            </div>
            <p className={text.text}>A new way to experience real state in the infinite virtual space.</p>
          </div>
          <Login />
          </div>
    </main>
  )
}
