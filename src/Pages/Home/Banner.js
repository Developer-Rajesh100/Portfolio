import React from "react";
import reactLogo from "../../images/React-Logo.png";

const Banner = () => {
    return (
        // <div className="back flex w-full h-screen items-center">
        //     <div>
        //         <h1 className="text-white text-5xl font-semibold">
        //             Hello There, I'm
        //         </h1>
        //         <h1 className="text-white text-5xl font-semibold">
        //             Rajesh Mondal
        //         </h1>
        //         <a
        //             target="_blank"
        //             href="https://drive.google.com/file/d/1LosEQgXeAcrI6yLXekY_dr9nzigAOj-x/view"
        //         >
        //             {" "}
        //             <button class="btn btn-primary">Button</button>
        //         </a>
        //     </div>
        //     <div>
        //         <img src={reactLogo} alt="" />
        //     </div>
        // </div>
        <div class="hero min-h-screen back">
            <div class="hero-content flex-col lg:flex-row-reverse mx-10">
                <img src={reactLogo} class="max-w-sm" />
                <div>
                    <h1 class="text-5xl font-bold text-white">
                        Hello There, I'm
                    </h1>
                    <h1 class="text-5xl font-bold text-white">Rajesh Mondal</h1>
                    <p class="py-6 text-white">
                        Provident cupiditate voluptatem et in. Quaerat fugiat ut
                        assumenda excepturi exercitationem quasi. In deleniti
                        eaque aut repudiandae et a id nisi.
                    </p>
                    <a
                        target="_blank"
                        href="https://drive.google.com/file/d/1LosEQgXeAcrI6yLXekY_dr9nzigAOj-x/view"
                    >
                        <button class="btn btn-primary">View Resume</button>
                    </a>
                </div>
            </div>
        </div>
    );
};

export default Banner;
