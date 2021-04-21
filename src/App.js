import './App.css';
import React from 'react'

export default class CheckBox extends React.Component{ // React Component 最重要的一件事就是第一個字母一定要大寫
    constructor(props){ //當一個 component 的 instance 被建立且加入 DOM 中時，其生命週期將會依照下列的順序呼叫
        super(props); // 不可只寫super()
        this.state = {
            checklist:[
                {name:'全部一起帶回家',checked:false},
                {name:'【 亞洲猴腦鹿角蕨 】',checked:false},
                {name:'【 圓盾鹿角蕨 】',checked:false},
                {name:'【 安地斯鹿角蕨 】',checked:false},
            ]
        }
    }

    render(){
        const _self = this;//尋找_self， _ self永遠不會改變
        return (//如果return後面沒有加上圓括號的開頭符號(()，ASI會起作用然後會幫你自動加上分號(;)，這將會造成語法錯誤或是不預期的結果。這一點要特別的小心注意。
            <div className="form-check-label">
                <div className="text">原生種鹿角蕨插畫圖鑑</div>
                <hr></hr>
                {
                    this.state.checklist.length?
                    this.state.checklist.map(function(item,index){
                        return <div key={index}>
                        <label><input type="checkbox" onChange={_self.checkThis.bind(_self,item)} checked={item.checked}/>{item.name}</label>
                        </div>
                        // 當選項改變的時候就自動觸發 onChange 事件
                    })
                    :''
                }
                <input type="button" id="button" value="送出" href="#" />
                
            </div>
            
        )
    }
    checkThis(item){
        item.checked = !item.checked;
        if(item.name==='全部一起帶回家'){ // 如果點擊的是全選，就把所有的選中或全部取消勾選
            if(item.checked){
                this.state.checklist.forEach(i=>{ 
                    i.checked = true;
                })
            }else{
                this.state.checklist.forEach(i=>{
                    i.checked = false;
                })
            }
            
        }
　　　　　// 如果全選之後，取消勾選其中的一個或多個，則會把全選也取消勾選掉
        let result = this.state.checklist.some(j=>{
            if(!j.checked){
                return true;
            }
        })

        if(result){
            // eslint-disable-next-line react/no-direct-mutation-state
            this.state.checklist[0].checked = false;
        }
        
        
        let length = this.state.checklist.length //縮寫len
        let event = true;//縮寫ev
        for(let a=1;a<length;a++){ //先取a值使用
          // 列表裡除了第一個之外，其他的都勾選的話，就把全選按鈕也勾選掉
            if(!this.state.checklist[a].checked){
              event = false;
            }
        }
        if(event){
            // eslint-disable-next-line react/no-direct-mutation-state
            this.state.checklist[0].checked = true;
        }
　　　　　　
　　　　this.setState({ //setState()中的也必須是一個物件
           // 每點一次更新一次
            checklist:this.state.checklist
        })
}  } 




//筆記
//React components https://ithelp.ithome.com.tw/articles/10218056
// super(props) https://overreacted.io/zh-hant/why-do-we-write-super-props/
// Component State https://zh-hant.reactjs.org/docs/faq-state.html
//let _self = this https://stackoverflow.com/questions/40976031/what-does-let-self-this-mean-in-javascript-typescript
//State 和生命週期 https://zh-hant.reactjs.org/docs/state-and-lifecycle.html
// key的使用方法 https://ithelp.ithome.com.tw/articles/10249013
//箭頭函式 https://eyesofkids.gitbooks.io/react-basic-zh-tw/content/day06_es6_arrow_func/
//後續研究怎麼放照片 https://ithelp.ithome.com.tw/articles/10226711






// import { useState, useEffect } from "react";
// import Rice from "images/Platycerium ridleyi.jpeg";
// import ReactDOM from 'react-dom';
// import Input from './components/Input';
// import  CheckBox  from './CheckBox';


// const App = () => {
// export default App;
