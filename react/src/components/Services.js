import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import './Services.css'

const Services = props => (
    <div class="col-md-4 p-3 mt-5">
        <div class="card shadow">
            <img
                src={props.image}
                class="card-img-top"
                alt="..."
            />
            <div class="card-body">
                <h5 class="card-title services h4">{props.title}</h5>
                <p class="card-text">
                {props.text}
                </p>
                <button type="button" class="btn btn-link btn-outline-success">Button</button>
            </div>
        </div>
    </div>
)

export default Services