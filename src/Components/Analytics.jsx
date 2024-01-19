import React from 'react'
import Img from "./Images/qr.png"

function Analytics() {
    return (
        <div className='all bg-slate-500/30 w-screen'>
            <div className="sect">
                <div className="firstBar grid grid-cols-2 mt-12 mx-16">
                    <div className="sec1 flex gap-10">
                        <h1 className='text-4xl font-bold'>About Me</h1>
                        <div className="calendar text-white">
                            <input type="date" data-date-inline-picker="true" className='bg-white/50 py-1 px-6 rounded-full border-2 border-black/30 text-black' />
                        </div>
                    </div>
                    <div className="sec2 flex gap-8 ml-[12%]">
                        <div className="lightandnightmode">
                            <h1>welcome</h1>
                        </div>
                        <div className="profilePic flex gap-2">
                            <img src={Img} alt=" Profile Image " className='w-10 h-10 rounded-full border-2 border-white/50' />
                            <h1 className='text-xl my-auto font-medium'>Arinze Onubiyi</h1>
                        </div>
                    </div>
                </div>
                <div className="textFormat grid grid-cols-3 gap-16 -mr-[20%] ml-[2%] mt-12">
                    <div className="ProfessionalSummary col-span-1 bg-white/60 px-6 h-[60%] rounded-xl">
                        <h1 className=' text-2xl font-medium uppercase py-6'>Professional Summary</h1>
                        <p className='text-[15px]'>An enthusiastic cloud engineer with a bachelor's degree in information
                            systems and cyber security. Dedicated to team success through hard
                            work, self-aware with excellent organizational skills. A clear
                            understanding of AWS, Azure Cloud, Azure Sentinel, Terraform, Linux,
                            Splunk, Git, Jenkins, and ITIL practice. Motivated to learn, grow, and excel
                            in the cloud computing industry.
                        </p>
                    </div>
                    <div className="skillSet -ml-10 mt-20 bg-white/60 px-6 pb-10 rounded-xl">
                        <h1 className=' text-2xl font-medium uppercase py-6'>Skills Set 01:</h1>
                        <div className="skillSub text-[15px]">
                            <div className="A">
                                <h1 className=' -mb-3'>Terraform:</h1>
                                <progress value={90} max={100} className=' w-full h-[.4rem] progress'></progress>
                            </div>
                            <div className="B">
                                <h1 className=' -mb-3'>Azure Cloud:</h1>
                                <progress value={85} max={100} className=' w-full h-[.4rem] progress'></progress>
                            </div>
                            <div className="C">
                                <h1 className=' -mb-3'>AWS Cloud:</h1>
                                <progress value={90} max={100} className=' w-full h-[.4rem] progress'></progress>
                            </div>
                            <div className="D">
                                <h1 className=' -mb-3'>Kubernetes:</h1>
                                <progress value={70} max={100} className=' w-full h-[.4rem] progress'></progress>
                            </div>
                            <div className="E">
                                <h1 className=' -mb-3'>Docker:</h1>
                                <progress value={68} max={100} className=' w-full h-[.4rem] progress'></progress>
                            </div>
                            <div className="F">
                                <h1 className=' -mb-3'>Risk Mitigation:</h1>
                                <progress value={75} max={100} className=' w-full h-[.4rem] progress'></progress>
                            </div>
                            <div className="G">
                                <h1 className=' -mb-3'>Data Analysis:</h1>
                                <progress value={90} max={100} className=' w-full h-[.4rem] progress'></progress>
                            </div>
                            <div className="H">
                                <h1 className=' -mb-3'>Infrastructure Deployment:</h1>
                                <progress value={85} max={100} className=' w-full h-[.4rem] progress'></progress>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="grid grid-cols-3 px-9 -mt-32">
                    <div className="skillSet w-[114%] bg-white/60 px-6 pb-10 rounded-xl">
                        <h1 className=' text-2xl font-medium uppercase py-6'>Skills Set 02:</h1>
                        <div className="skillSub text-[15px]">
                            <div className="A">
                                <h1 className=' -mb-3'>Compliance with Security Requirements:</h1>
                                <progress value={90} max={100} className=' w-full h-[.4rem] progress'></progress>
                            </div>
                            <div className="B">
                                <h1 className=' -mb-3'>Infrastructure Planning:</h1>
                                <progress value={80} max={100} className=' w-full h-[.4rem] progress'></progress>
                            </div>
                            <div className="C">
                                <h1 className=' -mb-3'>Linux:</h1>
                                <progress value={80} max={100} className=' w-full h-[.4rem] progress'></progress>
                            </div>
                            <div className="D">
                                <h1 className=' -mb-3'>HTML:</h1>
                                <progress value={99.5} max={100} className=' w-full h-[.4rem] progress'></progress>
                            </div>
                            <div className="E">
                                <h1 className=' -mb-3'>CSS:</h1>
                                <progress value={99.5} max={100} className=' w-full h-[.4rem] progress'></progress>
                            </div>
                            <div className="E">
                                <h1 className=' -mb-3'>JavaScript:</h1>
                                <progress value={70} max={100} className=' w-full h-[.4rem] progress'></progress>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Analytics