

export default function useChar(x, y, setX, setY) {
  
    const movement = (p5) => {
    
        if (p5.keyCode === 39) {
          if(x < 590){
            setX(prev => prev +=5)
          }
          
        }
        if (p5.keyCode === 37) {
          if(x > 10){
            setX(prev => prev -=5)
          }
          
        }
        if (p5.keyCode === 38) {
          if(y > 40) {
            setY(prev => prev -=5)
          }
          
        }
        if (p5.keyCode === 40) {
          if(y < 360){
            setY(prev => prev +=5)
          }
          
        }
      }
  
    return (
    {movement}
  )
}
