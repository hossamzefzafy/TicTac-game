import React , {useRef} from 'react'

import '../Component/TicTacToe.css'

let data = ['', '', '','', '', '', '', '', '']
let lock = false
let count = 0
let array_boxex = document.getElementsByClassName('box')
const TicTacToe = () => {
    let titleRef = useRef(null)
  
    let checkArray = []
    const toggle = (e, num) =>{

        if(! lock){
        
            if(count % 2 === 0){
                e.target.innerHTML ="X" 
                data[num] = "X" ;
               
               count++
              
    
            } else{
                 e.target.innerHTML = "O"
                data[num] = "O"  ;
                
               count++
                
            } 
           
        }else{
            return 0
        }
        checkDraw()
        check_win()
    }
        function check_win(){

            if (data[0] === data[1] && data[1] ===data[2]&& data[2] !== ''){
                win(data[2])
            }else if(data[3] === data[4] && data[4] ===data[5]&& data[5] !== ''){
                win(data[5])
            }else if(data[6] === data[7] && data[7] ===data[8]&& data[8] !== ''){
                win(data[8])
            }else if(data[0] === data[3] && data[3] ===data[6]&& data[6] !== ''){
                win(data[6])
            }else if(data[1] === data[4] && data[4] ===data[7]&& data[7] !== ''){
                win(data[7])
            }else if(data[2] === data[5] && data[5] ===data[8]&& data[8] !== ''){
                win(data[8])
            }else if(data[0] === data[4] && data[4] ===data[8]&& data[8] !== ''){
                win(data[8])
            }else if
            (data[2]===data[4] && data[4]===data[6]&& data[6]!== ''){
                win(data[6])
            }
        }
        const win = (winner)=>{
            if(winner === "X"){
                titleRef.current.innerHTML = "CONGRATULATION  X WIN !!!"
                
            }else{
                titleRef.current.innerHTML = "CONGRATULATION  O WIN !!!"
                
            }
            lock = true
            count = 0
            data = ['', '', '','', '', '', '', '', '']

        }

        const reset = ()=>{

            lock = false;
            count = 0
            data = ['', '', '','', '', '', '', '', '']
            titleRef.current.innerHTML = "TIC TAC"
            
            for(let i = 0 ; i<array_boxex.length; i++){
                array_boxex[i].innerHTML = ''
            }
            
            
        }
        const checkDraw = ()=> {
           
            let digital = Array.from(array_boxex)
            digital.map(ele => {

                let k = 0
                if (ele.innerHTML !== ''){

                   k = k+1
                   if(k===9){
                    titleRef.current.innerHTML = "DRAW"
                    lock = true

                   }
                }else{
                    return
                }
                

            })
            
        

        }
        

    
  return (
    <div>
      <div className="container">
        <h1 className='title' ref = {titleRef}>Tic Tac </h1>
        <div className="board">
<div className="row1">
    <div className="box"  onClick={(e)=>{toggle(e, 0)}}></div>
    <div className="box"   onClick={(e)=>{toggle(e, 1)}}></div>
    <div className="box"   onClick={(e)=>{toggle(e, 2)}}></div>
</div>
<div className="row2">
    <div className="box"   onClick={(e)=>{toggle(e, 3)}}></div>
    <div className="box"   onClick={(e)=>{toggle(e, 4)}}></div>
    <div className="box"   onClick={(e)=>{toggle(e, 5)}}></div>
</div>
<div className="row3">
    <div className="box"   onClick={(e)=>{toggle(e, 6)}}></div>
    <div className="box"   onClick={(e)=>{toggle(e, 7)}}></div>
    <div className="box"   onClick={(e)=>{toggle(e, 8)}}></div>
</div>
        </div>
        <button className="rest" onClick={reset}>RESET</button>
      </div>
    </div>
  )
}

export default TicTacToe
