// src/PhysicsSimulation.js
import { useEffect, useRef } from "react";
import { IconButton } from "./IconButton";
import { useScreenSize } from "../hooks/useScreenSize.tsx";
import Matter from "matter-js";
import react from "../assets/react.png";
import nodejs from "../assets/nodejs.png";
import nextjs from "../assets/nextjs.png";
import css from "../assets/css.png";
import js from "../assets/javascript.png";
import firebase from "../assets/firebase.png";

const items = [
    { src: react, x: 33, y: 50 },
    { src: nodejs, x: 30, y: 60 },
    { src: nextjs, x: 96, y: 120 },
    { src: css, x: 105, y: 60 },
    { src: js, x: 150, y: 120 },
    { src: firebase, x: 90, y: 120 },
];

const PhysicsSimulation = () => {
    const screenSize = useScreenSize();
    const sceneRef = useRef();
    const itemRefs = useRef([]);

    useEffect(() => {
        const scene = sceneRef.current;
        const { width, height } = scene.getBoundingClientRect();
        const engine = Matter.Engine.create();
        const runner = Matter.Runner.create();

        const boxSize = screenSize === "xs" ? 36 : 56;

        const bodies = items.map((item) =>
            Matter.Bodies.rectangle(item.x, item.y, boxSize, boxSize),
        );

        const walls = [
            Matter.Bodies.rectangle(width / 2, 0, width, 50, {
                isStatic: true,
            }),
            Matter.Bodies.rectangle(width / 2, height + 25, width, 50, {
                isStatic: true,
            }),
            Matter.Bodies.rectangle(-25, height / 2, 50, height, {
                isStatic: true,
            }),
            Matter.Bodies.rectangle(width + 25, height / 2, 50, height, {
                isStatic: true,
            }),
        ];

        Matter.Composite.add(engine.world, [...bodies, ...walls]);

        const mouse = Matter.Mouse.create(scene);
        const mouseConstraint = Matter.MouseConstraint.create(engine, {
            mouse,
            constraint: { stiffness: 0.2 },
        });

        Matter.Composite.add(engine.world, mouseConstraint);
        Matter.Runner.run(runner, engine);

        let frame;

        function update() {
            bodies.forEach((body, i) => {
                const el = itemRefs.current[i];
                if (!el) return;

                el.style.transform = `
          translate(${body.position.x - boxSize / 2}px, ${body.position.y - boxSize / 2}px)
          rotate(${body.angle}rad)
        `;
            });

            frame = requestAnimationFrame(update);
        }

        update();

        return () => {
            cancelAnimationFrame(frame);
            Matter.Runner.stop(runner);
            Matter.Engine.clear(engine);
        };
    }, []);

    return (
        <div
            ref={sceneRef}
            style={{
                position: "relative",
                width: "100%",
                height: 200,
                overflow: "hidden",
            }}
        >
            {items.map((item, i) => (
                <IconButton
                    source={item.src}
                    ref={(el) => (itemRefs.current[i] = el)}
                    linkable={false}
                    link="https://github.com"
                    large={screenSize === "xs" ? false : true}
                />
            ))}
        </div>
    );
};

export default PhysicsSimulation;
