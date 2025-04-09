import React, { useState } from "react";
import Data from "./data.jsx"

function Card({ i, n, c, e }) {
    return (
        <div>
            <div className="text-sm leading-6 m-4">
                <figure className="relative flex flex-col-reverse bg-slate-100 rounded-lg p-6 dark:bg-slate-800 dark:highlight-white/5">
                    <blockquote className="mt-6 text-slate-700 dark:text-slate-300">
                        <p>{i}</p>
                    </blockquote>
                    <figcaption className="flex items-center space-x-4">
                        <div className="flex-auto">
                            <div className="text-base text-slate-900 font-semibold dark:text-slate-200">
                                {n}
                            </div>
                            <div className="mt-0.5 dark:text-slate-300">
                                {c}
                            </div>
                            <div className="mt-0.5 dark:text-slate-300">
                                {e}
                            </div>
                        </div>
                    </figcaption>
                </figure>
            </div>
        </div>
    )
}

export default Card