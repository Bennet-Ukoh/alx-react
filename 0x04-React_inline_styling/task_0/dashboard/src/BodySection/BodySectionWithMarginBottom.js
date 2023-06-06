import React from 'react'
import BodySection from './BodySection'

const BodySectionWithMarginBottom = (props) => {
 return (
    <div className='bodySectionWithMargin'>
       <BodySection {...props}/>
    </div>
 )
}

BodySectionWithMarginBottom.propTypes = BodySection.propTypes;

export default BodySectionWithMarginBottom