import React from "react";
import Navbar from "../components/navigation/Navbar";
import Footer from "../components/navigation/Footer";
import ScavengerHuntGame from "../components/games/ScavengerHunt";
import MemoryGame from "../components/games/MemoryGame";

const Cubcorner =()=> {

        return (
            <>
            <div className="cub-page-bg">
                <Navbar pageTitle="CUB CORNER"/>
                <div className="cub-page-container">
                    <div className="welcome-text">
                        <h1>Welcome to Cub Corner!</h1>
                        <p>Join us in the exciting world of Scouting! This is a special place designed for Cubs like you to have fun, play games, and learn about scouting.</p>
                        <p>In Cub Corner, you'll find a variety of interactive games, activities, and educational resources that will help you develop important skills, explore nature, and understand the core values of scouting.</p>
                        <p>Are you ready for an adventure? Let's dive in and start exploring Cub Corner!</p>
                    </div>
                    {/* Games */}
                    <div className="scavenger">
                        <ScavengerHuntGame/>
                        <MemoryGame/>
                    </div>           
                    {/* Facts for Cubs */}
                    <div className="info-main">
                        <div className="scout-facts">
                            <h2 className="scout-facts__title">Did You Know?</h2>
                            <ol className="scout-facts__list">
                                <li className="scout-facts__item">
                                Did you know that the Scout Movement was started by a cool guy named Lord Robert Baden-Powell more than 100 years ago? He wanted to create a fun and adventurous organization for kids just like you!
                                </li>
                                <li className="scout-facts__item">
                                Did you know that the Scout emblem, that cool symbol you see on scout uniforms, represents the three things scouts promise to do: be their best, be helpful, and be kind? It's like a secret code!
                                </li>
                                <li className="scout-facts__item">
                                Did you know that there are scouts all around the world, in almost every country? You can meet new friends from different places and learn about their cultures and traditions.
                                </li>
                                <li className="scout-facts__item">
                                Did you know that being a scout means you get to explore the great outdoors? You can go camping, hiking, and even learn how to build your own shelter. It's like having awesome adventures in nature!
                                </li>
                                <li className="scout-facts__item">
                                Did you know that scouts learn really cool survival skills? You can learn how to start a campfire, tie knots, and even navigate using a compass. These skills will make you feel like a real-life explorer!
                                </li>
                                <li className="scout-facts__item">
                                Did you know that being a scout helps you become a leader? You can learn how to lead your scout friends, make important decisions, and plan fun activities. You'll feel super confident and responsible!
                                </li>
                                <li className="scout-facts__item">
                                Did you know that scouts get to help their communities? You can do awesome things like cleaning up parks, planting trees, and helping others in need. It feels amazing to make a positive difference!
                                </li>
                                <li className="scout-facts__item">
                                Did you know that scouts learn first aid? You can learn how to bandage wounds, help someone who is hurt, and be prepared to handle emergencies. You'll become a real-life superhero!
                                </li>
                                <li className="scout-facts__item">
                                Did you know that scouts have cool badges? You can earn badges for doing different activities and learning new skills. It's like collecting special achievements that show how awesome you are!
                                </li>
                                <li className="scout-facts__item">
                                Did you know that scouting is all about having fun with your friends? You can play games, go on exciting outings, and make memories that will last a lifetime. Being a scout is all about having a blast!
                                </li>
                            </ol>
                        </div>
                    </div>
                </div>
            </div>
            <Footer/>
            </>
        )
}

export default Cubcorner;