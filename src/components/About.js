import React, { useState, useRef, useEffect } from 'react'
import { Redirect } from "react-router-dom";
import { faker } from '@faker-js/faker';
const About = () => {
    const [redirectNow, setRedirectNow] = useState(false);
    setTimeout(() => setRedirectNow(true), 45000);
	// We need ref in this, because we are dealing
	// with JS setInterval to keep track of it and
	// stop it when needed
	const Ref = useRef(null);

	// The state for our timer
	const [timer, setTimer] = useState('00:00:00');


	const getTimeRemaining = (e) => {
		const total = Date.parse(e) - Date.parse(new Date());
		const seconds = Math.floor((total / 1000) % 60);
		
		return {
			total, seconds
		};
	}


	const startTimer = (e) => {
		let { total, seconds }
					= getTimeRemaining(e);
		if (total >= 0) {

			// update the timer
			// check if less than 10 then we need to
			// add '0' at the beginning of the variable
			setTimer(
			
				+ (seconds > 45 ? seconds : '0' + seconds)
			)
		}
	}


	const clearTimer = (e) => {

		// If you adjust it you should also need to
		// adjust the Endtime formula we are about
		// to code next	
		setTimer('45');

		// If you try to remove this line the
		// updating of timer Variable will be
		// after 1000ms or 1sec
		if (Ref.current) clearInterval(Ref.current);
		const id = setInterval(() => {
			startTimer(e);
		}, 1000)
		Ref.current = id;
	}

	const getDeadTime = () => {
		let deadline = new Date();

		// This is where you need to adjust if
		// you entend to add more time
		deadline.setSeconds(deadline.getSeconds() + 45);
		return deadline;
	}

	// We can use useEffect so that when the component
	// mount the timer will start as soon as possible

	// We put empty array to act as componentDid
	// mount only
	useEffect(() => {
		clearTimer(getDeadTime());
	}, []);

	// Another way to call the clearTimer() to start
	// the countdown is via action event from the
	// button first we create function to be called
	// by the button
	const onClickReset = () => {
		clearTimer(getDeadTime());
	}

	return redirectNow ? (
        <Redirect to="/" />
      ) : (
        <div classNameName="SplashScreen">
          <h1>About {timer}</h1>
          <div class="card">
  <div class="card-header">
    About
  </div>
  <div class="card-body">
    <h5 class="card-title">Special title treatment</h5>
    <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
    <a href="#" class="btn btn-primary">Go somewhere</a>
  </div>
</div>
        </div>
      );
    }
    

export default About;
