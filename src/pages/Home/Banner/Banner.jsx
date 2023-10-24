import img1 from '../../../assets/images/banner/1.jpg'
import img2 from '../../../assets/images/banner/2.jpg'
import img3 from '../../../assets/images/banner/3.jpg'
import img4 from '../../../assets/images/banner/4.jpg'
import img5 from '../../../assets/images/banner/5.jpg'
import img6 from '../../../assets/images/banner/6.jpg'

const Banner = () => {
    return (
        <div className="carousel w-full my-5 rounded-xl">
            <div id="slide1" className="carousel-item relative w-full h-[600px]">
                <img src={img1} className="w-full" />
                <div className="absolute flex items-center top-0 left-0 p-12 bg-gradient-to-r from-[#151515] to-[rgba(21_21_21/0.1)] w-full h-full">
                    <div className="text-white space-y-7 w-1/2">
                        <h1 className='font-bold text-6xl'>Affordable Price For Car Servicing</h1>
                        <p>There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
                        <div className="flex gap-5">
                            <button className="btn btn-error">Discover More</button>
                            <button className="btn btn-error btn-outline">Latest Project</button>
                        </div>
                    </div>
                </div>
                <div className="absolute flex gap-5 right-12 bottom-12">
                    <a href="#slide4" className="btn btn-circle opacity-40">❮</a>
                    <a href="#slide2" className="btn btn-circle btn-error">❯</a>
                </div>
            </div>
            <div id="slide2" className="carousel-item relative w-full h-[600px]">
                <img src={img2} className="w-full" />
                <div className="absolute flex items-center top-0 left-0 p-12 bg-gradient-to-r from-[#151515]  to-[rgba(21_21_21/0.1)] w-full h-full">
                    <div className="text-white space-y-7 w-1/2">
                        <h1 className='font-bold text-6xl'>Affordable Price For Car Servicing</h1>
                        <p>There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
                        <div className="flex gap-5">
                            <button className="btn btn-error">Discover More</button>
                            <button className="btn btn-error btn-outline">Latest Project</button>
                        </div>
                    </div>
                </div>
                <div className="absolute flex gap-5 right-12 bottom-12">
                    <a href="#slide1" className="btn btn-circle opacity-40">❮</a>
                    <a href="#slide3" className="btn btn-circle btn-error">❯</a>
                </div>
            </div>
            <div id="slide3" className="carousel-item relative w-full h-[600px]">
                <img src={img3} className="w-full" />
                <div className="absolute flex items-center top-0 left-0 p-12 bg-gradient-to-r from-[#151515]  to-[rgba(21_21_21/0.1)] w-full h-full">
                    <div className="text-white space-y-7 w-1/2">
                        <h1 className='font-bold text-6xl'>Affordable Price For Car Servicing</h1>
                        <p>There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
                        <div className="flex gap-5">
                            <button className="btn btn-error">Discover More</button>
                            <button className="btn btn-error btn-outline">Latest Project</button>
                        </div>
                    </div>
                </div>
                <div className="absolute flex gap-5 right-12 bottom-12">
                    <a href="#slide2" className="btn btn-circle opacity-40">❮</a>
                    <a href="#slide4" className="btn btn-circle btn-error">❯</a>
                </div>
            </div>
            <div id="slide4" className="carousel-item relative w-full h-[600px]">
                <img src={img4} className="w-full" />
                <div className="absolute flex items-center top-0 left-0 p-12 bg-gradient-to-r from-[#151515]  to-[rgba(21_21_21/0.1)] w-full h-full">
                    <div className="text-white space-y-7 w-1/2">
                        <h1 className='font-bold text-6xl'>Affordable Price For Car Servicing</h1>
                        <p>There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
                        <div className="flex gap-5">
                            <button className="btn btn-error">Discover More</button>
                            <button className="btn btn-error btn-outline">Latest Project</button>
                        </div>
                    </div>
                </div>
                <div className="absolute flex gap-5 right-12 bottom-12">
                    <a href="#slide3" className="btn btn-circle opacity-40">❮</a>
                    <a href="#slide5" className="btn btn-circle btn-error">❯</a>
                </div>
            </div>
            <div id="slide5" className="carousel-item relative w-full h-[600px]">
                <img src={img5} className="w-full" />
                <div className="absolute flex items-center top-0 left-0 p-12 bg-gradient-to-r from-[#151515]  to-[rgba(21_21_21/0.1)] w-full h-full">
                    <div className="text-white space-y-7 w-1/2">
                        <h1 className='font-bold text-6xl'>Affordable Price For Car Servicing</h1>
                        <p>There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
                        <div className="flex gap-5">
                            <button className="btn btn-error">Discover More</button>
                            <button className="btn btn-error btn-outline">Latest Project</button>
                        </div>
                    </div>
                </div>
                <div className="absolute flex gap-5 right-12 bottom-12">
                    <a href="#slide4" className="btn btn-circle opacity-40">❮</a>
                    <a href="#slide6" className="btn btn-circle btn-error">❯</a>
                </div>
            </div>
            <div id="slide6" className="carousel-item relative w-full h-[600px]">
                <img src={img6} className="w-full" />
                <div className="absolute flex items-center top-0 left-0 p-12 bg-gradient-to-r from-[#151515]  to-[rgba(21_21_21/0.1)] w-full h-full">
                    <div className="text-white space-y-7 w-1/2">
                        <h1 className='font-bold text-6xl'>Affordable Price For Car Servicing</h1>
                        <p>There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
                        <div className="flex gap-5">
                            <button className="btn btn-error">Discover More</button>
                            <button className="btn btn-error btn-outline">Latest Project</button>
                        </div>
                    </div>
                </div>
                <div className="absolute flex gap-5 right-12 bottom-12">
                    <a href="#slide5" className="btn btn-circle opacity-40">❮</a>
                    <a href="#slide1" className="btn btn-circle btn-error">❯</a>
                </div>
            </div>
        </div>
    );
};

export default Banner;