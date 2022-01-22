import React from 'react'

const CryptoCharts = () => {
    return (
        <div style={{
            height: '433px', backgroundColor: '#1D2330',
            overflow: 'hidden', boxSizing: 'border-box',
            border: '1px solid #282E3B', borderRadius: '4px', textAlign: 'right',
            lineHeight: '14px', fontSize: '12px', fontFeatureSettings: 'normal',
            textSizeAdjust: '100%', boxShadow: 'inset 0 -20px 0 0 #262B38',
            padding: '0px', margin: '0px', width: '100%', 
        }}>
            <div style={{ height: '413px', padding: '0px', margin: '0px', width: '100%' }}>
                {/* <iframe src="https://widget.coinlib.io/widget?type=full_v2&theme=dark&cnt=10&pref_coin_id=1505&graph=yes"
                    width="100%" height="409px" scrolling="auto" marginWidth={0}
                    marginHeight={0} frameBorder={0} style={{ border: '0', margin: '0', padding: '0' }} title="l"></iframe> */}
            </div>
            <div style={{
                color: '#626B7F', lineHeight: '14px', fontWeight: '400', fontSize: '11px',
                boxSizing: 'border-box', padding: '2px 6px', width: '100%',
                fontFamily: 'Verdana, Tahoma, Arial, sans-serif'
            }}>
                {/* <a href="https://coinlib.io" target="_blank" rel='noreferrer'
                    style={{ fontWeight: '500', color: '#626B7F', textDecoration: 'none', fontSize: '11px' }}>
                    Cryptocurrency Prices</a>&nbsp;by Coinlib */}
            </div>
        </div >

    )
}

export default CryptoCharts
