import React, { useEffect, useState } from "react";
import "./Projects.css";

function Projects() {

    const [projects, setProjects] = useState([]);

    /* =========================================
       FETCH PROJECTS
    ========================================= */

    useEffect(() => {

        fetch("public/Projects.json")
            .then((response) => {

                if (!response.ok) {
                    throw new Error("Failed to load Projects.json");
                }

                return response.json();
            })
            .then((data) => {

                setProjects(data);

            })
            .catch((error) => {

                console.error("Error loading projects:", error);

            });

    }, []);


    return (

        <section className="projects-page">

            {/* =========================
                HERO
            ========================= */}

            <div className="projects-hero">

                <span className="projects-label">
                    OUR WORK
                </span>

                <h1>
                    Projects That Inspire
                </h1>

                <p>
                    Explore our collection of premium marble and natural stone
                    projects crafted with precision, quality and timeless elegance.
                </p>

            </div>


            {/* =========================
                PROJECT GRID
            ========================= */}

            <div className="projects-container">

                {projects.map((project, index) => (

                    <div
                        className="project-card"
                        key={project.id || index}
                    >

                        {/* PROJECT IMAGE */}

                        <div className="project-image">

                            <img
                                src={project.image}
                                alt={project.title}
                                onError={(e) => {
                                    e.currentTarget.src =
                                        "https://placehold.co/600x400?text=Image+Not+Available";
                                }}
                            />

                        </div>


                        {/* PROJECT INFO */}

                        <div className="project-info">

                            <span className="project-category">
                                {project.category}
                            </span>

                            <h2>
                                {project.title}
                            </h2>

                            <p>
                                {project.description}
                            </p>

                        </div>

                    </div>

                ))}

            </div>


            {/* =========================
                BOTTOM CTA
            ========================= */}

            <div className="projects-bottom">

                <span>
                    PREMIUM NATURAL STONE
                </span>

                <h2>
                    Bring Your Vision to Life
                </h2>

                <p>
                    Looking for the perfect marble or natural stone for your
                    next project?
                </p>

                <a href="/contact">
                    Start a Conversation
                    <span>→</span>
                </a>

            </div>

        </section>

    );
}

export default Projects;