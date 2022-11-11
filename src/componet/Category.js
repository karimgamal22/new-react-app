import React from 'react'
import { Col } from 'react-bootstrap'
import { Row } from 'react-bootstrap'
import Roll   from 'react-reveal/Roll';
import './category.css'

const Category = ({fillterbycategory,allcategory}) => {

  // to filter by category
  const onfilter = (cat) => {
    fillterbycategory(cat)
  }



  return (
    <Row className="my-2 mb-5">

    <Roll >

    <Col sm='12' className='d-flex justify-content-center'>
    
    {
      allcategory.length >= 1 ? (allcategory.map((cat) =>{
        return (
          <div >

    <button onClick={() => onfilter (cat)} style={{ border: "1px solid #b45b35" }} className='btn  mx-2'>{cat}</button>
   
    </div> 

        )
      } )) : <h4>لا يوجد شي</h4>
    }




    </Col>


    </Roll>



    </Row>
  )
}

export default Category