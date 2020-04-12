
type RecursivePartial<T> = {
    [P in keyof T]:
      T[P] extends (infer U)[] ? RecursivePartial<U>[] :
      T[P] extends object ? RecursivePartial<T[P]> :
      T[P];
};

export class Bubbles {
    public params: any;

    constructor() {
        this.params = {
            particles: {
                number: {
                    value: 55,
                    density: {
                        enable: false
                    }
                },
                size: {
                    value: 3,
                    random: true,
                    anim: {
                        speed: 4,
                        size_min: 0.3
                    }
                },
                line_linked: {
                    enable: false
                },
                move: {
                    random: true,
                    speed: 1,
                    direction: "top",
                    out_mode: "out"
                }
            },
            interactivity: {
                events: {
                    onhover: {
                        enable: false,
                        mode: "bubble"
                    },
                    onclick: {
                        enable: false,
                        mode: "repulse"
                    }
                },
                modes: {
                    bubble: {
                        distance: 250,
                        duration: 2,
                        size: 0,
                        opacity: 0
                    },
                    repulse: {
                        distance: 400,
                        duration: 4
                    }
                }
            }
        }
    }
}