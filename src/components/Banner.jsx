
import PropTypes from 'prop-types';

const Banner = props => {
    return (
        <div className='bg-black flex flex-col items-center w-full bg-cover bg-no-repeat h-auto text-center mb-12 md:mb-16 py-[130px] rounded-3xl'
            style={{
                backgroundImage: `url('https://i.ibb.co.com/3kYtv41/banner.png?fbclid=IwZXh0bgNhZW0CMTAAAR1Z06EBNszBFhU8pYrZsSw7qOt-Q_bgS-6iLDFraY9MFbg2E_d8V681UcU_aem_1CQGv9azeu7GYfhup8B_oA')`,
                backgroundRepeat: "no-repeat",
                backgroundSize: 'cover',
                backgroundPosition: 'center'
            }}>
            <div className='w-11/12 md:w-4/5 lg:w-3/5 mx-auto flex flex-col justify-center items-center'>
                <h1 className='mb-5 md:mb-6 text-3xl md:text-5xl font-bold text-white'>Discover an exceptional cooking class tailored for you!</h1>
                <p className='mb-8 md:mb-10 text-white text-base md:text-xl'>Join Chef's Table for hands-on, personalized cooking classes, mastering techniques and flavors with expert chefs in an inspiring, fun environment</p>
                <div className='flex items-center gap-4 md:gap-6'>
                    <button className='text-[#150B2B] text-base md:text-xl border-[1px] bg-[#0BE58A] rounded-full font-semibold btn btn-md md:btn-lg hover:bg-transparent hover:border-2 hover:border-white hover:text-white'>Explore Now</button>
                    <button className='btn-md md:btn-lg text-base md:text-xl bg-transparent border-[1px] border-white rounded-full text-white font-semibold btn hover:bg-[#0BE58A] hover:text-[#150B2B] hover:border-none'>Our Feedback</button>
                </div>
            </div>
        </div>
    );
};

Banner.propTypes = {

};

export default Banner;