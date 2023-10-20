import { FC } from "react"
import { Slide } from "react-slideshow-image"
import "react-slideshow-image/dist/styles.css";

interface Props {
    images: string[]
}

const divStyle = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundSize: 'cover',
    height: '400px'
}
export const ProductSlideShow: FC<Props> = ({ images }) => {
    return (
        <Slide
            duration={7000}
            indicators
            easing="ease"
        >
            {images.map((slideImage, index) => {

                const url = `/products/${slideImage}`
                return (
                    <div key={index}>
                        <div style={{ ...divStyle, 'backgroundImage': `url(${url})` }}>

                        </div>
                    </div>
                )
            }

            )}
        </Slide>
    )
}
