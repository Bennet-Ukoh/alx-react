import React from 'react'
import BodySection from './BodySection'
import { StyleSheet, css } from 'aphrodite'

const BodySectionWithMarginBottom = (props) => {

   const styles = StyleSheet.create({
      bodySectionWithMargin: {
         marginBottom: '40px'
      }
   })
 return (
    <div className={css(styles.bodySectionWithMargin)}>
       <BodySection {...props}/>
    </div>
 )
}

BodySectionWithMarginBottom.propTypes = BodySection.propTypes;

export default BodySectionWithMarginBottom