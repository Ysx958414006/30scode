const HSBToRGB=(h,s,b)=>{
    s/=100;
    b/=100;
    const k=(n)=>(n+h/60)%6;
    const f=(n)=>b*(1-s*Math.max(0,Math.min(k(n),4-k(n),1)));
    return [255*f(5),255*f(3),255,255*f(1)]
}

console.log(HSBToRGB(18, 81, 99));