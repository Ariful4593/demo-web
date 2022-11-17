import React from 'react'
import { Link } from 'react-router-dom'

export const Category = () => {
    return (
        <div className="container mt-5">
            <h2 className='text-center mb-5'>Category</h2>
            <div className="row">
                <div className="col-md-4">
                    <div className="card">
                        <img src="https://images.unsplash.com/photo-1542291026-7eec264c27ff?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8c2hvZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=600&q=60" className="card-img-top" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title">Card title</h5>
                            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            <Link to="/category/nike" className="btn btn-primary">View More</Link>
                        </div>
                    </div>
                </div>
                <div className="col-md-4">
                    <div className="card">
                        <img src="https://images.unsplash.com/photo-1608231387042-66d1773070a5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8c2hvZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=600&q=60" className="card-img-top" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title">Card title</h5>
                            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            <Link to="/category/puma" className="btn btn-primary">View More</Link>
                        </div>
                    </div>
                </div>
                <div className="col-md-4">
                    <div className="card">
                        <img src="https://images.unsplash.com/photo-1549298916-b41d501d3772?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8c2hvZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=600&q=60" className="card-img-top" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title">Card title</h5>
                            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            <Link to="/category/varitege" className="btn btn-primary">View More</Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
