import '../css/MainPage.css'
import CardWho from '../components/CardWho'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

function Who() {
  return (
    <>
      <div>
        <Navbar />
      </div>
      <div className="font-quicksand flex flex-col justify-between items-center h-fit bg-web-fondo dark:bg-[#1d1d38] dark:text-gray-50">
        <div className='md:mt-10'></div>
        <CardWho
          img="/img/who/bogallo.png"
          name="Antonio Bogallo"
          email="antonio.bogallo@gmail.com"
          linkgh="https://github.com/AntonioBogallo"
          github="github.com/AntonioBogallo"
          order="md:order-[-1]"
          description="Lorem ipsum dolor sit amet consectetur adipiscing elit, primis consequat mattis montes lacus vulputate, tortor senectus suscipit tempus in eget. Varius facilisi ante pellentesque purus viverra himenaeos lobortis, nibh mauris dis iaculis et hendrerit lacus erat, ullamcorper mollis blandit vestibulum facilisis eros. Et ut potenti quis arcu augue rutrum facilisi vitae, sollicitudin tempor id dictum elementum ullamcorper class proin, velit duis curae dictumst iaculis nullam hac.
        Suspendisse sagittis fringilla duis habitasse vestibulum egestas nisl augue porta varius, fusce tristique habitant phasellus auctor nulla congue tempus curabitur cubilia, praesent nullam dignissim luctus parturient sodales convallis volutpat ad. Aliquet scelerisque sollicitudin ligula elementum ad placerat ullamcorper, aptent parturient dictumst cum dictum interdum vulputate sociis, habitasse porta cras rutrum morbi inceptos. Orci eros sapien vitae leo malesuada iaculis porta fusce semper aenean, netus sociis tempor non ut pellentesque natoque nulla praesent hac condimentum, est class magna ultrices tortor morbi dignissim rutrum congue."
        />

        <CardWho
          img="/img/who/edu.png"
          name="Eduardo Díez"
          email="edudm95@gmail.com"
          linkgh="https://github.com/edm95"
          github="github.com/edm95"
          order="md:order-[1]"
          description="Ingeniero en Electrónica y Automática Industrial en la Universidad Miguel Hernández de Elche con vocación por el mundo de la tecnología, en especial en el sector de la automatización. Actualmente enfocado en el aprendizaje sobre desarrollo web, especialmente en la parte del backend. Me considero una persona en aprendizaje constante y sin miedo a afrontar nuevos retos o aprender nuevas tecnologías.
                       Tengo vocación por el mundo de la automatización industrial y de los sensores además también cuento con ciertos conocimientos de programación lo cual me permite afrontar los proyectos desde varios puntos de vista."
        />

        <CardWho
          img="/img/who/angel.png"
          name="Angel Romero"
          email="mrangelrcd@gmail.com"
          linkgh="https://github.com/angelrcd"
          github="github.com/angelrcd"
          order="md:order-[-1]"
          description="Lorem ipsum dolor sit amet consectetur adipiscing elit, primis consequat mattis montes lacus vulputate, tortor senectus suscipit tempus in eget. Varius facilisi ante pellentesque purus viverra himenaeos lobortis, nibh mauris dis iaculis et hendrerit lacus erat, ullamcorper mollis blandit vestibulum facilisis eros. Et ut potenti quis arcu augue rutrum facilisi vitae, sollicitudin tempor id dictum elementum ullamcorper class proin, velit duis curae dictumst iaculis nullam hac.
        Suspendisse sagittis fringilla duis habitasse vestibulum egestas nisl augue porta varius, fusce tristique habitant phasellus auctor nulla congue tempus curabitur cubilia, praesent nullam dignissim luctus parturient sodales convallis volutpat ad. Aliquet scelerisque sollicitudin ligula elementum ad placerat ullamcorper, aptent parturient dictumst cum dictum interdum vulputate sociis, habitasse porta cras rutrum morbi inceptos. Orci eros sapien vitae leo malesuada iaculis porta fusce semper aenean, netus sociis tempor non ut pellentesque natoque nulla praesent hac condimentum, est class magna ultrices tortor morbi dignissim rutrum congue."
        />

        <CardWho
          img="/img/who/dani.png"
          name="Daniel Tallón"
          email="daniel.tallon.ortega@gmail.com"
          linkgh="https://github.com/NuberuSH"
          github="github.com/NuberuSH"
          order="md:order-[1]"
          description="Lorem ipsum dolor sit amet consectetur adipiscing elit, primis consequat mattis montes lacus vulputate, tortor senectus suscipit tempus in eget. Varius facilisi ante pellentesque purus viverra himenaeos lobortis, nibh mauris dis iaculis et hendrerit lacus erat, ullamcorper mollis blandit vestibulum facilisis eros. Et ut potenti quis arcu augue rutrum facilisi vitae, sollicitudin tempor id dictum elementum ullamcorper class proin, velit duis curae dictumst iaculis nullam hac.
        Suspendisse sagittis fringilla duis habitasse vestibulum egestas nisl augue porta varius, fusce tristique habitant phasellus auctor nulla congue tempus curabitur cubilia, praesent nullam dignissim luctus parturient sodales convallis volutpat ad. Aliquet scelerisque sollicitudin ligula elementum ad placerat ullamcorper, aptent parturient dictumst cum dictum interdum vulputate sociis, habitasse porta cras rutrum morbi inceptos. Orci eros sapien vitae leo malesuada iaculis porta fusce semper aenean, netus sociis tempor non ut pellentesque natoque nulla praesent hac condimentum, est class magna ultrices tortor morbi dignissim rutrum congue."
        />

        <CardWho
          img="/img/who/jorge.png"
          name="Jorge Castelló"
          email="jcaste999@gmail.com"
          linkgh="https://github.com/JorgeCastello99"
          github="github.com/JorgeCastello99"
          order="md:order-[-1]"
          description="Lorem ipsum dolor sit amet consectetur adipiscing elit, primis consequat mattis montes lacus vulputate, tortor senectus suscipit tempus in eget. Varius facilisi ante pellentesque purus viverra himenaeos lobortis, nibh mauris dis iaculis et hendrerit lacus erat, ullamcorper mollis blandit vestibulum facilisis eros. Et ut potenti quis arcu augue rutrum facilisi vitae, sollicitudin tempor id dictum elementum ullamcorper class proin, velit duis curae dictumst iaculis nullam hac.
        Suspendisse sagittis fringilla duis habitasse vestibulum egestas nisl augue porta varius, fusce tristique habitant phasellus auctor nulla congue tempus curabitur cubilia, praesent nullam dignissim luctus parturient sodales convallis volutpat ad. Aliquet scelerisque sollicitudin ligula elementum ad placerat ullamcorper, aptent parturient dictumst cum dictum interdum vulputate sociis, habitasse porta cras rutrum morbi inceptos. Orci eros sapien vitae leo malesuada iaculis porta fusce semper aenean, netus sociis tempor non ut pellentesque natoque nulla praesent hac condimentum, est class magna ultrices tortor morbi dignissim rutrum congue."
        />

        <CardWho
          img="/img/who/molina.png"
          name="Antonio Molina"
          email="tmpmolina97@hotmail.com"
          linkgh="https://github.com/tmpmolina"
          github="github.com/tmpmolina"
          order="md:order-[1]"
          description="Lorem ipsum dolor sit amet consectetur adipiscing elit, primis consequat mattis montes lacus vulputate, tortor senectus suscipit tempus in eget. Varius facilisi ante pellentesque purus viverra himenaeos lobortis, nibh mauris dis iaculis et hendrerit lacus erat, ullamcorper mollis blandit vestibulum facilisis eros. Et ut potenti quis arcu augue rutrum facilisi vitae, sollicitudin tempor id dictum elementum ullamcorper class proin, velit duis curae dictumst iaculis nullam hac.
        Suspendisse sagittis fringilla duis habitasse vestibulum egestas nisl augue porta varius, fusce tristique habitant phasellus auctor nulla congue tempus curabitur cubilia, praesent nullam dignissim luctus parturient sodales convallis volutpat ad. Aliquet scelerisque sollicitudin ligula elementum ad placerat ullamcorper, aptent parturient dictumst cum dictum interdum vulputate sociis, habitasse porta cras rutrum morbi inceptos. Orci eros sapien vitae leo malesuada iaculis porta fusce semper aenean, netus sociis tempor non ut pellentesque natoque nulla praesent hac condimentum, est class magna ultrices tortor morbi dignissim rutrum congue."
        />

        <CardWho
          img="/img/who/generic.png"
          name="Samuel Valencia"
          email="samuel@gmail.com"
          linkgh="https://github.com/"
          github="github.com/?"
          order="md:order-[-1]"
          description="Lorem ipsum dolor sit amet consectetur adipiscing elit, primis consequat mattis montes lacus vulputate, tortor senectus suscipit tempus in eget. Varius facilisi ante pellentesque purus viverra himenaeos lobortis, nibh mauris dis iaculis et hendrerit lacus erat, ullamcorper mollis blandit vestibulum facilisis eros. Et ut potenti quis arcu augue rutrum facilisi vitae, sollicitudin tempor id dictum elementum ullamcorper class proin, velit duis curae dictumst iaculis nullam hac.
        Suspendisse sagittis fringilla duis habitasse vestibulum egestas nisl augue porta varius, fusce tristique habitant phasellus auctor nulla congue tempus curabitur cubilia, praesent nullam dignissim luctus parturient sodales convallis volutpat ad. Aliquet scelerisque sollicitudin ligula elementum ad placerat ullamcorper, aptent parturient dictumst cum dictum interdum vulputate sociis, habitasse porta cras rutrum morbi inceptos. Orci eros sapien vitae leo malesuada iaculis porta fusce semper aenean, netus sociis tempor non ut pellentesque natoque nulla praesent hac condimentum, est class magna ultrices tortor morbi dignissim rutrum congue."
        />

        <Footer />
      </div>
    </>
  )
}

export default Who
