import React from 'react'
import '../assets/scss/pages.scss'
import CommonButton from '../components/ButtonControllers/CommonButton'
export default function PhysiopediaPlusPage() {

    return (
        <div className="page page-physiopediaPlus">
            <section className="header-section">
                <h1 className="page-header">
                    Physiopedia Plus
                </h1>
            </section>
            <div className="btn-wrapper">
                <CommonButton customClass="button_accent" text="Physiopedia Login" handler={() => { }} />
            </div>
        </div>
    );
}

