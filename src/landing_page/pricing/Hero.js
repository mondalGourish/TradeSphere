import React from 'react';
function Hero() {
    return ( 
        <div className='container'>
            <div className='row mt-5 p-5 text-center border-bottom'>
                <h1>Pricing</h1>
                <h4 className='mb-5  mt-3 text-muted'>Free equity investments and flat &#8377;20 traday and F&O trades</h4>
            </div>
            <div className='row mt-5 p-5'>
                <div className='col-4 p-5 text-center'>
                    <img src="media/pricing0.svg" alt="pricing 0"/>
                    <h1 className='fs-3'>Free equity delivery</h1>
                    <p className='text-muted fs-5 mt-4'>All equity delivery investments (NSE, BSE), are absolutely free — ₹ 0 brokerage.</p>
                </div>
                <div className='col-4 p-5 text-center'>
                    <img src="media/intradayTrades.svg" alt="intradayTrades "/>
                    <h1 className='fs-3'>Intraday and F&O trades</h1>
                    <p className='text-muted fs-5 mt-4'>Flat ₹ 20 or 0.03% (whichever is lower) per executed order on intraday trades across equity, currency, and commodity trades. Flat ₹20 on all option trades.</p>
                </div>
                <div className='col-4 p-5 text-center'>
                    <img src="media/pricing-eq.svg" alt="pricing eq"/>
                    <h1 className='fs-3'>Free direct MF</h1>
                    <p className='text-muted fs-5 mt-4'>All direct mutual fund investments are absolutely free — ₹ 0 commissions & DP charges.</p>
                </div>
            </div>
        </div>
     );
}

export default Hero;