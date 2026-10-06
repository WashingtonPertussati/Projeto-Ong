export function iniciarEfeitoCursor() {
    const cursorMsg = document.getElementById('cursor-message');
    
    if (!cursorMsg) return;

    const xTo = gsap.quickTo(cursorMsg, "x", {duration: 0.4, ease: "power3"});
    const yTo = gsap.quickTo(cursorMsg, "y", {duration: 0.4, ease: "power3"});

    window.addEventListener('mousemove', (e) => {
        cursorMsg.classList.remove('cursor-msg-hidden');
        xTo(e.clientX + 20);
        yTo(e.clientY + 20);
    });

    window.addEventListener('mouseleave', () => {
        cursorMsg.classList.add('cursor-msg-hidden');
    });
}