import React from 'react';

const Blog = () => {
    return (
        <div className='container'>
            <div className="row mb-lg-5 mt-lg-5">
                <div className="col-8 m-auto">
                    <p>
                        <a className="btn btn-outline-success w-100" data-bs-toggle="collapse" href="#multiCollapseExample1" role="button" aria-expanded="false" aria-controls="multiCollapseExample1">1. Difference between SQL and NoSQL?</a>
                    </p>
                    <div className="row mb-lg-3">
                        <div className="col">
                            <div className="collapse multi-collapse" id="multiCollapseExample1">
                                <div className="card card-body">
                                    <span className='fw-bold'>Answer :</span>
                                    <ul>
                                        <li>SQL databases are primarily called as Relational Databases (RDBMS); whereas NoSQL database are primarily called as non-relational or distributed database.</li>
                                        <li>Sql databases have fixed or static or predefined schema on the other hand non Sql have dynamic schema.</li>
                                        <li>Sql Vertically Scalable and NonSql Horizontally scalable</li>
                                        <li>Sql These databases are not suited for hierarchical data storage. and Non sql databases are best suited for hierarchical data storage.</li>
                                    </ul>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-8 m-auto">
                    <p>
                        <a className="btn btn-outline-success w-100" data-bs-toggle="collapse" href="#multiCollapseExample2" role="button" aria-expanded="false" aria-controls="multiCollapseExample2">2. What is JWT, and how does it work?</a>
                    </p>
                    <div className="row mb-lg-3">
                        <div className="col">
                            <div className="collapse multi-collapse" id="multiCollapseExample2">
                                <div className="card card-body">
                                    <p><span className='fw-bold'>Answer : </span>JWt, or  JSON Web Token, is an open standard used to share security information between two parties — a client and a server. Each JWT contains encoded JSON objects, including a set of claims. JWTs are signed using a cryptographic algorithm to ensure that the claims cannot be altered after the token is issued.

                                        JWTs differ from other web tokens in that they contain a set of claims. Claims are used to transmit information between two parties. What these claims are depends on the use case at hand. For example, a claim may assert who issued the token, how long it is valid for, or what permissions the client has been granted.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-8 m-auto">
                    <p>
                        <a className="btn btn-outline-success w-100" data-bs-toggle="collapse" href="#multiCollapseExample3" role="button" aria-expanded="false" aria-controls="multiCollapseExample3">3. What is the difference between javascript and NodeJS?</a>
                    </p>
                    <div className="row mb-lg-3">
                        <div className="col">
                            <div className="collapse multi-collapse" id="multiCollapseExample3">
                                <div className="card card-body">
                                    <span className='fw-bold'>Answer : </span>
                                    <ul>
                                        <li>Javascript is a programming language that is used for writing scripts on the website. We can run Javascript outside the browser with the help of NodeJS. NodeJS is a Javascript runtime environment.</li>
                                        <li>Javascript can only be run in the browsers. We can run Javascript outside the browser with the help of NodeJS.</li>
                                        <li>JS is basically used on the client-side. nodeJs It is mostly used on the server-side.</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-8 m-auto">
                    <p>
                        <a className="btn btn-outline-success w-100" data-bs-toggle="collapse" href="#multiCollapseExample4" role="button" aria-expanded="false" aria-controls="multiCollapseExample4">4. How does NodeJS handle multiple requests at the same time?</a>
                    </p>
                    <div className="row mb-lg-3">
                        <div className="col">
                            <div className="collapse multi-collapse" id="multiCollapseExample4">
                                <div className="card card-body">
                                    <p><span className='fw-bold'>Answer : </span>NodeJS receives multiple client requests and places them into EventQueue. NodeJS is built with the concept of event-driven architecture. NodeJS has its own EventLoop which is an infinite loop that receives requests and processes them. EventLoop is the listener for the EventQueue.

                                        If NodeJS can process the request without I/O blocking then the event loop would itself process the request and sends the response back to the client by itself. But, it is possible to process multiple requests parallelly using the NodeJS cluster module or worker_threads module.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Blog;