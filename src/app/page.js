"use client";

import axios from 'axios';
import ReactPlayer from "react-player/lazy";
import { useState } from 'react';
import Image from "next/image";

export default function Home() {
    const [menuOpen, SetMenuOpen] = useState(false);
    const togglemobilemenu = () => {
        SetMenuOpen(!menuOpen)
    }

    const [userMessage, setUserMessage] = useState("");
    const [chatlog, setChatlog] = useState([]);

    // Chatbot message handling
    const handleUserMessage = () => {
        if (!userMessage.trim()) return; // Prevent sending empty messages

        const updatedChatlog = [...chatlog, { sender: 'user', message: userMessage }];
        setChatlog(updatedChatlog);

        let botResponse = "";
         // Convert the user message to lowercase for case-insensitive matching
    const lowerMessage = userMessage.toLowerCase();

    if (lowerMessage.includes("skills") || lowerMessage.includes("expertise")) {
        botResponse = "I have expertise in Unity (C#) and experience with Unreal Engine (C++). I also work with Firebase, game mechanics, AI, and VR development.";
    } else if (lowerMessage.includes("projects") || lowerMessage.includes("portfolio")) {
        botResponse = "I have worked on various projects like 'Flappy Ghoku,' 'The Last Night,' a zombie survival game with a day-night cycle, VR survival games, and 2D/3D mobile games.";
    } else if (lowerMessage.includes("education") || lowerMessage.includes("college")) {
        botResponse = "I am pursuing a Bachelor's in Computer Science and have participated in multiple game jams to enhance my skills.";
    } else if (lowerMessage.includes("experience") || lowerMessage.includes("background")) {
        botResponse = "I have experience as a solo game developer, creating mechanics, AI systems, and integrating Firebase for real-time updates. I've participated in game jams and created engaging projects.";
    } else if (lowerMessage.includes("game jams")) {
        botResponse = "I have participated in game jams on Itch.io and in college, where I developed games like platformers, VR experiences, and mechanics-focused projects.";
    } else if (lowerMessage.includes("vr projects") || lowerMessage.includes("virtual reality")) {
        botResponse = "I have worked on VR projects like a survival game where players can chop trees, pick up objects, and interact with the environment using custom mechanics.";
    } else if (lowerMessage.includes("firebase")) {
        botResponse = "I use Firebase for real-time database integration, coin tracking, leaderboards, and other features in my games.";
    } else if (lowerMessage.includes("unreal engine")) {
        botResponse = "I have experience with Unreal Engine (C++) and worked on an RPG game project and post-apocalyptic environments.";
    } else if (lowerMessage.includes("unity")) {
        botResponse = "Unity is my primary development tool. I use C# to create engaging gameplay mechanics, AI systems, VR features, and mobile games.";
    } else if (lowerMessage.includes("contact") || lowerMessage.includes("email")) {
        botResponse = "You can contact me at muditmamodia@example.com. I'd be happy to discuss projects or opportunities.";
    } else if (lowerMessage.includes("cv") || lowerMessage.includes("resume")) {
        botResponse = (
            <>
                You can download my CV/Resume from{' '}
                <a href="/Mudit Mamodia Professional CV Resume.pdf" target="_blank">here</a>.
            </>
        );
    } else if (lowerMessage.includes("hobbies") || lowerMessage.includes("interests")) {
        botResponse = "In my free time, I enjoy exploring new game mechanics, participating in game jams, and learning about advancements in game development.";
    } else if (lowerMessage.includes("location") || lowerMessage.includes("based in")) {
        botResponse = "I am based in Rajasthan, India.";
    } else if (lowerMessage.includes("hello") || lowerMessage.includes("hi")) {
        botResponse = "Hi there! I'm Rode_Rick, Mudit Mamodia's chatbot assistant. How can I help you today?";
    } else if (lowerMessage.includes("bye") || lowerMessage.includes("goodbye")) {
        botResponse = "Goodbye! Have a great day!";
    } else if (lowerMessage.includes("name") || lowerMessage.includes("who are you")) {
        botResponse = "My name is Rode_Rick, and I was created by Mudit Mamodia to assist with his portfolio.";
    } else {
        botResponse = "I'm sorry, I didn't understand that. Can you rephrase?";
    }

    setChatlog((prevChatlog) => [...prevChatlog, { sender: 'bot', message: botResponse }]);
    setUserMessage("");
};
    return (
        <>
            <header>
                <a href="#" className="logo-holder">
                    <dev className="logo" >   L </dev>
                    <dev className="logo-text"> Portfolio logo text</dev>
                </a>
                <nav>
                    <ul id="Menu" className={menuOpen ? "active" : ""}>
                        <li>
                            <a href="#">Home</a>
                        </li>
                        <li>
                            <a href="#">discription</a>
                        </li>
                        <li>
                            <a href="#Skills">skills</a>
                        </li>
                        <li>
                            <a href="#Projects">Projects</a>
                        </li>
                        <li>
                            <a href="mailto:muditmamodia734@gmail.com" className="button">contact</a>
                        </li>
                    </ul>
                    <a href="#" className="mobile-toggle" onClick={togglemobilemenu}>
                        <svg className="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                            <path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M5 7h14M5 12h14M5 17h14" />
                        </svg>

                    </a>
                </nav>
            </header>
            <main>
                <section className="hero container">
                    <div className="hero-bluetext">
                        <h1><small>Hi I'am</small>
                            Mudit Mamodia
                        </h1>
                        <p>
                            Mudit Mamodia is a passionate game developer from Rajasthan, India, with expertise in Unity (C#) and experience with Unreal Engine (C++). Specializing in creating immersive gaming experiences, Mudit focuses on game mechanics, player interaction, and system design. With a strong foundation in both game development and programming, he is dedicated to creating engaging and innovative experiences for players.
                        </p>
                        <div className="call-to-action">
                            <a href="./Mudit Mamodia Professional CV Resume.pdf" className="buttonblack">
                                View Resume
                            </a>
                            <a href="mailto:muditmamodia734@gmail.com" className="button white">
                                contact me
                            </a>
                        </div>
                        <div className="social-link">
                            <a href="#">
                                <img src="./imgs/Github.png" alt="Github" width="48px" />
                            </a>
                            <a href="#">
                                <img src="./imgs/linkedin.png" alt="Linkedin" width="48px" />
                            </a>

                        </div>
                    </div>
                    <div className="hero-yellow">
                        <img src="./imgs/icon_of_web.jpg" alt="Mudit Mamodia" width="100%" />
                    </div>
                </section>
                <section className="logos container">
                    <div className="marquee">
                        <div className="track">
                            <img src="./imgs/unity_png.png" alt="unity" width="180" />
                            <img src="./imgs/csharp.png" alt="c#" width="110" />
                            <img src="./imgs/unreal.png" alt="unreal" width="180" />
                            <img src="./imgs/c++.png" alt="c++" width="90" />
                            <img src="./imgs/unity_png.png" alt="unity" width="180" />
                            <img src="./imgs/csharp.png" alt="c#" width="110" />
                            <img src="./imgs/unreal.png" alt="unreal" width="180" />
                            <img src="./imgs/c++.png" alt="c++" width="90" />
                            <img src="./imgs/unity_png.png" alt="unity" width="180" />
                            <img src="./imgs/csharp.png" alt="c#" width="110" />
                            <img src="./imgs/unreal.png" alt="unreal" width="180" />
                            <img src="./imgs/c++.png" alt="c++" width="90" />
                        </div>
                    </div>
                </section>
                <section id="Skills" className="skills containers">
                    <h2>
                        <small>About Me</small>
                        & My Skills
                    </h2>
                    <div className="holder-blue">
                        <div className="left-column">
                            <h3>codeing languages</h3>
                            <ul>
                                <li>c#</li>
                                <li>c++</li>
                            </ul>
                            <h3>Engine</h3>
                            <ul>
                                <li>Unity</li>
                                <li>Unreal</li>
                            </ul>
                            <h3>Software</h3>
                            <ul>
                                <li>Maya</li>
                                <li>ZBrush</li>
                                <li>Substance Painter</li>
                            </ul>
                        </div>
                        <div className="right-column">
                            <h3>A bit about me</h3>
                            <p>
                                I am a passionate game developer specializing in Unity (C#) with a strong
                                foundation in creating engaging gameplay mechanics and immersive experiences.
                                While Unity is my forte, I also have experience working with Unreal Engine (C++)
                                and a deep understanding of 3D asset creation tools like Maya, Substance Painter,
                                and ZBrush. My skills include texturing, sculpting, and basic human rigging in
                                Maya, making me well-rounded in both programming and 3D art. I am dedicated to
                                crafting innovative and polished games that captivate players.
                            </p>
                        </div>
                    </div>
                </section>
                <section id="workEXP" className="work-exprience container">
                    <h2>
                        Game Jame
                    </h2>
                    <div className="gamejames">
                        <article>
                            <figure>
                                <div>
                                    <img src="./imgs/college_gmajam.png" alt="college-gamejam" width="100%" />
                                    <figcaption>
                                        college-gamejam
                                    </figcaption>
                                </div>
                            </figure>
                            <h3>College gamejames</h3>
                            <h4>Role: Game Developer</h4>
                            <p>I have participated in a college game jam where I was responsible for
                                designing and implementing core game mechanics, collaborating with a
                                small team to rapidly prototype and develop a game within a short
                                time frame. My contributions included coding gameplay systems,
                                ensuring smooth player interactions, and optimizing performance
                                for a functional, engaging game experience.
                            </p>
                        </article>

                        <article>
                            <figure>
                                <div>
                                    <img src="./imgs/itch-io.png" alt="itch.io-gamejam" width="100%" />
                                    <figcaption>
                                        itch.io-gamejam
                                    </figcaption>
                                </div>
                            </figure>
                            <h3>itch.io Game Jame</h3>
                            <h4>Role: Game Developer</h4>
                            <p>I contributed as part of a 3-member team, where I took on the role of the
                                solo developer. In this collaborative environment, I was responsible for
                                the entire development process, from conceptualization to implementation.
                                I designed and developed a platformer game that featured innovative
                                mechanics, such as a unique hacking system and engaging enemy interactions.
                                The project emphasized teamwork and rapid prototyping, allowing us to quickly
                                iterate on ideas and create a compelling gameplay experience within the time
                                constraints of the jam.
                            </p>
                        </article>

                    </div>
                </section>
                <section id="Projects" className="bento container">
                    <h2>
                        <small>My</small>
                        Projects
                    </h2>
                    <div className="bento-grids">
                        <div className="bento-items">
                            {/* two ites in this div */}
                            <div className='first-two-items'>
                            <div className="first">
                               1
                            </div>
                            <div className="second">
                                2
                            </div>
                            </div>
                            {/* end here */}

                            {/* third and fourth */}
                            <div className='last-two-items'>

                           
                            <div className="third">
                                3
                            </div>
                            <div className="fourth">
                                4
                            </div>
                            </div>
                            {/* end here */}
                            <div className='fifth-container'>
                            <div className="fifth">
                            <ReactPlayer 
width="330px" 
height="200px" 
url="./public/imgs/prototype" 
light="/static/normal-sarong-0007.jpg"/>
                            </div>
                            </div>
                            
                        </div>
                    </div>
                </section>
                <section className="chatbot container">
                    <h2>
                        <small>
                            Talk to me
                        </small>
                        chatbot
                    </h2>
                    <div className="chatbot-blue">
                        <div className="chatinfo">
                            {/* this azure chatbo */}
                            <h3>Rode_Rick chat bot</h3>
                            <p>
                                I created a chat bot which knows my skills and wrok
                                so if you wanna know about the me and have any query
                                just type in and you can directly ask for my cv/resume
                                and download it. so feel free so ask anything the chat
                                bot name is Rode_Rick. 😊
                            </p>
                            <a href="\Mudit Mamodia Professional CV Resume.pdf" className="button black"> download cv/resume</a>
                        </div>
                        <div className="chatbox">
                            <div className="scrollarea">
                                <ul id="chat-log">
                                    {chatlog.map((entry, index) => (
                                        <li key={index} className={`chat-message ${entry.sender}`}>
                                            {entry.message}
                                        </li>
                                    ))}
                                </ul>
                                <div className="chat-message">
                                    <input
                                        type="text"
                                        value={userMessage}
                                        onChange={(e) => setUserMessage(e.target.value)}
                                        onKeyDown={(e) => e.key === 'Enter' && handleUserMessage()}
                                        placeholder="Type a message..."
                                    />
                                <button onClick={handleUserMessage}>Send</button>
                            </div>
                           
                        </div>
                    </div>
                </div>
            </section>
        </main >
        </>
    );
}