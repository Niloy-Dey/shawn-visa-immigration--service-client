import React from 'react';
import people1 from '../../assets/people1.png'
import people2 from '../../assets/people2.png'
import people3 from '../../assets/people3.png'
import Review from './Review';
const HappyClient = () => {
        const reviews = [
            {
                _id: 1,
                name: 'winson heri',
                review: '',
                image:people1,
                location:'califonia'
            },
            {
                _id: 2,
                name: 'nikolas ',
                review: '',
                image:people2,
                location:'califonia'
            },
            {
                _id: 3,
                name: 'newton galli',
                review: '',
                image:people3,
                location:'califonia'
            }
        ]
    return (
        <div>
        <section className='my-28 mx-20'>
        <div className='flex justify-between'>
            <div>
                <h4 className="text-xl text-primary font-bold">Happy Clients</h4>
            </div>
            <div>
                {/* <img src={quote} className="w-24 lg:w-48" alt="" /> */}
            </div>
        </div>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>
            {
                reviews.map(review =><Review
                    key={review._id}
                    review={review}
                ></Review>)
            }
        </div>
    </section>
   </div>
    );
};

export default HappyClient;