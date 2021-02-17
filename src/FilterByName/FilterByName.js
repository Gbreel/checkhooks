import React from 'react'
import './FilterByName.css'
import {Form} from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';

const FilterByName = ({setinputSearch}) => {
    return (
        <div>
        <Form.Control type="text" placeholder="Search ..." className="inputFilter"
        onChange={(e)=>setinputSearch(e.target.value)}
        />
        </div>
    )
}

export default FilterByName
