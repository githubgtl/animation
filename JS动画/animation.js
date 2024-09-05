function animate({from, to, duration=1000, onUpdate}){
    // 实现匀速的JS动画
    const speed = (to - from) / duration
    const originTime = Date.now()
    function _run(){
        const currentTime = Date.now()
        const currentValue = from + speed* (currentTime - originTime)
        console.log(currentValue)
        if (currentTime - originTime >= duration){
            currentValue = to
            onUpdate && onUpdate()
            return;
        }
        requestAnimationFrame(_run)
    }
    _run()
}