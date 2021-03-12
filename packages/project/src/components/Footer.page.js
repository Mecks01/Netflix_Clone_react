import React from 'react'
import './Footer.style.css';

function Footer() {
    return (       
        <div className="bg-black w-full font-footer flex justify-center">
            <div className="max-w-screen-lg m-10 px-5 flex flex-col">
                <div className="mt-2 mb-4 flex justify-start" >Questions? Contact us.</div>
                <div className="flex flex-wrap justify-start">
                    <div className="w-60 flex flex-col">
                        <a href="/">FAQ</a>
                        <a href="/">Investor Relation</a>
                        <a href="/">Privacy</a>
                        <a href="/">Speed Test </a>
                    </div>
                    <div className="w-60 flex flex-col">
                        <a href="/">Help Center</a> 
                        <a href="/">Jobs </a>
                        <a href="/">Cookie perfermences</a>
                        <a href="/"> Legal Notices</a>
                    </div>
                    <div className="w-60 flex flex-col">
                        <a href="/"> Account </a>
                        <a href="/">Ways to Watch </a> 
                        <a href="/"> Corporate Information</a>
                        <a href="/"> Netflix Originals</a>
                    </div>
                    <div className="w-48 flex flex-col">  
                        <a href="/"> Media Center </a> 
                        <a href="/"> Terms of Use </a>
                        <a href="/"> Contact Us</a>
                    </div>
                </div>
                <div className="mt-6 flex justify-start">Netflix|Clone Madagascar</div>
            </div>               
        </div>
    )
}

export default Footer;
