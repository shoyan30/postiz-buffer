import React from 'react';

const Compare = () => {
    return (
        <div className="p-4 mb-10">
            <h2 className="text-3xl font-bold mb-6 text-center">Compare Alternatives</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 relative">
                <div className=" bg-[#1A1919] rounded-lg p-6">

                    <h1 className="text-xl font-bold mb-2">Postiz - Compare Alternatives</h1>

                    <div>

                        <ul>
                            <li>Postiz vs. Later</li>
                            <li>Postiz vs. Loomly</li>
                            <li>Postiz vs. Hootsuite</li>
                            <li>Postiz vs. Planoly</li>
                            <li>Postiz vs. Sendible</li>
                            <li>Postiz vs. Socialpilot</li>
                            <li>Postiz vs. Sprout social</li>
                            <li>Postiz vs. Iconosquare</li>
                            <li>Postiz vs. Hopperhq</li>
                            
                        </ul>
                    </div>
                </div>

                {/* Buffer Social Media & Publishing */}
                <div className=" bg-[#1A1919] rounded-lg p-6">

                    <h1 className="text-xl font-bold mb-2">Buffer - Compare Alternatives</h1>
                    <div>

                        <ul>
                        <li>Postiz vs. Later</li>
                            <li>Buffer vs. Loomly</li>
                            <li>Buffer vs. Hootsuite</li>
                            <li>Buffer vs. Planoly</li>
                            <li>Buffer vs. Sendible</li>
                            <li>Buffer vs. Socialpilot</li>
                            <li>Buffer vs. Sprout social</li>
                            <li>Buffer vs. Iconosquare</li>
                            <li>Buffer vs. Hopperhq</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Compare;