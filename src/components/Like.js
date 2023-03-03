import React, { Component } from 'react'
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import {updateDoc , doc} from 'firebase/firestore'
import {  fstore } from '../firesbase';

export default class Like extends Component {
    constructor(){
        super()
        this.state ={
            like:false,
        }
    }
    handleLike = ()=>{
        if(this.state.like === true){
            console.log(this.props.postData.likes.length)
            let tempArr = this.props.postData.likes.filter((el) => el!== this.props.userData.userId ) ;
            let temRef = doc(fstore, "posts" ,this.props.id);
            updateDoc(temRef , {likes:tempArr}).then((res)=>{
                this.setState({like:false})
                console.log(res)
            }).catch((error)=>{
                console.log(error)
            })
        }
        else{
            let tempArr = [...this.props.postData.likes , this.props.userData.userId];
            let temRef = doc(fstore, "posts" ,this.props.id);
            updateDoc(temRef , {likes:tempArr}).then((res)=>{
                this.setState({like:true})
                console.log(res)
            }).catch((error)=>{
                console.log(error)
            })
        }
    }
    componentDidMount(){
        let check = this.props.postData.likes.includes(this.props.userData.userId) ? true : false
        this.setState({
            like:check
        })
    }
    render() {
        return (
            <div>
                {
                    this.state.like === true ? <FavoriteBorderIcon style={{fontSize:"35px" , color:"red"}} onClick = {this.handleLike}/> : <FavoriteBorderIcon style={{fontSize:"35px" , }} onClick = {this.handleLike}/>
                }
                <p>{this.props.postData.likes.length}</p>
            </div>
        )
    }
}
