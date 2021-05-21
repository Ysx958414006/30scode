const RGBToHSB=(r,g,b)=>{
    r/=255;
    g/=255;
    b/=255;
    const v=Math.max(r,g,b),
        n=v-Math.min(r,g,b);
    const h=n&&v==r?(g-b)/n:v===g?2+(b-r)/n:4+(r-g)/n
    return[60*(h<0?h+6:h),v&&(n/v)*100,v*100];
};
let x=RGBToHSB(252, 111, 48);
console.log(x);