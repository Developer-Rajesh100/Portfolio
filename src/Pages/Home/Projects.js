import React from "react";

const Projects = () => {
    return (
        <div>
            <h1 className=" text-4xl font-semibold my-10 text-center">
                Projects
            </h1>
            <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7 mx-12">
                <div class="card card-compact bg-base-100 shadow-xl">
                    <figure>
                        <img
                            src="https://i.ibb.co/HF4M1gw/banner-3.jpg"
                            alt="Shoes"
                        />
                    </figure>
                    <div class="card-body">
                        <h2 class="card-title">PC Builder</h2>
                        <p>If a dog chews shoes whose shoes does he choose?</p>
                        <div class="card-actions justify-end">
                            <a
                                target="_blank"
                                href="https://pc-builder-10e50.web.app/"
                            >
                                <button class="btn btn-primary">Buy Now</button>
                            </a>
                        </div>
                    </div>
                </div>
                <div class="card card-compact bg-base-100 shadow-xl">
                    <figure>
                        <img
                            src="https://i.ibb.co/k10RD9L/s2.png"
                            alt="Shoes"
                        />
                    </figure>
                    <div class="card-body">
                        <h2 class="card-title">Gear Up</h2>
                        <p>If a dog chews shoes whose shoes does he choose?</p>
                        <div class="card-actions justify-end">
                            <a
                                target="_blank"
                                href="https://gear-up-7f7ce.web.app/"
                            >
                                <button class="btn btn-primary">Buy Now</button>
                            </a>
                        </div>
                    </div>
                </div>
                <div class="card card-compact bg-base-100 shadow-xl">
                    <figure>
                        <img
                            src="https://i.ibb.co/mzVZH1F/loan-jump.jpg"
                            alt="Shoes"
                        />
                    </figure>
                    <div class="card-body">
                        <h2 class="card-title">Raj Athletic</h2>
                        <p>If a dog chews shoes whose shoes does he choose?</p>
                        <div class="card-actions justify-end">
                            <a
                                target="_blank"
                                href="https://raj-athletic.netlify.app/"
                            >
                                <button class="btn btn-primary">Buy Now</button>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Projects;
