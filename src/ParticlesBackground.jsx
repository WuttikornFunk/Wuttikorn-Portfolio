import { useEffect, useState } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";

const ParticlesBackground = () => {
    const [init, setInit] = useState(false);

    useEffect(() => {
        initParticlesEngine(async (engine) => {
            await loadSlim(engine);
        }).then(() => {
            setInit(true);
        });
    }, []);

    if (!init) return null;

    return (
        <Particles
            id="tsparticles"
            className="fixed inset-0 -z-10"
            options={{
                fpsLimit: 60,
                interactivity: {
                    events: {
                        onHover: {
                            enable: true,
                            mode: "grab", // เมื่อเมาส์จ่อจะมีเส้นดึงดูด
                        },
                    },
                    modes: {
                        grab: { distance: 140, links: { opacity: 0.5 } },
                    },
                },
                particles: {
                    color: { value: "#3b82f6" }, // สีฟ้า Blue-500
                    links: {
                        color: "#3b82f6",
                        distance: 150,
                        enable: true,
                        opacity: 0.2,
                        width: 1,
                    },
                    move: {
                        enable: true,
                        speed: 1.2, // ความเร็วในการลอย
                        direction: "none",
                        random: false,
                        straight: false,
                        outModes: { default: "out" },
                    },
                    number: {
                        density: { enable: true, area: 800 },
                        value: 60, // จำนวนเม็ด (60 กำลังดี ไม่รกเครื่อง)
                    },
                    opacity: { value: 0.3 },
                    shape: { type: "circle" },
                    size: { value: { min: 1, max: 3 } },
                },
                detectRetina: true,
            }}
        />
    );
};

export default ParticlesBackground;