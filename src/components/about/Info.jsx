import React from 'react'

const Info = () => {
  return (
    <div className="about__info grid">
        <div className="about__box">
            <i class='bx bx-game about__icon'></i>
            <h3 className="about__title">Games</h3>
            <span className="about__subtitle">Android and windows</span>
        </div>

        <div className="about__box">
        <i class="bx bx-laptop about__icon"></i>
            <h3 className="about__title">Apps</h3>
            <span className="about__subtitle">mobile and windows</span>
        </div>

        <div className="about__box">
            <i class='uil uil-window about__icon'></i>
            <h3 className="about__title">Web</h3>
            <span className="about__subtitle">web development</span>
        </div>
    </div>
  )
}

export default Info
