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
          email="email@gmail.com"
          github="github.com/AntonioBogallo"
          order="md:order-[-1]"
          description="Lorem ipsum dolor sit amet consectetur adipiscing elit, primis consequat mattis montes lacus vulputate, tortor senectus suscipit tempus in eget. Varius facilisi ante pellentesque purus viverra himenaeos lobortis, nibh mauris dis iaculis et hendrerit lacus erat, ullamcorper mollis blandit vestibulum facilisis eros. Et ut potenti quis arcu augue rutrum facilisi vitae, sollicitudin tempor id dictum elementum ullamcorper class proin, velit duis curae dictumst iaculis nullam hac.
        Suspendisse sagittis fringilla duis habitasse vestibulum egestas nisl augue porta varius, fusce tristique habitant phasellus auctor nulla congue tempus curabitur cubilia, praesent nullam dignissim luctus parturient sodales convallis volutpat ad. Aliquet scelerisque sollicitudin ligula elementum ad placerat ullamcorper, aptent parturient dictumst cum dictum interdum vulputate sociis, habitasse porta cras rutrum morbi inceptos. Orci eros sapien vitae leo malesuada iaculis porta fusce semper aenean, netus sociis tempor non ut pellentesque natoque nulla praesent hac condimentum, est class magna ultrices tortor morbi dignissim rutrum congue."
        />

        <CardWho
          img="/img/who/edu.png"
          name="Eduardo Díez"
          email="email@gmail.com"
          github="github.com/edm95"
          order="md:order-[1]"
          description="Lorem ipsum dolor sit amet consectetur adipiscing elit, primis consequat mattis montes lacus vulputate, tortor senectus suscipit tempus in eget. Varius facilisi ante pellentesque purus viverra himenaeos lobortis, nibh mauris dis iaculis et hendrerit lacus erat, ullamcorper mollis blandit vestibulum facilisis eros. Et ut potenti quis arcu augue rutrum facilisi vitae, sollicitudin tempor id dictum elementum ullamcorper class proin, velit duis curae dictumst iaculis nullam hac.
        Suspendisse sagittis fringilla duis habitasse vestibulum egestas nisl augue porta varius, fusce tristique habitant phasellus auctor nulla congue tempus curabitur cubilia, praesent nullam dignissim luctus parturient sodales convallis volutpat ad. Aliquet scelerisque sollicitudin ligula elementum ad placerat ullamcorper, aptent parturient dictumst cum dictum interdum vulputate sociis, habitasse porta cras rutrum morbi inceptos. Orci eros sapien vitae leo malesuada iaculis porta fusce semper aenean, netus sociis tempor non ut pellentesque natoque nulla praesent hac condimentum, est class magna ultrices tortor morbi dignissim rutrum congue."
        />

        <CardWho
          img="/img/who/angel.png"
          name="Angel Romero"
          email="email@gmail.com"
          github="github.com/angelrcd"
          order="md:order-[-1]"
          description="Lorem ipsum dolor sit amet consectetur adipiscing elit, primis consequat mattis montes lacus vulputate, tortor senectus suscipit tempus in eget. Varius facilisi ante pellentesque purus viverra himenaeos lobortis, nibh mauris dis iaculis et hendrerit lacus erat, ullamcorper mollis blandit vestibulum facilisis eros. Et ut potenti quis arcu augue rutrum facilisi vitae, sollicitudin tempor id dictum elementum ullamcorper class proin, velit duis curae dictumst iaculis nullam hac.
        Suspendisse sagittis fringilla duis habitasse vestibulum egestas nisl augue porta varius, fusce tristique habitant phasellus auctor nulla congue tempus curabitur cubilia, praesent nullam dignissim luctus parturient sodales convallis volutpat ad. Aliquet scelerisque sollicitudin ligula elementum ad placerat ullamcorper, aptent parturient dictumst cum dictum interdum vulputate sociis, habitasse porta cras rutrum morbi inceptos. Orci eros sapien vitae leo malesuada iaculis porta fusce semper aenean, netus sociis tempor non ut pellentesque natoque nulla praesent hac condimentum, est class magna ultrices tortor morbi dignissim rutrum congue."
        />

        <CardWho
          img="/img/who/dani.png"
          name="Daniel Tallón"
          email="email@gmail.com"
          github="github.com/NuberuSH"
          order="md:order-[1]"
          description="Lorem ipsum dolor sit amet consectetur adipiscing elit, primis consequat mattis montes lacus vulputate, tortor senectus suscipit tempus in eget. Varius facilisi ante pellentesque purus viverra himenaeos lobortis, nibh mauris dis iaculis et hendrerit lacus erat, ullamcorper mollis blandit vestibulum facilisis eros. Et ut potenti quis arcu augue rutrum facilisi vitae, sollicitudin tempor id dictum elementum ullamcorper class proin, velit duis curae dictumst iaculis nullam hac.
        Suspendisse sagittis fringilla duis habitasse vestibulum egestas nisl augue porta varius, fusce tristique habitant phasellus auctor nulla congue tempus curabitur cubilia, praesent nullam dignissim luctus parturient sodales convallis volutpat ad. Aliquet scelerisque sollicitudin ligula elementum ad placerat ullamcorper, aptent parturient dictumst cum dictum interdum vulputate sociis, habitasse porta cras rutrum morbi inceptos. Orci eros sapien vitae leo malesuada iaculis porta fusce semper aenean, netus sociis tempor non ut pellentesque natoque nulla praesent hac condimentum, est class magna ultrices tortor morbi dignissim rutrum congue."
        />

        <CardWho
          img="/img/who/jorge.png"
          name="Jorge Castelló"
          email="email@gmail.com"
          github="github.com/JorgeCastello99"
          order="md:order-[-1]"
          description="Lorem ipsum dolor sit amet consectetur adipiscing elit, primis consequat mattis montes lacus vulputate, tortor senectus suscipit tempus in eget. Varius facilisi ante pellentesque purus viverra himenaeos lobortis, nibh mauris dis iaculis et hendrerit lacus erat, ullamcorper mollis blandit vestibulum facilisis eros. Et ut potenti quis arcu augue rutrum facilisi vitae, sollicitudin tempor id dictum elementum ullamcorper class proin, velit duis curae dictumst iaculis nullam hac.
        Suspendisse sagittis fringilla duis habitasse vestibulum egestas nisl augue porta varius, fusce tristique habitant phasellus auctor nulla congue tempus curabitur cubilia, praesent nullam dignissim luctus parturient sodales convallis volutpat ad. Aliquet scelerisque sollicitudin ligula elementum ad placerat ullamcorper, aptent parturient dictumst cum dictum interdum vulputate sociis, habitasse porta cras rutrum morbi inceptos. Orci eros sapien vitae leo malesuada iaculis porta fusce semper aenean, netus sociis tempor non ut pellentesque natoque nulla praesent hac condimentum, est class magna ultrices tortor morbi dignissim rutrum congue."
        />

        <CardWho
          img="/img/who/molina.png"
          name="Antonio Molina"
          email="email@gmail.com"
          github="github.com/tmpmolina"
          order="md:order-[1]"
          description="Lorem ipsum dolor sit amet consectetur adipiscing elit, primis consequat mattis montes lacus vulputate, tortor senectus suscipit tempus in eget. Varius facilisi ante pellentesque purus viverra himenaeos lobortis, nibh mauris dis iaculis et hendrerit lacus erat, ullamcorper mollis blandit vestibulum facilisis eros. Et ut potenti quis arcu augue rutrum facilisi vitae, sollicitudin tempor id dictum elementum ullamcorper class proin, velit duis curae dictumst iaculis nullam hac.
        Suspendisse sagittis fringilla duis habitasse vestibulum egestas nisl augue porta varius, fusce tristique habitant phasellus auctor nulla congue tempus curabitur cubilia, praesent nullam dignissim luctus parturient sodales convallis volutpat ad. Aliquet scelerisque sollicitudin ligula elementum ad placerat ullamcorper, aptent parturient dictumst cum dictum interdum vulputate sociis, habitasse porta cras rutrum morbi inceptos. Orci eros sapien vitae leo malesuada iaculis porta fusce semper aenean, netus sociis tempor non ut pellentesque natoque nulla praesent hac condimentum, est class magna ultrices tortor morbi dignissim rutrum congue."
        />

        <Footer />
      </div>
    </>
  )
}

export default Who
